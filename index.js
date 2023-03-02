const express = require("express")
 const port = 3000;
 const app = express();
 const path = require('path');
 let ejs = require('ejs')
 const db = require ('./config/mongoose');
const Contact = require("./models/contact");

 app.set('view engine', 'ejs')
 app.set('views','views')

app.use(express.urlencoded())
 app.use(express.static('public'))
 var contactList = [
  {
     name: "shubham rajput",
      phone: "1111111111",
      address:"ambala",
  },
  {
     name: "abhilash Rawal",
      phone: "1234567890",
      address:"ambala",
  },
  {
     name: "Aryan ",
      phone: "12131321321",
      address:"ambala"
  },
  {
    name:"rahull",
    phone:"022222222",
    address:"ambala",
  }
]
//app.use('/static', express.static(path.join(__dirname,'public')))
// app.get('/', function(req,res){
//   res.render('index',{
//   title:"project file",
//     list:contactList
   
// })
// })
app.get('/project',(req,res) =>{
  Contact.find({},(err,result)=>{
    if(err){
      console.log(err);
      return
    }
     return res.render('project',{
      title:"JAI SHREE RAM",
      list:result
     
  })
})
})

app.get('/delete/:id',(req,res)=>{
  //console.log(req.params.id);
  let id = req.params.id
  Contact.findByIdAndRemove(id,function(err) {
    if(err){
      console.log(err)
    
     return res.redirect('back')
    }
  }) 
  return res.redirect('back')
})
 

//  app.get('/project',function (req,res){
//   res.render('project',{
//   title:"project",
//     list:contactList,
  
// })
//  })

 app.post('/create',(req,res)=>{

  //  console.log(req.body)
  //  contactList.push(req.body)
  //  res.redirect("back")


    Contact.create({
      name:req.body.name,phone:req.body.phone
    }), function(err,result) {
      if(err){
       return  console.log(err);
      }
      console.log(result);
       return res.redirect("/project")
      
    }
 })
  app.listen(port,()=>{
  
   console.log(`express server is running on port no. ${port}`); })