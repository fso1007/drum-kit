let keys = {
  'q': 'public/assets/sounds/boom.wav',
  'w': 'public/assets/sounds/clap.wav',
  'e': 'public/assets/sounds/hihat.wav',
  'r': 'public/assets/sounds/kick.wav',
  't': 'public/assets/sounds/openhat.wav', 
  'y': 'public/assets/sounds/ride.wav',
  'u': 'public/assets/sounds/snare.wav',
  'i': 'public/assets/sounds/tink.wav',
  'o': 'public/assets/sounds/tom.wav',
};

const buttons = document.querySelector('.drum__buttons-container');

// MAKE BUTTONS
const makeButtons = () => {
  for (let key in keys) {
    let div = document.createElement('button');
    div.setAttribute('class', 'drum__button');
    div.setAttribute('id', key);
    div.innerHTML = `${key}`;
    buttons.appendChild(div);
  }
};

makeButtons();

// KEYPRESS N' CLICK SOUND
const pressKey = onkeydown = (e) => {
  if (e.key in keys) {
    keyEffect(e);
    keySound(e);
  }
}; 

function keySound(e) {
  let drumKey = keys[e.key];
  let sound = new Howl({
    src: [drumKey]
  });
  sound.play();
};

function clickSound(e) {
  let target = e.target.id;
  if (target in keys) {
    clickEffect(target)
    sound = new Howl({
      src: [keys[target]]
    });
    sound.play();
  }
};

buttons.addEventListener('click', clickSound);

// KEYPRESS N' SOUND VISUAL EFFECT
let effect = [
  { transform: 'scale(.9)',
    opacity: '0.3'},
  { transform: 'scale(1.2)',
    opacity: '1.0'},
];

let timer = {
  duration: 200,
  iterations: 1,
};

function keyEffect(e) {
  let button = document.getElementById(e.key);
  button.animate(effect, timer);
};

function clickEffect(target) {
  let button = document.getElementById(target);
  button.animate(effect, timer);
};
