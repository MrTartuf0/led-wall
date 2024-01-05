import ws281x from 'rpi-ws281x-native'
import fs from 'fs'
const channel = ws281x(60 , {stripType: 'ws2812'})

const problem = {
                    canale: 
                    [ 
                        {
                        idcanale: 0,
                        leds: 
                            [
                                {
                                id: 0,
                                color: '0xFFFF00',  
                                },
                                {
                                id: 1,
                                color: '0xFF0000', 
                                },
                                {
                                id: 5,
                                color: '0xFF00FF', 
                                },
                                {
                                id: 6,
                                color: '0xFFE0E0', 
                                },
                                {
                                id: 8,
                                color: '0xA60dc3', 
                                },
                                {
                                id: 12,
                                color: '0xB3C211', 
                                },
                                {
                                id: 15,
                                color: '0xFAADEA', 
                                },
                                {
                                id: 18,
                                color: '0xde556f', 
                                },
                                {
                                id: 34,
                                color: '0x51624b', 
                                },
                            ],
                        },
                    ],
                };

const problemJSON = JSON.stringify(problem);

// importing the fs module


// writing the JSON string content to a file
fs.writeFile("./problemJSON.json", problemJSON, error => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  }

  console.log("data.json written correctly");
});
var tempoluci = 2000

var startTime = Date.now();
while(Date.now() - startTime < tempoluci) {
    for (let i = 0; i < 60; i++) {
        console.log((tempoluci/1000)-Math.floor((Date.now() - startTime)/1000));
        channel.array[i] = '0x'+Math.floor(Math.random()*0xffffff).toString(16);
        ws281x.render();
    }
}

ws281x.reset();
console.log(problemJSON);

// reading a JSON file asynchronously
fs.readFile("problemJSON.json", (error, data) => {
  // if the reading process failed,
  // throwing the error
  if (error) {
    // logging the error
    console.error(error);

    throw err;
  }

  // parsing the JSON object
  // to convert it to a JavaScript object
  const problemcallback = JSON.parse(data);

  // printing the JavaScript object
  // retrieved from the JSON file
  console.log("problemcallback");
  
  console.log("1"+problemcallback);

    Object.entries(problemcallback.canale[0].leds).forEach((entry) => {
        const [key, value] = entry;
        console.log(key,value.id,value.color);
        channel.array[value.id] = value.color;
        ws281x.render();
    });
    
});

const keypress = async () => {
  process.stdin.setRawMode(true)
  return new Promise(resolve => process.stdin.once('data', () => {
    process.stdin.setRawMode(false)
    resolve()
  }))
};
(async () => {
  console.log('Press any key to turn the leds off')
  await keypress()
  ws281x.reset();
  console.log('bye')
})().then(process.exit)



