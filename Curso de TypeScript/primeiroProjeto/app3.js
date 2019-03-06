function addNumbers(num1, num2, num3) {
    var result;
    if (num3 == undefined || num3 == null) {
        result = num1 + num2;
    }
    else {
        result = num1 + num2 + num3;
    }
    return result;
}
window.onload = function () {
    var result = addNumbers(1, 2, null);
    document.getElementById('content').innerHTML = 'The value for addNumbers function is ' + result.toString();
};
