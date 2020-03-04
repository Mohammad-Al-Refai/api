let express=require("express")
let bp=require("body-parser")
let fs=require("fs")
let MSG=[]
let app=express()
app.use(bp.json())
let port=process.env.PORT||3000
app.use(express.static(__dirname+"/view"))
app.get("/",(req,res)=>{
res.sendFile(__dirname+"/view/index.html")
})

app.post("/msg",(req,res)=>{
let X1=Math.floor(Math.random()*9000)
let X2=Math.floor(Math.random()*9000)
let X3=Math.floor(Math.random()*9000)
let id=X1+"E"+X2+"R"+X3+"U"
let name=req.body.name
let msg=req.body.msg
let data=`${name}:${msg}`
fs.writeFile(__dirname+"/message/"+id+".txt",data,(err)=>{
    if(err){
        console.log(err)
    }else{
        res.send({state:200})
    }
})
})

fs.readdir(__dirname+"/message/",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        for(let i=0;i<data.length;i++){
            fs.readFile(__dirname+"/message/"+data[i],"utf-8",(err,result)=>{
                if(err){
                    console.log(err)
                }else{
                    MSG.push(result)
                    console.log(MSG)
                }
            })
        }
        }
    
})




setInterval(function READ(){
    MSG=[]
    fs.readdir(__dirname+"/message/",(err,data)=>{
        if(err){
            console.log(err)
        }else{
            for(let i=0;i<data.length;i++){
                fs.readFile(__dirname+"/message/"+data[i],"utf-8",(err,result)=>{
                    if(err){
                        console.log(err)
                    }else{
                        MSG.push(result)
                        console.log(MSG)
                    }
                })
            }
            }
        
    })
    
    


},10000)


app.get("/3527",(req,res)=>{
    res.send(MSG)
    })


    app.get("/352778646635",(req,res)=>{
        res.sendFile(__dirname+"/view/admin.html")
    })
app.listen(port)