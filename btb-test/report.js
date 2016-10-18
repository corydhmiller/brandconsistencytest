console.log('Report page loaded.');

	// Check local storage for last project name, replace project name if one exists
	var projectName = localStorage.getItem("brandConsistencyTestProjectName");
	// Set up variables for mission, values, etc
	var brandMission = "My mission is to help brand owners get deep and profound clarity for their brands and projects in a way that helps their target audience achieve their version of success.";
	// Check to see if the fullScore of the last project was stored.
	var fullScoreVar = localStorage.getItem("brandConsistencyTestFullScore");
	// Check for stored slider values and arranged them into an array of variables
	var questionReportScore = [];

function brandConsistencyAppReport(){
	if (projectName === '') {
		$(".projectName").text("undefined");
	} else if (projectName !== null) {
		$(".projectName").text(projectName);
	} else {
		$(".projectName").text("undefined");
	}
	
	// Checks fullScoreVar for the storage content
	$("#fullScore").text(fullScoreVar);

	if (fullScoreVar === 0 || fullScore === null) {
		  $("#finalScore").addClass('lowScore');
		  $("#finalScore").removeClass('midScore goodScore highScore');
		  $("#fullScore").text('0');
	} else if (fullScoreVar > 0 && fullScoreVar < 40) {
		  $("#finalScore").addClass('lowScore');
		  $("#finalScore").removeClass('midScore goodScore highScore');
	} else if (fullScoreVar >= 40 && fullScoreVar < 60) {
		  $("#finalScore").addClass('midScore');
		  $("#finalScore").removeClass('lowScore goodScore highScore');
	} else if (fullScoreVar >= 60 && fullScoreVar < 80) {
		  $("#finalScore").addClass('goodScore');
		  $("#finalScore").removeClass('lowScore midScore highScore');
	} else if (fullScoreVar >= 80) {
		  $("#finalScore").addClass('highScore');
		  $("#finalScore").removeClass('lowscore midScore goodScore');
	}
	for (i = 1; i <= 10; i++) {
		var sliderValue = localStorage.getItem ("brandConsistencyTestSliderValue" + i);
		if(sliderValue === null) {
			sliderValue = 0;
		}
		$("#sliderValue" + i).text(sliderValue);
		questionReportScore[i] = sliderValue;
	}

	// Build out the test results
	function processTestResults(){
		// Question 1: Does it advance my mission?
		if (questionReportScore[1] >= 0 && questionReportScore[1] < 3) {
			questionReport1 = "Based on your answers, " + projectName + " doesn't advance your mission and will not bring you closer to achieving the results you want with your brand. ";
		} else if (questionReportScore[1] >= 3 && questionReportScore[1] < 5) {
			questionReport1 = "You scored 3-4 on Question 1.";
		} else if (questionReportScore[1] >= 5 && questionReportScore[1] < 7) {
			questionReport1 = "You scored 5-6 on Question 1.";
		} else if (questionReportScore[1] >= 7 && questionReportScore[1] < 9 ) {
			questionReport1 = "You scored 7-8 on Question 1.";
		} else if (questionReportScore[1] >= 9 && questionReportScore[1] <= 10) {
			questionReport1 = "Based on your answers, " + projectName + " aligns perfectly with your mission: \"" + brandMission + "\". ";
		}
		// Question 2: Does it reflect my brand values?
		if (questionReportScore[2] >= 0 && questionReportScore[2] < 3) {
			questionReport2 = "You scored 0-2 for Question 2.";
		} else if (questionReportScore[2] >= 3 && questionReportScore[2] < 5) {
			questionReport2 = "You scored 3-4 on Question 2.";
		} else if (questionReportScore[2] >= 5 && questionReportScore[2] < 7) {
			questionReport2 = "You scored 5-6 on Question 2.";
		} else if (questionReportScore[2] >= 7 && questionReportScore[2] < 9 ) {
			questionReport2 = "You scored 7-8 on Question 2.";
		} else if (questionReportScore[2] >= 9 && questionReportScore[2] <= 10) {
			questionReport2 = "You scored 9-10 on Question 2.";
		}
		// Question 3: Will it bring my target audience closer to their version of success?
		if (questionReportScore[3] >= 0 && questionReportScore[3] < 3) {
			questionReport3 = "You scored 0-2 for Question 3.";
		} else if (questionReportScore[3] >= 3 && questionReportScore[3] < 5) {
			questionReport3 = "You scored 3-4 on Question 3.";
		} else if (questionReportScore[3] >= 5 && questionReportScore[3] < 7) {
			questionReport3 = "You scored 5-6 on Question 3.";
		} else if (questionReportScore[3] >= 7 && questionReportScore[3] < 9 ) {
			questionReport3 = "You scored 7-8 on Question 3.";
		} else if (questionReportScore[3] >= 9 && questionReportScore[3] <= 10) {
			questionReport3 = "You scored 9-10 on Question 3.";
		}
		// Question 4: Will it bring me closer to my brand goals?
		if (questionReportScore[4] >= 0 && questionReportScore[4] < 3) {
			questionReport4 = "You scored 0-2 for Question 4.";
		} else if (questionReportScore[4] >= 3 && questionReportScore[4] < 5) {
			questionReport4 = "You scored 3-4 on Question 4.";
		} else if (questionReportScore[4] >= 5 && questionReportScore[4] < 7) {
			questionReport4 = "You scored 5-6 on Question 4.";
		} else if (questionReportScore[4] >= 7 && questionReportScore[4] < 9 ) {
			questionReport4 = "You scored 7-8 on Question 4.";
		} else if (questionReportScore[4] >= 9 && questionReportScore[4] <= 10) {
			questionReport4 = "You scored 9-10 on Question 4.";
		}
		// Question 5: Will it bring me closer to my version of success?
		if (questionReportScore[5] >= 0 && questionReportScore[5] < 3) {
			questionReport5 = "You scored 0-2 for Question 5.";
		} else if (questionReportScore[5] >= 3 && questionReportScore[5] < 5) {
			questionReport5 = "You scored 3-4 on Question 5.";
		} else if (questionReportScore[5] >= 5 && questionReportScore[5] < 7) {
			questionReport5 = "You scored 5-6 on Question 5.";
		} else if (questionReportScore[5] >= 7 && questionReportScore[5] < 9 ) {
			questionReport5 = "You scored 7-8 on Question 5.";
		} else if (questionReportScore[5] >= 9 && questionReportScore[5] <= 10) {
			questionReport5 = "You scored 9-10 on Question 5.";
		}
		// Question 6: Does it match my brand style, aesthetic, and/or visual presentation?
		if (questionReportScore[6] >= 0 && questionReportScore[6] < 3) {
			questionReport6 = "You scored 0-2 for Question 6.";
		} else if (questionReportScore[6] >= 3 && questionReportScore[6] < 5) {
			questionReport6 = "You scored 3-4 on Question 6.";
		} else if (questionReportScore[6] >= 5 && questionReportScore[6] < 7) {
			questionReport6 = "You scored 5-6 on Question 6.";
		} else if (questionReportScore[6] >= 7 && questionReportScore[6] < 9 ) {
			questionReport6 = "You scored 7-8 on Question 6.";
		} else if (questionReportScore[6] >= 9 && questionReportScore[6] <= 10) {
			questionReport6 = "You scored 9-10 on Question 6.";
		}
		// Question 7: Will it be simple for my target audience to understand?
		if (questionReportScore[7] >= 0 && questionReportScore[7] < 3) {
			questionReport7 = "You scored 0-2 for Question 7.";
		} else if (questionReportScore[7] >= 3 && questionReportScore[7] < 5) {
			questionReport7 = "You scored 3-4 on Question 7.";
		} else if (questionReportScore[7] >= 5 && questionReportScore[7] < 7) {
			questionReport7 = "You scored 5-6 on Question 7.";
		} else if (questionReportScore[7] >= 7 && questionReportScore[7] < 9 ) {
			questionReport7 = "You scored 7-8 on Question 7.";
		} else if (questionReportScore[7] >= 9 && questionReportScore[7] <= 10) {
			questionReport7 = "You scored 9-10 on Question 7.";
		}
		// Question 8: Is it something I can sell, or use for the purpose of selling something else?
		if (questionReportScore[8] >= 0 && questionReportScore[8] < 3) {
			questionReport8 = "You scored 0-2 for Question 8.";
		} else if (questionReportScore[8] >= 3 && questionReportScore[8] < 5) {
			questionReport8 = "You scored 3-4 on Question 8.";
		} else if (questionReportScore[8] >= 5 && questionReportScore[8] < 7) {
			questionReport8 = "You scored 5-6 on Question 8.";
		} else if (questionReportScore[8] >= 7 && questionReportScore[8] < 9 ) {
			questionReport8 = "You scored 7-8 on Question 8.";
		} else if (questionReportScore[8] >= 9 && questionReportScore[8] <= 10) {
			questionReport8 = "You scored 9-10 on Question 8.";
		}
		// Question 9: Will it improve the perception my target audience has about my brand?
		if (questionReportScore[9] >= 0 && questionReportScore[9] < 3) {
			questionReport9 = "You scored 0-2 for Question 9.";
		} else if (questionReportScore[9] >= 3 && questionReportScore[9] < 5) {
			questionReport9 = "You scored 3-4 on Question 9.";
		} else if (questionReportScore[9] >= 5 && questionReportScore[9] < 7) {
			questionReport9 = "You scored 5-6 on Question 9.";
		} else if (questionReportScore[9] >= 7 && questionReportScore[9] < 9 ) {
			questionReport9 = "You scored 7-8 on Question 9.";
		} else if (questionReportScore[9] >= 9 && questionReportScore[9] <= 10) {
			questionReport9 = "You scored 9-10 on Question 9.";
		}
		// Question 10: Is it related to the things I’m already doing in my brand?
		if (questionReportScore[10] >= 0 && questionReportScore[10] < 3) {
			questionReport10 = "You scored 0-2 for Question 10.";
		} else if (questionReportScore[10] >= 3 && questionReportScore[10] < 5) {
			questionReport10 = "You scored 3-4 on Question 10.";
		} else if (questionReportScore[10] >= 5 && questionReportScore[10] < 7) {
			questionReport10 = "You scored 5-6 on Question 10.";
		} else if (questionReportScore[10] >= 7 && questionReportScore[10] < 9 ) {
			questionReport10 = "You scored 7-8 on Question 10.";
		} else if (questionReportScore[10] >= 9 && questionReportScore[10] <= 10) {
			questionReport10 = "You scored 9-10 on Question 10.";
		}

		// Spit out the Results
		
		$("#questionReport1").text(questionReport1);
		$("#questionReport2").text(questionReport2);
		$("#questionReport3").text(questionReport3);
		$("#questionReport4").text(questionReport4);
		$("#questionReport5").text(questionReport5);
		$("#questionReport6").text(questionReport6);
		$("#questionReport7").text(questionReport7);
		$("#questionReport8").text(questionReport8);
		$("#questionReport9").text(questionReport9);
		$("#questionReport10").text(questionReport10);

	}
	 processTestResults();

	// Run this at the very end to see if they've even taken the test yet.
	if (projectName === '') {
		$("#reportContent").html('It doesn\'t look like you\'ve taken the test yet! <a href="http://behindthebrand.com/consistencytest">Click here to take the test first.</a>');
	} else if (projectName !== null) {
		// Do nothing
	} else {
		$("#reportContent").html('It doesn\'t look like you\'ve taken the test yet! <a href="http://behindthebrand.com/consistencytest">Click here to take the test first.</a>');
	}
	// Remove Loading message and make content available
	$("#loadingMessage").toggle();
	$("#reportContent").toggle();
}
