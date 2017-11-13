const { events } = require("brigadier")

events.on("pull_request", () => {
    var job = new Job("pycodestyle", "python:alpine")
    job.tasks = [
      "pip install pycodestyle",
      "cd /src/demobrigade",
      "pycodestyle demoapp"
    ]
    job.run()
})
