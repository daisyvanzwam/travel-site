var $ = require('jquery');  
import Person from './modules/Person'; 

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $0 in taxes."); 
    }
}

alert("ABC"); 

var john = new Person("John Doe", "red"); 
john.greet(); 


var jane = new Adult("Jane Smith", "orange"); 
jane.greet(); 
jane.payTaxes(); 
