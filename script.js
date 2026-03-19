const numberContainer = document.getElementById("number-container");
const extractBtn = document.getElementById("extract-btn");
const tableContainer = document.getElementById("table-container");
const title = document.querySelector("h1");
const userTables = document.getElementById("user-tables");
let playersNumInput = document.querySelector("input");
const generateBtn = document.getElementById("generate-btn");
const alreadyExtracted = [];
let currentlyExtracted = 0;

for (let i = 1; i < 91; i++) {
  tableContainer.innerHTML += `
    <div class="table-cell number-${i}">
        <h3 class="cell-number">${i}</h3>
    </div>
    `;
}

const registerAndDisplayNum = () => {
  currentlyExtracted = Math.ceil(Math.random() * 90);
  while (alreadyExtracted.includes(currentlyExtracted)) {
    currentlyExtracted = Math.ceil(Math.random() * 90);
  }
  alreadyExtracted.push(currentlyExtracted);
  numberContainer.innerText = `${currentlyExtracted}`;
};

const highlightNum = (num) => {
  const selectedCells = document.querySelectorAll(`.number-${num}`);
  selectedCells.forEach((cell) => cell.classList.add("selected"));
};

const generateUserTable = (num) => {
  for (let i = 0; i < num; i++) {
    userTables.innerHTML += `
    <div id="user-table-${i}" class="user-table">
    </div>
    `;

    const alreadyInTable = [];

    for (let j = 0; j < 24; j++) {
      const currentTable = document.getElementById(`user-table-${i}`);
      let currentlyInTable = Math.ceil(Math.random() * 90);
      while (alreadyInTable.includes(currentlyInTable)) {
        currentlyInTable = Math.ceil(Math.random() * 90);
      }
      alreadyInTable.push(currentlyInTable);
      currentTable.innerHTML += `
        <div class="table-cell number-${currentlyInTable}">
            <h3 class="cell-number">${currentlyInTable}</h3>
        </div>
      `;
    }
  }

  extractBtn.classList.toggle("hidden");
  generateBtn.classList.toggle("hidden");
  playersNumInput.classList.toggle("hidden");
  numberContainer.innerText = "Extract the first number";
};

generateBtn.addEventListener("click", () => {
  generateUserTable(playersNumInput.value);
});

extractBtn.addEventListener("click", () => {
  if (alreadyExtracted.length === 89) {
    title.innerText = "Game Over!";
    numberContainer.innerText = "Game Over!";
    return;
  }
  registerAndDisplayNum();
  highlightNum(alreadyExtracted[alreadyExtracted.length - 1]);
  console.log(alreadyExtracted);
});
