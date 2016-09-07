var meetup_api_key = null;

Pebble.on('message', function(e) {
	var cmd = e.data.cmd;
	if (cmd === 'fetch') {
		if (meetup_api_key === null) {
			console.log("Couldn't fetch data from Meetup. No API key set.");
			console.log("Please get your Meetup API key and paste it into the variable meetup_api_key.");
			console.log("Get your API key at: https://secure.meetup.com/meetup_api/key");
		} else {
			fetchNextMeetup(meetup_api_key);
		}
	}
});

function fetchNextMeetup(api_key) {
	// Fetch next event from Meetup API
	var url = 'https://api.meetup.com/PebbleBE?key=' + api_key;
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		// Send next event to watch
		var response_json = JSON.parse(this.responseText);
		var next_event = response_json.next_event;
		if (next_event === undefined) {
			next_event = null; // No planned events
		}
		Pebble.postMessage(next_event);
	};
	xhr.open('GET', url);
	xhr.send();
}
