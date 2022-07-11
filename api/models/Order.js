const mongoose  =  require('mongoose');

const OrderSchema = new mongoose.Schema ({
    userId: {type : String, required: true, unique: true},
    products: [
        {
            productId: {type : String, required: true},
            quantity: {type: Number, required: true, default: 1,},
        },
    ],  
    amount: {type: Number, required: true, default: 0,},
    adress: {type: String, required: true, default: "",},
    status: {type: String, required: true, default: "pending",},
},

    {timestamps : true}
);

module.exports = mongoose.model('Order', OrderSchema);





