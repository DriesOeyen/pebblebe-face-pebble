var rocky = require('rocky');
var next_event;

rocky.on('minutechange', function(e) {
	// When the wall time minute changes, redraw the screen
	rocky.requestDraw();
});

rocky.on('daychange', function(e) {
	// On launch and when a new day starts, fetch the next event from Meetup through the phone
	rocky.postMessage({cmd: 'fetch'});
});

rocky.on('message', function(e) {
	// Grab the next event, then redraw the screen
	next_event = e.data;
	rocky.requestDraw();
});

rocky.on('draw', function(e) {
	// Get the screen as a CanvasRenderingContext2D
	var ctx = e.context;
	
	// Reset the canvas
	ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
	
	// Calculate some metrics
	var w = ctx.canvas.unobstructedWidth;
	var w_third = w/3;
	var h = ctx.canvas.unobstructedHeight;
	var cx = w/2;
	var cy = h/2;
	
	var flag_stroke = 10;
	var hand_stroke = 8;
	var hand_length_m = (Math.min(w, h) / 2) - (flag_stroke * 2);
	var hand_length_h = hand_length_m * 2 / 3;
	var center_radius = 10;
	
	var color_white = 'white';
	var color_black = 'black';
	var color_yellow = 'chromeyellow';
	var color_red = 'darkcandyapplered';
	
	// Draw Belgian flag border
	drawRect(ctx, color_black, 0, 0, w_third, h);
	drawRect(ctx, color_yellow, w_third, 0, w_third, h);
	drawRect(ctx, color_red, 2 * w_third, 0, w_third, h);
	drawRect(ctx, color_white, flag_stroke, flag_stroke, w - 2 * flag_stroke, h - 2 * flag_stroke); // Drawn on top
	
	// If applicable, draw next event info (under hands)
	if (next_event) {
		var event_name = next_event.name.substr(0, 30) + "…";
		var event_date = new Date(next_event.time).toLocaleDateString();
		var event_date_height = ctx.measureText(event_date).height;
		ctx.fillStyle = color_red;
		ctx.textAlign = 'center';
		ctx.fillText(event_name, cx, 2 * flag_stroke, w - 4 * flag_stroke);
		ctx.fillText(event_date, cx, h - event_date_height - 2 * flag_stroke, w - 4 * flag_stroke);
	}
	
	// Draw hands
	var d = new Date();
	var fraction_m = d.getMinutes() / 60;
	var fraction_h = (d.getHours() % 12 + fraction_m) / 12;
	var angle_m = fraction_m * 2 * Math.PI;
	var angle_h = fraction_h * 2 * Math.PI;
	drawHand(ctx, color_black, cx, cy, angle_m, hand_length_m, hand_stroke);
	drawHand(ctx, color_black, cx, cy, angle_h, hand_length_h, hand_stroke);
	drawCircle(ctx, color_yellow, cx, cy, center_radius);
});

function drawRect(ctx, color, x, y, w, h) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}

function drawCircle(ctx, color, cx, cy, r) {
	ctx.fillStyle = color;
	ctx.rockyFillRadial(cx, cy, 0, r, 0, 2 * Math.PI);
}

function drawHand(ctx, color, cx, cy, angle, length, w) {
	// Determine hand's end coordinates	
	var x = cx + Math.sin(angle) * length;
	var y = cy - Math.cos(angle) * length;
	
	// Draw line
	ctx.strokeStyle = color;
	ctx.lineWidth = w;
	ctx.beginPath();
	ctx.moveTo(cx, cy);
	ctx.lineTo(x, y);
	ctx.stroke();
}
