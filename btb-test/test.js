console.log('Test page loaded.');

// Check local storage for last project name, replace project name if one exists
	var projectName = localStorage.getItem("brandConsistencyTestProjectName");
	// Initializes fullScore at 0.
	var fullScore = 0;
	// Check to see if the fullScore of the last project was stored.
	
	var fullScoreVar = localStorage.getItem("brandConsistencyTestFullScore")

// A function to manage the projectNameClass array
function setProjectName(nameValue) {
	if (projectName === '') {
		$(".projectName").text("undefined");
		return;
	} else if (projectName !== null) {
		$(".projectName").text(nameValue);
		projectName = nameValue;
		return;
	} else {
		return;
	}
}


// Reset Project Values
function resetValues() {
	// Set slider values and scores to 0
	for (var i = 1; i <= 10; i++) {
		$("#q" + i + "Score").text('0');
		localStorage.removeItem("brandConsistencyTestSliderValue" + i);
    }
    // Change the project name throughout the page
    setProjectName("it");
	$("#mainProjectName").text('');
	localStorage.removeItem("brandConsistencyTestProjectName");
	// Zero out the full score
	$("#fullScore").text('0');
	localStorage.removeItem("brandConsistencyTestFullScore");
	// Change the main score message at the bottom
	$("#mainMessage").text('Move any slider to get started!');
	$("#finalScore").addClass('lowScore');
	$("#finalScore").removeClass('midScore goodScore highScore');
	// Reset the score indicator at the bottom
	$("#scoreIndicator").css('left', "0%");
	$("#scoreIndicatorShadow").css('left', "0%");
}

function brandConsistencyAppTest(){
	
	// Set initial slider values to 0
	for (var i = 1; i <= 10; i++) {
		$("#slider" + i).val(0);
		$("#q" + i + "Score").text('0');
		// Check for stored slider values. If they exist, change the values on the page.
		var sliderValue = localStorage.getItem ("brandConsistencyTestSliderValue" + i);

		if (sliderValue !== null) {
			$("#slider" + i).val(sliderValue);
			$("#q" + i + "Score").text(sliderValue);
		} 
	}
	
	if (fullScoreVar !== null) {
		$("#fullScore").text(fullScoreVar);
		$("#scoreIndicator").css('left', fullScoreVar + '%');
		$("#scoreIndicatorShadow").css('left', fullScoreVar + '%');
	} else {
		$("#fullScore").text('0');
		$("#scoreIndicator").css('left', '0%');
		$("#scoreIndicatorShadow").css('left', '0%');
	}
	// Returns full score based on slider values, so you can add how many you want.
	function getFullScore() {
		fullScore = 0;
		$('.rangeValue').each(function() {
		  fullScore = parseInt(fullScore) + parseInt($(this).val());
		});
		return fullScore;
	}

	// If storage has a project name, insert it into all the places
	if (projectName !== '') {
		$("#projectNameActive").val(projectName);
		$("#mainProjectName").text(projectName);
		setProjectName(projectName);
	}

	// Handles the messages and score content.
	function handleDivs() {
		if (getFullScore() === 0) {
			$("#mainMessage").text('Move any slider to get started!');
			$("#finalScore").addClass('lowScore');
			$("#finalScore").removeClass('midScore goodScore highScore');
		} else if (getFullScore() > 0 && getFullScore() < 40) {
			$("#mainMessage").text(' There\'s no easy way to say this: this is not a good idea. It is either not worth your time or simply will not help you achieve your goals.');
			$("#finalScore").addClass('lowScore');
			$("#finalScore").removeClass('midScore goodScore highScore');
		} else if (getFullScore() >= 40 && getFullScore() < 60) {
			$("#mainMessage").text('You probably should rethink this and give it some more time. Don’t rush into things, but don\'t throw it out just yet. You may be on to something.');
			$("#finalScore").addClass('midScore');
			$("#finalScore").removeClass('lowScore goodScore highScore');
		} else if (getFullScore() >= 60 && getFullScore() < 80) {
			$("#mainMessage").text('This is pretty consistent with your goals, just make sure the first four questions have very high scores before moving forward.');
			$("#finalScore").addClass('goodScore');
			$("#finalScore").removeClass('lowScore midScore highScore');
		} else if (getFullScore() >= 80) {
			$("#mainMessage").text('Go for it! This is something that will really benefit your audience, customers, and your overall brand.');
			$("#finalScore").addClass('highScore');
			$("#finalScore").removeClass('lowScore midScore goodScore');
		} 
	}

	// Executes handleDivs whenever you change a slider
	$('.rangeValue').on("change", function() {
		handleDivs();
		$("#fullScore").text(getFullScore());
		
		$("#scoreIndicator").css('left', getFullScore() + '%');
		$("#scoreIndicatorShadow").css('left', getFullScore() + '%');
		localStorage.setItem("brandConsistencyTestFullScore", getFullScore());
		// Dynamically change the score value on each question
		for (var i = 1; i <= 10; i++) {
			$("#q" + i + "Score").text($("#slider" + i).val());
	        localStorage.setItem("brandConsistencyTestSliderValue" + i, $("#slider" + i).val());
	    }
	});

	// Checks if there are any variables already and loads them into the chamber
	handleDivs();

	// When entering the name into the input, dynamically change the name on the page
	$('#projectNameActive').on('input',function(e){
		if ($(this).val() === '') {
			setProjectName("it");
		} else {
			setProjectName($('#projectNameActive').val());
		}
		$("#mainProjectName").text($('#projectNameActive').val());

		localStorage.setItem("brandConsistencyTestProjectName", $(this).val());
	});

	// Remove Loading message and make content available
	$("#loadingMessage").toggle();
	$("#testContent").toggle();
	$("#messageContainer").toggle();
}