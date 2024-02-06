let signIn=(email,password)=>{
    return{
        email:email,
        password:password

    }
}
let sabrine =signIn("Zouaouidsabeine31@gmail.com","Zouaoui96")
let ahmed =signIn("amhmedghaleb2@gmail.com","ahmed20")
let nassim =signIn("nassimkafi2@gmail.com","nassim10")

let loginInfo =()=>{
    let user =document.getElementById("useremail")
    let user2 =document.getElementById("password")
    if (user.value.toUpperCase()===signIn.email.toUpperCase()&& user2.value===signIn.password){
        
      }
    }


let addprop =(movie,prop,newprop)=>{

    movie[prop]=newprop
}
// (Spiderman,actors,[	
//         "Shameik Moore",
//         "Hailee Steinfeld",
//         "Brian Tyree Henry",
//         "Lauren Vélez",
//         "Jake Johnson",
//         "Jason Schwartzman",
//         "Issa Rae",
//         "Karan Soni",
//         "Shea Whigham",
//         "Greta Lee",
//         "Daniel Kaluuya",
//         "Mahershala Ali",
//         "Oscar Isaac"])

// $('.profile').css({width:"400px"})


$("#ahmed").hover(function(){
    $(this).css("transform","scale(1.2)");
},function(){
    $(this).css("transform","scale(1)");
})
$("#sabrine").hover(function(){
    $(this).css("transform","scale(1.2)")
},function(){
    $(this).css("transform","scale(1)");
})
$("#nassim").hover(function(){
    $(this).css("transform","scale(1.2)")
},function(){
    $(this).css("transform","scale(1)");
})
$("#farouk").hover(function(){
    $(this).css("transform","scale(1.2)")
},function(){
    $(this).css("transform","scale(1)");
})
