// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
function calcSalary() {
    var wage = document.getElementById('txt_wage').value;
   
    let cas = wage * 0.25;
    let cass = wage * 0.1;
   let impVenit = (wage - cas - cass) * 0.1;

    var calculate = wage - cas - cass - impVenit;

    //wage.charAt(0) !=== "0"
    
    if(wage.charAt(0) == "0"){
        
        document.getElementById('results').innerHTML = `Please insert a valid wage!`;
    } else {
    
    document.getElementById('results').innerHTML = `Assuming that your gross monthly salary is ${wage} RON,
    then your net monthly salary will be ${calculate} RON.`;
    }
    
    
    
    if(wage <= 0){
        
        document.getElementById('results').innerHTML = `Please insert a valid wage!`;
    } else {
    
    document.getElementById('results').innerHTML = `Assuming that your gross monthly salary is ${wage} RON,
    then your net monthly salary will be ${calculate} RON.`;
    }
   }

   document.querySelector('.again').addEventListener('click', function(){
      
       document.querySelector('#results').textContent = " ";
       document.querySelector('#txt_wage').value = "0.00";

})

*/

function calcSalary() {
    var wage = document.getElementById('txt_wage').value;
    var wageRegex = /^[1-9]\d*(\.\d+)?$/;
    wage = parseFloat(wage);
    let cas = wage * 0.25;
    let cass = wage * 0.1;
    let impVenit = (wage - cas - cass) * 0.1;

    var calculate = wage - cas - cass - impVenit;

    var angajator = wage * 0.0225;
    var grosssalary = wage + angajator;
    var procentAngajat = calculate * 100 / grosssalary;
    var procentAngajat = Math.floor((calculate * 100 / grosssalary)*100) / 100;
    var procentLaStat = 100 - procentAngajat;
    
    if (!wageRegex.test(wage)) {
        document.getElementById('results').innerHTML = `Please insert a valid wage!`;
    }   else if (wage < 5000) {
        document.getElementById('results').innerHTML = `Assuming that your gross monthly salary is ${wage} RON,
        your employer will pay ${angajator} RON on taxes for you.
        Then your total gross salary will be ${grosssalary} RON, your net salary will be ${calculate} RON.
        That means that ${procentAngajat}% from money goes to You, and ${procentLaStat}% of money
        goes to taxes.
        *For the gross salaries that are lower than 5000 RON, the calculator will have an error of around 10%, due to 
    multiple conditions such as type of job, persons in maintanance and other.` 
    }
    
    //*For the gross salaries that are lower than 5000 RON, the calculator will have an error of around 10%, due to 
    //multiple conditions such as type of job, persons in maintanance and other.
    
           else  {
        document.getElementById('results').innerHTML = `Assuming that your gross monthly salary is ${wage} RON,
        your employer will pay ${angajator} RON on taxes for you.
        Then your total gross salary will be ${grosssalary} RON, your net salary will be ${calculate} RON.
        That means that ${procentAngajat}% from money goes to You, and ${procentLaStat}% of money
        goes to taxes.` 
    console.log(wage);
        
    }
}

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('#results').textContent = " ";
    document.querySelector('#txt_wage').value = "0.00";
});