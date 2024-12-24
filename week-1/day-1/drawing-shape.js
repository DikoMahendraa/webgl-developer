window.addEventListener("load", () => {
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const header = document.createElement("h4");
  header.innerText = "Day 1 - Learning Drawing Shapes";
  container.appendChild(header);

  const canvas = document.getElementById("canvas-2");
  container.appendChild(canvas);

  document.body.appendChild(container);
  // checking if the canvas is supported by the browser

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // Ukuran canvas
    const width = canvas.width;
    const height = canvas.height;

    console.log({ width, height });
    // Gambar grid
    for (let x = 0; x <= width; x += 5) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }

    for (let y = 0; y <= height; y += 5) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }

    // show grid x & y
    ctx.strokeStyle = "#ddd";
    ctx.stroke();

    const xFormula = width / 2;
    const yFormula = height / 2;

    // Draws a filled rectangle.
    ctx.fillStyle = "black";
    ctx.fillRect(xFormula - 100 / 2, yFormula - 100 / 2, 100, 100);
    ctx.strokeStyle = "black";
    ctx.clearRect(xFormula - 60 / 2, yFormula - 60 / 2, 60, 60);
    ctx.strokeRect(xFormula - 50 / 2, yFormula - 50 / 2, 50, 50);
  }
});
