window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas-4");
  canvas.width = 400;
  canvas.height = 400;

  const ctx = canvas.getContext("2d");
  const gridSize = 20; // Size of each grid cell
  const snake = [
    { x: 100, y: 100 },
    { x: 80, y: 100 },
    { x: 60, y: 100 },
  ]; // Initial snake segments
  let direction = "right"; // Current direction of movement

  // Draw the canvas grid and snake
  function drawCanvas() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = "lightgray";
    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();

    // Draw the snake
    ctx.fillStyle = "green";
    snake.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
  }

  // Update the snake's position
  function updateSnake() {
    // Get the current head position
    const head = { ...snake[0] };

    // Update the head position based on the direction
    if (direction === "up") head.y -= gridSize;
    if (direction === "down") head.y += gridSize;
    if (direction === "left") head.x -= gridSize;
    if (direction === "right") head.x += gridSize;

    // Add the new head position to the front of the snake
    snake.unshift(head);

    // Remove the last segment to keep the snake the same length
    snake.pop();
  }

  // Movement functions
  function moveUp() {
    if (direction !== "down") direction = "up";
  }

  function moveDown() {
    if (direction !== "up") direction = "down";
  }

  function moveLeft() {
    if (direction !== "right") direction = "left";
  }

  function moveRight() {
    if (direction !== "left") direction = "right";
  }

  // Add event listeners to buttons
  document.getElementById("btnUp").addEventListener("click", moveUp);
  document.getElementById("btnDown").addEventListener("click", moveDown);
  document.getElementById("btnLeft").addEventListener("click", moveLeft);
  document.getElementById("btnRight").addEventListener("click", moveRight);

  // Game loop
  function gameLoop() {
    updateSnake();
    drawCanvas();

    // Check for boundaries
    const head = snake[0];
    if (
      head.x < 0 ||
      head.x >= canvas.width ||
      head.y < 0 ||
      head.y >= canvas.height
    ) {
      alert("Game Over! Refresh the page to play again.");
      return;
    }

    setTimeout(gameLoop, 200); // Loop every 200ms
  }

  // Initial draw and start the game loop
  drawCanvas();
  gameLoop();
});
