    // row 1 audio 
     var a = new Audio('Hiragana_a/a.mp3');
     var chi = new Audio('Hiragana_chi/chi.mp3');
     var e = new Audio('Hiragana_e/e.mp3');
     var fu = new Audio('Hiragana_fu/fu.mp3');
     var ha = new Audio('Hiragana_ha/ha.mp3');
     var he = new Audio('Hiragana_he/he.mp3');
     var hi = new Audio('Hiragana_hi/hi.mp3');
     // row 2 audio 
     var ho = new Audio('Hiragana_ho/ho.mp3');
     var i = new Audio('Hiragana_i/i.mp3');
     var ka = new Audio('Hiragana_ka/ka.mp3');
     var ke = new Audio('Hiragana_ke/ke.mp3');
     var ki = new Audio('Hiragana_ki/ki.mp3');
     var ko = new Audio('Hiragana_ko/ko.mp3');
     var ku = new Audio('Hiragana_ku/ku.mp3');
     // row 3 audio 
     var ma = new Audio('Hiragana_ma/ma.mp3');
     var me = new Audio('Hiragana_me/me.mp3');
     var mi = new Audio('Hiragana_mi/mi.mp3');
     var mo = new Audio('Hiragana_mo/mo.mp3');
     var mu = new Audio('Hiragana_mu/mu.mp3');
     var n = new Audio('Hiragana_n/n.mp3');
     var na = new Audio('Hiragana_na/na.mp3');
     // row 4 audio 
     var ne = new Audio('Hiragana_ne/ne.mp3');
     var ni = new Audio('Hiragana_ni/ni.mp3');
     var no = new Audio('Hiragana_no/no.mp3');
     var nu = new Audio('Hiragana_nu/nu.mp3');
     var o = new Audio('Hiragana_o/o.mp3');
     var ra = new Audio('Hiragana_ra/ra.mp3');
     var re = new Audio('Hiragana_re/re.mp3');
     // row 5 audio 
     var ri = new Audio('Hiragana_ri/ri.mp3');
     var ro = new Audio('Hiragana_ro/ro.mp3');
     var ru = new Audio('Hiragana_ru/ru.mp3');
     var sa = new Audio('Hiragana_sa/sa.mp3');
     var se = new Audio('Hiragana_se/se.mp3');
     var shi = new Audio('Hiragana_shi/shi.mp3');
     var so = new Audio('Hiragana_so/so.mp3');
     // row 6 audio 
     var su = new Audio('Hiragana_su/su.mp3');
     var ta = new Audio('Hiragana_ta/ta.mp3');
     var te = new Audio('Hiragana_te/te.mp3');
     var to = new Audio('Hiragana_to/to.mp3');
     var tsu = new Audio('Hiragana_tsu/tsu.mp3');
     var u = new Audio('Hiragana_u/u.mp3');
     var wa = new Audio('Hiragana_wa/wa.mp3');
     // row 7 audio
     var wo = new Audio('Hiragana_wo/wo.mp3');
     var ya = new Audio('Hiragana_ya/ya.mp3');
     var yo = new Audio('Hiragana_yo/yo.mp3');
     var yu = new Audio('Hiragana_yu/yu.mp3');

     function letterSound(letter) {
         if(letter == 'a') {
             a.play();
         } else if(letter == 'chi') {
             chi.play();
         } else if(letter == 'e') {
             e.play();
         } else if(letter == 'fu') {
             fu.play();
         } else if(letter == 'ha') {
             ha.play();
         } else if(letter == 'he') {
             he.play();
         } else if(letter == 'hi') {
             hi.play();
         } else if(letter == 'ho') {
             ho.play();
         } else if(letter == 'i') {
             i.play();
         } else if(letter == 'ka') {
             ka.play();
         } else if(letter == 'ke') {
             ke.play();
         } else if(letter == 'ki') {
             ki.play();
         } else if(letter == 'ko') {
             ko.play();
         } else if(letter == 'ku') {
             ku.play();
         } else if(letter == 'ma') {
             ma.play();
         } else if(letter == 'me') {
             me.play();
         } else if(letter == 'mi') {
             mi.play();
         } else if(letter == 'mo') {
             mo.play();
         } else if(letter == 'mu') {
             mu.play();
         } else if(letter == 'n') {
             n.play();
         } else if(letter == 'na') {
             na.play();
         } else if(letter == 'ne') {
             ne.play();
         } else if(letter == 'ni') {
             ni.play();
         } else if(letter == 'no') {
             no.play();
         } else if(letter == 'nu') {
             nu.play();
         } else if(letter == 'o') {
             o.play();
         } else if(letter == 'ra') {
             ra.play();
         } else if(letter == 're') {
             re.play();
         } else if(letter == 'ri') {
             ri.play();
         } else if(letter == 'ro') {
             ro.play();
         } else if(letter == 'ru') {
             ru.play();
         } else if(letter == 'sa') {
             sa.play();
         } else if(letter == 'se') {
             se.play();
         } else if(letter == 'shi') {
             shi.play();
         } else if(letter == 'so') {
             so.play();
         } else if(letter == 'su') {
             su.play();
         } else if(letter == 'ta') {
             ta.play();
         } else if(letter == 'te') {
             te.play();
         } else if(letter == 'to') {
             to.play();
         } else if(letter == 'tsu') {
             tsu.play();
         } else if(letter == 'u') {
             u.play();
         } else if(letter == 'wa') {
             wa.play();
         } else if(letter == 'wo') {
             wo.play();
         } else if(letter == 'ya') {
             ya.play();
         } else if(letter == 'yo') {
             yo.play();
         } else if(letter == 'yu') {
             yu.play();
         } 
     }

//play gif if hover 
    $(document).ready(function()
{
    $(".gif").hover(
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.jpg$/i, ".gif"));
        },
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.gif$/i, ".jpg"));
        });
});

//if logged in
 var loggedIn = false;

 //screen number
 var quiz = 0;

//random variables generated later 
 var ran, ran2, ran3, ran4, ran5, ran6, ran7, ran8, ran9, ran10, ran11, ran12, ran13, ran14, ran15, ran16, ran17, ran18;
 //array to keep track of what questions have been asked during each quiz so questions are not asked twice
 var Qs1 = [false, false, false, false, false, false, false];
 var Qs1r = [false, false, false, false, false, false, false];
 var Qs2 = [false, false, false, false, false, false, false];
 var Qs2r = [false, false, false, false, false, false, false];
 var Qs3 = [false, false, false, false, false, false, false];
 var Qs3r = [false, false, false, false, false, false, false];
 var Qs4 = [false, false, false, false, false, false, false];
 var Qs4r = [false, false, false, false, false, false, false];
 var Qs5 = [false, false, false, false, false, false, false];
 var Qs5r = [false, false, false, false, false, false, false];
 var Qs6 = [false, false, false, false, false, false, false];
 var Qs6r = [false, false, false, false, false, false, false];
 var Qs7 = [false, false, false, false];
 var Qs7r = [false, false, false, false];

 //stored questions 
 var kanaQs = ["Which kana letter corresponds to the romaji 'a'", 
               "Which kana letter corresponds to the romaji 'chi'", 
               "Which kana letter corresponds to the romaji 'e'", 
               "Which kana letter corresponds to the romaji 'fu'", 
               "Which kana letter corresponds to the romaji 'ha'", 
               "Which kana letter corresponds to the romaji 'he'", 
               "Which kana letter corresponds to the romaji 'hi'", 
               "Which romaji corresponds to the kana letter shown?"];

  var kanaQs2 = ["Which kana letter corresponds to the romaji 'ho'", 
                "Which kana letter corresponds to the romaji 'i'", 
                "Which kana letter corresponds to the romaji 'ka'", 
                "Which kana letter corresponds to the romaji 'ke'", 
                "Which kana letter corresponds to the romaji 'ki'", 
                "Which kana letter corresponds to the romaji 'ko'", 
                "Which kana letter corresponds to the romaji 'ku'", 
                "Which romaji corresponds to the kana letter shown?"];

 var kanaQs3 = ["Which kana letter corresponds to the romaji 'ma'", 
                "Which kana letter corresponds to the romaji 'me'",
                "Which kana letter corresponds to the romaji 'mi'", 
                "Which kana letter corresponds to the romaji 'mo'", 
                "Which kana letter corresponds to the romaji 'mu'", 
                "Which kana letter corresponds to the romaji 'n'", 
                "Which kana letter corresponds to the romaji 'na'", 
                "Which romaji corresponds to the kana letter shown?"];

   var kanaQs4 = ["Which kana letter corresponds to the romaji 'ne'", 
                  "Which kana letter corresponds to the romaji 'ni'", 
                  "Which kana letter corresponds to the romaji 'no'", 
                  "Which kana letter corresponds to the romaji 'nu'", 
                  "Which kana letter corresponds to the romaji 'o'", 
                  "Which kana letter corresponds to the romaji 'ra'",
                  "Which kana letter corresponds to the romaji 're'", 
                  "Which romaji corresponds to the kana letter shown?"];

 var kanaQs5 = ["Which kana letter corresponds to the romaji 'ri'", 
                "Which kana letter corresponds to the romaji 'ro'",
                "Which kana letter corresponds to the romaji 'ru'", 
                "Which kana letter corresponds to the romaji 'sa'", 
                "Which kana letter corresponds to the romaji 'se'",
                "Which kana letter corresponds to the romaji 'shi'", 
                "Which kana letter corresponds to the romaji 'so'", 
                "Which romaji corresponds to the kana letter shown?"];


 var kanaQs6 = ["Which kana letter corresponds to the romaji 'su'",
                "Which kana letter corresponds to the romaji 'ta'",
                "Which kana letter corresponds to the romaji 'te'", 
                "Which kana letter corresponds to the romaji 'to'", 
                "Which kana letter corresponds to the romaji 'tsu'", 
                "Which kana letter corresponds to the romaji 'u'", 
                "Which kana letter corresponds to the romaji 'wa'", 
                "Which romaji corresponds to the kana letter shown?"];

var kanaQs7 = ["Which kana letter corresponds to the romaji 'wo'", 
                "Which kana letter corresponds to the romaji 'ya'", 
                "Which kana letter corresponds to the romaji 'yo'", 
                "Which kana letter corresponds to the romaji 'yu'", 
                "Which romaji corresponds to the kana letter shown?"];

//stored images of hiragana letters
var romajiQs = ["Hiragana_a/a.jpg", "Hiragana_chi/chi.jpg", "Hiragana_e/e.jpg", "Hiragana_fu/fu.jpg", "Hiragana_ha/ha.jpg", "Hiragana_he/he.jpg", "Hiragana_hi/hi.jpg"];
var romajiQs2 = ["Hiragana_ho/ho.jpg", "Hiragana_i/i.jpg", "Hiragana_ka/ka.jpg", "Hiragana_ke/ke.jpg", "Hiragana_ki/ki.jpg", "Hiragana_ko/ko.jpg", "Hiragana_ku/ku.jpg"];
var romajiQs3 = ["Hiragana_ma/ma.jpg", "Hiragana_me/me.jpg", "Hiragana_mi/mi.jpg", "Hiragana_mo/mo.jpg","Hiragana_mu/mu.jpg", "Hiragana_n/n.jpg", "Hiragana_na/na.jpg"];
var romajiQs4 = ["Hiragana_ne/ne.jpg", "Hiragana_ni/ni.jpg", "Hiragana_no/no.jpg", "Hiragana_nu/nu.jpg","Hiragana_o/o.jpg", "Hiragana_ra/ra.jpg", "Hiragana_re/re.jpg"];
var romajiQs5 = ["Hiragana_ri/ri.jpg", "Hiragana_ro/ro.jpg", "Hiragana_ru/ru.jpg", "Hiragana_sa/sa.jpg", "Hiragana_se/se.jpg", "Hiragana_shi/shi.jpg", "Hiragana_so/so.jpg"];
var romajiQs6 = ["Hiragana_su/su.jpg", "Hiragana_ta/ta.jpg", "Hiragana_te/te.jpg", "Hiragana_to/to.jpg", "Hiragana_tsu/tsu.jpg", "Hiragana_u/u.jpg", "Hiragana_wa/wa.jpg"];
var romajiQs7 = ["Hiragana_su/su.jpg", "Hiragana_ta/ta.jpg", "Hiragana_te/te.jpg", "Hiragana_to/to.jpg"];

//variables used to count final score in each quiz
var numQsAsked=0;
var correctAns = 0, savedAns = 0;
var numQsAsked2=0;
var correctAns2 = 0, savedAns2 = 0;
var numQsAsked3=0;
var correctAns3 = 0, savedAns3 = 0;
var numQsAsked4=0;
var correctAns4 = 0, savedAns4 = 0;
var numQsAsked5=0;
var correctAns5 = 0, savedAns5 = 0;
var numQsAsked6=0;
var correctAns6 = 0, savedAns6 = 0;
var numQsAsked7=0;
var correctAns7 = 0, savedAns7 = 0;
var numQsAsked8 =0, correctAns8=0, savedAns8=0;
var numQsAsked9 =0, correctAns9=0, savedAns9=0;


//arrays to track ad update database for which letters have been learned to display with the toggle button
 var letters1 = [false, false, false, false, false, false, false];
 var letters2 = [false, false, false, false, false, false, false];
 var letters3 = [false, false, false, false, false, false, false];
 var letters4 = [false, false, false, false, false, false, false];
 var letters5 = [false, false, false, false, false, false, false];
 var letters6 = [false, false, false, false, false, false, false];
 var letters7 = [false, false, false, false];

//array to represent each letter for toggle
 var letToggle = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//method to produce first 5 random questions in quiz 1
function randomQ(answer){

if(numQsAsked<5){
        
    
    //conditionals to check for correct answers
    if(ran==0&&answer=='A'){
        correctAns++;
        letters1[0]=true;
    }
    else if(ran==1&&answer=='C'){
        correctAns++;
        letters1[2]=true;
    }
    else if(ran==2&&answer=='D'){
        correctAns++;
        letters1[3]=true;
    }
    else if(ran==3&&answer=='D'){
        correctAns++;
        letters1[4]=true;
    }
    else if(ran==4&&answer=='B'){
        correctAns++;
        letters1[5]=true;
    }
    else if(ran==5&&answer=='B'){
        correctAns++;
        letters1[6]=true;
    }
    else if(ran==6&&answer=='A'){
        correctAns++;
        letters1[7]=true;
    }
    
    //random num generated to pick a random question 
    ran = Math.floor(Math.random() * 7);
    //if question already asked try again
    if(Qs1[ran])
        randomQ();

    numQsAsked++;
    document.getElementById("qNum").innerHTML = "Question "+ (numQsAsked);
    document.getElementById("progress").innerHTML = correctAns;
    document.getElementById("question").innerHTML = kanaQs[ran];
    
    //answer options provided for each question  
    if(ran==0){

        document.getElementById("A").src = "Hiragana_a/a.jpg";
        document.getElementById("B").src = "Hiragana_fu/fu.jpg";
        document.getElementById("C").src = "Hiragana_hi/hi.jpg";
        document.getElementById("D").src = "Hiragana_chi/chi.jpg";
    }
    else if(ran==1){
        document.getElementById("A").src = "Hiragana_hi/hi.jpg";
        document.getElementById("B").src = "Hiragana_e/e.jpg";
        document.getElementById("C").src = "Hiragana_chi/chi.jpg";
        document.getElementById("D").src = "Hiragana_he/he.jpg";
    }
    else if(ran==2){
        document.getElementById("A").src = "Hiragana_fu/fu.jpg";
        document.getElementById("B").src = "Hiragana_a/a.jpg";
        document.getElementById("C").src = "Hiragana_ha/ha.jpg";
        document.getElementById("D").src = "Hiragana_e/e.jpg";
    }
    else if(ran==3){
        document.getElementById("A").src = "Hiragana_e/e.jpg";
        document.getElementById("B").src = "Hiragana_chi/chi.jpg";
        document.getElementById("C").src = "Hiragana_a/a.jpg";
        document.getElementById("D").src = "Hiragana_fu/fu.jpg";
    }
    else if(ran==4){
        document.getElementById("A").src = "Hiragana_chi/chi.jpg";
        document.getElementById("B").src = "Hiragana_ha/ha.jpg";
        document.getElementById("C").src = "Hiragana_hi/hi.jpg";
        document.getElementById("D").src = "Hiragana_a/a.jpg";
    }
    else if(ran==5){
        document.getElementById("A").src = "Hiragana_ha/ha.jpg";
        document.getElementById("B").src = "Hiragana_he/he.jpg";
        document.getElementById("C").src = "Hiragana_e/e.jpg";
        document.getElementById("D").src = "Hiragana_chi/chi.jpg";
    }
    else if(ran==6){
        document.getElementById("A").src = "Hiragana_hi/hi.jpg";
        document.getElementById("B").src = "Hiragana_a/a.jpg";
        document.getElementById("C").src = "Hiragana_ha/ha.jpg";
        document.getElementById("D").src = "Hiragana_e/e.jpg";
    }
Qs1[ran]=true;
}
else{
    randomQ2(answer);
}

}
//method to provide last 5 questions of quiz 1
function randomQ2(answer){
    if(numQsAsked<10){

if(ran2==0&&answer=='C'){
        correctAns++;
        letters1[0]=true;
    }
    else if(ran2==1&&answer=='C'){
        correctAns++;
        letters1[1]=true;
    }
    else if(ran2==2&&answer=='A'){
        correctAns++;
        letters1[2]=true;
    }
    else if(ran2==3&&answer=='B'){
        correctAns++;
        letters1[3]=true;
    }
    else if(ran2==4&&answer=='D'){
        correctAns++;
        letters1[4]=true;
    }
    else if(ran2==5&&answer=='A'){
        correctAns++;
        letters1[5]=true;
    }
    else if(ran2==6&&answer=='B'){
        correctAns++;
        letters1[6]=true;
    }

ran2 = Math.floor(Math.random() * 7);

if(Qs1r[ran2])
        randomQ2();
numQsAsked++;
document.getElementById("qNum").innerHTML = "Question "+ (numQsAsked);
    document.getElementById("progress").innerHTML = correctAns;
    
document.getElementById("question").innerHTML = kanaQs[7];
document.getElementById("imgQ").src = romajiQs[ran2];

if(ran2==0){
    document.getElementById("divA").innerHTML = 'e';
    document.getElementById("divB").innerHTML = 'fu';
    document.getElementById("divC").innerHTML = 'a';
    document.getElementById("divD").innerHTML = 'hi';
}
else if(ran2==1){
    document.getElementById("divA").innerHTML = 'a';
    document.getElementById("divB").innerHTML = 'he';
    document.getElementById("divC").innerHTML = 'chi';
    document.getElementById("divD").innerHTML = 'e';
}
else if(ran2==2){
    document.getElementById("divA").innerHTML = 'e';
    document.getElementById("divB").innerHTML = 'chi';
    document.getElementById("divC").innerHTML = 'he';
    document.getElementById("divD").innerHTML = 'fu';
}
else if(ran2==3){
    document.getElementById("divA").innerHTML = 'hi';
    document.getElementById("divB").innerHTML = 'fu';
    document.getElementById("divC").innerHTML = 'he';
    document.getElementById("divD").innerHTML = 'hi';
}
else if(ran2==4){
    document.getElementById("divA").innerHTML = 'a';
    document.getElementById("divB").innerHTML = 'chi';
    document.getElementById("divC").innerHTML = 'e';
    document.getElementById("divD").innerHTML = 'ha';
}
else if(ran2==5){
    document.getElementById("divA").innerHTML = 'he';
    document.getElementById("divB").innerHTML = 'e';
    document.getElementById("divC").innerHTML = 'a';
    document.getElementById("divD").innerHTML = 'chi';
}
else if(ran2==6){
    document.getElementById("divA").innerHTML = 'chi';
    document.getElementById("divB").innerHTML = 'hi';
    document.getElementById("divC").innerHTML = 'he';
    document.getElementById("divD").innerHTML = 'fu';
}

Qs1r[ran2]=true;
}

//if quiz is over 
else if(numQsAsked>=10){

    //display score element
    document.getElementById("scoreContainer").style.display = "block";

    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * correctAns/10);
//updates score element 
    document.getElementById("scoreContainer").innerHTML = "<p>Your Score: "+ scorePerCent +"%</p>";
     document.getElementById("notSave1").style.display = "inline-block";
     document.getElementById("save1").style.display = " inline-block";

     savedAns = correctAns;
//resets if you want to try quiz again 
         correctAns=0;
    for(i=0;i<7;i++){
        Qs1[i]=false;
        Qs1r[i]=false;
    }

}
}

function randomQ3(answer){

if(numQsAsked2<5){
        
    
    if(ran3==0&&answer=='B'){
        correctAns2++;
        letters2[0]=true;
    }
    else if(ran3==1&&answer=='C'){
        correctAns2++;
        letters2[1]=true;
    }
    else if(ran3==2&&answer=='A'){
        correctAns2++;
        letters2[2]=true;
    }
    else if(ran3==3&&answer=='A'){
        correctAns2++;
        letters2[3]=true;
    }
    else if(ran3==4&&answer=='D'){
        correctAns2++;
        letters2[4]=true;
    }
    else if(ran3==5&&answer=='D'){
        correctAns2++;
        letters2[5]=true;
    }
    else if(ran3==6&&answer=='A'){
        correctAns2++;
        letters2[6]=true;
    }
    
    
    ran3 = Math.floor(Math.random() * 7);
    
    if(Qs2[ran3])
        randomQ3();
    numQsAsked2++;
    document.getElementById("question2").innerHTML = kanaQs2[ran3];
    document.getElementById("qNum2").innerHTML = "Question "+ (numQsAsked2);
    document.getElementById("progress2").innerHTML = correctAns2;
    if(ran3==0){

        document.getElementById("A2").src = "Hiragana_i/i.jpg";
        document.getElementById("B2").src = "Hiragana_ho/ho.jpg";
        document.getElementById("C2").src = "Hiragana_ko/ko.jpg";
        document.getElementById("D2").src = "Hiragana_ka/ka.jpg";
    }
    else if(ran3==1){
        document.getElementById("A2").src = "Hiragana_ki/ki.jpg";
        document.getElementById("B2").src = "Hiragana_ku/ku.jpg";
        document.getElementById("C2").src = "Hiragana_i/i.jpg";
        document.getElementById("D2").src = "Hiragana_ke/ke.jpg";
    }
    else if(ran3==2){
        document.getElementById("A2").src = "Hiragana_ka/ka.jpg";
        document.getElementById("B2").src = "Hiragana_ku/ku.jpg";
        document.getElementById("C2").src = "Hiragana_i/i.jpg";
        document.getElementById("D2").src = "Hiragana_ho/ho.jpg";
    }
    else if(ran3==3){
        document.getElementById("A2").src = "Hiragana_ke/ke.jpg";
        document.getElementById("B2").src = "Hiragana_i/i.jpg";
        document.getElementById("C2").src = "Hiragana_ku/ku.jpg";
        document.getElementById("D2").src = "Hiragana_ko/ko.jpg";
    }
    else if(ran3==4){
        document.getElementById("A2").src = "Hiragana_ho/ho.jpg";
        document.getElementById("B2").src = "Hiragana_ka/ka.jpg";
        document.getElementById("C2").src = "Hiragana_ku/ku.jpg";
        document.getElementById("D2").src = "Hiragana_ki/ki.jpg";
    }
    else if(ran3==5){
        document.getElementById("A2").src = "Hiragana_i/i.jpg";
        document.getElementById("B2").src = "Hiragana_ho/ho.jpg";
        document.getElementById("C2").src = "Hiragana_ke/ke.jpg";
        document.getElementById("D2").src = "Hiragana_ko/ko.jpg";
    }
    else if(ran3==6){
        document.getElementById("A2").src = "Hiragana_ku/ku.jpg";
        document.getElementById("B2").src = "Hiragana_ko/ko.jpg";
        document.getElementById("C2").src = "Hiragana_ho/ho.jpg";
        document.getElementById("D2").src = "Hiragana_ki/ki.jpg";
    }
Qs2[ran3]=true;
}
else{
    randomQ4(answer);
}

}
function randomQ4(answer){
    if(numQsAsked2<10){

if(ran4==0&&answer=='B'){
        correctAns2++;
        letters2[0]=true;
    }
    else if(ran4==1&&answer=='C'){
        correctAns2++;
        letters2[1]=true;
    }
    else if(ran4==2&&answer=='A'){
        correctAns2++;
        letters2[2]=true;
    }
    else if(ran4==3&&answer=='D'){
        correctAns2++;
        letters2[3]=true;
    }
    else if(ran4==4&&answer=='A'){
        correctAns2++;
        letters2[4]=true;
    }
    else if(ran4==5&&answer=='A'){
        correctAns2++;
        letters2[5]=true;
    }
    else if(ran4==6&&answer=='B'){
        correctAns2++;
        letters2[6]=true;
    }

ran4 = Math.floor(Math.random() * 7);

if(Qs2r[ran4])
        randomQ4();
numQsAsked2++;
document.getElementById("qNum2").innerHTML = "Question "+ (numQsAsked2);
    document.getElementById("progress2").innerHTML = correctAns2;
    
document.getElementById("question2").innerHTML = kanaQs2[7];
document.getElementById("imgQ2").src = romajiQs2[ran4];

if(ran4==0){
    document.getElementById("divA2").innerHTML = 'i';
    document.getElementById("divB2").innerHTML = 'ho';
    document.getElementById("divC2").innerHTML = 'ko';
    document.getElementById("divD2").innerHTML = 'ku';
}
else if(ran4==1){
    document.getElementById("divA2").innerHTML = 'ke';
    document.getElementById("divB2").innerHTML = 'ho';
    document.getElementById("divC2").innerHTML = 'i';
    document.getElementById("divD2").innerHTML = 'ku';
}
else if(ran4==2){
    document.getElementById("divA2").innerHTML = 'ka';
    document.getElementById("divB2").innerHTML = 'i';
    document.getElementById("divC2").innerHTML = 'ko';
    document.getElementById("divD2").innerHTML = 'ki';
}
else if(ran4==3){
    document.getElementById("divA2").innerHTML = 'i';
    document.getElementById("divB2").innerHTML = 'ho';
    document.getElementById("divC2").innerHTML = 'ku';
    document.getElementById("divD2").innerHTML = 'ke';
}
else if(ran4==4){
    document.getElementById("divA2").innerHTML = 'ki';
    document.getElementById("divB2").innerHTML = 'i';
    document.getElementById("divC2").innerHTML = 'ku';
    document.getElementById("divD2").innerHTML = 'ko';
}
else if(ran4==5){
    document.getElementById("divA2").innerHTML = 'ko';
    document.getElementById("divB2").innerHTML = 'ho';
    document.getElementById("divC2").innerHTML = 'ka';
    document.getElementById("divD2").innerHTML = 'i';
}
else if(ran4==6){
    document.getElementById("divA2").innerHTML = 'i';
    document.getElementById("divB2").innerHTML = 'ku';
    document.getElementById("divC2").innerHTML = 'ho';
    document.getElementById("divD2").innerHTML = 'ke';
}

Qs2r[ran4]=true;
}
else if(numQsAsked2>=10){
    document.getElementById("scoreContainer2").style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * correctAns2/10);
    document.getElementById("scoreContainer2").innerHTML = "<p>Your Score: "+ scorePerCent +"%</p>";
    document.getElementById("notSave2").style.display = "inline-block";
     document.getElementById("save2").style.display = " inline-block";
     savedAns2 = correctAns2;
     correctAns2=0;
    for(i=0;i<7;i++){
        Qs2[i]=false;
        Qs2r[i]=false;
    }
}
}

function  randomQ5(answer){

if(numQsAsked3<5){
        
    
    if( ran5==0&&answer=='A'){
        correctAns3++;
        letters3[0]=true;
    }
    else if( ran5==1&&answer=='C'){
        correctAns3++;
        letters3[1]=true;
    }
    else if( ran5==2&&answer=='D'){
        correctAns3++;
        letters3[2]=true;
    }
    else if( ran5==3&&answer=='B'){
        correctAns3++;
        letters3[3]=true;
    }
    else if( ran5==4&&answer=='A'){
        correctAns3++;
        letters3[4]=true;
    }
    else if( ran5==5&&answer=='C'){
        correctAns3++;
        letters3[5]=true;
    }
    else if( ran5==6&&answer=='A'){
        correctAns3++;
        letters3[6]=true;
    }
    numQsAsked3++;
     ran5 = Math.floor(Math. random() * 7);
    
    if(Qs3[ ran5])
         randomQ5();
    numQsAsked3++;
        document.getElementById("qNum3").innerHTML = "Question "+ (numQsAsked3);
    document.getElementById("progress3").innerHTML = correctAns3;
    document.getElementById("question3").innerHTML = kanaQs3[ran5];
    
    if( ran5==0){

        document.getElementById("A3").src = "Hiragana_ma/ma.jpg";
        document.getElementById("B3").src = "Hiragana_n/n.jpg";
        document.getElementById("C3").src = "Hiragana_mo/mo.jpg";
        document.getElementById("D3").src = "Hiragana_na/na.jpg";
    }
    else if( ran5==1){
        document.getElementById("A3").src = "Hiragana_mu/mu.jpg";
        document.getElementById("B3").src = "Hiragana_na/na.jpg";
        document.getElementById("C3").src = "Hiragana_me/me.jpg";
        document.getElementById("D3").src = "Hiragana_n/n.jpg";
    }
    else if( ran5==2){
        document.getElementById("A3").src = "Hiragana_mo/mo.jpg";
        document.getElementById("B3").src = "Hiragana_mu/mu.jpg";
        document.getElementById("C3").src = "Hiragana_na/na.jpg";
        document.getElementById("D3").src = "Hiragana_mi/mi.jpg";
    }
    else if( ran5==3){
        document.getElementById("A3").src = "Hiragana_na/na.jpg";
        document.getElementById("B3").src = "Hiragana_mo/mo.jpg";
        document.getElementById("C3").src = "Hiragana_ma/ma.jpg";
        document.getElementById("D3").src = "Hiragana_me/me.jpg";
    }
    else if( ran5==4){
        document.getElementById("A3").src = "Hiragana_mu/mu.jpg";
        document.getElementById("B3").src = "Hiragana_ma/ma.jpg";
        document.getElementById("C3").src = "Hiragana_n/n.jpg";
        document.getElementById("D3").src = "Hiragana_mi/mi.jpg";
    }
    else if( ran5==5){
        document.getElementById("A3").src = "Hiragana_mo/mo.jpg";
        document.getElementById("B3").src = "Hiragana_me/me.jpg";
        document.getElementById("C3").src = "Hiragana_n/n.jpg";
        document.getElementById("D3").src = "Hiragana_na/na.jpg";
    }
    else if( ran5==6){
        document.getElementById("A3").src = "Hiragana_na/na.jpg";
        document.getElementById("B3").src = "Hiragana_ma/ma.jpg";
        document.getElementById("C3").src = "Hiragana_mi/mi.jpg";
        document.getElementById("D3").src = "Hiragana_mu/mu.jpg";
    }
Qs3[ran5]=true;
}
else{
     randomQ6(answer);
}

}

function randomQ6(answer){
    if(numQsAsked3<10){

if(ran6==0&&answer=='B'){
        correctAns3++;
        letters3[0]=true;
    }
    else if(ran6==1&&answer=='C'){
        correctAns3++;
        letters3[1]=true;
    }
    else if(ran6==2&&answer=='A'){
        correctAns3++;
        letters3[2]=true;
    }
    else if(ran6==3&&answer=='D'){
        correctAns3++;
        letters3[3]=true;
    }
    else if(ran6==4&&answer=='A'){
        correctAns3++;
        letters3[4]=true;
    }
    else if(ran6==5&&answer=='A'){
        correctAns3++;
        letters3[5]=true;
    }
    else if(ran6==6&&answer=='C'){
        correctAns3++;
        letters3[6]=true;
    }

ran6 = Math.floor(Math.random() * 7);

if(Qs3r[ran6])
        randomQ4();
numQsAsked3++;
document.getElementById("qNum3").innerHTML = "Question "+ (numQsAsked3);
    document.getElementById("progress3").innerHTML = correctAns3;
    
document.getElementById("question3").innerHTML = kanaQs3[7];
document.getElementById("imgQ3").src = romajiQs3[ran6];

if(ran6==0){
    document.getElementById("divA3").innerHTML = 'n';
    document.getElementById("divB3").innerHTML = 'ma';
    document.getElementById("divC3").innerHTML = 'mu';
    document.getElementById("divD3").innerHTML = 'mi';
}
else if(ran6==1){
    document.getElementById("divA3").innerHTML = 'na';
    document.getElementById("divB3").innerHTML = 'n';
    document.getElementById("divC3").innerHTML = 'me';
    document.getElementById("divD3").innerHTML = 'mo';
}
else if(ran6==2){
    document.getElementById("divA3").innerHTML = 'mi';
    document.getElementById("divB3").innerHTML = 'ma';
    document.getElementById("divC3").innerHTML = 'na';
    document.getElementById("divD3").innerHTML = 'mu';
}
else if(ran6==3){
    document.getElementById("divA3").innerHTML = 'ma';
    document.getElementById("divB3").innerHTML = 'mi';
    document.getElementById("divC3").innerHTML = 'n';
    document.getElementById("divD3").innerHTML = 'mo';
}
else if(ran6==4){
    document.getElementById("divA3").innerHTML = 'mu';
    document.getElementById("divB3").innerHTML = 'n';
    document.getElementById("divC3").innerHTML = 'na';
    document.getElementById("divD3").innerHTML = 'ma';
}
else if(ran6==5){
    document.getElementById("divA3").innerHTML = 'n';
    document.getElementById("divB3").innerHTML = 'ma';
    document.getElementById("divC3").innerHTML = 'mi';
    document.getElementById("divD3").innerHTML = 'na';
}
else if(ran6==6){
    document.getElementById("divA3").innerHTML = 'mu';
    document.getElementById("divB3").innerHTML = 'me';
    document.getElementById("divC3").innerHTML = 'na';
    document.getElementById("divD3").innerHTML = 'mi';
}

Qs3r[ran6]=true;
}
else if(numQsAsked3>=10){
    document.getElementById("scoreContainer3").style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * correctAns3/10);
    document.getElementById("scoreContainer3").innerHTML = "<p>Your Score: "+ scorePerCent +"%</p>";
    document.getElementById("notSave3").style.display = "inline-block";
     document.getElementById("save3").style.display = " inline-block";
     savedAns3 = correctAns3;
     correctAns3=0;
    for(i=0;i<7;i++){
        Qs3[i]=false;
        Qs3r[i]=false;
    }
}
}


function  randomQ7(answer){

if(numQsAsked4<5){
        
    
    if( ran7==0&&answer=='B'){
        correctAns4++;
        letters4[0]=true;
    }
    else if( ran7==1&&answer=='D'){
        correctAns4++;
        letters4[1]=true;
    }
    else if( ran7==2&&answer=='A'){
        correctAns4++;
        letters4[2]=true;
    }
    else if( ran7==3&&answer=='C'){
        correctAns4++;
        letters4[3]=true;
    }
    else if( ran7==4&&answer=='C'){
        correctAns4++;
        letters4[4]=true;
    }
    else if( ran7==5&&answer=='A'){
        correctAns4++;
        letters4[5]=true;
    }
    else if( ran7==6&&answer=='B'){
        correctAns4++;
        letters4[6]=true;
    }
    
     ran7 = Math.floor(Math. random() * 7);
    
    if(Qs4[ ran7])
         randomQ7();
    numQsAsked4++;
    console.log("numQsAsked4:", numQsAsked4);
    console.log("ran7:", ran7);
   
        document.getElementById("qNum4").innerHTML = "Question "+ (numQsAsked4);
    document.getElementById("progress4").innerHTML = correctAns4;
    document.getElementById("question4").innerHTML = kanaQs4[ran7];
    
    if( ran7==0){

        document.getElementById("A4").src = "Hiragana_no/no.jpg";
        document.getElementById("B4").src = "Hiragana_ne/ne.jpg";
        document.getElementById("C4").src = "Hiragana_o/o.jpg";
        document.getElementById("D4").src = "Hiragana_re/re.jpg";
    }
    else if( ran7==1){
        document.getElementById("A4").src = "Hiragana_re/re.jpg";
        document.getElementById("B4").src = "Hiragana_o/o.jpg";
        document.getElementById("C4").src = "Hiragana_nu/nu.jpg";
        document.getElementById("D4").src = "Hiragana_ni/ni.jpg";
    }
    else if( ran7==2){
        document.getElementById("A4").src = "Hiragana_no/no.jpg";
        document.getElementById("B4").src = "Hiragana_re/re.jpg";
        document.getElementById("C4").src = "Hiragana_ne/ne.jpg";
        document.getElementById("D4").src = "Hiragana_re/re.jpg";
    }
    else if( ran7==3){
        document.getElementById("A4").src = "Hiragana_ne/ne.jpg";
        document.getElementById("B4").src = "Hiragana_o/o.jpg";
        document.getElementById("C4").src = "Hiragana_nu/nu.jpg";
        document.getElementById("D4").src = "Hiragana_ra/ra.jpg";
    }
    else if( ran7==4){
        document.getElementById("A4").src = "Hiragana_ra/ra.jpg";
        document.getElementById("B4").src = "Hiragana_ne/ne.jpg";
        document.getElementById("C4").src = "Hiragana_o/o.jpg";
        document.getElementById("D4").src = "Hiragana_ni/ni.jpg";
    }
    else if( ran7==5){
        document.getElementById("A4").src = "Hiragana_ra/ra.jpg";
        document.getElementById("B4").src = "Hiragana_o/o.jpg";
        document.getElementById("C4").src = "Hiragana_re/re.jpg";
        document.getElementById("D4").src = "Hiragana_ne/ne.jpg";
    }
    else if( ran7==6){
        document.getElementById("A4").src = "Hiragana_ne/ne.jpg";
        document.getElementById("B4").src = "Hiragana_re/re.jpg";
        document.getElementById("C4").src = "Hiragana_no/no.jpg";
        document.getElementById("D4").src = "Hiragana_ni/ni.jpg";
    }
Qs4[ran7]=true;
}
else{
     randomQ8(answer);
}

}

function randomQ8(answer){
    if(numQsAsked4<10){

if(ran8==0&&answer=='D'){
        correctAns4++;
        letters4[0]=true;
    }
    else if(ran8==1&&answer=='A'){
        correctAns4++;
        letters4[1]=true;
    }
    else if(ran8==2&&answer=='D'){
        correctAns4++;
        letters4[2]=true;
    }
    else if(ran8==3&&answer=='D'){
        correctAns4++;
        letters4[3]=true;
    }
    else if(ran8==4&&answer=='C'){
        correctAns4++;
        letters4[4]=true;
    }
    else if(ran8==5&&answer=='B'){
        correctAns4++;
        letters4[5]=true;
    }
    else if(ran8==6&&answer=='A'){
        correctAns4++;
        letters4[6]=true;
    }

ran8 = Math.floor(Math.random() * 7);

if(Qs4r[ran8])
        randomQ8();
numQsAsked4++;
document.getElementById("qNum4").innerHTML = "Question "+ (numQsAsked4);
    document.getElementById("progress4").innerHTML = correctAns4;
    
document.getElementById("question4").innerHTML = kanaQs4[7];
document.getElementById("imgQ4").src = romajiQs4[ran8];
    console.log("numQsAsked4:", numQsAsked4);
    console.log("ran7:", ran7);
if(ran8==0){
    document.getElementById("divA4").innerHTML = 'o';
    document.getElementById("divB4").innerHTML = 'ra';
    document.getElementById("divC4").innerHTML = 'nu';
    document.getElementById("divD4").innerHTML = 'ne';
}
else if(ran8==1){
    document.getElementById("divA4").innerHTML = 'ni';
    document.getElementById("divB4").innerHTML = 'o';
    document.getElementById("divC4").innerHTML = 're';
    document.getElementById("divD4").innerHTML = 'no';
}
else if(ran8==2){
    document.getElementById("divA4").innerHTML = 're';
    document.getElementById("divB4").innerHTML = 'ra';
    document.getElementById("divC4").innerHTML = 'ne';
    document.getElementById("divD4").innerHTML = 'no';
}
else if(ran8==3){
    document.getElementById("divA4").innerHTML = 'ni';
    document.getElementById("divB4").innerHTML = 'o';
    document.getElementById("divC4").innerHTML = 're';
    document.getElementById("divD4").innerHTML = 'nu';
}
else if(ran8==4){
    document.getElementById("divA4").innerHTML = 'nu';
    document.getElementById("divB4").innerHTML = 'ni';
    document.getElementById("divC4").innerHTML = 'o';
    document.getElementById("divD4").innerHTML = 'ne';
}
else if(ran8==5){
    document.getElementById("divA4").innerHTML = 're';
    document.getElementById("divB4").innerHTML = 'ra';
    document.getElementById("divC4").innerHTML = 'no';
    document.getElementById("divD4").innerHTML = 'ni';
}
else if(ran8==6){
    document.getElementById("divA4").innerHTML = 're';
    document.getElementById("divB4").innerHTML = 'o';
    document.getElementById("divC4").innerHTML = 'no';
    document.getElementById("divD4").innerHTML = 'nu';
}

Qs4r[ran8]=true;
}
else if(numQsAsked4>=10){
    document.getElementById("scoreContainer4").style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * correctAns4/10);
    document.getElementById("scoreContainer4").innerHTML = "<p>Your Score: "+ scorePerCent +"%</p>";
    document.getElementById("notSave4").style.display = "inline-block";
     document.getElementById("save4").style.display = " inline-block";
     savedAns4 = correctAns4;
     correctAns4=0;
    for(i=0;i<7;i++){
        Qs4[i]=false;
        Qs4r[i]=false;
    }
}
}


function  randomQ9(answer){

if(numQsAsked5<5){
        
    
    if( ran9==0&&answer=='C'){
        correctAns5++;
        letters5[0]=true;
    }
    else if( ran9==1&&answer=='C'){
        correctAns5++;
        letters5[1]=true;
    }
    else if( ran9==2&&answer=='A'){
        correctAns5++;
        letters5[2]=true;
    }
    else if( ran9==3&&answer=='B'){
        correctAns5++;
        letters5[3]=true;
    }
    else if( ran9==4&&answer=='C'){
        correctAns5++;
        letters5[4]=true;
    }
    else if( ran9==5&&answer=='B'){
        correctAns5++;
        letters5[5]=true;
    }
    else if( ran9==6&&answer=='A'){
        correctAns5++;
        letters5[6]=true;
    }
    
     ran9 = Math.floor(Math. random() * 7);
    
    if(Qs5[ran9])
         randomQ9();
    numQsAsked5++;
        document.getElementById("qNum5").innerHTML = "Question "+ (numQsAsked5);
    document.getElementById("progress5").innerHTML = correctAns5;
    document.getElementById("question5").innerHTML = kanaQs5[ran9];
    
    if( ran9==0){

        document.getElementById("A5").src = "Hiragana_ro/ro.jpg";
        document.getElementById("B5").src = "Hiragana_shi/shi.jpg";
        document.getElementById("C5").src = "Hiragana_ri/ri.jpg";
        document.getElementById("D5").src = "Hiragana_so/so.jpg";
    }
    else if( ran9==1){
        document.getElementById("A5").src = "Hiragana_ri/ri.jpg";
        document.getElementById("B5").src = "Hiragana_so/so.jpg";
        document.getElementById("C5").src = "Hiragana_ro/ro.jpg";
        document.getElementById("D5").src = "Hiragana_sa/sa.jpg";
    }
    else if( ran9==2){
        document.getElementById("A5").src = "Hiragana_ru/ru.jpg";
        document.getElementById("B5").src = "Hiragana_ri/ri.jpg";
        document.getElementById("C5").src = "Hiragana_se/se.jpg";
        document.getElementById("D5").src = "Hiragana_shi/shi.jpg";
    }
    else if( ran9==3){
        document.getElementById("A5").src = "Hiragana_shi/shi.jpg";
        document.getElementById("B5").src = "Hiragana_sa/sa.jpg";
        document.getElementById("C5").src = "Hiragana_ro/ro.jpg";
        document.getElementById("D5").src = "Hiragana_se/se.jpg";
    }
    else if( ran9==4){
        document.getElementById("A5").src = "Hiragana_ro/ro.jpg";
        document.getElementById("B5").src = "Hiragana_so/so.jpg";
        document.getElementById("C5").src = "Hiragana_se/se.jpg";
        document.getElementById("D5").src = "Hiragana_shi/shi.jpg";
    }
    else if( ran9==5){
        document.getElementById("A5").src = "Hiragana_ri/ri.jpg";
        document.getElementById("B5").src = "Hiragana_shi/shi.jpg";
        document.getElementById("C5").src = "Hiragana_so/so.jpg";
        document.getElementById("D5").src = "Hiragana_ru/ru.jpg";
    }
    else if( ran9==6){
        document.getElementById("A5").src = "Hiragana_so/so.jpg";
        document.getElementById("B5").src = "Hiragana_ri/ri.jpg";
        document.getElementById("C5").src = "Hiragana_sa/sa.jpg";
        document.getElementById("D5").src = "Hiragana_ru/ru.jpg";
    }
Qs5[ran9]=true;
}
else{
     randomQ10(answer);
}

}

function randomQ10(answer){
    if(numQsAsked5<10){

if(ran10==0&&answer=='B'){
        correctAns5++;
        letters5[0]=true;
    }
    else if(ran10==1&&answer=='A'){
        correctAns5++;
        letters5[1]=true;
    }
    else if(ran10==2&&answer=='C'){
        correctAns5++;
        letters5[2]=true;
    }
    else if(ran10==3&&answer=='D'){
        correctAns5++;
        letters5[3]=true;
    }
    else if(ran10==4&&answer=='D'){
        correctAns5++;
        letters5[4]=true;
    }
    else if(ran10==5&&answer=='B'){
        correctAns5++;
        letters5[5]=true;
    }
    else if(ran10==6&&answer=='A'){
        correctAns5++;
        letters5[6]=true;
    }

ran10 = Math.floor(Math.random() * 7);

if(Qs5r[ran10])
        randomQ10();
numQsAsked5++;
document.getElementById("qNum5").innerHTML = "Question "+ (numQsAsked5);
    document.getElementById("progress5").innerHTML = correctAns5;
    
document.getElementById("question5").innerHTML = kanaQs5[7];
document.getElementById("imgQ5").src = romajiQs5[ran10];

if(ran10==0){
    document.getElementById("divA5").innerHTML = 'ro';
    document.getElementById("divB5").innerHTML = 'ri';
    document.getElementById("divC5").innerHTML = 'shi';
    document.getElementById("divD5").innerHTML = 'se';
}
else if(ran10==1){
    document.getElementById("divA5").innerHTML = 'ro';
    document.getElementById("divB5").innerHTML = 'so';
    document.getElementById("divC5").innerHTML = 'ru';
    document.getElementById("divD5").innerHTML = 'sa';
}
else if(ran10==2){
    document.getElementById("divA5").innerHTML = 'shi';
    document.getElementById("divB5").innerHTML = 'ri';
    document.getElementById("divC5").innerHTML = 'ru';
    document.getElementById("divD5").innerHTML = 'so';
}
else if(ran10==3){
    document.getElementById("divA5").innerHTML = 'so';
    document.getElementById("divB5").innerHTML = 'ri';
    document.getElementById("divC5").innerHTML = 'shi';
    document.getElementById("divD5").innerHTML = 'sa';
}
else if(ran10==4){
    document.getElementById("divA5").innerHTML = 'sa';
    document.getElementById("divB5").innerHTML = 'ru';
    document.getElementById("divC5").innerHTML = 'so';
    document.getElementById("divD5").innerHTML = 'se';
}
else if(ran10==5){
    document.getElementById("divA5").innerHTML = 'se';
    document.getElementById("divB5").innerHTML = 'shi';
    document.getElementById("divC5").innerHTML = 'ri';
    document.getElementById("divD5").innerHTML = 'sa';
}
else if(ran10==6){
    document.getElementById("divA5").innerHTML = 'so';
    document.getElementById("divB5").innerHTML = 'se';
    document.getElementById("divC5").innerHTML = 'ru';
    document.getElementById("divD5").innerHTML = 'ri';
}

Qs5r[ran10]=true;
}
else if(numQsAsked5>=10){
    document.getElementById("scoreContainer5").style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * correctAns5/10);
    document.getElementById("scoreContainer5").innerHTML = "<p>Your Score: "+ scorePerCent +"%</p>";
    document.getElementById("notSave5").style.display = "inline-block";
    document.getElementById("save5").style.display = " inline-block";
    savedAns5 = correctAns5;
    correctAns5=0;
    for(i=0;i<7;i++){
        Qs5[i]=false;
        Qs5r[i]=false;
    }
}
}

function  randomQ11(answer){

if(numQsAsked6<5){
        
    
    if( ran11==0&&answer=='A'){
        correctAns6++;
        letters6[0]=true;
    }
    else if( ran11==1&&answer=='D'){
        correctAns6++;
        letters6[1]=true;
    }
    else if( ran11==2&&answer=='A'){
        correctAns6++;
        letters6[2]=true;
    }
    else if( ran11==3&&answer=='B'){
        correctAns6++;
        letters6[3]=true;
    }
    else if( ran11==4&&answer=='C'){
        correctAns6++;
        letters6[4]=true;
    }
    else if( ran11==5&&answer=='D'){
        correctAns6++;
        letters6[5]=true;
    }
    else if( ran11==6&&answer=='A'){
        correctAns6++;
        letters6[6]=true;
    }

    
     ran11 = Math.floor(Math. random() * 7);
    
    if(Qs6[ ran11])
         randomQ11();
    numQsAsked6++;
    document.getElementById("qNum6").innerHTML = "Question "+ (numQsAsked6);
    document.getElementById("progress6").innerHTML = correctAns6;
    document.getElementById("question6").innerHTML = kanaQs6[ran11];
    
    if( ran11==0){
        document.getElementById("A6").src = "Hiragana_su/su.jpg";
        document.getElementById("B6").src = "Hiragana_tsu/tsu.jpg";
        document.getElementById("C6").src = "Hiragana_wa/wa.jpg";
        document.getElementById("D6").src = "Hiragana_te/te.jpg";
    }
    else if( ran11==1){
        document.getElementById("A6").src = "Hiragana_te/te.jpg";
        document.getElementById("B6").src = "Hiragana_u/u.jpg";
        document.getElementById("C6").src = "Hiragana_wa/wa.jpg";
        document.getElementById("D6").src = "Hiragana_ta/ta.jpg";
    }
    else if( ran11==2){
        document.getElementById("A6").src = "Hiragana_te/te.jpg";
        document.getElementById("B6").src = "Hiragana_su/su.jpg";
        document.getElementById("C6").src = "Hiragana_wa/wa.jpg";
        document.getElementById("D6").src = "Hiragana_to/to.jpg";
    }
    else if( ran11==3){
        document.getElementById("A6").src = "Hiragana_su/su.jpg";
        document.getElementById("B6").src = "Hiragana_to/to.jpg";
        document.getElementById("C6").src = "Hiragana_u/u.jpg";
        document.getElementById("D6").src = "Hiragana_te/te.jpg";
    }
    else if( ran11==4){
        document.getElementById("A6").src = "Hiragana_wa/wa.jpg";
        document.getElementById("B6").src = "Hiragana_te/te.jpg";
        document.getElementById("C6").src = "Hiragana_tsu/tsu.jpg";
        document.getElementById("D6").src = "Hiragana_u/u.jpg";
    }
    else if( ran11==5){
        document.getElementById("A6").src = "Hiragana_ta/ta.jpg";
        document.getElementById("B6").src = "Hiragana_tsu/tsu.jpg";
        document.getElementById("C6").src = "Hiragana_wa/wa.jpg";
        document.getElementById("D6").src = "Hiragana_u/u.jpg";
    }
    else if( ran11==6){
        document.getElementById("A6").src = "Hiragana_wa/wa.jpg";
        document.getElementById("B6").src = "Hiragana_to/to.jpg";
        document.getElementById("C6").src = "Hiragana_u/u.jpg";
        document.getElementById("D6").src = "Hiragana_su/su.jpg";
	    }
	Qs6[ran11]=true;
	}
	else{
	     randomQ12(answer);
	}
}


function randomQ12(answer){
    if(numQsAsked6<10){

if(ran12==0&&answer=='C'){
        correctAns6++;
        letters6[0]=true;
    }
    else if(ran12==1&&answer=='B'){
        correctAns6++;
        letters6[1]=true;
    }
    else if(ran12==2&&answer=='C'){
        correctAns6++;
        letters6[2]=true;
    }
    else if(ran12==3&&answer=='A'){
        correctAns6++;
        letters6[3]=true;
    }
    else if(ran12==4&&answer=='D'){
        correctAns6++;
        letters6[4]=true;
    }
    else if(ran12==5&&answer=='D'){
        correctAns6++;
        letters6[5]=true;
    }
    else if(ran12==6&&answer=='A'){
        correctAns6++;
        letters6[6]=true;
    }

	ran12 = Math.floor(Math.random() * 7);

	if(Qs6r[ran12])
	        randomQ12();
	numQsAsked6++;
	document.getElementById("qNum6").innerHTML = "Question "+ (numQsAsked6);
	    document.getElementById("progress6").innerHTML = correctAns6;
	    
	document.getElementById("question6").innerHTML = kanaQs6[7];
	document.getElementById("imgQ6").src = romajiQs6[ran12];

	if(ran12==0){
	    document.getElementById("divA6").innerHTML = 'to';
	    document.getElementById("divB6").innerHTML = 'wa';
	    document.getElementById("divC6").innerHTML = 'su';
	    document.getElementById("divD6").innerHTML = 'te';
	}
	else if(ran12==1){
	    document.getElementById("divA6").innerHTML = 'u';
	    document.getElementById("divB6").innerHTML = 'ta';
	    document.getElementById("divC6").innerHTML = 'wa';
	    document.getElementById("divD6").innerHTML = 'to';
	}
	else if(ran12==2){
	    document.getElementById("divA6").innerHTML = 'tsu';
	    document.getElementById("divB6").innerHTML = 'su';
	    document.getElementById("divC6").innerHTML = 'te';
	    document.getElementById("divD6").innerHTML = 'u';
	}
	else if(ran12==3){
	    document.getElementById("divA6").innerHTML = 'to';
	    document.getElementById("divB6").innerHTML = 'tsu';
	    document.getElementById("divC6").innerHTML = 'u';
	    document.getElementById("divD6").innerHTML = 'su';
	}
	else if(ran12==4){
	    document.getElementById("divA6").innerHTML = 'su';
	    document.getElementById("divB6").innerHTML = 'te';
	    document.getElementById("divC6").innerHTML = 'wa';
	    document.getElementById("divD6").innerHTML = 'tsu';
	}
	else if(ran12==5){
	    document.getElementById("divA6").innerHTML = 'to';
	    document.getElementById("divB6").innerHTML = 'ta';
	    document.getElementById("divC6").innerHTML = 'su';
	    document.getElementById("divD6").innerHTML = 'u';
	}
	else if(ran12==6){
	    document.getElementById("divA6").innerHTML = 'wa';
	    document.getElementById("divB6").innerHTML = 'tsu';
	    document.getElementById("divC6").innerHTML = 'to';
	    document.getElementById("divD6").innerHTML = 'su';
	}

	Qs6r[ran12]=true;
}
else if(numQsAsked6>=10){
    document.getElementById("scoreContainer6").style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * correctAns6/10);
    document.getElementById("scoreContainer6").innerHTML = "<p>Your Score: "+ scorePerCent +"%</p>";
    document.getElementById("notSave6").style.display = "inline-block";
    document.getElementById("save6").style.display = " inline-block";
    savedAns6 = correctAns6;
    correctAns6=0;
    for(i=0;i<7;i++){
        Qs6[i]=false;
        Qs6r[i]=false;
    }
}
}


function  randomQ13(answer){

if(numQsAsked7<4){
        
    
    if( ran13==0&&answer=='B'){
        correctAns7++;
        letters7[0]=true;
    }
    else if( ran13==1&&answer=='D'){
        correctAns7++;
        letters7[1]=true;
    }
    else if( ran13==2&&answer=='A'){
        correctAns7++;
        letters7[2]=true;
    }
    else if( ran13==3&&answer=='C'){
        correctAns7++;
        letters7[3]=true;
    }

    
     ran13 = Math.floor(Math. random() * 4);
    
    if(Qs7[ ran13])
         randomQ13();
    numQsAsked7++;
        document.getElementById("qNum7").innerHTML = "Question "+ (numQsAsked7);
    document.getElementById("progress7").innerHTML = correctAns7;
    document.getElementById("question7").innerHTML = kanaQs7[ran13];
    
    if( ran13==0){

        document.getElementById("A7").src = "Hiragana_ya/ya.jpg";
        document.getElementById("B7").src = "Hiragana_wo/wo.jpg";
        document.getElementById("C7").src = "Hiragana_yu/yu.jpg";
        document.getElementById("D7").src = "Hiragana_yo/yo.jpg";
    }
    else if( ran13==1){
        document.getElementById("A7").src = "Hiragana_wo/wo.jpg";
        document.getElementById("B7").src = "Hiragana_yu/yu.jpg";
        document.getElementById("C7").src = "Hiragana_yo/yo.jpg";
        document.getElementById("D7").src = "Hiragana_ya/ya.jpg";
    }
    else if( ran13==2){
        document.getElementById("A7").src = "Hiragana_yo/yo.jpg";
        document.getElementById("B7").src = "Hiragana_wo/wo.jpg";
        document.getElementById("C7").src = "Hiragana_ya/ya.jpg";
        document.getElementById("D7").src = "Hiragana_yu/yu.jpg";
    }
    else if( ran13==3){
        document.getElementById("A7").src = "Hiragana_ya/ya.jpg";
        document.getElementById("B7").src = "Hiragana_yo/yo.jpg";
        document.getElementById("C7").src = "Hiragana_yu/yu.jpg";
        document.getElementById("D7").src = "Hiragana_wo/wo.jpg";
    }

Qs7[ran13]=true;
}
else{
     randomQ14(answer);
}

}

function randomQ14(answer){
    if(numQsAsked7<8){

if(ran14==0&&answer=='C'){
        correctAns7++;
        letters7[0]=true;
    }
    else if(ran14==1&&answer=='B'){
        correctAns7++;
        letters7[1]=true;
    }
    else if(ran14==2&&answer=='C'){
        correctAns7++;
        letters7[2]=true;
    }
    else if(ran14==3&&answer=='A'){
        correctAns7++;
        letters7[3]=true;
    }


ran14 = Math.floor(Math.random() * 4);

if(Qs7r[ran14])
        randomQ14();
numQsAsked7++;
document.getElementById("qNum7").innerHTML = "Question "+ (numQsAsked7);
    document.getElementById("progress7").innerHTML = correctAns7;
    
document.getElementById("question7").innerHTML = kanaQs7[7];
document.getElementById("imgQ7").src = romajiQs7[ran14];

if(ran14==0){
    document.getElementById("divA7").innerHTML = 'ya';
    document.getElementById("divB7").innerHTML = 'yu';
    document.getElementById("divC7").innerHTML = 'wo';
    document.getElementById("divD7").innerHTML = 'yo';
}
else if(ran14==1){
    document.getElementById("divA7").innerHTML = 'wo';
    document.getElementById("divB7").innerHTML = 'ya';
    document.getElementById("divC7").innerHTML = 'yu';
    document.getElementById("divD7").innerHTML = 'yo';
}
else if(ran14==2){
    document.getElementById("divA7").innerHTML = 'yu';
    document.getElementById("divB7").innerHTML = 'ya';
    document.getElementById("divC7").innerHTML = 'yo';
    document.getElementById("divD7").innerHTML = 'wo';
}
else if(ran14==3){
    document.getElementById("divA7").innerHTML = 'yu';
    document.getElementById("divB7").innerHTML = 'wo';
    document.getElementById("divC7").innerHTML = 'yo';
    document.getElementById("divD7").innerHTML = 'ya';
}

Qs7r[ran14]=true;
}
else if(numQsAsked7>=8){
    document.getElementById("scoreContainer7").style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * correctAns7/8);
    document.getElementById("scoreContainer7").innerHTML = "<p>Your Score: "+ scorePerCent +"%</p>";
    document.getElementById("notSave7").style.display = "inline-block";
     document.getElementById("save7").style.display = " inline-block";
     savedAns7 = correctAns7;
     correctAns7=0;
    for(i=0;i<4;i++){
        Qs7[i]=false;
        Qs7r[i]=false;
    }
}
}

function randomQ15(answer){



if(numQsAsked8<5){
        
    
    if(ran15==0&&answer=='A'){
        correctAns8++;
        letters1[0]=true;
    }
    else if(ran15==1&&answer=='C'){
        correctAns8++;
        letters1[2]=true;
    }
    else if(ran15==2&&answer=='D'){
        correctAns8++;
        letters1[3]=true;
    }
    else if(ran15==3&&answer=='D'){
        correctAns8++;
        letters1[4]=true;
    }
    else if(ran15==4&&answer=='B'){
        correctAns8++;
        letters1[5]=true;
    }
    else if(ran15==5&&answer=='B'){
        correctAns8++;
        letters1[6]=true;
    }
    else if(ran15==6&&answer=='A'){
        correctAns8++;
        letters1[7]=true;
    }
    
    
    
    ran15 = Math.floor(Math.random() * 7);
    
    if(Qs1[ran15])
        randomQ15();
    numQsAsked8++;
    document.getElementById("qNum8").innerHTML = "Question "+ (numQsAsked8);
    document.getElementById("progress8").innerHTML = correctAns8;
    document.getElementById("question8").innerHTML = kanaQs[ran15];
    
    if(ran15==0){

        document.getElementById("A8").src = "Hiragana_a/a.jpg";
        document.getElementById("B8").src = "Hiragana_fu/fu.jpg";
        document.getElementById("C8").src = "Hiragana_hi/hi.jpg";
        document.getElementById("D8").src = "Hiragana_chi/chi.jpg";
    }
    else if(ran15==1){
        document.getElementById("A8").src = "Hiragana_hi/hi.jpg";
        document.getElementById("B8").src = "Hiragana_e/e.jpg";
        document.getElementById("C8").src = "Hiragana_chi/chi.jpg";
        document.getElementById("D8").src = "Hiragana_he/he.jpg";
    }
    else if(ran15==2){
        document.getElementById("A8").src = "Hiragana_fu/fu.jpg";
        document.getElementById("B8").src = "Hiragana_a/a.jpg";
        document.getElementById("C8").src = "Hiragana_ha/ha.jpg";
        document.getElementById("D8").src = "Hiragana_e/e.jpg";
    }
    else if(ran15==3){
        document.getElementById("A8").src = "Hiragana_e/e.jpg";
        document.getElementById("B8").src = "Hiragana_chi/chi.jpg";
        document.getElementById("C8").src = "Hiragana_a/a.jpg";
        document.getElementById("D8").src = "Hiragana_fu/fu.jpg";
    }
    else if(ran15==4){
        document.getElementById("A8").src = "Hiragana_chi/chi.jpg";
        document.getElementById("B8").src = "Hiragana_ha/ha.jpg";
        document.getElementById("C8").src = "Hiragana_hi/hi.jpg";
        document.getElementById("D8").src = "Hiragana_a/a.jpg";
    }
    else if(ran15==5){
        document.getElementById("A8").src = "Hiragana_ha/ha.jpg";
        document.getElementById("B8").src = "Hiragana_he/he.jpg";
        document.getElementById("C8").src = "Hiragana_e/e.jpg";
        document.getElementById("D8").src = "Hiragana_chi/chi.jpg";
    }
    else if(ran15==6){
        document.getElementById("A8").src = "Hiragana_hi/hi.jpg";
        document.getElementById("B8").src = "Hiragana_a/a.jpg";
        document.getElementById("C8").src = "Hiragana_ha/ha.jpg";
        document.getElementById("D8").src = "Hiragana_e/e.jpg";
    }
Qs1[ran15]=true;
}
else{
    randomQ16(answer);
}

}

function randomQ16(answer){
    if(numQsAsked8<10){

if(ran16==0&&answer=='C'){
        correctAns8++;
        letters1[0]=true;
    }
    else if(ran16==1&&answer=='C'){
        correctAns8++;
        letters1[1]=true;
    }
    else if(ran16==2&&answer=='A'){
        correctAns8++;
        letters1[2]=true;
    }
    else if(ran16==3&&answer=='B'){
        correctAns8++;
        letters1[3]=true;
    }
    else if(ran16==4&&answer=='D'){
        correctAns8++;
        letters1[4]=true;
    }
    else if(ran16==5&&answer=='A'){
        correctAns8++;
        letters1[5]=true;
    }
    else if(ran16==6&&answer=='B'){
        correctAns8++;
        letters1[6]=true;
    }

ran16 = Math.floor(Math.random() * 7);

if(Qs1r[ran16])
        randomQ16();
numQsAsked8++;
document.getElementById("qNum8").innerHTML = "Question "+ (numQsAsked8);
    document.getElementById("progress8").innerHTML = correctAns8;
    
document.getElementById("question8").innerHTML = kanaQs[7];
document.getElementById("imgQ8").src = romajiQs[ran16];

if(ran16==0){
    document.getElementById("divA8").innerHTML = 'e';
    document.getElementById("divB8").innerHTML = 'fu';
    document.getElementById("divC8").innerHTML = 'a';
    document.getElementById("divD8").innerHTML = 'hi';
}
else if(ran16==1){
    document.getElementById("divA8").innerHTML = 'a';
    document.getElementById("divB8").innerHTML = 'he';
    document.getElementById("divC8").innerHTML = 'chi';
    document.getElementById("divD8").innerHTML = 'e';
}
else if(ran16==2){
    document.getElementById("divA8").innerHTML = 'e';
    document.getElementById("divB8").innerHTML = 'chi';
    document.getElementById("divC8").innerHTML = 'he';
    document.getElementById("divD8").innerHTML = 'fu';
}
else if(ran16==3){
    document.getElementById("divA8").innerHTML = 'hi';
    document.getElementById("divB8").innerHTML = 'fu';
    document.getElementById("divC8").innerHTML = 'he';
    document.getElementById("divD8").innerHTML = 'hi';
}
else if(ran16==4){
    document.getElementById("divA8").innerHTML = 'a';
    document.getElementById("divB8").innerHTML = 'chi';
    document.getElementById("divC8").innerHTML = 'e';
    document.getElementById("divD8").innerHTML = 'ha';
}
else if(ran16==5){
    document.getElementById("divA8").innerHTML = 'he';
    document.getElementById("divB8").innerHTML = 'e';
    document.getElementById("divC8").innerHTML = 'a';
    document.getElementById("divD8").innerHTML = 'chi';
}
else if(ran16==6){
    document.getElementById("divA8").innerHTML = 'chi';
    document.getElementById("divB8").innerHTML = 'hi';
    document.getElementById("divC8").innerHTML = 'he';
    document.getElementById("divD8").innerHTML = 'fu';
}

Qs1r[ran16]=true;
}
else if(numQsAsked8>=10){
    changeState();
    document.getElementById("scoreContainer8").style.display = "block";

    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * correctAns8/10);

    document.getElementById("scoreContainer8").innerHTML = "<p>Your Score: "+ scorePerCent +"%</p>";
     document.getElementById("notSave8").style.display = "inline-block";
     document.getElementById("save8").style.display = " inline-block";

     savedAns8 = correctAns8;
    correctAns8=0;
    for(i=0;i<7;i++){
        Qs1[i]=false;
        Qs1r[i]=false;
    }

}
}

function randomQ17(answer){



if(numQsAsked9<5){
        
    
    if(ran17==0&&answer=='B'){
        correctAns9++;
        letters2[0]=true;
    }
    else if(ran17==1&&answer=='C'){
        correctAns9++;
        letters2[2]=true;
    }
    else if(ran17==2&&answer=='A'){
        correctAns9++;
        letters2[3]=true;
    }
    else if(ran17==3&&answer=='A'){
        correctAns9++;
        letters2[4]=true;
    }
    else if(ran17==4&&answer=='D'){
        correctAns9++;
        letters2[5]=true;
    }
    else if(ran17==5&&answer=='D'){
        correctAns9++;
        letters2[6]=true;
    }
    else if(ran17==6&&answer=='A'){
        correctAns9++;
        letters2[7]=true;
    }
    
    
    
    ran17 = Math.floor(Math.random() * 7);
    
    if(Qs1[ran17])
        randomQ17();
    numQsAsked9++;
    document.getElementById("qNum9").innerHTML = "Question "+ (numQsAsked9);
    document.getElementById("progress9").innerHTML = correctAns9;
    document.getElementById("question9").innerHTML = kanaQs[ran17];
    if(ran17==0){

        document.getElementById("A9").src = "Hiragana_i/i.jpg";
        document.getElementById("B9").src = "Hiragana_ho/ho.jpg";
        document.getElementById("C9").src = "Hiragana_ko/ko.jpg";
        document.getElementById("D9").src = "Hiragana_ka/ka.jpg";
    }
    else if(ran17==1){
        document.getElementById("A9").src = "Hiragana_ki/ki.jpg";
        document.getElementById("B9").src = "Hiragana_ku/ku.jpg";
        document.getElementById("C9").src = "Hiragana_i/i.jpg";
        document.getElementById("D9").src = "Hiragana_ke/ke.jpg";
    }
    else if(ran17==2){
        document.getElementById("A9").src = "Hiragana_ka/ka.jpg";
        document.getElementById("B9").src = "Hiragana_ku/ku.jpg";
        document.getElementById("C9").src = "Hiragana_i/i.jpg";
        document.getElementById("D9").src = "Hiragana_ho/ho.jpg";
    }
    else if(ran17==17){
        document.getElementById("A9").src = "Hiragana_ke/ke.jpg";
        document.getElementById("B9").src = "Hiragana_i/i.jpg";
        document.getElementById("C9").src = "Hiragana_ku/ku.jpg";
        document.getElementById("D9").src = "Hiragana_ko/ko.jpg";
    }
    else if(ran17==4){
        document.getElementById("A9").src = "Hiragana_ho/ho.jpg";
        document.getElementById("B9").src = "Hiragana_ka/ka.jpg";
        document.getElementById("C9").src = "Hiragana_ku/ku.jpg";
        document.getElementById("D9").src = "Hiragana_ki/ki.jpg";
    }
    else if(ran17==5){
        document.getElementById("A9").src = "Hiragana_i/i.jpg";
        document.getElementById("B9").src = "Hiragana_ho/ho.jpg";
        document.getElementById("C9").src = "Hiragana_ke/ke.jpg";
        document.getElementById("D9").src = "Hiragana_ko/ko.jpg";
    }
    else if(ran17==6){
        document.getElementById("A9").src = "Hiragana_ku/ku.jpg";
        document.getElementById("B9").src = "Hiragana_ko/ko.jpg";
        document.getElementById("C9").src = "Hiragana_ho/ho.jpg";
        document.getElementById("D9").src = "Hiragana_ki/ki.jpg";
    }
Qs1[ran17]=true;
}
else{
    randomQ18(answer);
}

}

function randomQ18(answer){
    if(numQsAsked9<10){

if(ran18==0&&answer=='B'){
        correctAns9++;
        letters2[0]=true;
    }
    else if(ran18==1&&answer=='C'){
        correctAns9++;
        letters2[1]=true;
    }
    else if(ran18==2&&answer=='A'){
        correctAns9++;
        letters2[2]=true;
    }
    else if(ran18==3&&answer=='D'){
        correctAns9++;
        letters2[3]=true;
    }
    else if(ran18==4&&answer=='A'){
        correctAns9++;
        letters2[4]=true;
    }
    else if(ran18==5&&answer=='A'){
        correctAns9++;
        letters2[5]=true;
    }
    else if(ran18==6&&answer=='B'){
        correctAns9++;
        letters2[6]=true;
    }

ran18 = Math.floor(Math.random() * 7);

if(Qs1r[ran18])
        randomQ18();
numQsAsked9++;
document.getElementById("qNum9").innerHTML = "Question "+ (numQsAsked9);
    document.getElementById("progress9").innerHTML = correctAns9;
    
document.getElementById("question9").innerHTML = kanaQs[7];
document.getElementById("imgQ9").src = romajiQs[ran18];

if(ran18==0){
    document.getElementById("divA9").innerHTML = 'i';
    document.getElementById("divB9").innerHTML = 'ho';
    document.getElementById("divC9").innerHTML = 'ko';
    document.getElementById("divD9").innerHTML = 'ku';
}
else if(ran18==1){
    document.getElementById("divA9").innerHTML = 'ke';
    document.getElementById("divB9").innerHTML = 'ho';
    document.getElementById("divC9").innerHTML = 'i';
    document.getElementById("divD9").innerHTML = 'ku';
}
else if(ran18==2){
    document.getElementById("divA9").innerHTML = 'ka';
    document.getElementById("divB9").innerHTML = 'i';
    document.getElementById("divC9").innerHTML = 'ko';
    document.getElementById("divD9").innerHTML = 'ki';
}
else if(ran18==3){
    document.getElementById("divA9").innerHTML = 'i';
    document.getElementById("divB9").innerHTML = 'ho';
    document.getElementById("divC9").innerHTML = 'ku';
    document.getElementById("divD9").innerHTML = 'ke';
}
else if(ran18==4){
    document.getElementById("divA9").innerHTML = 'ki';
    document.getElementById("divB9").innerHTML = 'i';
    document.getElementById("divC9").innerHTML = 'ku';
    document.getElementById("divD9").innerHTML = 'ko';
}
else if(ran18==5){
    document.getElementById("divA9").innerHTML = 'ko';
    document.getElementById("divB9").innerHTML = 'ho';
    document.getElementById("divC9").innerHTML = 'ka';
    document.getElementById("divD9").innerHTML = 'i';
}
else if(ran18==6){
    document.getElementById("divA9").innerHTML = 'i';
    document.getElementById("divB9").innerHTML = 'ku';
    document.getElementById("divC9").innerHTML = 'ho';
    document.getElementById("divD9").innerHTML = 'ke';
}



Qs1r[ran18]=true;
}
else if(numQsAsked9>=10){
    changeState();
    document.getElementById("scoreContainer9").style.display = "block";

    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * correctAns9/10);

    document.getElementById("scoreContainer9").innerHTML = "<p>Your Score: "+ scorePerCent +"%</p>";
     document.getElementById("notSave9").style.display = "inline-block";
     document.getElementById("save9").style.display = " inline-block";

     savedAns9 = correctAns9;
    correctAns9=0;
    for(i=0;i<7;i++){
        Qs2[i]=false;
        Qs2r[i]=false;
    }

}
}


var timerActive = false;
var time1;
var quiznum;
//method to start timer for timed quizes
function startTime(){

    
    if(timerActive){
        if(quiz==15){
            quiznum = "counter8";
        }
        else{
            quiznum = "counter9";
        }

    var timer = document.getElementById(quiznum).innerHTML;
 
        var arr = timer.split(":");
        var hour = arr[0];
        var min = arr[1];
        var sec = arr[2];


        if(sec==59){
            if(min==59){
                hour++;
                min=0;
                if(hour<10) hour = "0"+hour;
            }else{
                min++;
            }
            if(min<10) min = "0"+min;
            sec=0;
        } else{
            sec++;
            if(sec<10) sec = "0"+sec;
        }
        document.getElementById(quiznum).innerHTML = hour + ":" + min + ":" + sec;
        setTimeout(startTime, 1000);
    }
}

function changeState(){
    if(timerActive==false){
        timerActive = true;
        startTime();
        console.log("timer has been started");
    }
    else {
        timerActive = false;
        console.log("timer ended");
        time1=document.getElementById(quiznum).innerHTML;
    }
}

function reset(){
    document.getElementById(quiznum).innerHTML = "00" + ":" + "00" + ":" + "00";
}




    $( document ).ready(function() {

console.log(quiz);
//study row 1
    $('#back1').on('click', function() {
        $("#r2").show(); $("#r3").show(); $("#r4").show(); $("#r5").show(); $("#r6").show(); $("#r7").show(); $("#testRow1Btn").show(); $(".hidden1").hide();$(".stats1").hide();quiz=0;});

    $('#testRow1Btn').on('click', function() { 
        $("#r2").hide();$("#r3").hide();$("#r4").hide();$("#r5").hide();$("#r6").hide();$("#r7").hide();$("#testRow1Btn").hide();$(".hidden1").show(); quiz=8;
        if(loggedIn){
        $('.stats1').show();
    }else{$('.stats1').hide();}});

//study row 2
    $('#back2').on('click', function() {
        $("#r1").show();$("#r3").show();$("#r4").show();$("#r5").show();$("#r6").show();$("#r7").show();$("#testRow2Btn").show(); $(".hidden2").hide();$(".stats2").hide();quiz=0;});
    
    $('#testRow2Btn').on('click', function() { 
        $("#r1").hide();$("#r3").hide();$("#r4").hide();$("#r5").hide();$("#r6").hide();$("#r7").hide();$("#testRow2Btn").hide();$(".hidden2").show();quiz=9;
        if(loggedIn){
        $('.stats2').show();
        }else{$('.stats2').hide();} });

//study row 3
    $('#back3').on('click', function() {
        $("#r1").show();$("#r2").show();$("#r4").show();$("#r5").show();$("#r6").show();$("#r7").show();$("#testRow3Btn").show(); $(".hidden3").hide();$(".stats3").hide();quiz=0;});

    $('#testRow3Btn').on('click', function() { 
        $("#r1").hide();$("#r2").hide();$("#r4").hide();$("#r5").hide();$("#r6").hide();$("#r7").hide();$("#testRow3Btn").hide();$(".hidden3").show(); quiz=10;if(loggedIn){
        $('.stats3').show();
        }else{$('.stats3').hide();} });

//study row 4
    $('#back4').on('click', function() {$("#r1").show();$("#r2").show();$("#r3").show();$("#r5").show();$("#r6").show();$("#r7").show();$("#testRow4Btn").show(); $(".hidden4").hide();$(".stats4").hide();quiz=0;});

    $('#testRow4Btn').on('click', function() { 
        $("#r1").hide();$("#r2").hide();$("#r3").hide();$("#r5").hide();$("#r6").hide();$("#r7").hide();$("#testRow4Btn").hide();$(".hidden4").show();quiz=11;if(loggedIn){
        $('.stats4').show();
        }else{$('.stats4').hide();} });

//study row 5
    $('#back5').on('click', function() {
        $("#r1").show();$("#r2").show();$("#r3").show();$("#r4").show();$("#r6").show();$("#r7").show();$("#testRow5Btn").show(); $(".hidden5").hide();$(".stats5").hide();quiz=0;});

    $('#testRow5Btn').on('click', function() { 
        $("#r1").hide();$("#r2").hide();$("#r3").hide();$("#r4").hide();$("#r6").hide();$("#r7").hide();$("#testRow5Btn").hide();$(".hidden5").show(); quiz=12;if(loggedIn){
        $('.stats5').show();
        }else{$('.stats5').hide();}});

//study row 6
    $('#back6').on('click', function() {
        $("#r1").show();$("#r2").show();$("#r3").show();$("#r4").show();$("#r5").show();$("#r7").show();$("#testRow6Btn").show(); $(".hidden6").hide();$(".stats6").hide();quiz=0;});

    $('#testRow6Btn').on('click', function() { 
        $("#r1").hide();$("#r2").hide();$("#r3").hide();$("#r4").hide();$("#r5").hide();$("#r7").hide();$("#testRow6Btn").hide();$(".hidden6").show(); quiz=13;if(loggedIn){
        $('.stats6').show();
        }else{$('.stats6').hide();}});

//study row 7
    $('#back7').on('click', function() {
        $("#r1").show();$("#r2").show();$("#r3").show();$("#r4").show();$("#r5").show();$("#r6").show();$("#testRow7Btn").show(); $(".hidden7").hide();$(".stats7").hide(); quiz=0;});

    $('#testRow7Btn').on('click', function() { 
        $("#r1").hide();$("#r2").hide();$("#r3").hide();$("#r4").hide();$("#r5").hide();$("#r6").hide();$("#testRow7Btn").hide();$(".hidden7").show(); quiz=14;if(loggedIn){
        $('.stats7').show();
        }else{$('.stats7').hide();}});



//test1
$('#test1').on('click', function(){
    $(".hidden1").hide();$(".stats1").hide();$("#r1").hide();$("#container").show();$("#logreg").hide();
    quiz=1;
})


//start quiz 1
$('#start').on('click', function(){
    $("#start").hide();$("#quiz").show();
})
  
//timed test1

$('#timedTest1').on('click', function(){
    $(".hidden1").hide();$(".stats1").hide();$("#r1").hide();$("#container8").show();$("#logreg").hide();
    quiz=15;
})
//start timed quiz 1
$('#start8').on('click', function(){
    $("#start8").hide();$("#quiz8").show();
})



  //test2
$('#test2').on('click', function(){
    $(".hidden2").hide();$(".stats2").hide();$("#r2").hide();$("#container2").show();$("#logreg").hide();
    quiz=2;
})


//start quiz 2
$('#start2').on('click', function(){
    $("#start2").hide();$("#quiz2").show();
})

//timed quiz 2
$('#timedTest2').on('click', function(){
    $(".hidden2").hide();$(".stats2").hide();$("#r2").hide();$("#container9").show();$("#logreg").hide();
    quiz=16;
})
//start timed quiz 1
$('#start9').on('click', function(){
    $("#start9").hide();$("#quiz9").show();
})

      
  //test3
$('#test3').on('click', function(){
    $(".hidden3").hide();$(".stats3").hide();$("#r3").hide();$("#container3").show();$("#logreg").hide();
    quiz=3;
})


//start quiz 3
$('#start3').on('click', function(){
    $("#start3").hide();$("#quiz3").show();
})


  //test4
$('#test4').on('click', function(){
    $(".hidden4").hide();$(".stats4").hide();$("#r4").hide();$("#container4").show();$("#logreg").hide();
    quiz=4;
})


//start quiz 4
$('#start4').on('click', function(){
    $("#start4").hide();$("#quiz4").show();
})

  //test5
$('#test5').on('click', function(){
    $(".hidden5").hide();$(".stats5").hide();$("#r5").hide();$("#container5").show();$("#logreg").hide();
    quiz=5;
})


//start quiz 5
$('#start5').on('click', function(){
    $("#start5").hide();$("#quiz5").show();
})

  //test6
$('#test6').on('click', function(){
    $(".hidden6").hide();$(".stats6").hide();$("#r6").hide();$("#container6").show();$("#logreg").hide();
    quiz=6;
})


//start quiz 6
$('#start6').on('click', function(){
    $("#start6").hide();$("#quiz6").show();
})

  //test7
$('#test7').on('click', function(){
    $(".hidden7").hide();$(".stats7").hide();$("#r7").hide();$("#container7").show();$("#logreg").hide();
})


//start quiz 7
$('#start7').on('click', function(){
    $("#start7").hide();$("#quiz7").show();
    quiz=7;
})


//continue without saving 1
$('#notSave1').on('click', function(){
    $('#notSave1').hide();$('#save1').hide();$('#container').hide();$('#scoreContainer').hide();
    $("#r1").show();$(".hidden1").show();$('.stats1').show();$("#logreg").show();   numQsAsked=0;quiz=8;
    document.getElementById("qNum").innerHTML = "Question "+ (numQsAsked+1);
    if(loggedIn){
        $('.stats1').show();
        }else{$('.stats1').hide();}
})

//continue without saving timed 1
$('#notSave8').on('click', function(){
    $('#notSave8').hide();$('#save8').hide();$('#container8').hide();$('#scoreContainer8').hide();
    $("#r1").show();$(".hidden1").show();$('.stats1').show();$("#logreg").show();   numQsAsked8=0;quiz=8;
    document.getElementById("qNum8").innerHTML = "Question "+ (numQsAsked8+1);
    if(loggedIn){
        $('.stats1').show();
        }else{$('.stats1').hide();}
})


//continue without saving 2
$('#notSave2').on('click', function(){
    $('#notSave2').hide();$('#save2').hide();$('#container2').hide();$('#scoreContainer2').hide();
    $("#r2").show();$(".hidden2").show();$("#logreg").show();   numQsAsked2=0;quiz=9;
    document.getElementById("qNum2").innerHTML = "Question "+ (numQsAsked2+1);
    if(loggedIn){
        $('.stats2').show();
        }else{$('.stats2').hide();}
})


//continue without saving timed 2
$('#notSave9').on('click', function(){
    $('#notSave9').hide();$('#save9').hide();$('#container9').hide();$('#scoreContainer9').hide();
    $("#r2").show();$(".hidden2").show();$('.stats2').show();$("#logreg").show();   numQsAsked9=0;quiz=9;
    document.getElementById("qNum9").innerHTML = "Question "+ (numQsAsked9+1);
    if(loggedIn){
        $('.stats2').show();
        }else{$('.stats2').hide();}
})



//continue without saving 3
$('#notSave3').on('click', function(){
    $('#notSave3').hide();$('#save3').hide();$('#container3').hide();$('#scoreContainer3').hide();
    $("#r3").show();$(".hidden3").show();$("#logreg").show();   numQsAsked3=0;quiz=10;
    document.getElementById("qNum3").innerHTML = "Question "+ (numQsAsked3+1);
    if(loggedIn){
        $('.stats3').show();
        }else{$('.stats3').hide();}
})

//continue without saving 4
$('#notSave4').on('click', function(){
    $('#notSave4').hide();$('#save4').hide();$('#container4').hide();$('#scoreContainer4').hide();
    $("#r4").show();$(".hidden4").show();$("#logreg").show();   numQsAsked4=0;quiz=11;
    document.getElementById("qNum4").innerHTML = "Question "+ (numQsAsked4+1);
    if(loggedIn){
        $('.stats4').show();
        }else{$('.stats4').hide();}
})

//continue without saving 5
$('#notSave5').on('click', function(){
    $('#notSave5').hide();$('#save5').hide();$('#container5').hide();$('#scoreContainer5').hide();
    $("#r5").show();$(".hidden5").show();$("#logreg").show();   numQsAsked5=0;quiz=12;
    document.getElementById("qNum5").innerHTML = "Question "+ (numQsAsked5+1);
    if(loggedIn){
        $('.stats5').show();
        }else{$('.stats5').hide();}
})

//continue without saving 6
$('#notSave6').on('click', function(){
    $('#notSave6').hide();$('#save6').hide();$('#container6').hide();$('#scoreContainer6').hide();
    $("#r6").show();$(".hidden6").show();$("#logreg").show();   numQsAsked6=0;quiz=13;
    document.getElementById("qNum6").innerHTML = "Question "+ (numQsAsked6+1);if(loggedIn){
        $('.stats6').show();
        }else{$('.stats6').hide();};
})

//continue without saving 7
$('#notSave7').on('click', function(){
    $('#notSave7').hide();$('#save7').hide();$('#container7').hide();$('#scoreContainer7').hide();
    $("#r7").show();$(".hidden7").show();$("#logreg").show();   numQsAsked7=0;quiz=14;
    document.getElementById("qNum7").innerHTML = "Question "+ (numQsAsked7+1);
    if(loggedIn){
        $('.stats7').show();
        }else{$('.stats7').hide();}
})

//save1
$('#save1').on('click', function(){
    $('#notSave1').hide();$('#save1').hide();$('#container').hide();$('#scoreContainer').hide();$('#banner').hide();$('#login').show();
})

//save timed 1
$('#save8').on('click', function(){
    $('#notSave8').hide();$('#save8').hide();$('#container8').hide();$('#scoreContainer8').hide();$('#banner').hide();$('#login').show();
})



//save2
$('#save2').on('click', function(){
    $('#notSave2').hide();$('#save2').hide();$('#container2').hide();$('#scoreContainer2').hide();$('#banner').hide();$('#login').show();
})

//save timed 1
$('#save9').on('click', function(){
    $('#notSave9').hide();$('#save9').hide();$('#container9').hide();$('#scoreContainer9').hide();$('#banner').hide();$('#login').show();
})


//save3
$('#save3').on('click', function(){
    $('#notSave3').hide();$('#save3').hide();$('#container3').hide();$('#scoreContainer3').hide();$('#banner').hide();$('#login').show();
})
//save4
$('#save4').on('click', function(){
    $('#notSave4').hide();$('#save4').hide();$('#container4').hide();$('#scoreContainer4').hide();$('#banner').hide();$('#login').show();
})
//save5
$('#save5').on('click', function(){
    $('#notSave5').hide();$('#save5').hide();$('#container5').hide();$('#scoreContainer5').hide();$('#banner').hide();$('#login').show();
})
//save6
$('#save6').on('click', function(){
    $('#notSave6').hide();$('#save6').hide();$('#container6').hide();$('#scoreContainer6').hide();$('#banner').hide();$('#login').show();
})
//save7
$('#save7').on('click', function(){
    $('#notSave7').hide();$('#save7').hide();$('#container7').hide();$('#scoreContainer7').hide();$('#banner').hide();$('#login').show();
})

//cancel login
$('#cancelLogin').on('click', function(){
    if(quiz==0){
        $('#login').hide();$('#main').show();
    }
    else if(quiz==1){
        $('#notSave1').show();$('#save1').show();$('#container').show();$('#scoreContainer').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==2){
        $('#notSave2').show();$('#save2').show();$('#container2').show();$('#scoreContainer2').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==3){
        $('#notSave3').show();$('#save3').show();$('#container3').show();$('#scoreContainer3').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==4){
        $('#notSave4').show();$('#save4').show();$('#container4').show();$('#scoreContainer4').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==5){
        $('#notSave5').show();$('#save5').show();$('#container5').show();$('#scoreContainer5').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==6){
        $('#notSave6').show();$('#save6').show();$('#container6').show();$('#scoreContainer6').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==7){
        $('#notSave7').show();$('#save7').show();$('#container7').show();$('#scoreContainer7').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==8){
        $('#r1').show();$(".hidden1").show();$('.stats1').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==9){
        $('#r2').show();$(".hidden2").show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==10){
        $('#r3').show();$(".hidden3").show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==11){
        $('#r4').show();$('.hidden4').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==12){
        $('#r5').show();$('.hidden5').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==13){
        $('#r6').show();$('.hidden6').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==14){
        $('#r7').show();$('.hidden7').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==15){
                $('#notSave8').show();$('#save8').show();$('#container8').show();$('#scoreContainer8').show();$('#banner').show();$('#login').hide();
    }
    else if(quiz==16){
                $('#notSave9').show();$('#save9').show();$('#container9').show();$('#scoreContainer9').show();$('#banner').show();$('#login').hide();
    }
});


//cancel register
$('#cancelRegister').on('click', function(){
    if(quiz==0){
        $('#register').hide();$('#main').show();
    }
    else if(quiz==1){
        $('#notSave1').show();$('#save1').show();$('#container').show();$('#scoreContainer').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==2){
        $('#notSave2').show();$('#save2').show();$('#container2').show();$('#scoreContainer2').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==3){
        $('#notSave3').show();$('#save3').show();$('#container3').show();$('#scoreContainer3').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==4){
        $('#notSave4').show();$('#save4').show();$('#container4').show();$('#scoreContainer4').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==5){
        $('#notSave5').show();$('#save5').show();$('#container5').show();$('#scoreContainer5').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==6){
        $('#notSave6').show();$('#save6').show();$('#container6').show();$('#scoreContainer6').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==7){
        $('#notSave7').show();$('#save7').show();$('#container7').show();$('#scoreContainer7').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==8){
        $('#r1').show();$(".hidden1").show();$('.stats1').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==9){
        $('#r2').show();$(".hidden2").show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==10){
        $('#r3').show();$(".hidden3").show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==11){
        $('#r4').show();$('.hidden4').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==12){
        $('#r5').show();$('.hidden5').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==13){
        $('#r6').show();$('.hidden6').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==14){
        $('#r7').show();$('.hidden7').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==15){
        $('#notSave8').show();$('#save8').show();$('#container8').show();$('#scoreContainer8').show();$('#banner').show();$('#register').hide();
    }
    else if(quiz==16){
        $('#notSave9').show();$('#save9').show();$('#container9').show();$('#scoreContainer9').show();$('#banner').show();$('#register').hide();
    }
});


//login link clicked
$('#loglink').on('click', function(){
if(quiz==0){
$('#main').hide();$('#login').show();console.log(quiz);
}
else if(quiz==8){
$('#r1').hide();$(".hidden1").hide();$(".stats1").hide();$('#banner').hide();$('#login').show();console.log(quiz);
}
else if(quiz==9){
$('#r2').hide();$(".hidden2").hide();$(".stats2").hide();$('#banner').hide();$('#login').show();console.log(quiz);
}
else if(quiz==10){
$('#r3').hide();$(".hidden2").hide();$(".stats2").hide();$('#banner').hide();$('#login').show();console.log(quiz);
}
else if(quiz==11){
$('#r4').hide();$('.hidden4').hide();$('#banner').hide();$('#login').show();console.log(quiz);
}
else if(quiz==12){
$('#r5').hide();$('.hidden5').hide();$('#banner').hide();$('#login').show();console.log(quiz);
}
else if(quiz==13){
$('#r6').hide();$('.hidden6').hide();$('#banner').hide();$('#login').show();console.log(quiz);
}
else if(quiz==14){
$('#r7').hide();$('.hidden7').hide();$('#banner').hide();$('#login').show();console.log(quiz);
}
});

//register link clicked
$('#reglink').on('click', function(){
if(quiz==0){
$('#main').hide();$('#register').show();console.log(quiz);
}
else if(quiz==8){
$('#r1').hide();$(".hidden1").hide();$(".stats1").hide();$('#banner').hide();$('#register').show();console.log(quiz);
}
else if(quiz==9){
$('#r2').hide();$(".hidden2").hide();$(".stats2").hide();$('#banner').hide();$('#register').show();console.log(quiz);
}
else if(quiz==10){
$('#r3').hide();$(".hidden2").hide();$(".stats2").hide();$('#banner').hide();$('#register').show();console.log(quiz);
}
else if(quiz==11){
$('#r4').hide();$('.hidden4').hide();$('#banner').hide();$('#register').show();console.log(quiz);
}
else if(quiz==12){
$('#r5').hide();$('.hidden5').hide();$('#banner').hide();$('#register').show();console.log(quiz);
}
else if(quiz==13){
$('#r6').hide();$('.hidden6').hide();$('#banner').hide();$('#register').show();console.log(quiz);
}
else if(quiz==14){
$('#r7').hide();$('.hidden7').hide();$('#banner').hide();$('#register').show();console.log(quiz);
}
});

//register which inserts user and pass into db if username is unique
$('#join').on('click', function(){
    $('#login').hide();$('#register').show();
})

    $('#regBtn').on('click', function(){
        
        var userReg = $("#usernameReg").val();
        var passReg = $("#passwordReg").val();
        
$.ajax({
            method: "post",
            url:'../web-service/register.php',
            data: {'userReg' : userReg, 'passReg' : passReg}, 

            success: function(data){
                alert(data);


                        $('#register').hide();$('#login').show();
    

            }
            
        });
});

//login button
    $('#logBtn').on('click', function(){
        var user = $("#username").val();
        var pass = $("#password").val();
        var string;
        var stats;
        var timestamp = "00:00:00";


//check which screen was on 
        if(quiz==1){
            var newScore =  Math.round(100 * savedAns/10);
            var letters = letters1;
        }
        else if(quiz==2){
            var newScore =  Math.round(100 * savedAns2/10);
            var letters = letters2;
        }
        else if(quiz==3){
            var newScore =  Math.round(100 * savedAns3/10);
            var letters = letters3;
        }
        else if(quiz==4){
            var newScore =  Math.round(100 * savedAns4/10);
            var letters = letters4;
        }
        else if(quiz==5){
            var newScore =  Math.round(100 * savedAns5/10);
            var letters = letters5;
        }
        else if(quiz==6){
            var newScore =  Math.round(100 * savedAns6/10);
            var letters = letters6;
        }
        else if(quiz==7){
            var newScore =  Math.round(100 * savedAns7/8);
            var letters = letters7;
        }
        else if(quiz==15){
            var newScore = Math.round(100 * savedAns8/10);
            var letters = letters1;
            timestamp=document.getElementById("counter8").innerHTML;
        }else if(quiz==16){
            var newScore = Math.round(100 * savedAns9/10);
            var letters = letters2;
            timestamp=document.getElementById("counter9").innerHTML;
        }

        else{
            var newScore = 120;
            var letters = 0;
        }
        
console.log(letters1);
//ajax to send data to php file
$.ajax({
            method: "post",
            url:'../web-service/login.php',
            data: {'login' : 1, 'user' : user, 'pass' : pass, 'quiz' : quiz, 'newScore' : newScore, 'letters' : letters, 'timestamp' : timestamp}, 

//if success
            success: function(data){
                string = data;
                stats = string.split(',');
                //display logged in with alert
                alert(stats[0]);


                if(data.indexOf('in')>=0){


                    
                    console.log(stats[2]);
                    //updates stats 
                    document.getElementById("best1").innerHTML="Best score: "+stats[1]+"%";
                    document.getElementById("last1").innerHTML="Last score: "+stats[2]+"%";
                    document.getElementById("best2").innerHTML="Best score: "+stats[3]+"%";
                    document.getElementById("last2").innerHTML="Last score: "+stats[4]+"%";
                    document.getElementById("best3").innerHTML="Best score: "+stats[5]+"%";
                    document.getElementById("last3").innerHTML="Last score: "+stats[6]+"%";
                    document.getElementById("best4").innerHTML="Best score: "+stats[7]+"%";
                    document.getElementById("last4").innerHTML="Last score: "+stats[8]+"%";
                    document.getElementById("best5").innerHTML="Best score: "+stats[9]+"%";
                    document.getElementById("last5").innerHTML="Last score: "+stats[10]+"%";
                    document.getElementById("best6").innerHTML="Best score: "+stats[11]+"%";
                    document.getElementById("last6").innerHTML="Last score: "+stats[12]+"%";
                    document.getElementById("best7").innerHTML="Best score: "+stats[13]+"%";
                    document.getElementById("last7").innerHTML="Last score: "+stats[14]+"%";
                    document.getElementById("time1").innerHTML="Best time: " +stats[61];
                    document.getElementById("time2").innerHTML="Best time: " +stats[62];


                    document.getElementById("name").innerHTML="Hi "+user+"!";
                    document.getElementById("logout").style.display="inline-block";
                    $('#loglink').hide();$('#reglink').hide();
                    loggedIn = true;
                    
                    if(quiz==0){
                        $('#login').hide();$('#main').show();$('#progressBtn').show();
                    }

                    else if(quiz==1){
                        $('#login').hide();$('#banner').show();
                        $("#r1").show();$(".hidden1").show();$('.stats1').show();$("#logreg").show();   numQsAsked=0;quiz=8;
                        document.getElementById("qNum").innerHTML = "Question "+ (numQsAsked+1);
                        if(loggedIn){
                            $('.stats1').show();
                            }else{
                                $('.stats1').hide();
                        }
                    }
                    else if(quiz==2){
                        $('#login').hide();$('#banner').show();
                        $("#r2").show();$(".hidden2").show();$('.stats2').show();$("#logreg").show();   numQsAsked2=0;quiz=9;
                        document.getElementById("qNum").innerHTML = "Question "+ (numQsAsked2+1);
                        if(loggedIn){
                            $('.stats2').show();
                            }else{
                                $('.stats2').hide();
                        }
                    }  
                    else if(quiz==3){
                        $('#login').hide();$('#banner').show();
                        $("#r3").show();$(".hidden3").show();$('.stats3').show();$("#logreg").show();   numQsAsked3=0;quiz=10;
                        document.getElementById("qNum").innerHTML = "Question "+ (numQsAsked3+1);
                        if(loggedIn){
                            $('.stats3').show();
                            }else{
                                $('.stats3').hide();
                        }
                    } 
        else if(quiz==4){
                        $('#login').hide();$('#banner').show();
                        $("#r4").show();$(".hidden4").show();$('.stats4').show();$("#logreg").show();   numQsAsked4=0;quiz=11;
                        document.getElementById("qNum").innerHTML = "Question "+ (numQsAsked4+1);
                        if(loggedIn){
                            $('.stats4').show();
                            }else{
                                $('.stats4').hide();
                        }
                    } 
                    else if(quiz==5){
                        $('#login').hide();$('#banner').show();
                        $("#r5").show();$(".hidden5").show();$('.stats5').show();$("#logreg").show();   numQsAsked5=0;quiz=12;
                        document.getElementById("qNum").innerHTML = "Question "+ (numQsAsked5+1);
                        if(loggedIn){
                            $('.stats5').show();
                            }else{
                                $('.stats5').hide();
                        }
                    }
                    else if(quiz==6){
                        $('#login').hide();$('#banner').show();
                        $("#r6").show();$(".hidden6").show();$('.stats6').show();$("#logreg").show();   numQsAsked6=0;quiz=13;
                        document.getElementById("qNum").innerHTML = "Question "+ (numQsAsked6+1);
                        if(loggedIn){
                            $('.stats6').show();
                            }else{
                                $('.stats6').hide();
                        }
                    }  
                    else if(quiz==7){
                        $('#login').hide();$('#banner').show();
                        $("#r7").show();$(".hidden7").show();$('.stats7').show();$("#logreg").show();   numQsAsked7=0;quiz=14;
                        document.getElementById("qNum").innerHTML = "Question "+ (numQsAsked7+1);
                        if(loggedIn){
                            $('.stats7').show();
                            }else{
                                $('.stats7').hide();
                        }
                    } 

                    else if(quiz==8){
                        $('#login').hide();$('#r1').show();$(".hidden1").show();$(".stats1").show();$('#banner').show();
                    }
                    else if(quiz==9){
                        $('#login').hide();$('#r2').show();$(".hidden2").show();$(".stats2").show();$('#banner').show();
                    }
                    else if(quiz==10){
                        $('#login').hide();$('#r3').show();$(".hidden3").show();$(".stats3").show();$('#banner').show();
                    }
                    else if(quiz==11){
                        $('#login').hide();$('#r4').show();$(".hidden4").show();$(".stats4").show();$('#banner').show();
                    }
                    else if(quiz==12){
                        $('#login').hide();$('#r5').show();$(".hidden5").show();$(".stats5").show();$('#banner').show();
                    }
                    else if(quiz==13){
                        $('#login').hide();$('#r6').show();$(".hidden6").show();$(".stats6").show();$('#banner').show();
                    }
                    else if(quiz==14){
                        $('#login').hide();$('#r7').show();$(".hidden7").show();$(".stats7").show();$('#banner').show();
                    }
                    else if(quiz==15){
                        $('#login').hide();$('#r1').show();$(".hidden1").show();$(".stats1").show();$('#banner').show();
                        reset();
                    }
                    else if(quiz==16){
                        $('#login').hide();$('#r2').show();$(".hidden2").show();$(".stats2").show();$('#banner').show();
                        reset();
                    }


                    for(var i=0;i<46;i++){
                        if(stats[i+15]==1){
                            letToggle[i]=1;
                        }
                        console.log(letToggle[i]);
                    }

                }
            }

            
        });
    });

var toggle = false;

$('#progressBtn').on('click', function(){
    if(!toggle){
        toggle=true;
        document.getElementById("banimg").src="hirbanner2.jpg";
    for(var i=1; i<47;i++){
        if(letToggle[i-1]==1){
            
            document.getElementById(i).src="progressBlack/"+i+".jpg";

        }
        else{
            document.getElementById(i).src="progressGrey/"+i+".jpg";
        }
    }
}else{
    for(var i=1; i<47;i++){
        document.getElementById(i).src="originalLetters/"+i+".jpg";
        document.getElementById("banimg").src="hirbanner.jpg";
        toggle=false;
    }
}
})


    $('#logout').on('click', function(){
        $('.stats1').hide();$('.stats2').hide();$('.stats3').hide();$('.stats4').hide();$('.stats5').hide();$('.stats6').hide();$('.stats7').hide();
        loggedIn = false;
    })

});
