<?php

ob_start(); //Turns on output buffering

session_start();

$timezone = date_default_timezone_set("Europe/London");

$servername="md54.wedos.net";
$username="a223948_sbforum";
$password="phx5EXKm";
$dbname="d223948_sbforum";
// Create the connection
$con= new mysqli($servername,$username,$password,$dbname);
//Check Connection
if($con->connect_error) {
      die("Connection failed: " . $con->connect_error);
}

?>
