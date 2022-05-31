const express = require ('express')
const app = express() 
const routes = require('routes');
const db = require('./config/connection');
const PORT = process.env.PORT||3001;



app.listen (PORT, () => { 
    console.log ('hewwo');

    
});

app.use( express.json() );
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.use(routes);

db.once("open", () => {
    app.listen(PORT, () => {
        console.log (`Listening on port ${PORT}`);
    });
})