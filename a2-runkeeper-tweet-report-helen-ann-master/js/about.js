function parseTweets(runkeeper_tweets) {
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) {
		window.alert('No tweets returned');
		return;
	}

	tweet_array = runkeeper_tweets.map(function(tweet) {
		const tweetsDate = new Date(tweet.created_at);

		const formatDate = tweetsDate.toLocaleDateString('en-us', {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"

		});

		tweet.created_at = formateDate;

		return new Tweet(tweet.text, tweet.created_at);
	});

	tweet_array.sort(function(a,b) {
		const sorting = new Date(a.created_at) - new Date(b.created_at);
		return sorting;
	})

	console.log("hello hi");

	//sort the dates
	//new document get element byID blah
	
	//This line modifies the DOM, searching for the tag with the numberTweets ID and updating the text.
	//It works correctly, your task is to update the text of the other tags in the HTML file!
	const earliestDate = tweet_array[0];
	const latestDate = tweet_array[tweet_array.length()];

	document.getElementById('numberTweets').innerText = tweet_array.length;	
	document.getElementById('firstDate').innerText = earliestDate;
	document.getElementById('lastDate').innerText = latestDate;

	// document.getElementById('firstDate').innerText;
	// document.getElementById('lastDate').innerText;
	
}

//Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function (event) {
	loadSavedRunkeeperTweets().then(parseTweets);
});