document.querySelector('#login').addEventListener('click', () => {
  toggleLoginModal();
})


document.querySelector('#register').addEventListener('click', () => {
  toggleSignUpModal();
})


const signInWithGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    window.location = 'dashboard.html';
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    const err = {
      errorCode,
      errorMessage,
      email,
      credential
    };
    console.log(err);
  });
}


const toggleLoginModal = () => {
  const loginModal = document.querySelector('#loginModal');
  loginModal.classList.toggle('is-active')
}

const toggleSignUpModal = () => {
  const signUpModal = document.querySelector('#signUpModal');
  signUpModal.classList.toggle('is-active')
}