<?php
//TODO - set UTF 8 according to http://zaachi.com/2008/09/02/fpdf-jak-na-ceske-znaky.html

//set initial PDF library - this has to be on top of the file
require("includes/fpdf182/fpdf.php");
$pdf = new FPDF();


//! this is custom for each built location!
require 'config/config2.php';

$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$position_in_string = strpos($actual_link, "number=");
$project_number = substr($actual_link, $position_in_string + 7);

// security function for injections
$link = $con;
$project_number = mysqli_real_escape_string($link, $project_number);
// just work with first 5 characters
$project_number = substr($project_number, 0, 5);

//conect to the database

if($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}

//print the used character set - just for testing
//printf("Initial character set: %s\n", mysqli_character_set_name($con));

/* change character set to utf8 */
if (!mysqli_set_charset($con, "utf8")) {
      printf("Error loading character set utf8: %s\n", mysqli_error($con));
      exit();
} else {
      //printf("Current character set: %s\n", mysqli_character_set_name($con));//used only for testing
}

//prepare variables to store values
$projectInfo_plnyNazev = "";
$projectInfo_kategorie = "";
$projectInfo_popis = "";
$projectInfo_podminky = "";
$projectInfo_vyuzitelneProdukty = "";
$projectInfo_swot = "";
$projectInfo_cilovaSkupina = "";
$projectInfo_ekonomickePodminky = "";
$projectInfo_personal = "";
$projectInfo_pravni = "";
$projectInfo_prikladyPraxe = "";
$projectInfo_souvisejiciKategorie = "";


//Select columns named from "a" to "e" from a database
$sql = "SELECT kategorie, plny_nazev, plny_popis, podminky_vyuziti, vyuzitelne_produkty, SWOT_analyza, cilova_skupina, ekonomicke_podminky, personálni_narocnost, pravni_aspekty, priklad_praxe, souvisejici_kategorie FROM projety_ce WHERE id='$project_number'";
//variable to catch the results
$results = $con-> query($sql);
//function to fatch the data
if ($results-> num_rows > 0 ) {
  while ($row = $results-> fetch_assoc()) {

      $projectInfo_plnyNazev = $row["plny_nazev"];
      $projectInfo_kategorie = $row["kategorie"];
      $projectInfo_popis = $row["plny_popis"];
      $projectInfo_podminky = $row["podminky_vyuziti"];

      $projectInfo_vyuzitelneProdukty = $row["vyuzitelne_produkty"];
      $projectInfo_swot = $row["SWOT_analyza"];
      $projectInfo_cilovaSkupina = $row["cilova_skupina"];
      $projectInfo_ekonomickePodminky = $row["ekonomicke_podminky"];
      $projectInfo_personal = $row["personálni_narocnost"];
      $projectInfo_pravni = $row["pravni_aspekty"];
      $projectInfo_prikladyPraxe = $row["priklad_praxe"];
      $projectInfo_souvisejiciKategorie = $row["souvisejici_kategorie"];

  }
  echo "";
}
else {
  echo "<h3 style='text-align: center; color: coral'>Projekt s vybraným číslem není v databázi. Vyberte existující projekt!</h3>";
}
//Close the variable after finishing
$con-> close();


$projectInfo_plnyNazev = str_replace("<br>","",utf8_decode($projectInfo_plnyNazev));
$projectInfo_popis = str_replace("<br>","",utf8_decode($projectInfo_popis));
$projectInfo_podminky = str_replace("<br>","",utf8_decode($projectInfo_podminky));
$projectInfo_vyuzitelneProdukty = str_replace("<br>","",utf8_decode($projectInfo_vyuzitelneProdukty));
$projectInfo_swot = str_replace("<br>","",utf8_decode($projectInfo_swot));
$projectInfo_cilovaSkupina = str_replace("<br>","",utf8_decode($projectInfo_cilovaSkupina));
$projectInfo_ekonomickePodminky = str_replace("<br>","",utf8_decode($projectInfo_ekonomickePodminky));
/* //TODO
$projectInfo_personal;
$projectInfo_pravni;
$projectInfo_prikladyPraxe;
$projectInfo_souvisejiciKategorie;
*/

//$plnyNazev = iconv('UTF-8', 'windows-1252', $plnyNazev);
//$popis = iconv('UTF-8', 'windows-1252', $popis);
//$podminky = iconv('UTF-8', 'windows-1252', $podminky);

$pdf->AddPage();
$pdf->Ln(10);

$pdf->SetFont('Arial','B',16);
$pdf->Write(8,("\n" . "\n" . utf8_decode("PLNÝ NÁZEV") . "\n" ));
$pdf->SetFont('Arial','',12);
$pdf->Write(8,$projectInfo_plnyNazev);

$pdf->SetFont('Arial','B',16);
$pdf->Write(8,("\n" . "\n" . utf8_decode("POPIS PROJEKTU") . "\n" ));
$pdf->SetFont('Arial','',12);
$pdf->Write(8,$projectInfo_popis);

$pdf->SetFont('Arial','B',16);
$pdf->Write(8,("\n" . "\n" . utf8_decode("PODMÍNKY VYUŽITÍ") . "\n" ));
$pdf->SetFont('Arial','',12);
$pdf->Write(8,$projectInfo_podminky);

$pdf->SetFont('Arial','B',16);
$pdf->Write(8,("\n" . "\n" . utf8_decode("VYUŽITELNÉ PRODUKTY") . "\n" ));
$pdf->SetFont('Arial','',12);
$pdf->Write(8,$projectInfo_vyuzitelneProdukty);

$pdf->SetFont('Arial','B',16);
$pdf->Write(8,("\n" . "\n" . utf8_decode("SWOT ANALÝZA") . "\n" ));
$pdf->SetFont('Arial','',12);
$pdf->Write(8,$projectInfo_swot);

$pdf->SetFont('Arial','B',16);
$pdf->Write(8,("\n" . "\n" . utf8_decode("CÍLOVÁ SKUPINA") . "\n" ));
$pdf->SetFont('Arial','',12);
$pdf->Write(8,$projectInfo_cilovaSkupina);

$pdf->SetFont('Arial','B',16);
$pdf->Write(8,("\n" . "\n" . utf8_decode("EKONOMICKÉ PODMÍNKY") . "\n" ));
$pdf->SetFont('Arial','',12);
$pdf->Write(8,$projectInfo_ekonomickePodminky);

//add content to PDF
$pdf->Output();

?>
