## user.js
```javaScript
console.log("user.js file loaded succsesfully")

var userName = "bhavin"
var userAge = 21
const userPrint = function () {
        console.log("user print function called")
}

module.exports={
    userName,userAge,userPrint
}
```

## app.js 

```javaScript
console.log("this file is app.js")
var user=require("./user")

console.log(user)
console.log(user.userName)
console.log(user.userAge)
console.log(user.userPrint())
```

## second App.js
```javaScript
const express = require("express")

const app = express()

app.get("/test",(req,res)=>{
    console.log("test api called ")

    res.send("hello test api is called")
    
})

app.get("/users",(req,res)=>{
    console.log("user api called ")

    res.json(
        {
            message:"user api is called",
            data:["ram","shyam","seeta"]
        }
    )
    
})

app.get("/employee",(req,res)=>{
    console.log("employee api called ")

    res.json(
        {
            message:"employee api is called",
            data:[{
                empName:"bhavin",
                empAge:21,
                empSalary:20000
            },{
                empName:"dhruvin",
                empAge:22,
                empSalary:50000
            },{
                empName:"vivek",
                empAge:23,
                empSalary:100000
            },{
                empName:"uday",
                empAge:22,
                empSalary:200000
            }
        ]
        }
    )
    
})




const PORT = 3000
app.listen(PORT, ()=>{
    console.log("server started on port number",PORT)
})


```
