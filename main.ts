radio.setGroup(1)
radio.setTransmitPower(2)
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
