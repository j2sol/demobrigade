const { events, Job } = require('brigadier')

events.on("pull_request", (brigadeEvent, project) => {
    var job = new Job("demojob", "alpine:3.4")
    job.tasks = [
        "echo Line 1",
        "echo Line 2"
    ]

    job.run()
})
