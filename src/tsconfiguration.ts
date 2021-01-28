let userInput: unknown;
let userName: string;
let userAny: any;

userInput = 5;
userInput = "Max";

//Unknown is more strict than any

if (typeof userInput === "string") {
  userName = userInput;
}

userName = userAny;

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError("An error occured!", 500);
