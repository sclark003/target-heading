input.onButtonPressed(Button.A, function () {
    target = randint(0, 359)
    basic.showIcon(IconNames.Yes)
    basic.pause(300)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(target)
    basic.pause(300)
})
let diff = 0
let angle = 0
let target = 0
target = 0
basic.pause(300)
basic.forever(function () {
    angle = input.compassHeading()
    diff = target - angle
    if (diff > 180) {
        diff = diff - 360
    }
    if (diff < -180) {
        diff = diff + 360
    }
    if (diff >= -10 && diff <= 10) {
        basic.showIcon(IconNames.Target)
        music.playTone(880, music.beat(BeatFraction.Sixteenth))
    } else if (diff > 0) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.West)
    }
    basic.pause(150)
})
