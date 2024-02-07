$("input").on("focusin",function () {
    console.log("here");
    $("input").css("background","white")
    $(".inputs h4").show()
    var mail=$("#email").val()
    var pass=$("#password").val()
    if(mail.length!==0&& /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(mail)){
        $("#notvalid--mail").hide()
    }
    if(pass.length>8){
        $("#notvalid--pass").hide()
    }
})

$("input").on("focusout",function () {
    console.log("here");
    $("input").css("background","white")
    $(".inputs h4").hide()
})
$("#signUp").click(function () {
    var mail=$("#email").val()
    var pass=$("#password").val()
    if(pass.length>=8 && /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(mail)){
        $(location).attr("href","../htmls/profile.html")
    }else{
        $(".inputs h4").show()
    }

})



let users = []

let userSingup = () => {
    users.push({
    email:$("#email").val(),
    password:$("#password").val(),
})

localStorage.setItem("users",JSON.stringify(users))
}


let userSingIn = ()=> {
    users = JSON.parse(localStorage.getItem("users"))
    let email =  $("#email").val()
   let password = $("#password").val()
   if(users.filter(e=>e.email === email && e.password === password).length) {
    window.location.replace("http://localhost:5501/pages/profile.html")
   }
   else {
    alert("password wrong")
   }
}