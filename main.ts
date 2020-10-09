input.onButtonPressed(Button.A, function () {
    sTime = input.runningTime()
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    if (0 < sTime) {
        diff = (input.runningTime() - sTime) / 1000
        if (diff < 9.5) {
            basic.showIcon(IconNames.Confused)
        } else if (10.5 < diff) {
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showIcon(IconNames.Happy)
        }
        basic.showString("" + (sTime))
    }
    sTime = -1
})
let diff = 0
let sTime = 0
sTime = -1
basic.forever(function () {
	
})
