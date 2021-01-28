"use strict";
var userInput;
var userName;
var userAny;
userInput = 5;
userInput = "Max";
//Unknown is more strict than any
if (typeof userInput === "string") {
    userName = userInput;
}
userName = userAny;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
