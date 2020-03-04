let send=document.getElementById("send")





send.addEventListener("click",e=>{
let name=document.getElementById("name")
let msg=document.getElementById("msg")

let body={
    name:name.value,
    msg:msg.value
}
fetch("https://new-bebe.herokuapp.com/msg",{
method:"POST",
headers:{
    "Content-Type":"Application/json"
},
body:JSON.stringify(body)
}).then(res=>res.json()).then(data=>{
    console.log(data)
})


})
