//condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

function condition() {
    if (isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access denied";
    }
}

var answer2 = condition();