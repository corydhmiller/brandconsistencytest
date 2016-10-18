<?php
get_header('required');

global $thereShallBeNoFooter;
$thereShallBeNoFooter = true;
?>
<link rel="stylesheet" type="text/css" media="all" href="http://seanwes.com/wp-content/themes/seanwes/btb-test/style.css">
<script type="text/javascript" src="http://seanwes.com/wp-content/themes/seanwes/btb-test/app.js"></script>
<script type="text/javascript" src="http://seanwes.com/wp-content/themes/seanwes/btb-test/test.js"></script>

<script>
$(document).ready(function() {
	brandConsistencyApp();
	brandConsistencyAppTest();
});
</script>
<div class="pageDarkHeader ">
    <div class="row">
        <div class="ten">               
            <h1><?php the_title();?></h1>
            
        </div>
    </div>
</div>

<div class="row">
	<h2 id="loadingMessage">Loading test...</h2>
    <div id="testContent" class="eight ml-two">

		<p>The Brand Consistency Test a simple tool to help you evaluate if something is consistent with your brand goals and direction, and if it's beneficial to your target audience.

		</p>
		<div id="learnMore" class="hide">
			<p>You can use this tool to evaluate:</p>
			<ul>
				<li>A project</li>
				<li>A piece of content</li>
				<li>A product</li>
				<li>A new direction</li>
				<li>and more...</li>
			</ul>
			<p><strong>Use the sliders to answer each question</strong> as it pertains to what you're evaluating.</p>
			<p>If the answer to the question is "Not at all", leave the slider all the way to the left. If the answer is "Definitely", move the slider all the way to the right. If it's somewhere in-between, use your discretion to give it a score.</p>
			<p>You'll see the results live at the bottom of your screen. Make sure you <strong>answer each question as honestly as you can!</strong></p>
			<p><em>For more information on how to use this tool, listen to <a href="http://BehindtheBrand.com/49/" target="_blank">Behind the Brand e49: The Litmus Test for Brand Consistency</a>.</em></p>
		</div>
		<span class="expand" onclick="showHide('learnMore', this, 'Learn More', 'Close');">Learn More</span>

<form name="brand-consistency-test" id="brand-consistency-test" method="post" action="" />
		<header><h4>The Brand Consistency Test</h4>
			<div id="appVersion"></div>
			<label>What are you putting to the test?</label>
			<input type="text" id="projectNameActive" placeholder="type it here" />
			<input type="reset" class="grey-button" value="Start Over" onclick="resetValues();" />
		</header>

	<div class="question"><p><strong>1. Does <span class="projectName">it</span> advance my mission?</strong></p>
		<input type="range"  min="0" max="10" class="rangeValue" id="slider1" value="0" />
		<span>Not at all</span> <span class="right">Definitely</span>
		<sup>Score: <span id="q1Score">0</span></sup>
	</div>
	
    
    <div class="question"><p><strong>2. Does <span class="projectName">it</span> reflect my brand values?</strong></p>
		<input type="range"  min="0" max="10" class="rangeValue" id="slider2" value="0" />
		<span>Not at all</span> <span class="right">Definitely</span>
		<sup>Score: <span id="q2Score">0</span></sup>
	</div>
	

	<div class="question"><p><strong>3. Will <span class="projectName">it</span> bring my target audience closer to their version of success?</strong></p>
	<input type="range"  min="0" max="10" class="rangeValue" id="slider3" value="0" />
		<span>Not at all</span> <span class="right">Definitely</span>
		<sup>Score: <span id="q3Score">0</span></sup>
	</div>
    
    <div class="question"><p><strong>4. Will <span class="projectName">it</span> bring me closer to my brand goals?</strong></p>
		<input type="range"  min="0" max="10" class="rangeValue" id="slider4" value="0" />
		<span>Not at all</span> <span class="right">Definitely</span>
		<sup>Score: <span id="q4Score">0</span></sup>
	</div>

	<div class="question"><p><strong>5. Will <span class="projectName">it</span> bring me closer to my version of success?</strong></p>
		<input type="range"  min="0" max="10" class="rangeValue" id="slider5" value="0" />
		<span>Not at all</span> <span class="right">Definitely</span>
		<sup>Score: <span id="q5Score">0</span></sup>
	</div>
    
    <div class="question"><p><strong>6. Does <span class="projectName">it</span> match my brand style, aesthetic, and/or visual presentation?</strong></p>
		<input type="range"  min="0" max="10" class="rangeValue" id="slider6" value="0" />
		<span>Not at all</span> <span class="right">Definitely</span>
		<sup>Score: <span id="q6Score">0</span></sup>
	</div>

	<div class="question"><p><strong>7. Will <span class="projectName">it</span> be simple for my target audience to understand?</strong></p>
		<input type="range"  min="0" max="10" class="rangeValue" id="slider7" value="0" />
		<span>Not at all</span> <span class="right">Definitely</span>
		<sup>Score: <span id="q7Score">0</span></sup>
	</div>
    
    <div class="question"><p><strong>8. Is <span class="projectName">it</span> something I can sell, or use for the purpose of selling something else?</strong></p>
		<input type="range"  min="0" max="10" class="rangeValue" id="slider8" value="0" />
		<span>Not at all</span> <span class="right">Definitely</span>
		<sup>Score: <span id="q8Score">0</span></sup>
	</div>

	<div class="question"><p><strong>9. Will <span class="projectName">it</span> improve the perception my target audience has about my brand?</strong></p>
		<input type="range"  min="0" max="10" class="rangeValue" id="slider9" value="0" />
		<span>Not at all</span> <span class="right">Definitely</span>
		<sup>Score: <span id="q9Score">0</span></sup>
	</div>

	<div class="question"><p><strong>10. Is <span class="projectName">it</span> related to the things I’m already doing in my brand?</strong></p>
		<input type="range"  min="0" max="10" class="rangeValue" id="slider10" value="0" />
		<span>Not at all</span> <span class="right">Definitely</span>
		<sup>Score: <span id="q10Score">0</span></sup>
	</div>
</form>

    </div>
</div>

<div id="messageContainer">
	<div class="row">
		<div class="eight ml-two">
			<h4 id="mainProjectName"></h4>
			<div id="finalScore">Total score: <span id="fullScore">it</span></div>
			<div id="scoreBar">
				<div id="scoreIndicatorWrapper">
					<div id="scoreIndicator"></div>
					<div id="scoreIndicatorShadow"></div>
				</div>
				<div class="lowScoreBar"></div><div class="midScoreBar"></div><div class="goodScoreBar"></div><div class="highScoreBar">
				</div>
			</div>
			<div style="max-width:1180px; margin:10px auto 0;"><h6 class="left">Inconsistent</h6> <h6 class="right">Consistent</h6></div>
			<div id="mainMessage">loading...</div>
		</div>
	</div>
</div>

    <?php get_footer(); ?>