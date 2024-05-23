function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(230, 240, 230);
  fill(240, 240, 220)
  let x1 = 50
  let x2 = 750
  let delta_x = x2 - x1
  let y = 50
  let n = 9
  let delta_y = delta_x / ((n+1)*1.5)
  
  const x = mouseX;
  if (x > x1 && x < x2) {
    const distance = min(x2 - x, x - x1)
    const fraction = distance / delta_x
    drawFraction(x1, x2, y, delta_y, fraction, n)
    print(fraction)
  }
  
}

function drawFraction(x1, x2, y, delta_y, fraction, n) {
  if (n > 0) {
    rect(x1, y, (x2 - x1), delta_y)
    delta_x = x2 - x1
    drawFraction(x1, x1 + (x2 - x1)*fraction, y + delta_y * 1.5, delta_y, fraction, n - 1)
    drawFraction(x2 - (x2 - x1)*fraction, x2, y + delta_y * 1.5, delta_y, fraction, n - 1)
  } else {
    rect(x1, y, (x2 - x1), delta_y)
  }
}