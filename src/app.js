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

main.on('click', function(e) {
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