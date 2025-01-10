// Create House
window.addEventListener("load", () => {
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const header = document.createElement("h4");
  header.innerText = "Day 3 - Create House";
  container.appendChild(header);

  const canvas = document.getElementById("canvas-3");

  container.appendChild(canvas);

  document.body.appendChild(container);

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // ctx.strokeStyle = "red";

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

    // Show grid x & y
    ctx.strokeStyle = "gray";
    ctx.stroke();

    // show grid x & y
    // Wall (with fill color)
    ctx.fillStyle = "blue"; // Fill color for the wall
    ctx.fillRect(35, 60, 125, 100); // Fill the wall
    ctx.strokeStyle = "blue"; // Border color for the wall
    ctx.strokeRect(35, 60, 125, 100);

    // Door (with fill color)
    ctx.fillStyle = "brown"; // Fill color for the door
    ctx.fillRect(100, 90, 50, 70);
    ctx.strokeStyle = "darkbrown"; // Border color for the door
    ctx.strokeRect(100, 90, 50, 70);

    // Window Left (with fill color)
    ctx.fillStyle = "orange"; // Fill color for the left window
    ctx.fillRect(40, 90, 25, 25);
    ctx.strokeStyle = "black"; // Border color for the left window
    ctx.strokeRect(40, 90, 25, 25);

    // Window Right (with fill color)
    ctx.fillStyle = "orange"; // Fill color for the right window
    ctx.fillRect(65, 90, 25, 25);
    ctx.strokeStyle = "black"; // Border color for the right window
    ctx.strokeRect(65, 90, 25, 25);

    // Roof
    ctx.strokeStyle = "darkred"; // Roof border color
    ctx.fillStyle = "brown"; // Fill color for the roof
    ctx.beginPath();
    ctx.moveTo(20, 60);
    ctx.lineTo(100, 10);
    ctx.lineTo(175, 60);
    ctx.closePath();
    ctx.fill(); // Fill the roof
    ctx.stroke(); // Draw the roof border
  }
});

// EXERCISE CREATE 6 Corners

// window.addEventListener("load", () => {
//   const canvas = document.createElement("canvas");
//   canvas.width = 400;
//   canvas.height = 400;
//   canvas.style.border = "1px solid black";
//   document.body.appendChild(canvas);

//   if (canvas.getContext) {
//     const ctx = canvas.getContext("2d");

//     const width = canvas.width;
//     const height = canvas.height;

//     // Gambar grid
//     ctx.strokeStyle = "lightgray";
//     for (let x = 0; x <= width; x += 20) {
//       ctx.moveTo(x, 0);
//       ctx.lineTo(x, height);
//     }
//     for (let y = 0; y <= height; y += 20) {
//       ctx.moveTo(0, y);
//       ctx.lineTo(width, y);
//     }
//     ctx.stroke();

//     // Contoh penggunaan moveTo dan lineTo
//     ctx.strokeStyle = "blue";
//     ctx.lineWidth = 2;

//     ctx.beginPath();
//     ctx.moveTo(80, 40); // Top-left corner
//     ctx.lineTo(200, 40); // Top-right corner
//     ctx.lineTo(240, 100); // Middle-right corner
//     ctx.lineTo(200, 160); // Bottom-right corner
//     ctx.lineTo(80, 160); // Bottom-left corner
//     ctx.lineTo(40, 100); // Middle-left corner
//     ctx.closePath(); // Close the path to connect back to the start
//     ctx.stroke();

//     Menambahkan titik untuk membantu memahami posisi
//     ctx.fillStyle = "red";
//     ctx.beginPath();
//     ctx.arc(40, 40, 3, 0, Math.PI * 2); // Titik awal (40, 40)
//     ctx.fill();
//     ctx.beginPath();
//     ctx.arc(120, 40, 3, 0, Math.PI * 2); // (120, 40)
//     ctx.fill();
//     ctx.beginPath();
//     ctx.arc(120, 100, 3, 0, Math.PI * 2); // (120, 100)
//     ctx.fill();
//     ctx.beginPath();
//     ctx.arc(40, 100, 3, 0, Math.PI * 2); // (40, 100)
//     ctx.fill();
//   }
// });
