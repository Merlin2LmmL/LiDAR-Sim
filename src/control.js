export function setupKeyListener(state) {
  window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) return;
    switch (event.key) {
      case "w":
      case "W": state.dir = "up"; break;
      case "s":
      case "S": state.dir = "down"; break;
      case "a":
      case "A": state.dir = "left"; break;
      case "d":
      case "D": state.dir = "right"; break;
      default: return;
    }
    console.log("Direction changed to:", state.dir);
    event.preventDefault();
  });
}