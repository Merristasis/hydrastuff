osc(18, 0.1, 0).color(0, 0.2, 1)
.mult(osc(20, 0.01, 0)).repeat(2, 20).rotate(0.5).modulate(o1)
osc(200, 0.2, 0).color(0.1, 0.7, 0.9).mult(osc(40)).modulateKaleid(o1, 0.2,0.3)
.rotate(0.2).out(o1)
