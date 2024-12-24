window.addEventListener("load", () => {
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const header = document.createElement("h4");
  header.innerText = "Day 1 - Learning Basic Canvas";
  container.appendChild(header);

  const canvas = document.getElementById("canvas-1");
  container.appendChild(canvas);

  document.body.appendChild(container);

  // checking if the canvas is supported by the browser
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

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

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    // Koordinat pusat
    const x = width / 2; // memastikan objek horizontal berada di tengah
    const y = height / 2; // memastikan objek vertical berada di tengah

    // Ukuran objek
    const _width = 50;
    const _height = 50;

    // Gambar objek pada koordinat (x, y) secara center
    ctx.fillRect(x - _width / 2, y - _height / 2, _width, _height);

    // // fillRect(x, y, width, height)
    ctx.fillRect(x - _width / 2 + 10, y - _height / 2 + 10, _width, _height);

    // // // fillRect(x, y, width, height)
    ctx.fillRect(x - _width / 2 + 20, y - _height / 2 + 20, _width, _height);
  } else {
    // canvas-unsupported code here
    console.log(
      "Sorry your using an outdated browser that does not support canvas"
    );
  }
});
