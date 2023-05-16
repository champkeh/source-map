/**
 * @typedef {object} Line 行编码
 * @property {number} index 行号，基于0
 * @property {number[]} segments 段编码
 */

/**
 * @typedef {object} SingleDecimalEncoded 单个数字的编码结果
 * @property {string} bits 比特分布
 * @property {string} value 编码值
 * @property {string[]} units 编码单元
 */

/**
 * @typedef {object} MultiDecimalEncoded 多个数字的编码结果
 * @property {string[]} bits 比特分布
 * @property {string} value 编码值
 * @property {string[]} units 编码单元
 */


// base64 转换表
const Index2CharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
const Char2IndexMap = Index2CharMap.split('').reduce((p, c, i) => {
    p[c] = i
    return p
}, {})


/**
 * 编码单个数字
 * @param {number} decimal 被编码的数字
 * @return {SingleDecimalEncoded} 编码结果
 */
function encodeDecimal(decimal) {
    if (typeof decimal !== 'number') {
        throw new Error('')
    }
    const signBit = decimal >= 0 ? 0 : 1
    if (signBit === 1) {
        decimal *= -1
    }
    let bits = decimal.toString(2)
    let hasContinueBit = false
    let isFirstUnit = true
    const units = []

    while (bits) {
        let v
        if (isFirstUnit) {
            v = bits.slice(-4) + signBit
            bits = bits.slice(0, -4)
            isFirstUnit = false
        } else {
            v = bits.slice(-5)
            bits = bits.slice(0, -5)
        }
        hasContinueBit = !!bits ? 1 : 0
        const unit = hasContinueBit + ('00000' + v).slice(-5)
        units.push(unit)
    }
    const value = units.map(unit => Index2CharMap[parseInt(unit, 2)]).join('')
    return {value, units, bits: (signBit === 1 ? '-' : '') + decimal.toString(2)}
}

/**
 * 编码多个数字
 * @param {number[]} decimalArr 被编码的数字数组
 * @return {MultiDecimalEncoded} 编码结果
 */
function encodeDecimalArray(decimalArr) {
    const decimalEncodeArr = decimalArr.map(d => encodeDecimal(d))
    return {
        value: decimalEncodeArr.map(_ => _.value).join(''),
        units: decimalEncodeArr.flatMap(_ => _.units),
        bits: decimalEncodeArr.map(_ => _.bits),
    }
}

/**
 * 编码
 * @param {number|number[]} val 需要编码的数字
 * @return {SingleDecimalEncoded | MultiDecimalEncoded} 编码结果
 */
function encode(val) {
    if (typeof val === 'number') {
        return encodeDecimal(val)
    } else if (Array.isArray(val)) {
        return encodeDecimalArray(val)
    } else {
        throw new Error(`数据错误:${val}`)
    }
}


/**
 * 解码
 * @param {string} segment
 * @return {number[]}
 */
function decodeSegment(segment) {
    if (!segment || !segment.trim()) return []

    const units = segment.split('').map(c => Char2IndexMap[c])
    let bits = ''
    let sign = 1
    let isFirstUnit = true
    let result = []
    units.forEach(unit => {
        const unitBits = ('000000' + unit.toString(2)).slice(-6)
        if (isFirstUnit) {
            bits = unitBits.slice(-5, -1) + bits
            sign = unitBits.slice(-1) === '1' ? -1 : 1
            isFirstUnit = false
        } else {
            bits = unitBits.slice(-5) + bits
        }

        if ((unit & 0b10_0000) === 0) {
            result.push(parseInt(bits, 2) * sign)
            isFirstUnit = true
            bits = ''
        }
    })
    return result
}

/**
 * 解码 SourceMap V3 的 mappings 字段
 * @param {string} mappings
 * @return {Line[]}
 */
function decodeMappings(mappings) {
    const lines = []
    mappings.split(';').forEach((lineStr, index) => {
        const line = {index, segments: []}
        if (lineStr.trim()) {
            line.segments = lineStr.split(',').map(seg => decodeSegment(seg))
        }
        lines.push(line)
    })
    return lines
}

/**
 * 解码 mappings
 * @param mappings
 * @return {number[]|Line[]}
 */
function decode(mappings) {
    if (/[;,]/.test(mappings)) {
        return decodeMappings(mappings)
    } else {
        return decodeSegment(mappings)
    }
}

// console.log(encode(42))
// console.log(encode([0,11,2,9,7,6,2,4,-9,11,7,-8,5,9]))
// console.log(encode([7]))
// console.log(encode(10))
// console.log(encode(1200))
// console.log(encode(-17))
// console.log(encode(1))
// console.log(encode([10, 1200]))
// console.log(encode([1, 2, 3, 4]))
// console.log(decode('O'))
// console.log(decode('UgrC'))
// console.log(decode('DECODEME'))
// console.log(decode(';;;;EAEE,EAAE,EAAC,CAAE;ECQY,UACC'))
const a = decodeMappings('23434')[0]
