let express=require("express")
let bp=require("body-parser")
let app=express()
app.use(bp.json())
let port=process.env.PORT||3000


app.get("/",(req,res)=>{
res.send([1234,2343,6543,3421,3432,7657,5456,3454,1232,4325])
})


app.listen(port)
