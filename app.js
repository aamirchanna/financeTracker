function tracker (){
    var input = +document.getElementById('inputBox').value;
    var less = +document.getElementById('inputBox2').value;
   
    var income = document.getElementById('incomeResult');
    var expense = document.getElementById('expenseResult')
    var savings = document.getElementById('savingsResult')
      
      var addIncome = input;
      income.innerHTML = 'Your Salary is Rs. ' + addIncome ;
   
      var addExp = less ;
      expense.innerHTML = 'Your Expensis is Rs. ' + addExp;
      
      var showRemain = addIncome - addExp;
      savings.innerHTML = 'Your Saving is Rs. ' + showRemain;       
   }
   