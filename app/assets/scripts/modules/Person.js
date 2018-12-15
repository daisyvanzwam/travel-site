class Person {
    constructor(fullName, color) {
        this.name = fullName; 
        this.color = color;
    }

    greet() {
        console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.color); 
    }
}

export default Person;