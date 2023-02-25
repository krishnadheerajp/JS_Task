function validate(){
    var name=regForm.username.value;
    var desg=regForm.designation.value;
    if(name==""){
        alert("Name is required");
        return false;
    }
    else if(desg==""){
        alert("Desingation is required");
        return false;
    }
    else{
        return true;
    }
}