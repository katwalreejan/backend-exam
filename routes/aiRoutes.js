const express = require('express');
const router = express.Router();
// const auth = require("../middleware/auth");


const {
   generateAi,
   
} = require('../controllers/aiController');
 

// router.use(auth);
router.post("/api/ai/gemini",generateAi);

module.exports = router;