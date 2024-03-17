import express from "express";
import cors from "cors";
import https from "https";
import ws281x from 'rpi-ws281x-native'
import fs from 'fs'

const key = fs.readFileSync('./cert/localhost/localhost.decrypted.key')
const cert = fs.readFileSync('./cert/localhost/localhost.cr')


const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

const channel = ws281x(1 , {stripType: 'ws2812'})

function doubleLEDs(originalObject) {
    let transformedObject = {};
    for (let key in originalObject) {
        let color = originalObject[key];
        let ledIndex = parseInt(key);
        transformedObject[ledIndex * 2] = color;
        transformedObject[ledIndex * 2 + 1] = color;
    }
    return transformedObject;
}

app.get('/' , (req , res) => {
    res.send('Welcome to the led-wall API!')
})

app.get('/changeColor/:color' , (req , res) => {
    channel.array[0] = req.params.color
    ws281x.render();
    res.send('The color has successfully changed to ' + req.params.color)
})

app.post('/lightUpBoard', (req, res) => {
    console.log(req.body);
    try {
        const doubledLEDObject = doubleLEDs(req.body);
         for (let ledIndex in doubledLEDObject) {
            let color = doubledLEDObject[ledIndex];
            channel.array[ledIndex] = color;
        }
        
        ws281x.render();
        res.json({ success: true, message: "LEDs doubled successfully.", leds: doubledLEDObject });
    } catch (error) {
        console.error("Error doubling LEDs:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
});

app.get('/clearBoard', (req, res) => {
    try {
        ws281x.reset()
        res.json({success: true, message: "Board cleared successfully."});
    } catch (error) {
        console.error("Error clearing board:", error);
        res.status(500).json({success: false, message: "Internal server error."});
    }
});

const server = https.createServer({ key, cert }, app)
server.listen(port, () => {
    console.log(`Server is listening on https://localhost:${port}`)
})            
