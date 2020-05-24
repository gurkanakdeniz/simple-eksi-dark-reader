whitesmoker();
setTimeout(initListener, 500);

function initListener() {
  var wsl = document.getElementsByTagName("a");

  for (var i = 0; i < wsl.length; i++) {
    wsl[i].addEventListener("click", dark);
  }
}

function dark() {
  setTimeout(whitesmoker, 100);
}

function whitesmoker() {
  document.body.style.backgroundColor = "#3c3c3c";
  document.body.style.color = "whitesmoke";

  var elems = document.getElementsByTagName("header");

  for (var i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = "#3c3c3c";
    elems[i].style.color = "whitesmoke";
  }

  elems = document.getElementsByTagName("a");

  for (var i = 0; i < elems.length; i++) {
    elems[i].style.color = "whitesmoke";
  }

  elems = document.getElementsByClassName("url");

  for (var i = 0; i < elems.length; i++) {
    elems[i].style.color = "#81c14b";
  }
}
