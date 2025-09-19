// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph');
const errorModal = document.getElementById('moddal');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      // success handling will go here later
      console.log("Server call succeeded");
    })
    .catch(()=> {
      // show the modal
      errorModal.classList.remove('hidden');

      //hide it again after 3seconds
      setTimeout(()=> {
        errorModal.classList.add('hidden');
      }, 3000);
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
