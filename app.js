//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const res = require("express/lib/response");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
var postarea;

let submitarray=[]// creating a golbal variable outside all is mandatory 

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{ // setting up the homeroute 
    res.render("home",{
      homepara:homeStartingContent,
      posts:submitarray  ,          // ejs cannot access contain from app.js so we have to do this 
      title:submitarray[0].post,        // showing title on home page
      titlecontent:submitarray[0].postarea       // shoing title content 
      })  // app.render is used to show file 
    
})

app.get("/about",(req,res)=>{ // setting up the about section 
    res.render("about",{aboutcontent:aboutContent})
})

app.get("/contact",(req,res)=>{// setting up the contact feed 

  res.render("contact",{contactkr:contactContent})
})

app.get("/compose",(req,res)=>{ // creating the new route "compose "
  res.render("compose")
})

app.post("/compose",(req,res)=>{ // cretaing a object submit and storing the value of text araea and post and then longing it 
 
    let submit={
      post:req.body.posttitle,
      postarea:req.body.postbody
   }
    submitarray=[submit]  // adding submit to an array bcoz it will store all the enrty made and redirect to home route and logging the array /* kindly ckeck the server */ */

    res.redirect("/") // redirecting to the home route 

})

  
// creating the route from express route parameter kindly see the end 
let afterpost = submitarray.post;
app.get("/post/:"+afterpost,(req,res)=>{

      res.render("post.ejs",{afterpost:submitarray[0].post,afterpostcontent:submitarray[0].postarea.substring(0,20)})
})






 






// kindlyy see the express route parameter
// writing rs to server will reset the server  https://expressjs.com/en/guide/routing.html
app.listen(3000, function() {
  console.log("Server started on port 3000");
});

//challenge 18 using the lodash.com kindly read the documentation using with the url ingoring the hypen 

// the hypen u see in thw website is know as cabak eg : expamle-ex-p                                             