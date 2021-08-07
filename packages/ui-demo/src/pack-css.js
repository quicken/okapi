const CleanCSS = require("clean-css");
var output = new CleanCSS().minify([process.cwd() + '/public/styles/theme/ice/index.css']);
console.log(output);
console.log(process.cwd());