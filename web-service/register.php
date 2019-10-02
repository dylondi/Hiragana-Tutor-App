<?php
error_reporting(E_ALL ^ E_NOTICE);
//variables taking in the user and pass entered by user registering
  $userReg = $_POST['userReg'];
  $passReg = $_POST['passReg'];

//db connection
$con = mysqli_connect("localhost", "root", "", "hiraganatutor");


   $sql_u = "SELECT * FROM users WHERE username='$userReg'";
  	$res_u = mysqli_query($con, $sql_u);

//if username already taken
  	if (mysqli_num_rows($res_u) > 0) {
  	  $name_error = "Sorry... username already taken"; 	
  	  echo $name_error;
  	}
    //if username and pass not entered 
  	else if(!$userReg & !$passReg){
    	echo "All fields required!";
    }
    //if no password entered
    else if(!$passReg){
    			echo "Enter password!";
   		}

//if successful registration
  	else{
           $query = "INSERT INTO users (username, password) 
      	    	  VALUES ('$userReg', '$passReg')";
           $results = mysqli_query($con, $query);
           echo 'Account Registered!';
           exit();
  	}
?>