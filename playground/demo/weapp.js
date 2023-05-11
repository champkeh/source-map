function docReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        fn()
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

docReady(async function () {
    let ua = navigator.userAgent.toLowerCase()
    let isWXWork = ua.match(/wxwork/i) === 'wxwork'
    let isWeixin = !isWXWork && ua.match(/MicroMessenger/i) === 'micromessenger'
    let isMobile = false
    let isDesktop = false
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|IEMobile)/i)) {
        isMobile = true
    } else {
        isDesktop = true
    }
    console.warn('ua', ua)
    console.warn(ua.match(/MicroMessenger/i) === 'micromessenger')
    let m = ua.match(/MicroMessenger/i)
    console.warn(m && m[0] === 'micromessenger')

    if (isWeixin) {
        let containerEl = document.getElementById('wechat-web-container')
        containerEl.classList.remove('hidden')
        containerEl.classList.add('full', 'wechat-web-container')

        let launchBtn = document.getElementById('launch-btn')
        launchBtn.addEventListener('ready', function (e) {
            console.log('开放标签 ready')
        })
        launchBtn.addEventListener('launch', function (e) {
            console.log('开放标签 success')
        })
        launchBtn.addEventListener('error', function (e) {
            console.log('开放标签 fail', e.detail)
        })

        wx.config({
            // debug: true, // 调试时可开启
            appId: 'wxe5f52902cf4de896',
            timestamp: 0, // 必填，填任意数字即可
            nonceStr: 'nonceStr', // 必填，填任意非空字符串即可
            signature: 'signature', // 必填，填任意非空字符串即可
            jsApiList: ['chooseImage'], // 安卓上必填一个，随机即可
            openTagList: ['wx-open-launch-weapp'], // 填入打开小程序的开放标签名
        })
    } else if (isDesktop) {
        // 在 pc 上则给提示引导到手机端打开
        let containerEl = document.getElementById('desktop-web-container')
        containerEl.classList.remove('hidden')
        containerEl.classList.add('full', 'desktop-web-container')
    } else {
        let containerEl = document.getElementById('public-web-container')
        containerEl.classList.remove('hidden')
        containerEl.classList.add('full', 'public-web-container')
        let c = new cloud.Cloud({
            // 必填，表示是未登录模式
            identityless: true,
            // 资源方 AppID
            resourceAppid: 'wxe5f52902cf4de896',
            // 资源方环境 ID
            resourceEnv: 'postpay-2g5hm2oxbbb721a4',
        })
        await c.init()
        window.c = c

        let buttonEl = document.getElementById('public-web-jump-button')
        let buttonLoadingEl = document.getElementById('public-web-jump-button-loading')
        try {
            await openWeapp(() => {
                buttonEl.classList.remove('weui-btn_loading')
                buttonLoadingEl.classList.add('hidden')
            })
        } catch (e) {
            buttonEl.classList.remove('weui-btn_loading')
            buttonLoadingEl.classList.add('hidden')
            throw e
        }
    }
})

async function openWeapp(onBeforeJump) {
    let c = window.c
    const res = await c.callFunction({
        name: 'public',
        data: {
            action: 'getUrlScheme',
        },
    })
    console.warn(res)
    if (onBeforeJump) {
        onBeforeJump()
    }
    location.href = res.result.openlink
}
