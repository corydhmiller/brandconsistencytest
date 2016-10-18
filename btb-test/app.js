function brandConsistencyApp(){
	console.log('App loaded.');
	
	// Set version
	var appVersion = 1.29;
	console.log("Version " + appVersion);
	$('#appVersion').text('v. ' + appVersion);
}

// Function for a link to show or hide an element
function showHide(divName, element, moreText, lessText) {
  var $element = $(element);
  $("#" + divName).toggle(400);
  var text = $element.text() === moreText ? lessText : moreText;
  $element.text(text);
}