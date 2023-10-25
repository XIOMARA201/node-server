const http = require("http") 
const port = 1234
const server = http.createServer ((req,res)=>{
    res.end(JSON.stringify([
    {
        id: 1, 
        descripcion: "correr",
        completada: true
    }
    ]))
})

server.listen(port,()=>{
    console.log("server listening on", port)
})