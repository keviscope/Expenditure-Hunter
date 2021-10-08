



//display and hide
let firstPage = document.querySelector('.firstPage');
let secondPoint = document.querySelector('.secondPoint');
let firstPageButton = document.querySelector('#firstPageButton');
firstPageButton.addEventListener('click', ()=>{
    firstPage.style.display = "none";
    secondPoint.style.display = "block";
})

let secondPointNext = document.querySelector('#secondPointNext');
let selectCategories = document.querySelector('.selectCategories');

secondPointNext.addEventListener('click', ()=>{
    secondPoint.style.display = "none";
    selectCategories.style.display = "block";
})






















let advanceSimple = document.querySelector("#advanceSimple");
let budgetDisplay = document.querySelector(".budgetDisplay");
advanceSimple.addEventListener('click', ()=>{
    

    if(budgetDisplay.style.display == "none"){
        budgetDisplay.style.display = "block";
        advanceSimple.innerHTML = "Simple &uarr;";
    }else{
        budgetDisplay.style.display = "none";
        advanceSimple.innerHTML = "Advance &darr;";
    }
});


let description = document.querySelector('.description');
let description2 = document.querySelector('.description2');
let description3 = document.querySelector('.description3');
let description4 = document.querySelector('.description4');




let save = document.querySelector('.let1');
let save2 = document.querySelector('.let2');
let save3 = document.querySelector('.save3');
let save4 = document.querySelector('.save4');

let budget = document.querySelector('.budget');
let budget2 = document.querySelector('.budget2');
let budget3 = document.querySelector('.budget3');
let budget4 = document.querySelector('.budget4');




let salary = document.querySelector('#salary');
let other = document.querySelector('#other');


let home = document.querySelector('#home');
let daily = document.querySelector('#daily');

let add1 = document.querySelector('#add1');
let add2 = document.querySelector('#add2');
let add3 = document.querySelector('#add3');
let add4 = document.querySelector('#add4');



function togglePopup(){
    document.querySelector(".popup-1").classList.toggle("active");
    
}


//salary/wages
function toggleSalary(){
    document.querySelector(".popup-1").style.display = "block";
    //document.querySelector(".popup-1").classList.toggle("active");
       description.value = "Salary/Wages";

    document.querySelector('.let1').addEventListener('click', () =>{
    if(budget.value == ""){
        alert("Please fill the Empty field");
        return false;
    }else{ 
      
          
        document.querySelector(".popup-1").style.display = "none";
        description.value = "Salary/Wages";
       salary.value = budget.value;
       add1.innerHTML = "REMOVE";
       add1.style.backgroundColor = 'grey';
    
      
    
       }
       
    })
   

}


document.querySelector('#add1').addEventListener('click', ()=>{
if(document.getElementById('add1').innerHTML.indexOf("ADD") != -1){ 
    toggleSalary();
}
    

})

add1.addEventListener('click', ()=>{
    if(document.getElementById('add1').innerHTML.indexOf("REMOVE") != -1){
        add1.innerHTML = "ADD";
        add1.style.backgroundColor = 'blue';
        salary.value = 0.00;
       
     }
})

document.querySelector('.let2').addEventListener('click', ()=>{
    document.querySelector(".popup-1").style.display = "none";
})











//Other income
function toggleOther(){
   // document.querySelector(".popup-1").classList.toggle("active");
   document.querySelector(".popup-2").style.display = "block";
    description2.value = "Other Income";

     document.querySelector('.saveMe').addEventListener('click', () =>{
       
    
    if(budget2.value == ""){
        alert("Please fill the Empty field");
        return false;
    }else{ 
      
          
        document.querySelector(".popup-2").style.display = "none";
        description2.value = "Other Income";
       other.value = budget2.value;
       add2.innerHTML = "REMOVE";
       add2.style.backgroundColor = 'grey';
       
       
       }
       
    })



}

document.querySelector('#add2').addEventListener('click', ()=>{
if(document.getElementById('add2').innerHTML.indexOf("ADD") != -1){

    toggleOther();
}
})


add2.addEventListener('click', ()=>{
    if(document.getElementById('add2').innerHTML.indexOf("REMOVE") != -1){
      
        add2.innerHTML = "ADD";
        add2.style.backgroundColor = 'blue';
        other.value = 0.00;
       
     }
})

document.querySelector('.let3').addEventListener('click', ()=>{
    document.querySelector(".popup-2").style.display = "none";
})

















//add income together

let done = document.querySelector('.done');
let view = document.querySelector('.view');
done.addEventListener('click', ()=>{
    let netIncome = document.querySelector('.netIncome');
let salaryCal = parseInt(document.querySelector('#salary').value);
let otherCal = parseInt(document.querySelector('#other').value);
    
    let netIncomeSum = salaryCal + otherCal;
    netIncome.value = netIncomeSum;

    selectCategories.style.display = "none";
    view.style.display = "block";
})


let expenseView = document.querySelector('.expenseView');
let addExpense = document.querySelector('.addExpense');
addExpense.addEventListener('click', ()=>{
    view.style.display = "none";
    expenseView.style.display = "block";
})































//salary/wages

function toggleHomeRent(){
    document.querySelector(".popup-3").style.display = "block";
    //document.querySelector(".popup-1").classList.toggle("active");
       description3.value = "Home/Rent";

    document.querySelector('.save3').addEventListener('click', () =>{
    if(budget3.value == ""){
        alert("Please fill the Empty field");
        return false;
    }else{ 
      
          
        document.querySelector(".popup-3").style.display = "none";
        description3.value = "Home/Rent";
        home.value = budget3.value;
       add3.innerHTML = "REMOVE";
       add3.style.backgroundColor = 'grey';
    
      
    
       }
       
    })
   

}


document.querySelector('#add3').addEventListener('click', ()=>{
if(document.getElementById('add3').innerHTML.indexOf("ADD") != -1){ 
    toggleHomeRent();
}
    

})

add3.addEventListener('click', ()=>{
    if(document.getElementById('add3').innerHTML.indexOf("REMOVE") != -1){
        add3.innerHTML = "ADD";
        add3.style.backgroundColor = 'blue';
        home.value = 0.00;
       
     }
})

document.querySelector('.cancel3').addEventListener('click', ()=>{
    document.querySelector(".popup-3").style.display = "none";
})











//Other income
function toggleDailyLiving(){
   // document.querySelector(".popup-1").classList.toggle("active");
   document.querySelector(".popup-4").style.display = "block";
    description4.value = "Daily Living";

     document.querySelector('.save4').addEventListener('click', () =>{
       
    
    if(budget4.value == ""){
        alert("Please fill the Empty field");
        return false;
    }else{ 
      
          
        document.querySelector(".popup-4").style.display = "none";
        description4.value = "Daily Living";
        daily.value = budget4.value;
       add4.innerHTML = "REMOVE";
       add4.style.backgroundColor = 'grey';
       
       
       }
       
    })



}

document.querySelector('#add4').addEventListener('click', ()=>{
if(document.getElementById('add4').innerHTML.indexOf("ADD") != -1){

    toggleDailyLiving();
}
})


add4.addEventListener('click', ()=>{
    if(document.getElementById('add4').innerHTML.indexOf("REMOVE") != -1){
      
        add4.innerHTML = "ADD";
        add4.style.backgroundColor = 'blue';
        daily.value = 0.00;
       
     }
})

document.querySelector('.cancel4').addEventListener('click', ()=>{
    document.querySelector(".popup-4").style.display = "none";
})

















//add income together

let done1 = document.querySelector('.done');

done1.addEventListener('click', ()=>{
    let netIncome2 = document.querySelector('.netIncome2');
let homeCal = parseInt(document.querySelector('#home').value);
let dailyCal = parseInt(document.querySelector('#daily').value);
    
    let netIncomeSum2 = homeCal + dailyCal;
    netIncome2.value = netIncomeSum2;




    let provisionalBal = document.querySelector('.provisionalBal');
    let budgetCal = parseInt(document.querySelector('.netIncome2').value);
    let incomeCal = parseInt(document.querySelector('.netIncome').value);
    let netMinus = incomeCal - budgetCal;

    provisionalBal.value =  netMinus;




    let remaining = document.querySelector('.remaining');
    remaining.value = budgetCal; 
})




















let totalBudgetCalbar = parseInt(document.querySelector('.netIncome2').value);
remainingExpenseBar = parseInt(document.querySelector('.remaining').value);

//expense progress bar
class theProgressBar{
    constructor(element, initialValue = 0){
       this.elemFill = element.querySelector('.progressBarFill');
       this.elemValue = element.querySelector('.progressBarValue');
 
       this.setValue(initialValue);
    }
    setValue(newValue){
       if(newValue < 0){
          newValue = 0;
       }
       if(newValue > totalBudgetCalbar){
          newValue = totalBudgetCalbar;
       }
 
       this.value = newValue;
       
       this.upDate()
    }
    upDate(){
       const percentage = this.value + '%';
       this.elemFill.style.width = percentage;
       this.elemFill.style.background = 'red';
       this.elemValue.textContent = percentage;
    }
 }

























//Add in expense

function saveExpense(){
    
    let amount = parseInt(document.querySelector('.amount').value);
    let amount2 = document.querySelector('.amount');
  
    let remainingExpense = document.querySelector('.remaining');
    let totalBudgetCal = parseInt(document.querySelector('.netIncome2').value);
   
   
   
   if(amount2.value == ""){
        console.log("Empty Field");
        return false;
    }else{
        
        remainingExpense.value = totalBudgetCal - amount; 
        let outProgress = new theProgressBar(document.querySelector('.progressBar'));
        outProgress.setValue(remainingExpense.value);
        amount2.value = "";


        if(remainingExpense <= 0){
            alert("Money don finish");
        }

        view.style.display = "block";
        expenseView.style.display = "none";
    }

}

































//allow only numbers
 function isNumberKey(evt, id){
let confirmNumeric = (evt.which)?(evt.which):evt.keycode;
if(confirmNumeric == 46){
   txt = document.getElementById(id).value;
if(!(txt == indexOf('.') > -1)){
    return true;
}
}

    if(confirmNumeric > 31 && (confirmNumeric < 48 || confirmNumeric > 57)){
        return false;
        return true;
    }

 }

 











































 

//toggle and assign value of stuff
/*
function togglePopup(clicked){
      document.querySelector(".popup-1").classList.toggle("active");
//console.log("ID = "+ clicked);

if(clicked == 1){
    description.value = "Salary/Wages";
   
}

if(clicked == 2){
    description.value = "Other Income";
  
}

if(clicked == 3){
   description.value = "Home/Rent";
}

if(clicked == 4){
    description.value = "Dating Living";
}

if(clicked == 5){
   description.value = "Trasportation";
}

if(clicked == 6){
    description.value = "Entertainment";
}

if(clicked == 7){
   description.value = "Health Care";
}

if(clicked == 8){
    description.value = "Dues/suscriptions";
}

if(clicked == 9){
    description.value = "Financial savings";
}





//saving the stuff

save.addEventListener('click', () =>{
    if(budget.value == ""){
        alert("Please fill the Empty field");
        return false;
    }else{ 
        if(clicked == 1){
          
       
        description.value = "Salary/Wages";
       salary.innerHTML = budget.value;
       add1.innerHTML = "Remove";
       add1.style.backgroundColor = 'grey';

       document.querySelector('#add1').addEventListener('click', ()=>{

           add1.innerHTML = "ADD";
           add1.style.backgroundColor = 'blue';
           salary.innerHTML = "0.00";
        
           

       })
    }
       }
    })



    document.querySelector('.let1').addEventListener('click', () =>{
        if(budget.value == ""){
            alert("Please fill the Empty field");
            return false;
        }else{ 
            if(clicked == 2){
              
           
                description.value = "Other Income";  
           other.innerHTML = budget.value;
           add2.innerHTML = "Remove";
           add2.style.backgroundColor = 'grey';
    
           document.querySelector('#add2').addEventListener('click', ()=>{
    
               add2.innerHTML = "ADD";
               add2.style.backgroundColor = 'blue';
               other.innerHTML = "0.00";
           
               
    
           })
        }
           }
    })


}

*/






  
/*

 if(clicked == 2){
          
       
        togglePopup();
        other.innerHTML = budget.value;
        add2.innerHTML = "Remove";
        add2.style.backgroundColor = 'grey';
 
        document.querySelector('#add2').addEventListener('click', ()=>{
 
            add2.innerHTML = "ADD";
            add2.style.backgroundColor = 'blue';
            other.innerHTML = "0.00";
            togglePopup();
            
      })
     }






     if(clicked == 3){
          
       
        togglePopup();
        home.innerHTML = budget.value;
        add3.innerHTML = "Remove";
        add3.style.backgroundColor = 'grey';
 
        document.querySelector('#add3').addEventListener('click', ()=>{
 
            add3.innerHTML = "ADD";
            add3.style.backgroundColor = 'blue';
            home.innerHTML = "0.00";
            togglePopup();
            
      })
     }




     if(clicked == 4){
          
       
        togglePopup();
        daily.innerHTML = budget.value;
        add4.innerHTML = "Remove";
        add4.style.backgroundColor = 'grey';
 
        document.querySelector('#add4').addEventListener('click', ()=>{
 
            add4.innerHTML = "ADD";
            add4.style.backgroundColor = 'blue';
            daily.innerHTML = "0.00";
            togglePopup();
            
      })
     }
     */
    


     
    


 
 