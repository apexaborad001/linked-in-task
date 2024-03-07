const mongoose = require('mongoose')
const subSchema = mongoose.Schema({
    subscription: {
        type: String
    },
    planDetail: {
        type: String,
    },
    lastPaidDate:{
        type:String
    },
    nextDueDate:{
        type:String
    },
    activeSubscriber:{
        type:Number
    }



    
});


const cart_table = mongoose.model('sub_table', subSchema)
module.exports = new mongoose.model("sub_table", subSchema)