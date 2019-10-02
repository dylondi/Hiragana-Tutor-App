<?php 
session_start();

ini_set('error_reporting', E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED);

//if login
if(isset($_POST['login'])){

   //db connection
   $con = mysqli_connect("localhost", "root", "", "hiraganatutor");
   //variables posted 
   $user = $_POST['user'] ;
   $pass = $_POST['pass'] ;
   $newScore = $_POST['newScore'];
   $quiz = $_POST['quiz'];
   $myarray = $_POST['letters'];
   $timestamp = $_POST['timestamp'];

   //matching inputs with db 
   $data = ("SELECT id FROM users Where username = '$user' AND password = '$pass'");
   $query = mysqli_query($con, $data);

   //if login matches start login session for that user
   if(mysqli_num_rows($query)>0){
   	$_SESSION['loggedIN']='1';
   	$_SESSION['user']=$user;

      //selecting all previous best scores and times
   	$bestScoreCheck = mysqli_query($con, "SELECT * FROM users Where username = '$user' AND password = '$pass'");
   	$rows = mysqli_fetch_array($bestScoreCheck);
   	
   	
      //grabbing best previous data from db and saving in variables 
   	$q1best = $rows['q1best'];
   	$q2best = $rows['q2best'];
   	$q3best = $rows['q3best'];
   	$q4best = $rows['q4best'];
   	$q5best = $rows['q5best'];
   	$q6best = $rows['q6best'];
   	$q7best = $rows['q7best'];
   	$q1last = $rows['q1last'];
   	$q2last = $rows['q2last'];
   	$q3last = $rows['q3last'];
   	$q4last = $rows['q4last'];
   	$q5last = $rows['q5last'];
   	$q6last = $rows['q6last'];
   	$q7last = $rows['q7last'];
   	$q1time = $rows['q1time'];
      $q2time = $rows['q2time'];


      //grabbing data showing if you have learned each indivisual letter by toggle button on main page 
      $a = array($rows['a1'],$rows['a2'],$rows['a3'],$rows['a4'],$rows['a5'],$rows['a6'],$rows['a7']);
      $b = array($rows['b1'],$rows['b2'],$rows['b3'],$rows['b4'],$rows['b5'],$rows['b6'],$rows['b7']);
      $c = array($rows['c1'],$rows['c2'],$rows['c3'],$rows['c4'],$rows['c5'],$rows['c6'],$rows['c7']);
      $d = array($rows['d1'],$rows['d2'],$rows['d3'],$rows['d4'],$rows['d5'],$rows['d6'],$rows['d7']);
      $e = array($rows['e1'],$rows['e2'],$rows['e3'],$rows['e4'],$rows['e5'],$rows['e6'],$rows['e7']);
      $f = array($rows['f1'],$rows['f2'],$rows['f3'],$rows['f4'],$rows['f5'],$rows['f6'],$rows['f7']);
      $g = array($rows['g1'],$rows['g2'],$rows['g3'],$rows['g4']);

      //quiz(x) is complete and saved -> save the score as last score in a variable and new best score if better than previous best in a variable
      if($quiz==1){
       $q1last = $newScore;
       if($newScore>$rows['q1best'])
         $q1best = $newScore;
      }
      else if($quiz==2){
       $q2last = $newScore;
       if($newScore>$rows['q2best'])
         $q2best = $newScore;
      }
      if($quiz==3){
       $q3last = $newScore;
       if($newScore>$rows['q3best'])
         $q3best = $newScore;
      }
      if($quiz==4){
       $q4last = $newScore;
       if($newScore>$rows['q4best'])
         $q4best = $newScore;
      }
      if($quiz==5){
       $q5last = $newScore;
       if($newScore>$rows['q5best'])
         $q5best = $newScore;
      }
      if($quiz==6){
       $q6last = $newScore;
       if($newScore>$rows['q6best'])
         $q6best = $newScore;
      }
      if($quiz==7){
       $q7last = $newScore;
       if($newScore>$rows['q7best'])
         $q7best = $newScore;
      }

      //if timed quiz 1 is completed 
      if($quiz==15&&$timestamp!="00:00:00"){
        $dbarr = explode(":", $q1time);

        $dbhour = $dbarr[0];
        $dbmin = $dbarr[1];
        $dbsec = $dbarr[2];


        $newtime = explode(":", $timestamp);

        $newhour = $newtime[0];
        $newmin = $newtime[1];
        $newsec = $newtime[2];

      //if never set time before (ie. 00:00:00 is previous) set the new best to current time
        if($q1time=="00:00:00"){

           $queryT = "UPDATE  users SET q1time = ('$timestamp') WHERE username = '$user'";
           $resultT = mysqli_query($con, $queryT);
           echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3], $timestamp , $q2time" ;
           exit();
        }

        //next three else if's update the best time to current time if its better
        else if($dbhour>$newhour){
         $queryT = "UPDATE  users SET q1time = ('$timestamp') WHERE username = '$user'";
         $resultT = mysqli_query($con, $queryT);
         echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3], $timestamp , $q2time " ;
         exit();
        } 
        else if($dbhour==$newhour&&$dbmin>$newmin){
         $queryT = "UPDATE  users SET q1time = ('$timestamp') WHERE username = '$user'";
         $resultT = mysqli_query($con, $queryT);
         echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3], $timestamp , $q2time" ;
         exit();
        }
        else if($dbhour==$newhour&&$dbmin==$newmin&&$dbsec>$newsec){
            $queryT = "UPDATE  users SET q1time = ('$timestamp') WHERE username = '$user'";
            $resultT = mysqli_query($con, $queryT);
            echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3], $timestamp, $q2time " ;
            exit();
         }   
         //this else is hit if you do not beat the previous best time and leaves the previous best time as the best 
         else {
            echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3], $q1time , $q2time" ;
            exit();
         }
      }



      if($quiz==0||$quiz==8||$quiz==9||$quiz==10||$quiz==11||$quiz==12||$quiz==13||$quiz==14){
         echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3] " ;
         exit();
      }

      //if never set time before (ie. 00:00:00 is previous) set the new best to current time
      if($quiz==16&&$timestamp!="00:00:00"){
        $dbarr = explode(":", $q2time);

        $dbhour = $dbarr[0];
        $dbmin = $dbarr[1];
        $dbsec = $dbarr[2];


        $newtime = explode(":", $timestamp);

        $newhour = $newtime[0];
        $newmin = $newtime[1];
        $newsec = $newtime[2];

        //if never set time before (ie. 00:00:00 is previous) set the new best to current time
        if($q2time=="00:00:00"){

           $queryT = "UPDATE  users SET q2time = ('$timestamp') WHERE username = '$user'";
           $resultT = mysqli_query($con, $queryT);
           echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3], $q1time, $timestamp " ;
           exit();
        }
        //next three else if's update the best time to current time if its better
        else if($dbhour>$newhour){
         $queryT = "UPDATE  users SET q2time = ('$timestamp') WHERE username = '$user'";
         $resultT = mysqli_query($con, $queryT);
         echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3], $q1time,$timestamp " ;
         exit();
        }
        else if($dbhour==$newhour&&$dbmin>$newmin){
         $queryT = "UPDATE  users SET q2time = ('$timestamp') WHERE username = '$user'";
         $resultT = mysqli_query($con, $queryT);
         echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3], $q1time,$timestamp " ;
         exit();
       }
       else if($dbhour==$newhour&&$dbmin==$newmin&&$dbsec>$newsec){
         $queryT = "UPDATE  users SET q2time = ('$timestamp') WHERE username = '$user'";
         $resultT = mysqli_query($con, $queryT);
         echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3], $q1time, $timestamp " ;
         exit();
       }    
       //this else is hit if you do not beat the previous best time and leaves the previous best time as the best 
       else {
         echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3], $q1time, $q2time " ;
         exit();
       }
      }


      //if login on other pages(ie. menu pages) rather than logging in when saving score/time then retrieve all previous best scores from db
      if($quiz==0||$quiz==8||$quiz==9||$quiz==10||$quiz==11||$quiz==12||$quiz==13||$quiz==14){
         echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3] , $q1time, $q2time " ;
         exit();
      }

      //check if you just completed quiz one
      else if($newScore<=100&&$quiz==1){
        $query2 = "UPDATE  users SET q1last = ('$newScore') WHERE username = '$user'";
        $results = mysqli_query($con, $query2);

        //check if you beat your best score and if so update in the db 
        if($rows['q1best']<$newScore||$rows['q1best']==null){
         $updateBest = "UPDATE  users SET q1best = ('$newScore') WHERE username = '$user'";
         $update = mysqli_query($con, $updateBest);
      }

      //update letters known in this row
      for ($i=1; $i <= 7; $i++) { 
         if($myarray[$i]==true){
           $a[$i]=1;
           $query3 = "UPDATE  users SET a$i = '1' WHERE username = '$user'";
           $results2 = mysqli_query($con, $query3);


        }
      }

      echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3]  $q1time, $q2time " ;
      exit();
    }
    //check if you just completed quiz two
    else if($newScore<=100&&$quiz==2){
     $query2 = "UPDATE  users SET q2last = ('$newScore') WHERE username = '$user'";
     $results = mysqli_query($con, $query2);

     //check if you beat your best score and if so update in the db 
     if($rows['q2best']<$newScore||$rows['q2best']==null){
      $updateBest = "UPDATE  users SET q2best = ('$newScore') WHERE username = '$user'";
      $update = mysqli_query($con, $updateBest);
     }

     //update letters known in this row
     for ($i=1; $i <= 7; $i++) { 
        if($myarray[$i]==true){
           $b[$i]=1;
           $query3 = "UPDATE  users SET b$i = '1' WHERE username = '$user'";
           $results2 = mysqli_query($con, $query3);
     }
   }
   echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3]  $q1time, $q2time  " ;
   exit();
   }
  //check if you just completed quiz three
  else if($newScore<=100&&$quiz==3){
     $query2 = "UPDATE  users SET q3last = ('$newScore') WHERE username = '$user'";
     $results = mysqli_query($con, $query2);

     //check if you beat your best score and if so update in the db 
     if($rows['q3best']<$newScore||$rows['q3best']==null){
      $updateBest = "UPDATE  users SET q3best = ('$newScore') WHERE username = '$user'";
      $update = mysqli_query($con, $updateBest);
     }
     //update letters known in this row
     for ($i=1; $i <= 7; $i++) { 
       if($myarray[$i]==true){
           $c[$i]=1;
           $query3 = "UPDATE  users SET c$i = '1' WHERE username = '$user'";
           $results2 = mysqli_query($con, $query3);
        }
      }
      echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3]  $q1time, $q2time  " ;
      exit();
   }
   //check if you just completed quiz four
  else if($newScore<=100&&$quiz==4){
     $query2 = "UPDATE  users SET q4last = ('$newScore') WHERE username = '$user'";
     $results = mysqli_query($con, $query2);
     //check if you beat your best score and if so update in the db 
     if($rows['q4best']<$newScore||$rows['q4best']==null){
      $updateBest = "UPDATE  users SET q4best = ('$newScore') WHERE username = '$user'";
      $update = mysqli_query($con, $updateBest);
      }
      //update letters known in this row
      for ($i=1; $i <= 7; $i++) { 
         if($myarray[$i]==true){
           $d[$i]=1;
           $query3 = "UPDATE  users SET d$i = '1' WHERE username = '$user'";
           $results2 = mysqli_query($con, $query3);
        }
      }
      echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3]  $q1time, $q2time  " ;
      exit();
   }
   //check if you just completed quiz five
   else if($newScore<=100&&$quiz==5){
     $query2 = "UPDATE  users SET q5last = ('$newScore') WHERE username = '$user'";
     $results = mysqli_query($con, $query2);
     //check if you beat your best score and if so update in the db 
     if($rows['q5best']<$newScore||$rows['q5best']==null){
      $updateBest = "UPDATE  users SET q5best = ('$newScore') WHERE username = '$user'";
      $update = mysqli_query($con, $updateBest);
      }
     //update letters known in this row
     for ($i=1; $i <= 7; $i++) { 
       if($myarray[$i]==true){
         $e[$i]=1;
         $query3 = "UPDATE  users SET e$i = '1' WHERE username = '$user'";
         $results2 = mysqli_query($con, $query3);
       }
     }
      echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3]  $q1time, $q2time  " ;
      exit();
     }
   //check if you just completed quiz six
   else if($newScore<=100&&$quiz==6){
      $query2 = "UPDATE  users SET q6last = ('$newScore') WHERE username = '$user'";
      $results = mysqli_query($con, $query2);
      //check if you beat your best score and if so update in the db 
      if($rows['q6best']<$newScore||$rows['q6best']==null){
         $updateBest = "UPDATE  users SET q6best = ('$newScore') WHERE username = '$user'";
         $update = mysqli_query($con, $updateBest);
      }
      //update letters known in this row
      for ($i=1; $i <= 7; $i++) { 
         if($myarray[$i]==true){
           $f[$i]=1;
           $query3 = "UPDATE  users SET f$i = '1' WHERE username = '$user'";
           $results2 = mysqli_query($con, $query3);


        }
      }
      echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3]  $q1time, $q2time  " ;
      exit();
   }
   //check if you just completed quiz seven
   else if($newScore<=100&&$quiz==7){
      $query2 = "UPDATE  users SET q7last = ('$newScore') WHERE username = '$user'";
      $results = mysqli_query($con, $query2);
      //check if you beat your best score and if so update in the db 
      if($rows['q7best']<$newScore||$rows['q7best']==null){
       $updateBest = "UPDATE  users SET q7best = ('$newScore') WHERE username = '$user'";
       $update = mysqli_query($con, $updateBest);
      }
      //update letters known in this row
      for ($i=1; $i <= 4; $i++) { 
        if($myarray[$i]==true){
          $g[$i]=1;
          $query3 = "UPDATE  users SET g$i = '1' WHERE username = '$user'";
          $results2 = mysqli_query($con, $query3);
        }
      }
      echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3]  $q1time, $q2time  " ;
      exit();
   }
   echo "Logged in , $q1best, $q1last, $q2best, $q2last, $q3best, $q3last, $q4best, $q4last, $q5best, $q5last, $q6best, $q6last, $q7best, $q7last, $a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6], $b[0], $b[1], $b[2], $b[3], $b[4], $b[5], $b[6], $c[0], $c[1], $c[2], $c[3], $c[4], $c[5], $c[6], $d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $c[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $f[0], $f[1], $f[2], $f[3], $f[4], $f[5], $f[6], $g[0] , $g[1] , $g[2] , $g[3]  $q1time, $q2time  " ;
   exit();
   }
   else{
     echo "Please check your username and password.";
     exit();
   }
}


?>

