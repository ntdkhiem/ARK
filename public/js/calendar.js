var clientId = 'YOUR_CLIENT_ID';
var apiKey = 'YOUR_API_KEY';
var scopes = 'https://www.googleapis.com/auth/calendar';

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,1);
  checkAuth();
}

function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
      handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('book');
  if (authResult) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
   }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
      {client_id: clientId, scope: scopes, immediate: false},
      handleAuthResult);
  return false;
}

function makeApiCall() {
  gapi.client.load('calendar', 'v3', function() {
    var request = gapi.client.calendar.events.list({
      'calendarId': 'a25p9c9e81uumbjtd07q39rnus@group.calendar.google.com'
    });
          
    request.execute(function(resp) {
    });
  });
}