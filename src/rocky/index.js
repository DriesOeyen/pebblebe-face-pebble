var rocky = require('rocky');

rocky.on('draw', function(e) {
	// Get the screen as a CanvasRenderingContext2D
	var ctx = e.context;
	
	// Show some text in the canvas
	ctx.fillText("Hello Belgium!", 10, 10);
});
