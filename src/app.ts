//This file contains the every information regarding express app object 
import express from "express"; 
const app = express(); 
app.get("/health", (_req, res) => {
    res.json({
        status : 'Ok', 
        timeStamp : new Date().toISOString()
    })
})
 
export {app}