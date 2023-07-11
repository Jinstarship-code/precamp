const menuHome = () => {
  document.getElementById("contentFrame").setAttribute("src", "home.html");
  document.getElementById("menuHome").style =
    "color : black; backgroud-color : white";
  document.getElementById("menuGame").style =
    "color : white; backgroud-color : #298eb5";
  document.getElementById("menuJukebox").style =
    "color : white; backgroud-color : #298eb5";
};

const menuJukebox = () => {
  document.getElementById("contentFrame").setAttribute("src", "jukebox.html");
  document.getElementById("menuJukebox").style =
    "color : black; backgroud-color : white";
  document.getElementById("menuGame").style =
    "color : white; backgroud-color : #298eb5";
  document.getElementById("menuHome").style =
    "color : white; backgroud-color : #298eb5";
};

const menuGame = () => {
  document.getElementById("contentFrame").setAttribute("src", "game.html");
  document.getElementById("menuGame").style =
    "color : black; backgroud-color : white";
  document.getElementById("menuJukebox").style =
    "color : white; backgroud-color : #298eb5";
  document.getElementById("menuHome").style =
    "color : white; backgroud-color : #298eb5";
};
