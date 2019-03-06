var Greeter2 = /** @class */ (function () {
    function Greeter2(_element, _greeting) {
        this.element = _element;
        this.greeting = _greeting;
    }
    Greeter2.prototype.greet = function () {
        this.element.innerHTML = this.greeting;
    };
    return Greeter2;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeting = 'Hello World!';
    var greeter = new Greeter2(el, greeting);
    greeter.greet();
};
