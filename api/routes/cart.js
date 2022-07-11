const Cart = require("../models/Cart");
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();


// CREATE

router.post("/", verifyToken, async (req, res) => {

    const newCart = new Cart (req.body)
    try{
        const savedCart = await newCart.save();
        res.status(201).json(savedCart);
        }
    catch(err){
        res.status(400).json(err);
    }   
});
//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(403).json(err);
    }
});

// DELETE

router.delete("/:id", verifyTokenAndAuthorization, async (req, res,) => {
    try {
        await Cart.findByIdAndDelete(req.param.id)
        res.status(200).json("Cart has been deleted")
    }
    catch (err) {
        res.status(401).json(err)
    }

})

// GET USER CART

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res,) => {
    try {
        const carts = await Cart.findOne({userId: req.params.userId})
        res.status(200).json(carts);
    }
    catch (err) {
        res.status(401).json(err)
    }

})

// GET ALL CARTS

router.get('/', verifyTokenAndAdmin, async (req, res) =>{
    try{
        const carts = await Cart.find()
        res.status(200).json;

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;