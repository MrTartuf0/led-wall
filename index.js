import express from "express";
import cors from "cors";
import ws281x from 'rpi-ws281x-native'

const app = express()
app.use(cors())
const port = 3000

const channel = ws281x(2 , {stripType: 'ws2812'})

app.get('/changeColor/:lednumber/:color' , (req , res) => {
    channel.array[req.params.lednumber] = req.params.color
    ws281x.render();
    res.send('The led number ' + req.params.lednumber + 'color has successfully changed to ' + req.params.color);
    console.log('The led number ' + req.params.lednumber + 'color has successfully changed to ' + req.params.color);
})

app.listen(port , () => {
    console.log(`The app is listening on port ${port}`);
})
