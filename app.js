
const variables = {
  inventory: {},
  selectedTool: '',
  lastRemovedBlock: '',
  inventoryToggled: false
}

const WORLD_GRID_ROWS = 20; // this must match #world style grid-template-rows
const WORLD_GRID_COLUMNS = 30; // this must match #world style grid-template-columns

const startBtn = document.querySelector('#startBtn');
const world = document.querySelector('#world');
const toolBar = document.querySelector('#toolBar');
const inventoryDiv = document.querySelector('#inventory');
const inventoryBtn = document.querySelector('#inventoryBtn');
const resetBtn = document.querySelector('#resetBtn');
const toolBarTools = document.querySelector('#toolBarTools');

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
  if(variables.inventory[variables.lastRemovedBlock] == undefined) {
    variables.inventory[variables.lastRemovedBlock] = 1;
  }
  else {
    variables.inventory[variables.lastRemovedBlock] += 1;
  }
}

const addToInventory = (lastRemovedBlock) => {
  let child = inventoryDiv.firstElementChild;
  let length = child.classList.length;
  while(length == 1) {
    if(child.nextElementSibling == null) {
      child = null;
      break;
    }
    if(child.classList.contains(lastRemovedBlock)) {
      child.lastElementChild.textContent = variables.inventory[lastRemovedBlock];
      return;
    }
    child = child.nextElementSibling;
    length = child.classList.length;
  }

  if(child == null) {
    child = inventoryDiv.firstElementChild;
    while(!child.classList.contains(lastRemovedBlock)) {
      child = child.nextElementSibling;
    }
    child.lastElementChild.textContent = variables.inventory[lastRemovedBlock];
  }

  child.classList.add(lastRemovedBlock);
  if(child.classList.contains(lastRemovedBlock)) {
    child.lastElementChild.textContent = variables.inventory[lastRemovedBlock];
  }
}

world.addEventListener('click', (event) => {
  const target = event.target;
  if(target.classList.length == 1 && target.classList[0] !== 'cloud') {
    variables.lastRemovedBlock = target.classList[0];
    target.classList.remove(variables.lastRemovedBlock);
    updateInventoryVariable();
    addToInventory(variables.lastRemovedBlock);
  }
},
{ capture: true }
);

inventoryBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if(!variables.inventoryToggled) {
    variables.inventoryToggled = true;
    inventoryDiv.classList.add('visible');
    inventoryDiv.classList.remove('hidden');
  }
  else {
    variables.inventoryToggled = false;
    inventoryDiv.classList.remove('visible');
    inventoryDiv.classList.add('hidden');
  }
});

const selectFirstTool = (target) => {
  if(target.id == '') {
    target = target.parentElement;
  }
  variables.selectedTool = target.id;
  target.classList.toggle('border');
};

const updateSelectedTool = (target) => {
  if(target.id == '') {
    target = target.parentElement;
  }

  const tool = document.querySelector(`#${variables.selectedTool}`);
  tool.classList.remove('border');
  target.classList.add('border');
  variables.selectedTool = target.id;
};

toolBarTools.addEventListener('click', (event) => {
  const target = event.target;
  if(variables.selectedTool === '') {
    selectFirstTool(target);
    return;
  }

  updateSelectedTool(target);
},
{ capture: true }
);

resetBtn.addEventListener('click', (event) => {
  event.preventDefault();
  createWorld();
  variables.inventory = {};
  variables.selectedTool = '';
  variables.lastRemovedBlock = '';
  variables.inventoryToggled = false;
});