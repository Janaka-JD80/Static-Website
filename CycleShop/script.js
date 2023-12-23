function setFocus(){
	var num1;
	num1=document.forms["dataform"]["cusname"].value;
	num1=document.forms["dataform"]["cusname"].focus();
  }
  
  
  function valid(){
	var num;
	num=document.forms["dataform"]["tps"].value;
	
	if(num==""){
	document.getElementById("errmsg").innerHTML="You're required to fill this";
	}else{
		if(num.length!="10"){
			document.getElementById("errmsg").innerHTML="Length is not right";
		}
			else if(isNaN(num)){
				document.getElementById("errmsg").innerHTML="Please enter only numbers";
			}
			else if (num.substring(0,1)!="0"){
					document.getElementById("errmsg").innerHTML="First digit must be zero";
			}else{
				document.getElementById("errmsg").innerHTML="";
			}				
				
	}
	return false;
	
  }
  
  
 
  
  function brand(){
	 var name;
	 var len = /^[A-Za-z\s.]+$/;
    name=document.getElementById("cusname").value

	if(name==""){
		 document.getElementById("err").innerHTML="You're required to fill this";
		 
	}else{

    if(name.match(len))
      document.getElementById("err").innerHTML="";
    else
       document.getElementById("err").innerHTML="Please enter valid inputs"
	}
   return false;
	 
	  }
	  
	  
	  
	  function Empty(){
		 var add;
		 var name;
		 var tps;
		 var mail;
		 
		 
		add=document.forms["dataform"]["address"].value;
		name=document.forms["dataform"]["name"].value;
		tps=document.forms["dataform"]["tp"].value;
		mail=document.forms["dataform"]["em"].value;
		
		
		
		if(name==""){
			document.getElementById("divadd").innerHTML	="";
			document.getElementById("err").innerHTML="";
			document.getElementById("errmsg").innerHTML="";
			document.getElementById("dmail").innerHTML="";
			document.getElementById("dml").innerHTML="";
			document.getElementById("divgen").innerHTML="";
			
			document.getElementById("err").innerHTML="You're require to fill this";
		}
		
		
		
		
	else if(add==""){
			document.getElementById("divadd").innerHTML	="";
			document.getElementById("err").innerHTML="";
			document.getElementById("errmsg").innerHTML="";
			document.getElementById("dmail").innerHTML="";
			document.getElementById("dml").innerHTML="";
			document.getElementById("divgen").innerHTML="";
			
			document.getElementById("divadd").innerHTML="please input the address";		
			
		}
		
		
		else if(document.getElementById("male").checked==false && document.getElementById("female").checked==false){
			document.getElementById("divadd").innerHTML	="";
			document.getElementById("err").innerHTML="";
			document.getElementById("errmsg").innerHTML="";
			document.getElementById("dmail").innerHTML="";
			document.getElementById("dml").innerHTML="";
			document.getElementById("divgen").innerHTML="";
			
			document.getElementById("divgen").innerHTML="please select a gender";
		
	  }
	
		
		
		else if(tps==""){
			document.getElementById("divadd").innerHTML	="";
			document.getElementById("err").innerHTML="";
			document.getElementById("errmsg").innerHTML="";
			document.getElementById("dmail").innerHTML="";
			document.getElementById("dml").innerHTML="";
			document.getElementById("divgen").innerHTML="";
			
			document.getElementById("errmsg").innerHTML="You're require to fill this";
		}
		
		
		else if(mail==""){
			document.getElementById("divadd").innerHTML	="";
			document.getElementById("err").innerHTML="";
			document.getElementById("errmsg").innerHTML="";
			document.getElementById("dmail").innerHTML="";
			document.getElementById("dml").innerHTML="";
			document.getElementById("divgen").innerHTML="";
			
			document.getElementById("dmail").innerHTML="You're require to fill this";
			
		}
			
       else if(document.getElementById("ds").checked==false && document.getElementById("lm").checked==false &&  document.getElementById("kg").checked==false){
		   document.getElementById("divadd").innerHTML	="";
			document.getElementById("err").innerHTML="";
			document.getElementById("errmsg").innerHTML="";
			document.getElementById("dmail").innerHTML="";
			document.getElementById("dml").innerHTML="";
			document.getElementById("divgen").innerHTML="";
			
			document.getElementById("dml").innerHTML="please select a brand name";

		}
		
		
	  else{
			document.getElementById("divadd").innerHTML	="";
			document.getElementById("err").innerHTML="";
			document.getElementById("errmsg").innerHTML="";
			document.getElementById("dmail").innerHTML="";
			document.getElementById("dml").innerHTML="";
			document.getElementById("divgen").innerHTML="";
			document.getElementById("well").innerHTML="Data added successfully";
			
		}
		
		  
		  return false;
	  }
	  
	  
	 
	function clean(){
			document.getElementById("divadd").innerHTML	="";
			document.getElementById("err").innerHTML="";
			document.getElementById("errmsg").innerHTML="";
			document.getElementById("dmail").innerHTML="";
			document.getElementById("dml").innerHTML="";
			document.getElementById("divgen").innerHTML="";
			document.getElementById("well").innerHTML="";
	}
 
  
 
  
	
	  
  
  
	  
		  
  