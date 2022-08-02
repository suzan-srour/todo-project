 //ask user to enter his/her name 
 var userName=prompt("Enter Your Name") ;
 


 var gender=prompt("Enter Your Gender F/M") ; 
 if (gender!="male" && gender !="female")
 {
alert("You Have TO Select Between female/male");
var gender=prompt("Enter Your Gender F/M") ; 
}

var age =prompt("Enter Your Age") ; 
 if( age <=0 )
 {
  alert("Age is zero try again") ;
  var age =prompt("Enter Your Age Again")}
  


 //

 var conf =confirm ("Do you wants to skip the welcoming message") ; 
 while(conf==1)
 {break;
}

if(gender ==="female")
{alert("Welcome Ms")+userName;
}
else

if(gender==="male")
 {alert("Welcome Mr")+userName;}

else
 alert ("invalid user");
 

//const arr={} ;
 var x=confirm ("Do you like to make online shoping?");
  //arr.push(x) ;

 var y=confirm ("Do you wants to have a discount ticket?");
 //arr.push(y) ;
 var z=confirm ("Do you like our website?"); 
 //arr.push(z)
/*
 function Q(arr)
 {
for(let i=0;i<= arr.length;i++)
   {
    if (arr[i]==="Null") { alert("Invalid");} 
    else 
  { let t=" ";
 t = arr.reverse();
   }
 }
 console.log(t);
 }
*/