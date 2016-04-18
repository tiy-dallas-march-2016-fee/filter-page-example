
var food = ['Tacos', 'Shrimp', 'Steak', 'Pizza', 'Tex-Mex', 'Po-Boy', 'Hamburger', 'French-fries', 'Brisket', 'Ribs', 'Pulled-pork']

QUnit.test( 'filter with single letter', function( assert ) {
  var filtered = FilterPage.filter('s', food);
  assert.deepEqual(filtered, ['Tacos', 'French-fries', 'Brisket', 'Ribs'], 'Should have returned four results.' );
});

QUnit.test( 'filter with multiple letters', function( assert ) {
  var filtered = FilterPage.filter('ri', food);
  assert.deepEqual(filtered, ['Shrimp', 'French-fries', 'Brisket'], 'Should have returned three results.' );
});

QUnit.test( 'filter returns none', function( assert ) {
  var filtered = FilterPage.filter('w', food);
  assert.deepEqual(filtered, [], 'Should have returned no results.' );
});
