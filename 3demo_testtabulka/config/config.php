<?php

ob_start(); //Turns on output buffering

session_start();

$timezone = date_default_timezone_set("Europe/London");

$con = mysqli_connect("localhost", "root", "", "cirksocial"); //Connection variable


$con_projects = mysqli_connect("localhost", "root", "", "cirkprojekty"); //Connection variable

if(mysqli_connect_errno())

{
	echo "Failed to connect: " . mysqli_connect_errno();
}

?>
