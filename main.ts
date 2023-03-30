basic.forever(function () {
    led.plotBarGraph(
    input.magneticForce(Dimension.X),
    2000
    )
    basic.pause(100)
})
