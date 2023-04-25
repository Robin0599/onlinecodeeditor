var htmlEditor = ace.edit("html");
htmlEditor.setTheme("ace/theme/twilight");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.resize();
htmlEditor.setHighlightActiveLine(false);

var cssEditor = ace.edit("css");
cssEditor.setTheme("ace/theme/twilight");
cssEditor.session.setMode("ace/mode/css");
cssEditor.resize();
cssEditor.setHighlightActiveLine(false);

var jsEditor = ace.edit("js");
jsEditor.setTheme("ace/theme/twilight");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.resize();
jsEditor.setHighlightActiveLine(false);

function compiler() {
  var htmlValue = htmlEditor.getValue();
  var cssValue = cssEditor.getValue();
  var jsValue = jsEditor.getValue();
  var result = document.getElementById("result").contentWindow.document;

  result.open();
  result.writeln(
    "<style>" +
    cssValue +
    "</style>" +
    htmlValue +
    "<script>" +
    jsValue +
    "</script>"
  );
  result.close();
}

var allButtons = document.querySelectorAll("#button-wrapper button");
var allPanels = document.querySelectorAll("#ide-container .panel-wrapper");

function switchPanel(panelIndex) {
  if(window.matchMedia('only screen and (max-width: 780px)').matches){
    switcher(panelIndex);
  }
}
if(window.matchMedia('only screen and (max-width: 780px)').matches){
  switchPanel(0);
}

function runEdit(panelIndex) {
  if(window.matchMedia('only screen and (max-width: 780px)').matches){
    switcher(panelIndex);
    toggle_data()
  }
  compiler();
}


function switcher(panelIndex) {
  // allButtons.forEach(function (node) {
  //   node.style.background = "";
  // });
  // allButtons[panelIndex].style.background = "#000";
  // allPanels.forEach(function (node) {
  //   node.style.display = "none";
  // });
  // allPanels[panelIndex].style.display = "block";

}

function toggle_data(){
  var test = document.querySelectorAll('#button-wrapper button');
  test.forEach(element => {
    element.addEventListener("click", function(){
      if(element.classList.contains("html_b")){
          document.getElementById("html").parentNode.style.display="block";
          document.getElementById("css").parentNode.style.display="none";
          document.getElementById("js").parentNode.style.display="none";
      }
      else if(element.classList.contains("css_b")){
        document.getElementById("css").parentNode.style.display="block";
        document.getElementById("html").parentNode.style.display="none";
        document.getElementById("js").parentNode.style.display="none";
      }
      else if(element.classList.contains("js_b")){
        document.getElementById("js").parentNode.style.display="block";
        document.getElementById("html").parentNode.style.display="none";
        document.getElementById("css").parentNode.style.display="none";
      }
      
    });
  });
}

