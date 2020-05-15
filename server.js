let express=require("express")
let bp=require("body-parser")
let app=express()
app.use(bp.json())
let port=process.env.PORT||3000


app.post("/",(req,res)=>{
let r={
email:false
  ,password:false
}
let email=res.body.email
let password=res.body.password
if(email==="1"){
  r.email=true
}
if(password==="1"){
  r.password=true
}
  res.send(r)
})


app.listen(port)
