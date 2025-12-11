let setdata=()=>{
    // let mydata={ 
    //      "prachi"
    //     // age: 21,
    //     // city: "Bhopal"
    // }
    localStorage.setItem("Myname",JSON.stringify(mydata))
    localStorage.setItem("Myage",21);

    location.reload()
};

let show=document.querySelector("#okk")
show.innerHTML=localStorage.getItem("Myname");

let remdata=()=>{
    localStorage.removeItem("Myname")
    location.reload()
};

