

<!DOCTYPE html>
<html>
<head>
	<title>Hiragana Tutor</title>
	<link rel="stylesheet" type="text/css" href="jap.css">

<script
  src="http://code.jquery.com/jquery-3.4.0.min.js"
  integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg="
  crossorigin="anonymous"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1//jquery.min.js"></script>
<script type="text/javascript" src="japjs.js"></script>
</head>
<body>
	<div id="main">
   <div id="banner">
	<img id="banimg"src="hirbanner.jpg" style="height: 100px;width: 1000px;">
	<span id="logreg">
	<p id="loglink">Login</p>
	<p id="reglink">Register</p>
	<p id="name"></p>
	<a href="jap.php" id="logout" style="display: none;">Logout</a>
	</span>
	</div>
	<div>
	<table> 

		<tbody>
			<tr id="r1">
				<td><button class="buttons"id="testRow1Btn"  >Study Row 1</button></td>
				<td style="text-align: center;">
					<img id="1"src="Hiragana_a/a.jpg" onclick="letterSound('a')"  class="gif" >
					<p style="text-align: center;">a</p>
				</td>
				<td style="text-align: center;">
					<img id="2"src="Hiragana_chi/chi.jpg" onclick="letterSound('chi')"  class="gif">
					<p style="text-align: center;">chi</p>
				</td>
				<td style="text-align: center;">
					<img id="3"src="Hiragana_e/e.jpg" onclick="letterSound('e')"  class="gif">
					<p style="text-align: center;">e</p>
				</td>
				<td style="text-align: center;">
					<img id="4" src="Hiragana_fu/fu.jpg" onclick="letterSound('fu')"  class="gif">
					<p style="text-align: center;">fu</p>
				</td>
				<td style="text-align: center;">
					<img id="5"src="Hiragana_ha/ha.jpg" onclick="letterSound('ha')" class="gif">

					<p style="text-align: center;">ha</p>
				</td>
				<td style="text-align: center;">
					<img id="6"src="Hiragana_he/he.jpg" onclick="letterSound('he')"  class="gif">
					<p style="text-align: center;">he</p>
				</td>
				<td style="text-align: center;">
					<img id="7"src="Hiragana_hi/hi.jpg" onclick="letterSound('hi')" class="gif">
					<p style="text-align: center;">hi</p>
				</td>
			</tr>
			<tr id="r2">
				<td><button id="testRow2Btn"class="buttons"  >Study Row 2</button></td>
				<td style="text-align: center;">
					<img id="8"src="Hiragana_ho/ho.jpg" onclick="letterSound('ho')"  class="gif">
					<p style="text-align: center;">ho</p>
				</td>
				<td style="text-align: center;">
					<img id="9"src="Hiragana_i/i.jpg" onclick="letterSound('i')"  class="gif">
					<p style="text-align: center;">i</p>
				</td>
				<td style="text-align: center;">
					<img id="10"src="Hiragana_ka/ka.jpg" onclick="letterSound('ka')"  class="gif">
					<p style="text-align: center;">ka</p>
				</td>
				<td style="text-align: center;">
					<img id="11"src="Hiragana_ke/ke.jpg" onclick="letterSound('ke')"  class="gif">
					<p style="text-align: center;">ke</p>
				</td>
				<td style="text-align: center;">
					<img id="12"src="Hiragana_ki/ki.jpg" onclick="letterSound('ki')" class="gif">
					<p style="text-align: center;">ki</p>
				</td>
				<td style="text-align: center;">
					<img id="13"src="Hiragana_ko/ko.jpg" onclick="letterSound('ko')"  class="gif">
					<p style="text-align: center;">ko</p>
				</td>
				<td style="text-align: center;">
					<img id="14"src="Hiragana_ku/ku.jpg" onclick="letterSound('ku')" class="gif">
					<p style="text-align: center;">ku</p>
				</td>
			</tr>
			<tr id="r3">
				<td><button id="testRow3Btn"class="buttons"  >Study Row 3</button></td>
				<td style="text-align: center;">
					<img id="15" src="Hiragana_ma/ma.jpg" onclick="letterSound('ma')"  class="gif">
					<p style="text-align: center;">ma</p>
				</td>
				<td style="text-align: center;">
					<img id="16" src="Hiragana_me/me.jpg" onclick="letterSound('me')"  class="gif">
					<p style="text-align: center;">me</p>
				</td>
				<td style="text-align: center;">
					<img id="17" src="Hiragana_mi/mi.jpg" onclick="letterSound('mi')"  class="gif">
					<p style="text-align: center;">mi</p>
				</td>
				<td style="text-align: center;">
					<img id="18" src="Hiragana_mo/mo.jpg" onclick="letterSound('mo')"  class="gif">
					<p style="text-align: center;">mo</p>
				</td>
				<td style="text-align: center;">
					<img id="19" src="Hiragana_mu/mu.jpg" onclick="letterSound('mu')" class="gif">
					<p style="text-align: center;">mu</p>
				</td>
				<td style="text-align: center;">
					<img id="20" src="Hiragana_n/n.jpg" onclick="letterSound('n')"  class="gif">
					<p style="text-align: center;">n</p>
				</td>
				<td style="text-align: center;">
					<img id="21" src="Hiragana_na/na.jpg" onclick="letterSound('na')" class="gif">
					<p style="text-align: center;">na</p>
				</td>
			</tr>
			<tr id="r4">
				<td><button id="testRow4Btn" class="buttons"   >Study Row 4</button></td>
				<td style="text-align: center;">
					<img id="22" src="Hiragana_ne/ne.jpg" onclick="letterSound('ne')"  class="gif">
					<p style="text-align: center;">ne</p>
				</td>
				<td style="text-align: center;">
					<img id="23" src="Hiragana_ni/ni.jpg" onclick="letterSound('ni')"  class="gif">
					<p style="text-align: center;">ni</p>
				</td>
				<td style="text-align: center;">
					<img id="24" src="Hiragana_no/no.jpg" onclick="letterSound('no')"  class="gif">
					<p style="text-align: center;">no</p>
				</td>
				<td style="text-align: center;">
					<img id="25" src="Hiragana_nu/nu.jpg" onclick="letterSound('nu')"  class="gif">
					<p style="text-align: center;">nu</p>
				</td>
				<td style="text-align: center;">
					<img id="26" src="Hiragana_o/o.jpg" onclick="letterSound('o')" class="gif">
					<p style="text-align: center;">o</p>
				</td>
				<td style="text-align: center;">
					<img id="27" src="Hiragana_ra/ra.jpg" onclick="letterSound('ra')"  class="gif">
					<p style="text-align: center;">ra</p>
				</td>
				<td style="text-align: center;">
					<img id="28" src="Hiragana_re/re.jpg" onclick="letterSound('re')" class="gif">
					<p style="text-align: center;">re</p>
				</td>
			</tr>
			<tr id="r5">
				<td><button id="testRow5Btn" class="buttons"  >Study Row 5</button></td>
				<td style="text-align: center;">
					<img id="29" src="Hiragana_ri/ri.jpg" onclick="letterSound('ri')"  class="gif">
					<p style="text-align: center;">ri</p>
				</td>
				<td style="text-align: center;">
					<img id="30" src="Hiragana_ro/ro.jpg" onclick="letterSound('ro')"  class="gif">
					<p style="text-align: center;">ro</p>
				</td>
				<td style="text-align: center;">
					<img id="31" src="Hiragana_ru/ru.jpg" onclick="letterSound('ru')"  class="gif">
					<p style="text-align: center;">ru</p>
				</td>
				<td style="text-align: center;">
					<img id="32" src="Hiragana_sa/sa.jpg" onclick="letterSound('sa')"  class="gif">
					<p style="text-align: center;">sa</p>
				</td>
				<td style="text-align: center;">
					<img id="33" src="Hiragana_se/se.jpg" onclick="letterSound('se')" class="gif">
					<p style="text-align: center;">se</p>
				</td>
				<td style="text-align: center;">
					<img id="34" src="Hiragana_shi/shi.jpg" onclick="letterSound('shi')"  class="gif">
					<p style="text-align: center;">shi</p>
				</td>
				<td style="text-align: center;">
					<img id="35" src="Hiragana_so/so.jpg" onclick="letterSound('so')" class="gif">
					<p style="text-align: center;">so</p>
				</td>
			</tr>
			<tr id="r6">
				<td><button id="testRow6Btn" class="buttons"  >Study Row 6</button></td>
				<td style="text-align: center;">
					<img id="36" src="Hiragana_su/su.jpg" onclick="letterSound('su')"  class="gif">
					<p style="text-align: center;">su</p>
				</td>
				<td style="text-align: center;">
					<img id="37" src="Hiragana_ta/ta.jpg" onclick="letterSound('ta')"  class="gif">
					<p style="text-align: center;">ta</p>
				</td>
				<td style="text-align: center;">
					<img id="38" src="Hiragana_te/te.jpg" onclick="letterSound('te')"  class="gif">
					<p style="text-align: center;">te</p>
				</td>
				<td style="text-align: center;">
					<img id="39" src="Hiragana_to/to.jpg" onclick="letterSound('to')" class="gif">
					<p style="text-align: center;">to</p>
				</td>
				<td style="text-align: center;">
					<img id="40" src="Hiragana_tsu/tsu.jpg" onclick="letterSound('tsu')"  class="gif">
					<p style="text-align: center;">tsu</p>
				</td>
				<td style="text-align: center;">
					<img id="41" src="Hiragana_u/u.jpg" onclick="letterSound('u')" class="gif">
					<p style="text-align: center;">u</p>
				</td>
				<td style="text-align: center;">
					<img id="42" src="Hiragana_wa/wa.jpg" onclick="letterSound('wa')"  class="gif">
					<p style="text-align: center;">wa</p>
				</td>
			</tr>
			<tr id="r7">
				<td><button id="testRow7Btn" class="buttons"  >Study Row 7</button></td>
				
				<td style="text-align: center;">
					<img id="43" src="Hiragana_wo/wo.jpg" onclick="letterSound('wo')"  class="gif">
					<p style="text-align: center;">wo</p>
				</td>
				<td style="text-align: center;">
					<img id="44" src="Hiragana_ya/ya.jpg" onclick="letterSound('ya')"  class="gif">
					<p style="text-align: center;">ya</p>
				</td>
				<td style="text-align: center;">
					<img id="45" src="Hiragana_yo/yo.jpg" onclick="letterSound('yo')"  class="gif">
					<p style="text-align: center;">yo</p>
				</td>
				<td style="text-align: center;">
					<img id="46" src="Hiragana_yu/yu.jpg" onclick="letterSound('yu')" class="gif">
					<p style="text-align: center;">yu</p>
				</td>
				<td>
					<button id="progressBtn" style="display: none;">Toggle Progress</button>
				</td>
				<td>
					<a href="https://commons.wikimedia.org/wiki/Category:Hiragana_stroke_order_(animated_image_set)">Images and Gifs</a>
				</td>
				<td>
					<a href="http://www.guidetojapanese.org/learn/grammar/hiragana">Audio for each gif</a>
				</td>

			</tr>
		
		</tbody>
	</table>


	
</div>
</div>
<div class="buttonsS1">
<button id="back1" class="hidden1">Back</button>
<button id="test1" class="hidden1">Test Yourself</button>
<button id="timedTest1"class="hidden1" onclick="randomQ15()">Timed Test</button>
<div class="stats1">
	<p id="best1"></p>
	<p id="last1"></p>
	<p id="time1"></p>
</div>
</div>



<div class="buttonsS2">
<button id="back2" class="hidden2">Back</button>
<button id="test2"class="hidden2">Test Yourself</button>
<button id="timedTest2"class="hidden2" onclick="randomQ17()">Timed Test</button>
<div class="stats2">
	<p id="best2"></p>
	<p id="last2"></p>
	<p id="time2"></p>
</div>
</div>



<div class="buttonsS3">
<button id="back3" class="hidden3">Back</button>
<button  id="test3"class="hidden3">Test Yourself</button>
<button class="hidden3">Timed Test</button>
<div class="stats3">
	<p id="best3"></p>
	<p id="last3"></p>
</div>
</div>



<div class="buttonsS4">
<button id="back4" class="hidden4">Back</button>
<button id="test4"class="hidden4">Test Yourself</button>
<button class="hidden4">Timed Test</button>
<div class="stats4">
	<p id="best4"></p>
	<p id="last4"></p>
</div>
</div>



<div class="buttonsS5">
<button id="back5" class="hidden5">Back</button>
<button id="test5"class="hidden5">Test Yourself</button>
<button class="hidden5">Timed Test</button>
<div class="stats5">
	<p id="best5"></p>
	<p id="last5"></p>
</div>
</div>



<div class="buttonsS6">
<button id="back6" class="hidden6">Back</button>
<button id="test6"class="hidden6">Test Yourself</button>
<button class="hidden6">Timed Test</button>
<div class="stats6">
	<p id="best6"></p>
	<p id="last6"></p>
</div>
</div>



<div class="buttonsS7">
<button id="back7" class="hidden7">Back</button>
<button id="test7"class="hidden7">Test Yourself</button>
<button class="hidden7">Timed Test</button>
<div class="stats7">
	<p id="best7"></p>
	<p id="last7"></p>
</div>
</div>



<div id="container" style="display: none;">
        <div id="start" onclick="randomQ()">Start Quiz!</div>
        <div id="quiz" style="display: none;">
            <div id="question"></div>
            <div id="qNum"></div>
            <div id="qImg">
            	<img id="imgQ" src="">
            </div>
            <div id="choices">
                <div class="choice" id="divA" onclick="randomQ('A')">
                	<img src=""  id="A">
                </div>
                <div class="choice" id="divB" onclick="randomQ('B')">
                	<img src=""  id="B">
                </div>
                
                <div class="choice" id="divC" onclick="randomQ('C')">
                	<img src=""  id="C">
                </div>
                <div class="choice" id="divD" onclick="randomQ('D')">
                	<img src="" id="D">
                </div>
                
            </div>
            <div id="timer">
                <div id="counter"></div>
                <div id="btimeGauge"></div>
                <div id="timeGauge"></div>
            </div>
            <div id="progress"></div>
        </div>
        <div id="scoreContainer" style="display: none"></div>
    </div>

    <div class="saveB1">
	<button class="saveOptions1" style="display: none" id="notSave1">Continue without saving</button>
	<button class="saveOptions1" style="display: none" id="save1">Save Score</button>
</div>





    <div id="container2" style="display: none;">
        <div id="start2" onclick="randomQ3()">Start Quiz!</div>
        <div id="quiz2" style="display: none;">
            <div id="question2"></div>
            <div id="qNum2"></div>
            <div id="qImg2">
            	<img id="imgQ2" src="">
            </div>
            <div id="choices2">
                <div class="choice" id="divA2" onclick="randomQ3('A')">
                	<img src=""  id="A2">
                </div>
                <div class="choice" id="divB2" onclick="randomQ3('B')">
                	<img src=""  id="B2">
                </div>
                
                <div class="choice" id="divC2" onclick="randomQ3('C')">
                	<img src=""  id="C2">
                </div>
                <div class="choice" id="divD2" onclick="randomQ3('D')">
                	<img src="" id="D2">
                </div>
                
            </div>
            <div id="timer">
                <div id="counter"></div>
                <div id="btimeGauge"></div>
                <div id="timeGauge"></div>
            </div>
            <div id="progress2"></div>
        </div>
        <div id="scoreContainer2" style="display: none"></div>

    </div>
    <div class="saveB2">
	<button class="saveOptions2" style="display: none" id="notSave2">Continue without saving</button>
	<button class="saveOptions2" style="display: none" id="save2">Save Score</button>
</div>

		<div id="container3" style="display: none;">
        <div id="start3" onclick="randomQ5()">Start Quiz!</div>
        <div id="quiz3" style="display: none;">
            <div id="question3"></div>
            <div id="qNum3"></div>
            <div id="qImg3">
            	<img id="imgQ3" src="">
            </div>
            <div id="choices3">
                <div class="choice" id="divA3" onclick="randomQ5('A')">
                	<img src=""  id="A3">
                </div>
                <div class="choice" id="divB3" onclick="randomQ5('B')">
                	<img src=""  id="B3">
                </div>
                
                <div class="choice" id="divC3" onclick="randomQ5('C')">
                	<img src=""  id="C3">
                </div>
                <div class="choice" id="divD3" onclick="randomQ5('D')">
                	<img src="" id="D3">
                </div>
                
            </div>
            <div id="timer">
                <div id="counter"></div>
                <div id="btimeGauge"></div>
                <div id="timeGauge"></div>
            </div>
            <div id="progress3"></div>
        </div>
        <div id="scoreContainer3" style="display: none"></div>
    </div>

    <div class="saveB3">
	<button class="saveOptions3" style="display: none" id="notSave3">Continue without saving</button>
	<button class="saveOptions3" style="display: none" id="save3">Save Score</button>
    </div>

		<div id="container4" style="display: none;">
        <div id="start4" onclick="randomQ7()">Start Quiz!</div>
        <div id="quiz4" style="display: none;">
            <div id="question4"></div>
            <div id="qNum4"></div>
            <div id="qImg4">
            	<img id="imgQ4" src="">
            </div>
            <div id="choices4">
                <div class="choice" id="divA4" onclick="randomQ7('A')">
                	<img src=""  id="A4">
                </div>
                <div class="choice" id="divB4" onclick="randomQ7('B')">
                	<img src=""  id="B4">
                </div>
                
                <div class="choice" id="divC4" onclick="randomQ7('C')">
                	<img src=""  id="C4">
                </div>
                <div class="choice" id="divD4" onclick="randomQ7('D')">
                	<img src="" id="D4">
                </div>
                
            </div>
            <div id="timer">
                <div id="counter"></div>
                <div id="btimeGauge"></div>
                <div id="timeGauge"></div>
            </div>
            <div id="progress4"></div>
        </div>
        <div id="scoreContainer4" style="display: none"></div>
    </div>

    <div class="saveB4">
	<button class="saveOptions4" style="display: none" id="notSave4">Continue without saving</button>
	<button class="saveOptions4" style="display: none" id="save4">Save Score</button>
    </div>

		<div id="container5" style="display: none;">
        <div id="start5" onclick="randomQ9()">Start Quiz!</div>
        <div id="quiz5" style="display: none;">
            <div id="question5"></div>
            <div id="qNum5"></div>
            <div id="qImg5">
            	<img id="imgQ5" src="">
            </div>
            <div id="choices5">
                <div class="choice" id="divA5" onclick="randomQ9('A')">
                	<img src=""  id="A5">
                </div>
                <div class="choice" id="divB5" onclick="randomQ9('B')">
                	<img src=""  id="B5">
                </div>
                
                <div class="choice" id="divC5" onclick="randomQ9('C')">
                	<img src=""  id="C5">
                </div>
                <div class="choice" id="divD5" onclick="randomQ9('D')">
                	<img src="" id="D5">
                </div>
                
            </div>
            <div id="timer">
                <div id="counter"></div>
                <div id="btimeGauge"></div>
                <div id="timeGauge"></div>
            </div>
            <div id="progress5"></div>
        </div>
        <div id="scoreContainer5" style="display: none"></div>
    </div>

    <div class="saveB5">
	<button class="saveOptions5" style="display: none" id="notSave5">Continue without saving</button>
	<button class="saveOptions5" style="display: none" id="save5">Save Score</button>
    </div>
	
	</div>
		<div id="container6" style="display: none;">
        <div id="start6" onclick="randomQ11()">Start Quiz!</div>
        <div id="quiz6" style="display: none;">
            <div id="question6"></div>
            <div id="qNum6"></div>
            <div id="qImg6">
            	<img id="imgQ6" src="">
            </div>
            <div id="choices6">
                <div class="choice" id="divA6" onclick="randomQ11('A')">
                	<img src=""  id="A6">
                </div>
                <div class="choice" id="divB6" onclick="randomQ11('B')">
                	<img src=""  id="B6">
                </div>
                
                <div class="choice" id="divC6" onclick="randomQ11('C')">
                	<img src=""  id="C6">
                </div>
                <div class="choice" id="divD6" onclick="randomQ11('D')">
                	<img src="" id="D6">
                </div>
                
            </div>
            <div id="timer">
                <div id="counter"></div>
                <div id="btimeGauge"></div>
                <div id="timeGauge"></div>
            </div>
            <div id="progress6"></div>
        </div>
        <div id="scoreContainer6" style="display: none"></div>
    </div>

    <div class="saveB6">
	<button class="saveOptions6" style="display: none" id="notSave6">Continue without saving</button>
	<button class="saveOptions6" style="display: none" id="save6">Save Score</button>
    </div>

    </div>
		<div id="container7" style="display: none;">
        <div id="start7" onclick="randomQ13()">Start Quiz!</div>
        <div id="quiz7" style="display: none;">
            <div id="question7"></div>
            <div id="qNum7"></div>
            <div id="qImg7">
            	<img id="imgQ7" src="">
            </div>
            <div id="choices7">
                <div class="choice" id="divA7" onclick="randomQ13('A')">
                	<img src=""  id="A7">
                </div>
                <div class="choice" id="divB7" onclick="randomQ13('B')">
                	<img src=""  id="B7">
                </div>
                
                <div class="choice" id="divC7" onclick="randomQ13('C')">
                	<img src=""  id="C7">
                </div>
                <div class="choice" id="divD7" onclick="randomQ13('D')">
                	<img src="" id="D7">
                </div>
                
            </div>
            <div id="timer">
                <div id="counter"></div>
                <div id="btimeGauge"></div>
                <div id="timeGauge"></div>
            </div>
            <div id="progress7"></div>
        </div>
        <div id="scoreContainer7" style="display: none"></div>
    </div>

    <div class="saveB7">
	<button class="saveOptions7" style="display: none" id="notSave7">Continue without saving</button>
	<button class="saveOptions7" style="display: none" id="save7">Save Score</button>
    </div>



<div id="container8" style="display: none;">
        <div id="start8" onclick="changeState()">Start Quiz!</div>
        <div id="quiz8" style="display: none;">
        	<p id="counter8">00:00:00</p>
            <div id="question8">
            	
            </div>
        
            <div id="qNum8"></div>
            <div id="qImg8">
            	<img id="imgQ8" src="">
            </div>
            <div id="choices8">
                <div class="choice" id="divA8" onclick="randomQ15('A')">
                	<img src=""  id="A8" >
                </div>
                <div class="choice" id="divB8" onclick="randomQ15('B')">
                	<img src=""  id="B8">
                </div>
                
                <div class="choice" id="divC8" onclick="randomQ15('C')">
                	<img src=""  id="C8">
                </div>
                <div class="choice" id="divD8" onclick="randomQ15('D')">
                	<img src="" id="D8">
                </div>
                
            </div>
            <div id="timer8">
                
                <div id="btimeGauge8"></div>
                <div id="timeGauge8"></div>
            </div>
            <div id="progress8">
            	
            </div>
        </div>
        
        <div id="scoreContainer8" style="display: none"></div>
    </div>

    <div class="saveB8">
	<button class="saveOptions8" style="display: none" id="notSave8">Continue without saving</button>
	<button class="saveOptions8" style="display: none" id="save8">Save Score</button>
</div>


<div id="container9" style="display: none;">
        <div id="start9" onclick="changeState()">Start Quiz!</div>
        <div id="quiz9" style="display: none;">
        	<p id="counter9">00:00:00</p>
            <div id="question9">
            	
            </div>
        
            <div id="qNum9"></div>
            <div id="qImg9">
            	<img id="imgQ9" src="">
            </div>
            <div id="choices9">
                <div class="choice" id="divA9" onclick="randomQ17('A')">
                	<img src=""  id="A9" >
                </div>
                <div class="choice" id="divB9" onclick="randomQ17('B')">
                	<img src=""  id="B9">
                </div>
                
                <div class="choice" id="divC9" onclick="randomQ17('C')">
                	<img src=""  id="C9">
                </div>
                <div class="choice" id="divD9" onclick="randomQ17('D')">
                	<img src="" id="D9">
                </div>
                
            </div>
            <div id="timer9">
                
                <div id="btimeGauge9"></div>
                <div id="timeGauge9"></div>
            </div>
            <div id="progress9">
            	
            </div>
        </div>
        
        <div id="scoreContainer9" style="display: none"></div>
    </div>

    <div class="saveB9">
	<button class="saveOptions9" style="display: none" id="notSave9">Continue without saving</button>
	<button class="saveOptions9" style="display: none" id="save9">Save Score</button>
</div>






<form method="post" action="jap.php">
    <div id="login" style="display: none;">
    	<img src="logicon.jpg" id="logicon" style="width: 200px; height: 200px;">
    	  <div class="loginContainer">
    <label for="uname"><b>Username</b></label>
    <input type="text" id="username" placeholder="Enter Username"  required>

    <label for="psw"><b>Password</b></label>
    <input type="password" id="password"placeholder="Enter Password"  required>

    <input type="button" value="login" id="logBtn">
    <button type="button" id="cancelLogin" class="cancelbtn">Cancel</button>
    <p id="change_link">
					Not a member yet?
					<a href="#toregister"  id="join"class="to_register">Join us</a>
				</p>
  </div>
  <p>
    	<div id="login_output"></div>
    </p>
    </div>
</form>

<div id="register" style="display: none;">
	<img src="regicon.jpg" id="regicon" style="width: 200px; height: 200px;">
    	  <div class="registerContainer">
    <label for="uname"><b>Username</b></label>
    <input type="text" id="usernameReg" placeholder="Enter Username"  required>

    <label for="psw"><b>Password</b></label>
    <input type="password" id="passwordReg"placeholder="Enter Password"  required>

    <input type="submit" value="Register" id="regBtn">
    <button type="button" id="cancelRegister" class="cancelbtn">Cancel</button>
    
</div>
<p>
    	<div id="register_output"></div>
    </p>
</div>

</body>
</html>