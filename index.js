document.getElementById('login-submit').addEventListener('click',function(){

 const email=document.getElementById('exampleInputEmail1').value;
 const pass=document.getElementById('exampleInputPassword1').value
 if(email=="sontan" && pass=="janina"){
     console.log("thik ache");
     location.href="bangking.html"
 }
 else{
     console.log("thik nai")
 }


})

  

