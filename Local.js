let formValidate=()=>{
  let Name=  document.querySelector('#name').value
  let Num=  document.querySelector('#number').value
  let Email=  document.querySelector('#email').value
  let Pass=  document.querySelector('#pass').value
  let Cpass=  document.querySelector('#cpass').value

    let Errname= document.querySelector('#errname')
    let ErrNum= document.querySelector('#errnumber')
    let ErrEmail= document.querySelector('#erremail')
    let ErrPass= document.querySelector('#errpass')
    let ErrCpass= document.querySelector('#errcpass')

    if(Name==""){
        Errname.innerHTML="Please enter your name";
        Errname.style.color="red";
               return false;
    }

    else if (number ==""){
        ErrNum.innerHTML="please enter your number";
        ErrNum.style.color="red";
        return false;
    }
    else if (email ==""){
        ErrEmail.innerHTML="Please enter your email";
        ErrEmail.style.color="red";
        return false;
    }
    else if (pass ==""){
        ErrPass.innerHTML="Please enter your password";
        ErrPass.style.color="red";
        return false;
    }
    else if(cpass ==""){
        ErrCpass.innerHTML="Please enter your cpass";
        ErrCpass.style.color="red";
        return false;
    }

    if(num.lenght!=10){                                  // DAY 2 //
        ErrNum.innerHTML="Please enter Valid Number";
        return false;
    }
    else if(isNaN(Num)){                                // isNaN=> alphabate => true
        ErrNum.innerHTML="Please enter number only";
        return false;
                        
    }    
    
    if (!(Email.includes("@") && Email.includes(".com"))){                     // ! => false=>true , true=>false
        ErrEmail.innerHTML="Please enter valid email";
        return false;
    }
    if(!(pass.match(/[1234567890]/) &&
       pass.match(/[!@#$%^&*]/)    &&
       pass.match(/[A-Z]/))

    ){
        ErrPass.innerHTML="Please enter strong pass";
        return false;
    }

    localStorage.setItem("Name",Name)
    localStorage.setItem("number",Num)
    localStorage.setItem("email",Email)
    localStorage.setItem("password",Pass)

    location.href="Login.html"
    return false;
};


let Login=()=>{

    let LoginName= document.querySelector("#loginname").value
    let LoginPass= document.querySelector("#loginpass").value

    let Localname= localStorage.getItem("name")
    let LocalPass= localStorage.getItem("password")

    if (Localname==LoginName && LocalPass==LoginPass){
        Location.href="Home.html"
        return false;
    }
    else{
        alert("Invalid credentials")
        return false;
    }

};


    

