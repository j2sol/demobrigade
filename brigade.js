const { events, Job } = require('brigadier')

events.on("push", (brigadeEvent, project) => {
    var job = new Job("demojob", "alpine:3.4")
    job.env = {
        "leakme": project.secrets.leakme
    }
    job.tasks = [
        "echo I am in your k8s, stealing your secrets!",
        "echo $leakme",
        "echo I could just post it somewhere else!"
    ]

    job.run()
})
