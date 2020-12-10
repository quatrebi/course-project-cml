const sass = require('sass') | require('node-sass');

sass.renderSync({
	file: "css/index,scss",
	sourceMap: true,
	outputStyle: "compressed",
	outFile: "css/index.css"
});