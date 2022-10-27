const express = require("express")
const cors = require("cors")

const app= express()
const PORT = process.env.PORT || 5050

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors({
    origin: "*"
}))

app.get("/", (req, res) => {
    res.json(
        { "slackUsername": "Emediong Bassey Edem", "backend": true, "age": 24, "bio": "Software Engineer with less than one year experience" }
    )    
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})