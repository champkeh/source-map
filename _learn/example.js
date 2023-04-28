function someTask() {
    console.trace('done!')
}

function businessLogic() {
    scheduler.schedule(someTask)
}

businessLogic()
