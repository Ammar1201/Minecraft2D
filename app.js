
const variables = {
  inventory: {},
  selectedTool: '',
  lastSelectedBlock: '',
  toggled: false
}

const WORLD_GRID_ROWS = 20; // this must match #world style grid-template-rows
const WORLD_GRID_COLUMNS = 30; // this must match #world style grid-template-columns

const startBtn = document.querySelector('#startBtn');
const world = document.querySelector('#world');
const toolBar = document.querySelector('#toolBar');
const inventoryDiv = document.querySelector('#inventory');
const inventoryBtn = document.querySelector('#inventoryBtn');
const resetBtn = document.querySelector('#resetBtn');

const createWorld = () => {
  for(let i = 0; i < WORLD_GRID_ROWS; i++) {
    for(let j = 0; j < WORLD_GRID_COLUMNS; j++) {
      const div = document.createElement('div');

      //* add clouds
      if(i ==2 || i == 3 || i == 4) {
        if(j == 2 || j == 3 || j == 4 || j == 5) {
          div.classList.add('cloud');
        }
      }

      //* add leaves
      if(i == 5 ) {
        if(j == 14 || j == 15  || j == 24 || j == 25) {
          div.classList.add('leaves');
        }
      }
      if(i == 6 || i == 7 || i == 8) {
        if(j == 13 || j == 14 || j == 15 || j == 16 || j == 23 || j == 24 || j == 25 || j == 26) {
          div.classList.add('leaves');
        }
      }

      //* add wood
      if(i === 9 || i == 10 || i == 11 || i == 12) {
        if(j == 14 || j == 15 || j == 24 || j == 25) {
          div.classList.add('wood');
        }

        //* add stone
        if(i == 11 || i == 12) {
          if(j == 2 || j == 3 || j == 4 || j == 5 || j == 6 || j == 7) {
            div.classList.add('stone');
          }
        }
        if(i === 9 || i == 10) {
          if(j == 3 || j == 4 || j == 5 || j == 6) {
            div.classList.add('stone');
          }
        }
      }

      //* add grass & dirt
      if(i == 13) {
        div.setAttribute('class', 'grass');
      }
      if(i > 13) {
        div.setAttribute('class', 'dirt');
      }
      world.appendChild(div);
    }
  }
}

createWorld();

const updateInventoryVariable = () => {
  if(variables.inventory[variables.lastSelectedBlock] == undefined) {
    variables.inventory[variables.lastSelectedBlock] = 1;
  }
  else {
    variables.inventory[variables.lastSelectedBlock] += 1;
  }
}

const addToInventory = (lastSelectedBlock) => {
  let child = inventoryDiv.firstElementChild;
  let length = child.classList.length;
  while(length == 1) {
    if(child.nextElementSibling == null) {
      child = null;
      break;
    }
    if(child.classList.contains(lastSelectedBlock)) {
      child.lastElementChild.textContent = variables.inventory[lastSelectedBlock];
      return;
    }
    child = child.nextElementSibling;
    length = child.classList.length;
  }

  if(child == null) {
    child = inventoryDiv.firstElementChild;
    while(!child.classList.contains(lastSelectedBlock)) {
      child = child.nextElementSibling;
    }
    child.lastElementChild.textContent = variables.inventory[lastSelectedBlock];
  }

  child.classList.add(lastSelectedBlock);
  if(child.classList.contains(lastSelectedBlock)) {
    child.lastElementChild.textContent = variables.inventory[lastSelectedBlock];
  }
  console.log(child);
  // child.lastElementChild.textContent = variables.inventory[lastSelectedBlock];
}

world.addEventListener('click', (event) => {
  const target = event.target;
  if(target.classList.length == 1 && target.classList[0] !== 'cloud') {
    variables.lastSelectedBlock = target.classList[0];
    target.classList.remove(variables.lastSelectedBlock);
    updateInventoryVariable();
    addToInventory(variables.lastSelectedBlock);
  }
},
{ capture: true }
);

inventoryBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if(!variables.toggled) {
    variables.toggled = true;
    inventoryDiv.classList.add('visible');
    inventoryDiv.classList.remove('hidden');
  }
  else {
    variables.toggled = false;
    inventoryDiv.classList.remove('visible');
    inventoryDiv.classList.add('hidden');
  }
});

resetBtn.addEventListener('click', (event) => {
  event.preventDefault();
  createWorld();
  variables.inventory = {};
  variables.selectedTool = '';
  variables.lastSelectedBlock = '';
  variables.toggled = false;
});