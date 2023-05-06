input.onButtonPressed(Button.A, function () {
    Power += 1
    basic.showNumber(Power)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    radio.setTransmitPower(Power)
})
input.onButtonPressed(Button.B, function () {
    Power += -1
    basic.showNumber(Power)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    radio.setTransmitPower(Power)
})
let Power = 0
radio.setGroup(1)
Power = 6
radio.setTransmitPower(Power)
basic.showNumber(Power)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    radio.sendString("1")
    basic.pause(200)
})
