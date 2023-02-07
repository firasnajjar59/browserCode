let htmlA = document.getElementById("htmlA");
let displayWeb = document.getElementById("div2");
let script1 = document.getElementById("script");
let script2 = document.getElementById("scriptA");
let style1 = document.getElementById("style");
let style2 = document.getElementById("styleA");

document.addEventListener("load", getsavedhtml());
document.addEventListener("load", getsavedcss());
document.addEventListener("load", getsavedjs());

document.addEventListener("load", html());
document.addEventListener("load", styleCss());
document.addEventListener("load", script());

function html() {
  displayWeb.innerHTML = htmlA.value;
  // console.log(htmlA.value);
}
function styleCss() {
  style1.innerText = style2.value;
  // console.log(style2.value);
}
function script() {
  script1.innerText = script2.value;
  // console.log(script2.value);
}
function getsavedhtml() {
  let saveJs = localStorage.getItem("html");
  if (saveJs == null) {
    localStorage.setItem(
      "html",
      `<button id="btn" onclick="hi()">Firas note code :)</button>`
    );
  }
  // console.log(saveJs);
  htmlA.value = localStorage.getItem("html");
}
function getsavedcss() {
  let saveJs = localStorage.getItem("css");
  if (saveJs == null) {
    localStorage.setItem(
      "css",
      `#btn{
            background-color: white;
            color: black;
            border: 3px solid black;
            padding: 1rem 3rem;
            margin: 5rem;
        }
        #btn:hover{
            background-color: black;
            color:white;
        }`
    );
  }
  style2.value = localStorage.getItem("css");
  // console.log(saveJs)
}
function getsavedjs() {
  let saveJs = localStorage.getItem("js");
  if (saveJs == null) {
    localStorage.setItem(
      "js",
      `function hi(){
            alert("hiiiii");
        }`
    );
  }
  // console.log(saveJs);
  script2.value = localStorage.getItem("js");
}
function save() {
  localStorage.setItem("html", htmlA.value);
  localStorage.setItem("css", style2.value);
  localStorage.setItem("js", script2.value);
  location.reload();
}
function clr() {
  localStorage.removeItem("html");
  localStorage.removeItem("css");
  localStorage.removeItem("js");
  location.reload();
}
