const keys = document.querySelector('#keys');

/* ------------------------------------------------------------------- */
/* Function */
/* ------------------------------------------------------------------- */

const play = key => {
   const sound = document.querySelector(`audio[data-key="${key}"]`);

   if(!sound) return;

   // Rewind the sound
   sound.currentTime = 0;

   // Play the sound
   sound.play();
};

/* ------------------------------------------------------------------- */
/* Event Listeners */
/* ------------------------------------------------------------------- */

// When mouse is used
keys.addEventListener('click', e => {
   
   play(e.target.dataset.key);

});

// When keyboard is used
window.addEventListener('keydown', e => {
   
   play(e.code);

});