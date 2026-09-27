const router = require("express").Router();
const {createMessage,getMessages} = require("../Functions/Contact.Function");

router.post("/", (req,res)=>{
    createMessage(req,res);
});

router.get('/',(req,res)=>{
    getMessages(res);
});

module.exports = router;
