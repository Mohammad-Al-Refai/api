let express=require("express")
let bp=require("body-parser")
let app=express()
app.use(bp.json())
let port=process.env.PORT||3000


app.post("/",(req,res)=>{
  res.send(res.body)
// let r={
// email:false
//   ,password:false
// }
// let email=req.body.email
// let password=req.body.password
// if(email==="1"){
//   r.email=true
// }
// if(password==="1"){
//   r.password=true
// }
//   res.send(r)
// })


app.listen(port)
