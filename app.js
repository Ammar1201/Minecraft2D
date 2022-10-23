
const variables = {
  inventory: {},
  selectedTool: '',
  lastRemovedBlock: '',
  lastRemovedInventoryBlock: '',
  lastSelectedBlock: '',
  inventoryToggled: false
}

const WORLD_GRID_ROWS = 20; // this must match #world style grid-template-rows
const WORLD_GRID_COLUMNS = 30; // this must match #world style grid-template-columns

const startBtn = document.querySelector('#startBtn');
const world = document.querySelector('#world');
const toolBar = document.querySelector('#toolBar');
const inventory = document.querySelector('#inventory');
const inventoryBtn = document.querySelector('#inventoryBtn');
const resetBtn = document.querySelector('#resetBtn');
const toolBarTools = document.querySelector('#toolBarTools');
const inventorySlots = document.querySelectorAll('#inventory > div');

const createWorld = () => {

  //! generate world for mobile devices
  if(window.innerWidth < 770) {
    for(let i = 0; i < WORLD_GRID_ROWS; i++) {
      for(let j = 0; j < 20; j++) {
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
          div.classList.add('grass');
        }
        if(i > 13) {
          div.classList.add('dirt');
        }
        world.appendChild(div);
      }
    }
  }
  //! generate world for other devices
  else {
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
}

const resetWorld = () => {

  let div = document.querySelector('#world > div');

    //! generate world for mobile devices
    if(window.innerWidth < 770) {
      for(let i = 0; i < WORLD_GRID_ROWS; i++) {
        for(let j = 0; j < 20; j++) {

          div.classList = '';
    
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
            div.classList.add('grass');
          }
          if(i > 13) {
            div.classList.add('dirt');
          }

          div = div.nextElementSibling;
        }
      }
    }
    //! generate world for other devices
    else {
      for(let i = 0; i < WORLD_GRID_ROWS; i++) {
        for(let j = 0; j < WORLD_GRID_COLUMNS; j++) {

          div.classList = '';
  
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

          div = div.nextElementSibling;
        }
      }
    }
};

//! ---------------------Functions-------------------------------------------------------------------

const updateInventoryVariable = () => {
  if(variables.inventory[variables.lastRemovedBlock] == undefined) {
    variables.inventory[variables.lastRemovedBlock] = 1;
  }
  else {
    variables.inventory[variables.lastRemovedBlock] += 1;
  }
}

//* ------------------------------------------------------------------------

const addToInventory = () => {
  let lastRemovedBlock = variables.lastRemovedBlock;
  let child = inventory.firstElementChild;
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
    child = inventory.firstElementChild;
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

//* ------------------------------------------------------------------------

const removeBlockAccordingToTheTool = (target) => {
  target.classList.remove(variables.lastRemovedBlock);
  updateInventoryVariable();
  addToInventory();
}

//* ------------------------------------------------------------------------

const removeBlock = (target) => {
  if(variables.lastRemovedBlock == 'grass' || variables.lastRemovedBlock == 'dirt') {
    if(variables.selectedTool == 'shovel') {
      removeBlockAccordingToTheTool(target);
    }
  }
  if(variables.lastRemovedBlock == 'stone') {
    if(variables.selectedTool == 'pickaxe') {
      removeBlockAccordingToTheTool(target);
    }
  }
  if(variables.lastRemovedBlock == 'wood' || variables.lastRemovedBlock == 'leaves') {
    if(variables.selectedTool == 'axe') {
      removeBlockAccordingToTheTool(target);
    }
  }
}

//* ------------------------------------------------------------------------

const selectFirstTool = (target) => {
  if(target.id == '') {
    target = target.parentElement;
  }
  variables.selectedTool = target.id;
  target.classList.add('selected');
};

//* ------------------------------------------------------------------------

const updateSelectedTool = (target) => {
  if(target.id == '') {
    target = target.parentElement;
  }

  const tool = document.querySelector(`#${variables.selectedTool}`);
  tool.classList.remove('selected');
  target.classList.add('selected');
  variables.selectedTool = target.id;
};

//* ------------------------------------------------------------------------

const updateInventorySlots = () => {
  inventorySlots.forEach(slot => {
    if(slot.classList.contains(variables.lastRemovedInventoryBlock)) {
      let amount = variables.inventory[variables.lastRemovedInventoryBlock];
      if(amount == 0) {
        slot.lastElementChild.textContent = '';
        slot.classList = '';
        variables.selectedTool = '';
        return;
      }
      slot.lastElementChild.textContent = amount;
      return;
    }
  });
};

//* ------------------------------------------------------------------------

const placeBlock = (target) => {
  let amount = variables.inventory[variables.lastRemovedInventoryBlock];
  if(amount >= 0) {
    if(amount == 0) {
      target.classList = '';
      variables.inventory[variables.lastRemovedInventoryBlock] = 0;
      updateInventorySlots();
      return;
    }

    if(target.classList.length !== 1) {
      target.classList.add(variables.lastRemovedInventoryBlock);
      amount -= 1;
      variables.inventory[variables.lastRemovedInventoryBlock] = amount;
      updateInventorySlots();
    }
  }
};

//! ---------------------EventListeners-------------------------------------------------------------------
const StartEventListeners = () => {

  startBtn.addEventListener('click', () => {
    const game = document.querySelector('#game');
    game.classList = 'displayAll';
    const landingPage = document.querySelector('#landing-page');
    landingPage.classList = 'displayNone';
  });

  world.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.length == 1 && target.classList[0] !== 'cloud') {
      variables.lastRemovedBlock = target.classList[0];
      removeBlock(target);
    }

    if(variables.selectedTool === 'placingBlocks') {
      placeBlock(target);
    }
  },
  { capture: true }
  );

  //* ------------------------------------------------------------------------

  inventoryBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(!variables.inventoryToggled) {
      variables.inventoryToggled = true;
      inventory.classList.add('visible');
      inventory.classList.remove('hidden');
    }
    else {
      variables.inventoryToggled = false;
      inventory.classList.remove('visible');
      inventory.classList.add('hidden');
    }
  });

  //* ------------------------------------------------------------------------

  toolBarTools.addEventListener('click', (event) => {
    const target = event.target;

    if(variables.lastSelectedBlock !== '') {
      variables.lastSelectedBlock.classList.remove('selected');
      variables.lastSelectedBlock = '';
    }
  
    if(variables.selectedTool === 'placingBlocks') {
      selectFirstTool(target);
      return;
    }
  
    if(variables.selectedTool === '') {
      selectFirstTool(target);
      return;
    }
  
    updateSelectedTool(target);
  },
  { capture: true }
  );

  //* ------------------------------------------------------------------------

  inventory.addEventListener('click', (event) => {
    
    const target = event.target.parentElement;
    
    if(variables.lastSelectedBlock !== '' && variables.lastSelectedBlock !== target) {
      if(variables.lastSelectedBlock.classList.contains('selected')) {
        variables.lastSelectedBlock.classList.remove('selected');
      }
    }
    
    
    if(target.classList[0] === 'selected') {
      target.classList = '';
      return;
    }
    
    if(event.target.id === 'inventory' || event.target.id === 'toolBar') {
      event.target.classList.remove('selected');
      return;
    }

    if(target.classList[0] === undefined) {
      return;
    }
    
    if(variables.selectedTool !== 'placingBlocks') {
      if(variables.selectedTool !== '') {
        const tool = document.querySelector(`#${variables.selectedTool}`);
        tool.classList.remove('selected');
      }
    }
    
    variables.lastSelectedBlock = target;
    variables.lastRemovedInventoryBlock = target.classList[0];
    target.classList.add('selected');
    variables.selectedTool = 'placingBlocks';

  },
  { capture: true }
  );

  //* ------------------------------------------------------------------------

  resetBtn.addEventListener('click', () => {

    resetWorld();

    inventorySlots.forEach(slot => {
      slot.classList = '';
      slot.lastElementChild.textContent = '';
    });

    variables.inventory = {};

    if(variables.selectedTool != '' && variables.selectedTool !== 'placingBlocks') {
      const tool = document.querySelector(`#${variables.selectedTool}`);
      tool.classList.remove('selected');
    }
    
    variables.selectedTool = '';
    variables.lastRemovedBlock = '';
    variables.lastRemovedInventoryBlock = '';
    variables.inventoryToggled = false;
  });
}

const main = () => {
  createWorld();
  StartEventListeners();
}

main();