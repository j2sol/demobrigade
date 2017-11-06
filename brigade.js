const { events, Job } = require('brigadier')

events.on("push", (brigadeEvent, project) => {
    var job = new Job("Demo Job", "alpine:3.4")
    job.tasks = [
        "echo Line 1",
        "echo Line 2"
    ]

    job.run()
})
