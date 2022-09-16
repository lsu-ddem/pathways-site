// Scripts added by Tate Carson 2018
/****
    Password protection
  */
//already logged in?
if (Cookies.get('login')) {
  $('.teacher').show()
  console.log('logged in already')
}
function logout() {
  Cookies.remove('login');
  $('.teacher').hide()
  console.log('logout')
}

function validatePass() {
  //set password
  var hashed = md5(document.getElementById('password').value) == "098f6bcd4621d373cade4e832627b4f6";
  if (hashed) {
    Cookies.set('login', true);
    $('.teacher').show()
  } else {
    alert('Incorrect password, please try again.')
  }
}

/****
  Choosing content
*/
function isChecked() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checked = [];
  checkboxes.forEach((checkbox, i) => {
    if (checkbox.checked) {
      checked[i] = checkbox.value;
    }
  })
  //remove empty elements
  return checked.filter(String)
}

function setUrlString() {
  let url = new URL(window.location + 'iframe/index.html');
  let params = new URLSearchParams(url.search.slice(1));

  //set url for each checked box
  isChecked().forEach(checked => {
    params.set(checked, true)
  })

  const aTag = document.getElementById("url-string");
  aTag.setAttribute('href', url + '?' + params.toString());
  aTag.target = "_blank";
  aTag.innerText = url + '?' + params.toString();
}

//remove checks and link
function clearLessons() {
  $('input:checkbox').removeAttr('checked')
  $('#url-string')[0].innerText = '';
}