var blessed = require('blessed')
  , program = blessed()
  , screen;

screen = new blessed.Screen({
  program: program
});

/*
screen.append(new blessed.Box({
  screen: screen,
  parent: screen,
  fg: 4,
  bg: -1,
  border: {
    type: 'ascii',
    fg: -1,
    bg: -1
  },
  content: 'Hello world!',
  width: '50%',
  height: '50%',
  top: 'center',
  left: 'center'
}));

screen.children[0].append(new blessed.Box({
  screen: screen,
  parent: screen.children[0],
  fg: 4,
  bg: 3,
  border: {
    type: 'bg',
    fg: 0,
    bg: 1,
    ch: '/'
  },
  content: 'Foobar',
  width: '50%',
  height: '50%',
  top: 'center',
  left: 'center'
}));
*/

screen.append(new blessed.List({
  screen: screen,
  parent: screen,
  fg: 4,
  bg: -1,
  border: {
    type: 'ascii',
    fg: -1,
    bg: -1
  },
  width: '50%',
  height: '50%',
  top: 'center',
  left: 'center',
  selectedBg: 2,
  items: [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
  ]
}));

screen.children[0].prepend(new blessed.Text({
  screen: screen,
  parent: screen.children[0],
  left: 2,
  content: ' My list '
}));

program.on('keypress', function(ch, key) {
  if (key.name === 'up') {
    screen.children[0].up();
    screen.render();
    return;
  } else if (key.name === 'down') {
    screen.children[0].down();
    screen.render();
    return;
  }
  if (key.name === 'escape' || key.name === 'q') {
    program.disableMouse();
    program.clear();
    program.showCursor();
    program.normalBuffer();
    return process.exit(0);
  }
});

program.alternateBuffer();
program.hideCursor();

screen.render();