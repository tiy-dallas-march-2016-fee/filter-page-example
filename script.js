'use strict';
if (this.FilterPage === undefined) this.FilterPage = {};

(function(context) {

  var searchValue = document.querySelector('#search-value');
  var foodList = document.querySelector('#food-list');

  var state = {
    food: [ 'Tacos', 'Shrimp', 'Steak', 'Pizza', 'Tex-Mex', 'Po-Boy', 'Hamburger', 'French-fries', 'Brisket', 'Ribs', 'Pulled-pork']
  };

  function createFoodDOMElements(list) {
    for (var item of list) {
      var li = document.createElement('li');
      li.textContent = item;

      foodList.appendChild(li);
    }
  }

  function filter(query, arr) {
    var filteredFood = [];

    for (var item of arr) {
      if (item.indexOf(query) > -1) {
        filteredFood.push(item);
      }
    }

    return filteredFood;
  }

  function keyHappened(evt) {
    var query = searchValue.value;
    var filteredFood = filter(query, state.food);

    foodList.innerHTML = '';
    createFoodDOMElements(filteredFood);
  }



  function start() {
    createFoodDOMElements(state.food);
    searchValue.addEventListener('keyup', keyHappened);
  }

  context.start = start;
  context.filter = filter;

})(window.FilterPage);
