import ws281x from 'rpi-ws281x-native'

const channel = ws281x(1 , {stripType: 'ws2812'})


channel.array[0] = 0x00000
ws281x.render();

channel.array[0] = 0x00000
ws281x.render();
