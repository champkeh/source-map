function sayHello(name) {
    if (name.length > 2) {
        name = name.slice(0, 1) + '...'
    }
    console.log(`hello, ${name}`)
}
