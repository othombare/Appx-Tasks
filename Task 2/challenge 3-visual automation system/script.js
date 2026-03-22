let blockCounter = 0;
let startBlock = null;

function addBlock(type) {
  const block = document.createElement("div");
  block.classList.add("block");
  block.innerText = type;
  block.style.left = "100px";
  block.style.top = "100px";
  block.dataset.id = blockCounter++;
  block.dataset.type = type;

  const input = document.createElement("div");
  input.classList.add("input");
  block.appendChild(input);

  const output = document.createElement("div");
  output.classList.add("output");
  block.appendChild(output);

  enableDrag(block);
  enableConnection(output);

  document.getElementById("canvas").appendChild(block);
}

function enableDrag(block) {
  block.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("output") || e.target.classList.contains("input")) return;

    let offsetX = e.offsetX;
    let offsetY = e.offsetY;

    function moveAt(e) {
      block.style.left = e.pageX - offsetX + "px";
      block.style.top = e.pageY - offsetY + "px";
      updateConnections();
    }

    document.addEventListener("mousemove", moveAt);

    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", moveAt);
    }, { once: true });
  });
}

function enableConnection(output) {
  output.addEventListener("mousedown", function () {
    startBlock = output.parentElement;
  });

  document.addEventListener("mouseup", function (e) {
    if (e.target.classList.contains("input") && startBlock) {
      createLine(startBlock, e.target.parentElement);
      startBlock = null;
    }
  });
}

function createLine(fromBlock, toBlock) {
  const svg = document.getElementById("connections");

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", "2");

  line.dataset.from = fromBlock.dataset.id;
  line.dataset.to = toBlock.dataset.id;

  svg.appendChild(line);
  updateConnections();
}

function updateConnections() {
  const lines = document.querySelectorAll("line");

  lines.forEach(line => {
    const from = document.querySelector(`[data-id='${line.dataset.from}']`);
    const to = document.querySelector(`[data-id='${line.dataset.to}']`);

    if (!from || !to) return;

    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();

    line.setAttribute("x1", fromRect.right);
    line.setAttribute("y1", fromRect.top + fromRect.height / 2);

    line.setAttribute("x2", toRect.left);
    line.setAttribute("y2", toRect.top + toRect.height / 2);
  });
}