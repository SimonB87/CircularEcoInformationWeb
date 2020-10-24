<?php

require_once __DIR__ . '/../vendor/autoload.php';

$mpdf = new \Mpdf\Mpdf([
  'mode' => 'utf-8',
  'format' => 'A4',
  'margin-top' => 8,
  'margin_header' => 8,     // 30mm not pixel
  'margin_footer' => 8,     // 10mm
  'orientation' => 'P'
]);

//! this is custom for each built location!
require 'config/config2.php';

// security function for injections
$link = $con;
$actual_link = "ODKAZ: " . mysqli_real_escape_string($link,"http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");

$position_in_string = strpos($actual_link, "number=");
$project_number = substr($actual_link, $position_in_string + 7);
$project_number = mysqli_real_escape_string($link, $project_number);
// just work with first 5 characters
$project_number = substr($project_number, 0, 5);

//conect to the database

if($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}

//print the used character set - just for testing
//printf("Initial character set: %s\n", mysqli_character_set_name($con));

// change character set to utf8 - before "utf8"
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
$con->close();

$text_projectInfo_plnyNazev = "<p style='font-size:1.2rem'><strong>Plný název typového řešení:</strong></p> <h3 style='color:#28a745;'>" . $projectInfo_plnyNazev . "</h3>";
$text_projectInfo_kategorie = "<p style='font-size:1.2rem'><strong>Kategorie:</strong></p> <h3>" . $projectInfo_kategorie. "</h3>";
$text_projectInfo_popis = "<h3 style='font-size:1.5rem'>Plný popis typového řešení:</h3><p style='font-weight: 500;font-size:1rem; text-align: justify;'>" . $projectInfo_popis . "</p>";
$text_projectInfo_podminky = "<h3 style='font-size:1.5rem'>Podmínky využití:</h3><p style='font-weight: 500;font-size:1rem; text-align: justify;'>" . $projectInfo_podminky . "</p>";
$text_projectInfo_vyuzitelneProdukty = "<h3 style='font-size:1.5rem'>Využitelné produkty:</h3><p style='font-weight: 500;font-size:1rem; text-align: justify;'>" . $projectInfo_vyuzitelneProdukty . "</p>" ;
$text_projectInfo_swot = "<h3 style='font-size:1.5rem'>SWOT analýza:</h3><p style='font-weight: 500;font-size:1rem; text-align: justify;'>" . $projectInfo_swot . "</p>";
$text_projectInfo_cilovaSkupina  = "<h3 style='font-size:1.5rem'>Cílová skupina:</h3><p style='font-weight: 500;font-size:1rem; text-align: justify;'>" . $projectInfo_cilovaSkupina . "</p>";
$text_projectInfo_ekonomickePodminky = "<h3 style='font-size:1.5rem'>Ekonomické podmínky:</h3><p style='font-weight: 500;font-size:1rem; text-align: justify;'>" . $projectInfo_ekonomickePodminky . "</p>";
$text_projectInfo_personal = "<h3 style='font-size:1.5rem'>Personální náročnost:</h3><p style='font-weight: 500;font-size:1rem; text-align: justify;'>" . $projectInfo_personal . "</p>";
$text_projectInfo_pravni = "<h3 style='font-size:1.5rem'>Právní aspekty:</h3><p style='font-weight: 500;font-size:1rem; text-align: justify;'>" . $projectInfo_pravni . "</p>";
$text_projectInfo_prikladyPraxe = "<h3 style='font-size:1.5rem'>Příklady praxe:</h3><p style='font-weight: 500;font-size:1rem; text-align: justify;'>" . $projectInfo_prikladyPraxe . "</p>";
$text_projectInfo_souvisejiciKategorie = "<h3 style='font-size:1.5rem'>Související kategorie:</h3><p style='font-weight: 500;font-size:1rem; text-align: justify;'>" . $projectInfo_souvisejiciKategorie . "</p>";


$all_text = $text_projectInfo_plnyNazev . $text_projectInfo_kategorie . $text_projectInfo_popis . $text_projectInfo_podminky . $text_projectInfo_vyuzitelneProdukty . $text_projectInfo_swot . $text_projectInfo_cilovaSkupina . $text_projectInfo_ekonomickePodminky . $text_projectInfo_personal . $text_projectInfo_pravni . $text_projectInfo_prikladyPraxe . $text_projectInfo_souvisejiciKategorie;

$mpdf->setHeader("<p><span style='margin: 0.5rem 0rem'> www.obcevkruhu.cz | Strana:" . "{PAGENO}" . "</span> <span style='margin: 0.5rem 0rem'>Datum:</span> ". "{DATE j-m-Y} </p>");

$mpdf->setFooter("<p style='font-size:0.65rem;margin-bottom: 0.5rem;'>" . $actual_link . "</p>");

$mpdf->WriteHTML("<h2 style='margin: 0.5rem 0.5rem;text-align: center;'>Typové řešení pro obce</h2>");

$mpdf->WriteHTML($all_text);

$mpdf->Output();

?>


