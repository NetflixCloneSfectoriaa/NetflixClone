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