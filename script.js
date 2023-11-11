

function shoot() {
    var div = document.getElementById("animated")
    div.style.display = "flex"
  }

function marker() {
    var div = document.getElementById("popup")
    div.style.display = "inline"
  }


function cross() {
    var p = document.getElementById("end")
    if (p.style.display === "inline") {
  } else {
    var div = document.getElementById("popup")
    div.style.display = "none"
  }
  }

