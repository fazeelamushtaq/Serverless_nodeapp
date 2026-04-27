import express from "express"
const app = express()
app.listen(3000)

app.get("/product", (req,res) => {
    res.json({message: "Hello from GET API"})
})

app.post("/product", (req, res) => {
    res.json({message: "Hello from POST API"})
})

app.put("/product/:id", (req, res) => {
    res.json({message: "Hello from PUT API"})
})

app.delete("/product/:id", (req, res) => {
    res.json({message: "Hello from DELETE API"})
})