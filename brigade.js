const { events, Job } = require('brigadier')

events.on("push", (brigadeEvent, project) => {
    var job = new Job("demojob", "alpine:3.4")
    job.env = {
        "leakme": project.secrets.leakme
    }
    job.tasks = [
        "echo Line 1",
        "echo Line 2",
        "echo $leakme"
    ]

    job.run()
})

events.on("pull_request", (brigadeEvent, project) => {
    var job = new Job("pulljob", "alpine:3.4")
    job.env = {
        "leakme": project.secrets.leakme
    }
    job.tasks = [
        "echo Line 1",
        "echo Line 2",
        "echo $leakme"
    ]

    job.run()
}
