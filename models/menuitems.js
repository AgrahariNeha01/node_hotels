
const mongoose= require('mongoose')

const menuSchema= new mongoose.Schema
(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true

        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type: String,
        enum: ['appetizer', 'main course', 'dessert', 'beverage', 'others'],
        required: true
        }
    }
);
//create menu model
const Menu= mongoose.model('Menu',menuSchema);
module.exports=Menu;
