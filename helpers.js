function successfullMessage(msg) {
    return "β *Alpha-X*:  ```" + msg + "```"
}

function errorMessage(msg) {
    return "π *Alpha-X*:  ```" + msg + "```"
}

function infoMessage(msg) {
    return "βΊοΈ *Alpha-X*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}