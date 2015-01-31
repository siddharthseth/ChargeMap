/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');



var main = new UI.Window();

var logo = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 160),
  image: 'images/chargeMapLogoSmall.png',
  backgroundColor: 'white'
});

var textTop = new UI.Text({ 
    position: new Vector2(0, 0), 
    size: new Vector2(144, 30),
    font: 'gothic-28-bold',
    text: 'ChargeMap',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white'
});

var textBottom = new UI.Text({ 
    position: new Vector2(0, 130), 
    size: new Vector2(144, 30),
    font: 'gothic-18-bold',
    text: 'GO!',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'black'
});

main.add(logo);
main.add(textTop);
main.add(textBottom);
main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
