<?php

ob_start(); //Turns on output buffering

session_start();

$timezone = date_default_timezone_set("Europe/London");

$servername="localhost";
$username="root";
$password="";
$dbname="cirksocial";
// Create the connection
$con= new mysqli($servername,$username,$password,$dbname);
//Check Connection
if($con->connect_error) {
      die("Connection failed: " . $con->connect_error);
}

?>
