import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "regenerator-runtime/runtime.js";
var ProgressBar = require("progressbar.js");
window.loadBar = function onLoad(json) {
  const obj = JSON.parse(json);
  const v = obj.value || 100;
  const dur = obj.duration || 1000;
  const per = v / 100;
  var circle = new ProgressBar.Circle("#container", {
    color: "#FCB03C",
    duration: dur,
    strokeWidth: 10,
    easing: "easeInOut",
    trailWidth: 25,
    text: {
      value: 100,
    },
  });

  circle.animate(per);
};
