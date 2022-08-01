 
 var userName=prompt("Enter Your Name") ;
 var age =prompt("Enter Your Age") ; 
 if ( age <=0 ){
  alert("Age is zero try again") ;}



 var gender=prompt("Enter Your Gender F/M") ; 
 if (gender==="male")
 {
alert("Welcom Mr ")+userName ;
 }
else(gender ==="female")
{ alert("welcom Ms")+userName;}


 //

 var conf =confirm ("Do you wants to skip the welcoming message") ; 
 if (conf ==="False")
 { alert("Welcome to our website") ;}

Array={} ;
 var x=confirm ("Do you like to make online shoping?");
 Array.push(x);
 var y=confirm ("Do you wants to have a discount ticket?");
 Array.push(y) ;
 var z=confirm ("Do you like our website?"); 
 Array.push(z) ;

 Q()

 function Q(arr)
 {
for(let i=0;i<= Array.length;i++)
   {
    if (Array[i]==="Null") { alert("Invalid");} 
    else 
  { let t=" ";
 t = Array.reverse();
   }
 }
 console.log(t);
}
