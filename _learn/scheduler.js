function makeScheduler() {
    const tasks = []

    return {
        schedule(f) {
            const task = console.createTask(f.name)
            tasks.push({f, task})
        },
        work() {
            while (tasks.length) {
                const {f, task} = tasks.shift()
                task.run(f)
            }
        }
    }
}

const scheduler = makeScheduler()

function loop() {
    scheduler.work()
    requestAnimationFrame(loop)
}

loop()
