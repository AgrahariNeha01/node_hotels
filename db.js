const mongoose=require('mongoose');
const mongoUrl='mongodb://localhost:27017/hotel'//Replace mydb with ur db name
//setup mongodb connection
mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get the default connection
//mongoose maintains a default connection obj representing the mongodb connection
const db = mongoose.connection;

//define event listeners for db connection
db.on('connected', ()=>
{
    console.log('connected to mongodb server');
})
db.on('error', ()=>
    {
        console.log(' mongodb connection error:',err);
    })
    db.on('disconnected', ()=>
        {
            console.log('disconnected to mongodb server');

        })
        
        //export 
        module.export=db; 

