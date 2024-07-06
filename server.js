const express = require('express');
const app = express();
const db= require('./db');
const Person=require('./models/person');
const Menu=require('./models/menuitems');
const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("hello how can i help u");
})



//Post route to add a person
app.post('/person', async(req, res)=>{
    try{
        const data=req.body//assuming the req body conatins person data

    //create a new person docu using the mongoose model
    const newPerson= new Person(data);

    //save the new person to the db
   const response= await newPerson.save();
   console.log('data saved');
   res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }

})


// post method to add menu item
app.post('/menu', async(req, res)=>{
    try{
        const data=req.body//assuming the req body conatins person data

    //create a new menu docu using the mongoose model
    const newMenu= new Menu(data);

    //save the new person to the db
   const response= await newMenu.save();
   console.log('data saved');
   res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }

})

// get method for menu
app.get('/menu', async(req,res)=>{
    try{
        const data = await Menu.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})


//GET method to get the person
app.get('/person', async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
app.listen(5000, ()=>{
    console.log('listening on port 5000');
});
