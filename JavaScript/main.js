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
let movie = (title,director,duration,releaseDate,actors,studios,synopsis,rating,image,)=>{
    return{
        title:title,
        director:director,
        duration:duration,
        releaseDate:releaseDate,
        actors:actors,
        studios:studios,
        synopsis:synopsis,
        rating:rating,
        image:image

    }
}

let Spiderman=movie("Spider-Man: Across the Spider-Verse"," Joaquim Dos Santos/ Kemp Powers / Justin K. Thompson","2h 20m","June 2, 2023",["Shameik Moore","Hailee Steinfeld","Brian Tyree Henry","Lauren Vélez","Jake Johnson","Jason Schwartzman","Issa Rae","Karan Soni","Shea Whigham","Greta Lee","Daniel Kaluuya","Mahershala Ali","Oscar Isaac"],"Sony Pictures Releasing","After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.",4.3,"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFHMCMi3SM6HVf0M-Ua0zLlXgBvdsyTT8JL47mVS58uxEaEPse")
let TNAgent= movie("The Night Agent","Netflix&Seth Gordon","Each episode is in the 40 to 50-minute range","March 23, 2023",["Gabriel Basso","Luciane Buchanan","Fola Evans-Akingbola","Sarah Desjardins","Eve Harlow","Phoenix Raei","Enrique Murciano","D.B. Woodside"],["MiddKid ProductionsExhibit A","Project X Entertainment,Sony","Pictures Television Studios"],"Plot. FBI Agent Peter Sutherland is thrown into a vast conspiracy about a mole at the highest levels of the United States government. To save the nation, he plunges into a desperate hunt for the traitor, while protecting former tech CEO Rose Larkin from the people who murdered her aunt and uncle.",4.1,"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSLQqa9pG_JFUZJovFtEmtG2ik8DJBtoPcpcAaGgvC1ilvb6kV")
let theoffice= movie("The Office",[" Steve Carell","Rainn Wilson", "John Krasinski", "B. J. Novak", "Ed Helms", "Brian Baumgartner", "Mindy Kaling","Paul Lieberstein"],"28-minute per episode","March 24, 2005",["Michael Scott (Steve Carell)","Dwight Schrute (Rainn Wilson)", "Jim Halpert (John Krasinski)" ,"Pam Beesly (Jenna Fischer)" ,"Kelly Kapoor (Mindy Kaling)","Andy Bernard (Ed Helms)","Stanley Hudson (Leslie David Baker)" ,"Kevin Malone (Brian Baumgartner)"],["Deedle-Dee Productions","Reveille Productions","NBC Universal Television Studio"],"The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees at the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company.",4.8,"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUCVGoppQCv0WiLX8hO8lztTsBjqS4hP_DkJe0gFE5AHAxIfce")
let redNotice=movie("Red Notice","Rawson Marshall Thurber","1h 58m","November 4, 2021",["Dwayne Johnson","Ryan Reynolds","Gal Gadot"],"Flynn Picture Company","In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",4.0,"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhvhGPc-Ah_VD5MzYy2xw63B0Su_gnvSYNJ6Ud_N_FIsxWF4gE")

let Spiderman2=movie("Spider-Man: Across the Spider-Verse"," Joaquim Dos Santos/ Kemp Powers / Justin K. Thompson","2h 20m","June 2, 2023",["Shameik Moore","Hailee Steinfeld","Brian Tyree Henry","Lauren Vélez","Jake Johnson","Jason Schwartzman","Issa Rae","Karan Soni","Shea Whigham","Greta Lee","Daniel Kaluuya","Mahershala Ali","Oscar Isaac"],"Sony Pictures Releasing","After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.",4.3,"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFHMCMi3SM6HVf0M-Ua0zLlXgBvdsyTT8JL47mVS58uxEaEPse")
let TNAgent2= movie("The Night Agent","Netflix&Seth Gordon","Each episode is in the 40 to 50-minute range","March 23, 2023",["Gabriel Basso","Luciane Buchanan","Fola Evans-Akingbola","Sarah Desjardins","Eve Harlow","Phoenix Raei","Enrique Murciano","D.B. Woodside"],["MiddKid ProductionsExhibit A","Project X Entertainment,Sony","Pictures Television Studios"],"Plot. FBI Agent Peter Sutherland is thrown into a vast conspiracy about a mole at the highest levels of the United States government. To save the nation, he plunges into a desperate hunt for the traitor, while protecting former tech CEO Rose Larkin from the people who murdered her aunt and uncle.",4.1,"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSLQqa9pG_JFUZJovFtEmtG2ik8DJBtoPcpcAaGgvC1ilvb6kV")
let theoffice2= movie("The Office",[" Steve Carell","Rainn Wilson", "John Krasinski", "B. J. Novak", "Ed Helms", "Brian Baumgartner", "Mindy Kaling","Paul Lieberstein"],"28-minute per episode","March 24, 2005",["Michael Scott (Steve Carell)","Dwight Schrute (Rainn Wilson)", "Jim Halpert (John Krasinski)" ,"Pam Beesly (Jenna Fischer)" ,"Kelly Kapoor (Mindy Kaling)","Andy Bernard (Ed Helms)","Stanley Hudson (Leslie David Baker)" ,"Kevin Malone (Brian Baumgartner)"],["Deedle-Dee Productions","Reveille Productions","NBC Universal Television Studio"],"The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees at the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company.",4.8,"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUCVGoppQCv0WiLX8hO8lztTsBjqS4hP_DkJe0gFE5AHAxIfce")
let redNotice2=movie("Red Notice","Rawson Marshall Thurber","1h 58m","November 4, 2021",["Dwayne Johnson","Ryan Reynolds","Gal Gadot"],"Flynn Picture Company","In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",4.0,"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhvhGPc-Ah_VD5MzYy2xw63B0Su_gnvSYNJ6Ud_N_FIsxWF4gE")

let Spiderman3=movie("Spider-Man: Across the Spider-Verse"," Joaquim Dos Santos/ Kemp Powers / Justin K. Thompson","2h 20m","June 2, 2023",["Shameik Moore","Hailee Steinfeld","Brian Tyree Henry","Lauren Vélez","Jake Johnson","Jason Schwartzman","Issa Rae","Karan Soni","Shea Whigham","Greta Lee","Daniel Kaluuya","Mahershala Ali","Oscar Isaac"],"Sony Pictures Releasing","After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.",4.3,"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFHMCMi3SM6HVf0M-Ua0zLlXgBvdsyTT8JL47mVS58uxEaEPse")
let TNAgent3= movie("The Night Agent","Netflix&Seth Gordon","Each episode is in the 40 to 50-minute range","March 23, 2023",["Gabriel Basso","Luciane Buchanan","Fola Evans-Akingbola","Sarah Desjardins","Eve Harlow","Phoenix Raei","Enrique Murciano","D.B. Woodside"],["MiddKid ProductionsExhibit A","Project X Entertainment,Sony","Pictures Television Studios"],"Plot. FBI Agent Peter Sutherland is thrown into a vast conspiracy about a mole at the highest levels of the United States government. To save the nation, he plunges into a desperate hunt for the traitor, while protecting former tech CEO Rose Larkin from the people who murdered her aunt and uncle.",4.1,"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSLQqa9pG_JFUZJovFtEmtG2ik8DJBtoPcpcAaGgvC1ilvb6kV")
let theoffice3= movie("The Office",[" Steve Carell","Rainn Wilson", "John Krasinski", "B. J. Novak", "Ed Helms", "Brian Baumgartner", "Mindy Kaling","Paul Lieberstein"],"28-minute per episode","March 24, 2005",["Michael Scott (Steve Carell)","Dwight Schrute (Rainn Wilson)", "Jim Halpert (John Krasinski)" ,"Pam Beesly (Jenna Fischer)" ,"Kelly Kapoor (Mindy Kaling)","Andy Bernard (Ed Helms)","Stanley Hudson (Leslie David Baker)" ,"Kevin Malone (Brian Baumgartner)"],["Deedle-Dee Productions","Reveille Productions","NBC Universal Television Studio"],"The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees at the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company.",4.8,"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUCVGoppQCv0WiLX8hO8lztTsBjqS4hP_DkJe0gFE5AHAxIfce")
let redNotice3=movie("Red Notice","Rawson Marshall Thurber","1h 58m","November 4, 2021",["Dwayne Johnson","Ryan Reynolds","Gal Gadot"],"Flynn Picture Company","In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",4.0,"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhvhGPc-Ah_VD5MzYy2xw63B0Su_gnvSYNJ6Ud_N_FIsxWF4gE")

let Spiderman4=movie("Spider-Man: Across the Spider-Verse"," Joaquim Dos Santos/ Kemp Powers / Justin K. Thompson","2h 20m","June 2, 2023",["Shameik Moore","Hailee Steinfeld","Brian Tyree Henry","Lauren Vélez","Jake Johnson","Jason Schwartzman","Issa Rae","Karan Soni","Shea Whigham","Greta Lee","Daniel Kaluuya","Mahershala Ali","Oscar Isaac"],"Sony Pictures Releasing","After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.",4.3,"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFHMCMi3SM6HVf0M-Ua0zLlXgBvdsyTT8JL47mVS58uxEaEPse")
let TNAgent4= movie("The Night Agent","Netflix&Seth Gordon","Each episode is in the 40 to 50-minute range","March 23, 2023",["Gabriel Basso","Luciane Buchanan","Fola Evans-Akingbola","Sarah Desjardins","Eve Harlow","Phoenix Raei","Enrique Murciano","D.B. Woodside"],["MiddKid ProductionsExhibit A","Project X Entertainment,Sony","Pictures Television Studios"],"Plot. FBI Agent Peter Sutherland is thrown into a vast conspiracy about a mole at the highest levels of the United States government. To save the nation, he plunges into a desperate hunt for the traitor, while protecting former tech CEO Rose Larkin from the people who murdered her aunt and uncle.",4.1,"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSLQqa9pG_JFUZJovFtEmtG2ik8DJBtoPcpcAaGgvC1ilvb6kV")
let theoffice4= movie("The Office",[" Steve Carell","Rainn Wilson", "John Krasinski", "B. J. Novak", "Ed Helms", "Brian Baumgartner", "Mindy Kaling","Paul Lieberstein"],"28-minute per episode","March 24, 2005",["Michael Scott (Steve Carell)","Dwight Schrute (Rainn Wilson)", "Jim Halpert (John Krasinski)" ,"Pam Beesly (Jenna Fischer)" ,"Kelly Kapoor (Mindy Kaling)","Andy Bernard (Ed Helms)","Stanley Hudson (Leslie David Baker)" ,"Kevin Malone (Brian Baumgartner)"],["Deedle-Dee Productions","Reveille Productions","NBC Universal Television Studio"],"The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees at the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company.",4.8,"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUCVGoppQCv0WiLX8hO8lztTsBjqS4hP_DkJe0gFE5AHAxIfce")
let redNotice4=movie("Red Notice","Rawson Marshall Thurber","1h 58m","November 4, 2021",["Dwayne Johnson","Ryan Reynolds","Gal Gadot"],"Flynn Picture Company","In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",4.0,"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhvhGPc-Ah_VD5MzYy2xw63B0Su_gnvSYNJ6Ud_N_FIsxWF4gE")


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
    $(this).css("transform","scale(1.2)")
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
