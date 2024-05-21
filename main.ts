let IR_waarde = 0
let rechts = 92
let links = 93
let achteruit = 94
let vooruit = 95
let stop = 76
basic.forever(function () {
    IR_waarde = IR.IR_read()
})
basic.forever(function () {
    if (vooruit == IR_waarde) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    }
})
basic.forever(function () {
    if (achteruit == IR_waarde) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
})
basic.forever(function () {
    if (links == IR_waarde) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    }
})
basic.forever(function () {
    if (rechts == IR_waarde) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    }
})
basic.forever(function () {
    if (stop == IR_waarde) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorStop(maqueen.Motors.M1)
    }
})
