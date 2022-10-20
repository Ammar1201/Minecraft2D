
const variables = {
  inventory: [],
  selectedTool: '',
  toggled: false
}

const WORLD_GRID_ROWS = 20; // this must match #world style grid-template-rows
const WORLD_GRID_COLUMNS = 30; // this must match #world style grid-template-columns

const startBtn = document.querySelector('#startBtn');
const world = document.querySelector('#world');
const toolBar = document.querySelector('#toolBar');
const inventory = document.querySelector('#inventory');
const inventoryBtn = document.querySelector('#inventoryBtn');

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

world.addEventListener('click', (event) => {
  console.log(event.target.classList);
},
{ capture: true }
);

inventoryBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if(!variables.toggled) {
    variables.toggled = true;
    inventory.classList.add('visible');
    inventory.classList.remove('hidden');
  }
  else {
    variables.toggled = false;
    inventory.classList.remove('visible');
    inventory.classList.add('hidden');
  }
});