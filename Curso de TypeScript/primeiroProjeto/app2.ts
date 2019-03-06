class Greeter2 {
    element: HTMLElement;
    greeting: string;

    constructor(_element: HTMLElement, _greeting: string) {
        this.element = _element;
        this.greeting = _greeting;
    }

    greet() {
        this.element.innerHTML = this.greeting;
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeting = 'Hello World!';
    var greeter = new Greeter2(el, greeting);
    greeter.greet();
};