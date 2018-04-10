    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBjDYr-uMxfOaR7KRqW7jPCxktvTQQ_vSk",
      authDomain: "fundmusic-50a23.firebaseapp.com",
      databaseURL: "https://fundmusic-50a23.firebaseio.com",
      projectId: "fundmusic-50a23",
      storageBucket: "fundmusic-50a23.appspot.com",
      messagingSenderId: "1045208187162"
    };
    firebase.initializeApp(config);
    
$('#buttonGoogle').click(function(e){
  e.preventDefault();
  authGoogle();
})
function authGoogle(){
  var provider = new firebase.auth.GoogleAuthProvider(); 
  authentication(provider);
}

function authentication(provider){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(result);

  }).catch(function(error) {
    console.log(error);

    var errorCode = error.code;
    console.log(errorCode);
    var errorMessage = error.message;
    console.log(errorMessage);
    var email = error.mail;
    console.log(email);
    var credential = error.credential;
    console.log(credential);

});

};