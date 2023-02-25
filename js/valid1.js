      // // Using alerts
      // function csub(){
      //   alert("Submitted successfully!");
      //   var name=frm1.username.value;
      //   if(name=""){
      //       alert("Name is required");
      //   }
      //   else{
      //       alert("Go ahead!");
      //   }
      // }

      function csub(){
        var username=frm1.username.value;
        var mathmarks=0,engmarks=0,compmarks=0;
        mathmarks = parseInt(frm1.mathmarks.value);
        engmarks=parseInt(frm1.engmarks.value);
        compmarks=parseInt(frm1.compmarks.value);
        frm1.totalmarks.value=mathmarks+engmarks+compmarks;
        document.getElementById("permarks").value=(parseInt(mathmarks)+parseInt(engmarks)+parseInt(compmarks))/3;
        var maxmarks=0,sub="";
        if(mathmarks>maxmarks){
          maxmarks=mathmarks;
          sub="Maths";
        }
        if(engmarks>maxmarks){
          maxmarks=engmarks;
          sub="English";
        }
       if(compmarks>maxmarks){
          maxmarks=compmarks;
          sub="Computer";
        }
        document.getElementById('maxmarks').value=parseInt(maxmarks);
        document.getElementById("details").innerHTML="Hey "+username+", You got maximum marks in "+sub;
      }