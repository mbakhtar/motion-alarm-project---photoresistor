basic.showString("System Armed")
basic.forever(function () {
    if (light.getLuminance(light.LightPin.P1) < 300) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
