var rocky = require('rocky');

rocky.on('secondchange', function(e) {
	// When the wall time second changes, redraw the screen
	// TODO: Watch what happens if you change this to 'minutechange'!
	rocky.requestDraw();
});

rocky.on('draw', function(e) {
	// Get the screen as a CanvasRenderingContext2D
	var ctx = e.context;
	
	// Reset the canvas
	ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
	ctx.fillStyle = 'green'; // Enable Matrix-mode
	
	// Show the time in the canvas
	var time = new Date().toLocaleTimeString();
	ctx.fillText(time, 10, 10);
});
