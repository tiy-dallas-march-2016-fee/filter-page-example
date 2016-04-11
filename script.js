var searchValue = document.querySelector('#search-value');
var foodList = document.querySelector('#food-list');

var food = [
  'Tacos',
  'Shrimp',
  'Steak',
  'Pizza',
  'Tex-Mex',
  'Po-Boy',
  'Hamburger',
  'French-fries',
  'Brisket',
  'Ribs',
  'Pulled-pork'
];

function createFoodDOMElements(list) {
  for (var item of list) {
    var li = document.createElement('li');
    li.textContent = item;

    foodList.appendChild(li);
  }
}

createFoodDOMElements(food);

function keyHappened(evt) {

  var query = searchValue.value;

  var filteredFood = [];
  for (var item of food) {
    if (item.indexOf(query) > -1) {
      filteredFood.push(item);
    }
  }

  foodList.innerHTML = '';
  createFoodDOMElements(filteredFood);

}

searchValue.addEventListener('keyup', keyHappened);
