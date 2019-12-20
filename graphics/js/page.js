let textElement = document.getElementById("bottomContent");
let wrapperElement = document.getElementById("bottomPanel");

let leftPanel = document.getElementById("leftPanel");
let rightPanel = document.getElementById("rightPanel");

nodecg.listenFor('bottomMessage', (value, ack) => {

  textElement.innerHTML = "";

  let names = value.split(";");
  for (var i = 0; i < names.length; ++i) {
    let nameBox = document.createElement("H3");
    nameBox.innerHTML = names[i];
    textElement.appendChild(nameBox);
  }

  wrapperElement.classList.add("show");

  setTimeout(function() {
    wrapperElement.classList.remove("show");
  }, 10000);
});



nodecg.listenFor('leftMessage', (value, ack) => {
  let textfields = value.split(";");
  document.getElementById("leftUpper").innerHTML = textfields[0];
  if (textfields[1] != null) {
    document.getElementById("leftLower").innerHTML = textfields[1];
  }

  leftPanel.classList.add("showleft");

  setTimeout(function() {
    leftPanel.classList.remove("showleft");
  }, 10000);
});



nodecg.listenFor('rightMessage', (value, ack) => {
  let textfields = value.split(";");
  document.getElementById("rightUpper").innerHTML = textfields[0];
  if (textfields[1] != null) {
    document.getElementById("rightLower").innerHTML = textfields[1];
  }

  rightPanel.classList.add("showright");

  setTimeout(function() {
    rightPanel.classList.remove("showright");
  }, 10000);
});
