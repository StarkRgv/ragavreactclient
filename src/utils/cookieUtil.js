export function setCookie(cname, cvalue, exdays) {
  if (exdays === null || exdays == undefined) {
    exdays = 1;
  }
  var d = new Date();
  if (!exdays) {
    exdays = 30;
  }
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  var domain = "domain=" + process.env.REACT_APP_DOMAIN;
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;" + domain;
}

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function deleteCookie(cname) {
  document.cookie =
    cname + "= ; expires =Thu, 01 Jan 1970 00:00:00 GMT ;path=/";
}
