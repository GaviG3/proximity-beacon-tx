radio.setGroup(1)
radio.setTransmitPower(1)
basic.showLeds(`
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    radio.sendString("1")
    basic.pause(200)
})
