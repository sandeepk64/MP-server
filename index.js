//import json-server
const jsonServer = require('json-server')
//create server for media player app
const MPserver = jsonServer.create()
//create middleware used by json server
const middleware = jsonServer.defaults()
//set up route for json file in server
const route = jsonServer.router('db.json')
//set up port for running server app
const PORT = 3000 || process.env.PORT


MPserver.use(middleware)
MPserver.use(route)
MPserver.listen(PORT,()=>{
    console.log(`Media Player server Started at port ${PORT} and waiting for client request`);
})