<?php
get_header('required');

global $thereShallBeNoFooter;
$thereShallBeNoFooter = true;
?>
<link rel="stylesheet" type="text/css" media="all" href="http://seanwes.com/wp-content/themes/seanwes/btb-test/style.css">
<script type="text/javascript" src="http://seanwes.com/wp-content/themes/seanwes/btb-test/app.js"></script>
<script type="text/javascript" src="http://seanwes.com/wp-content/themes/seanwes/btb-test/report.js"></script>
<script>
$(document).ready(function() {
	brandConsistencyApp();
	brandConsistencyAppReport();
});
</script>

<div class="pageDarkHeader ">
    <div class="row">
        <div class="ten">               
            <h2>Consistency Report</h2>
            <h4 style="text-transform: capitalize;">"<span class="projectName">Loading...</span>"</h4>
            <h4 id="finalScore">Total Score: <span id="fullScore">loading score...</span></h4>
            
        </div>
    </div>
</div>

<div class="row">
	<h2 id="loadingMessage">Loading report...</h2>
    <div id="reportContent" class="eight ml-two">
    <p>This is a custom report based on your answers to the Brand Consistency Test and is designed to determine if <strong><span class="projectName"></span></strong> is consistent with your brand direction, goals, and values, and if it will be beneficial for you and your target audience in the long run.</p>

<h2 id="mainProjectName" class="projectName"></h2>


<div class="reportSection"><p><strong>1. Does <span class="projectName">it</span> advance my mission?</strong></p>
<p>Score: <span id="sliderValue1"></span></p>
<p><span id="questionReport1"></span></p>
</div>

<div class="reportSection"><p><strong>2. Does <span class="projectName">it</span> reflect my brand values?</strong></p>
<p>Score: <span id="sliderValue2"></span></p>
<p><span id="questionReport2"></span></p>
</div>

<div class="reportSection"><p><strong>3. Will <span class="projectName">it</span> bring my target audience closer to their version of success?</strong></p>
<p>Score: <span id="sliderValue3"></span></p>
<p><span id="questionReport3"></span></p>
</div>

<div class="reportSection"><p><strong>4. Will <span class="projectName">it</span> bring me closer to my brand goals?</strong></p>
<p>Score: <span id="sliderValue4"></span></p>
<p><span id="questionReport4"></span></p>
</div>

<div class="reportSection"><p><strong>5. Will <span class="projectName">it</span> bring me closer to my version of success?</strong></p>
<p>Score: <span id="sliderValue5"></span></p>
<p><span id="questionReport5"></span></p>
</div>

<div class="reportSection"><p><strong>6. Does <span class="projectName">it</span> match my brand style, aesthetic, and/or visual presentation?</strong></p>
<p>Score: <span id="sliderValue6"></span></p>
<p><span id="questionReport6"></span></p>
</div>

<div class="reportSection"><p><strong>7. Will <span class="projectName">it</span> be simple for my target audience to understand?</strong></p>
<p>Score: <span id="sliderValue7"></span></p>
<p><span id="questionReport7"></span></p>
</div>

<div class="reportSection"><p><strong>8. Is <span class="projectName">it</span> something I can sell, or use for the purpose of selling something else?</strong></p>
<p>Score: <span id="sliderValue8"></span></p>
<p><span id="questionReport8"></span></p>
</div>

<div class="reportSection"><p><strong>9. Will <span class="projectName">it</span> improve the perception my target audience has about my brand?</strong></p>
<p>Score: <span id="sliderValue9"></span></p>
<p><span id="questionReport9"></span></p>
</div>

<div class="reportSection"><p><strong>10. Is <span class="projectName">it</span> related to the things I’m already doing in my brand?</strong></p>
<p>Score: <span id="sliderValue10"></span></p>
<p><span id="questionReport10"></span></p>
</div>



    </div>
</div>


    <?php get_footer(); ?>