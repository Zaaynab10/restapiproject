const express=require('express')
const mongoose=require('mongoose')
const app=express()
const UserModel=require('./models/User.js')
//
mongoose.connect("mongodb://127.0.0.1:27017/userDb")
app.listen(3000,()=>{console.log("server has started")})
app.route('/users').get( function(req, res) {
   UserModel.find().then((data)=>{res.send(data)})
}) 
.post(function(req,res){
        UserModel.create([
            {name:'Mbengue',fullName:'Macoumba',email:'Sakho@gmail.com',age:3},
            {name:'Seye',fullName:'Rassoul',email:'MbackeBalla@yahoo.fr',age:6}
        ]).then((data)=>{res.send(data)})
  
})
.put(function(req,res){
UserModel.findOneAndUpdate({_id:'6409c1827f77650a78e347d0'},{name:"Female"}).then((data)=>{
res.send(data)
})
})
.delete(function(req,res){
    UserModel.deleteOne({_id:'6409c1827f77650a78e347db'}).then((data)=>{res.send(data)})
})//
