<?php

ob_start(); //Turns on output buffering

session_start();

$timezone = date_default_timezone_set("Europe/London");

$con = mysqli_connect("md54.wedos.net", "a223948_sbforum", "phx5EXKm", "d223948_sbforum"); //Connection variable
$con_projects = mysqli_connect("md54.wedos.net", "w223948_typrese", "L4XxA385", "d223948_typrese"); //Connection variable

if(mysqli_connect_errno())

{
	echo "Failed to connect: " . mysqli_connect_errno();
}

?>
