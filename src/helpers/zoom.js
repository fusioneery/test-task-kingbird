let prevVal;
let scaleRate = 1;

export function touchStart(e) {
  prevVal = 0;
}

export function touchMove(e) {
  if (e.touches && e.touches.length === 2) {
    let dist = Math.max(
      Math.floor(
        Math.hypot(
          Math.abs(e.touches[0].clientX - e.touches[1].clientX),
          Math.abs(e.touches[0].clientY - e.touches[1].clientY),
        ),
      ) - 50,
      0,
    );
    let delta = dist - prevVal;
    if (prevVal === 0 && dist > 0) {
      delta = 0;
    }
    prevVal = dist;
    scaleRate += delta * 0.005;
    this.style.transform = "scale(" + scaleRate + ")";
    requestAnimationFrame(touchMove);
  }
}
