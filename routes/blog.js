const express = require('express')    // importing express
const path = require('path')    // importing path module

const router = express.Router()    // setting up router variable

// Setting up responses to requests

// routing to home page
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../index.html'));
})

// routing to faqs page
router.get('/faqs.html', (req, res)=>{
    res.sendFile(path.join(__dirname, '../faqs.html'));
})

module.exports = router    // exporting router variable module