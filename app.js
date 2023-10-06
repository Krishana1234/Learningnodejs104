const { connectDatabase } = require("./database/database")

const app = require("express")()
//connecting database
connectDatabase()

app.get("/",(req,res)=>{
   // res.send("hello i m from home page")
    res.json({
        message :" i am from home page"
    })
})



app.get ("/contact",(req,res)=>{
    res.send("i m from contact page")
})

app.get("/about",(req,res)=>{
    res.send("i m from about page")
})
//creating api for blog
app.post("/createBlog",async(req,res)=>{

    //isert database logic
    await blog.create({
     title :req.body.title,
     subtitle : req.body.subtitle,
     description :req.body.descripyion

    })

    res.json({
        status : 201,
        message : "Blog created succesfully"
    })
    // Alternative 
    // res.status(200).json({
    //     message : "Blog created successfully"
    // })
})
app.listen(2000,(req,res)=>{
    console.log("Nodejs has started at port 2000")
})