function tracker (){
    var input = document.getElementById('inputBox').value;
    var less = document.getElementById('inputBox2').value;
   
    var income = document.getElementById('incomeResult');
    var expense = document.getElementById('expenseResult')
    var savings = document.getElementById('savingsResult')
      
    if(isNaN(input) || isNaN(less) || input == "" || less == "" ){
        alert("Field is Empty")
      return;   
    } else {     
      var addIncome = input;
      income.innerHTML = 'Your Salary is Rs. ' + addIncome ;
   
      var addExp = less ;
      expense.innerHTML = 'Your ExpensE is Rs. ' + addExp;
      
      var showRemain = addIncome - addExp;
      savings.innerHTML = 'Your Saving is Rs. ' + showRemain;
   }}
   