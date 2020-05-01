let express=require("express")
let bp=require("body-parser")
let app=express()
app.use(bp.json())
let port=process.env.PORT||3000


app.get("/",(req,res)=>{
res.send({data:["A","B","C","D","E"]})

})


app.listen(port)
