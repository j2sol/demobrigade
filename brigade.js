const { events, Job, Group } = require("brigadier")

events.on("pull_request", () => {
    var style = new Job("pycodestyle", "python:alpine")
    style.tasks = [
      "echo True"
    ]

    var functional = new Job("functional", "python:alpine")
    functional.tasks = [
      "apk update && apk add curl",
      "pip install /src/",
      "/usr/local/bin/demoapp &",
      "sleep 2",
      "curl http://127.0.0.1:8000"
    ]

    Group.runEach([style, functional])
})
