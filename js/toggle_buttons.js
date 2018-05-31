var gdpr_accept_button = document.getElementById('gdpr-accept-cookies');
var gdpr_decline_button = document.getElementById('gdpr-decline-cookies');

if(has_consent > 0) {
  if(gdpr_accept_button) {
    gdpr_accept_button.style.display = "none";
  }
} else {
  if(gdpr_decline_button) {
    gdpr_decline_button.style.display = "none";
  }
}

function gdpr_accept_cookies() {
  document.cookie = "has_consent=2";
  location.reload(); 
}

function gdpr_decline_cookies() {
  document.cookie = "has_consent=0";
  location.reload(); 
}
