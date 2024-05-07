var index = 0;

function changeColors() {
  var colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "orange",
    "black",
    "grey",
    "brown",
  ];
  document.getElementsByTagName("body")[0].style.background = colors[index++];
  if (index > colors.length - 1) index = 0;
}
