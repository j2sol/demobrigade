const { events, Job } = require("brigadier")

events.on("pull_request", () => {
    var job = new Job("pycodestyle", "python:alpine")
    job.tasks = [
      "pip install pycodestyle",
      "cd /src",
      "pycodestyle demoapp"
    ]
    job.run()
})
