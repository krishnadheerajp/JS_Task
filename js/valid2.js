function CalcSal(){
    var x = parseInt(empform.salary.value);
    var choice=document.getElementById("perfselect").value;
    if(choice=='A'){
        empform.bonus.value=0.3*x;
        empform.totsalary.value=x+0.3*x;
        window.open("welcome.html","","width=300,height=300");
    }
    if(choice=='B'){
        empform.bonus.value=0.1*x;
        empform.totsalary.value=x+0.1*x;
    }
    if(choice=='C'){
        empform.bonus.value=0;
        empform.totsalary.value=x;
    }
    var username=empform.username.value;
    document.getElementById("details1").innerHTML="Hey " +username+", You will get a total slary of "+empform.totsalary.value;
}