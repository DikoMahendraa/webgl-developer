window.addEventListener("load", () => {
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const header = document.createElement("h4");
  header.innerText = "Day 1 - Learning Basic Canvas";
  container.appendChild(header);

  const canvas = document.getElementById("canvas");
  container.appendChild(canvas);

  document.body.appendChild(container);

  // checking if the canvas is supported by the browser
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // drawing code here

    ctx.fillStyle = "rgb(200 0 0)";
    // fillRect(x, y, width, height)
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    // fillRect(x, y, width, height)
    ctx.fillRect(30, 30, 50, 50);

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    // fillRect(x, y, width, height)
    ctx.fillRect(50, 50, 50, 50);
  } else {
    // canvas-unsupported code here
    console.log(
      "Sorry your using an outdated browser that does not support canvas"
    );
  }
});
