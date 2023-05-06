radio.setGroup(1)
radio.setTransmitPower(3)
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
