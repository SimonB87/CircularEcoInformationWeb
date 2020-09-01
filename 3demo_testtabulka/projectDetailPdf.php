<?php
//TODO - set UTF 8 according to http://zaachi.com/2008/09/02/fpdf-jak-na-ceske-znaky.html

//set initial PDF library

require("includes/fpdf182/fpdf.php");
$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,10,'Hello World 1!');
$pdf->Cell(40,10,'Hello World 1!');


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
$plnyNazev = "";
$kategorie = "";
$popis = "";
$podminky = "";


//Select columns named from "a" to "e" from a database
$sql = "SELECT kategorie, plny_nazev, plny_popis, podminky_vyuziti, vyuzitelne_produkty, SWOT_analyza, cilova_skupina, ekonomicke_podminky, personálni_narocnost, pravni_aspekty, priklad_praxe, souvisejici_kategorie FROM projety_ce WHERE id='$project_number'";
//variable to catch the results
$results = $con-> query($sql);
//function to fatch the data
if ($results-> num_rows > 0 ) {
  while ($row = $results-> fetch_assoc()) {

      $plnyNazev = $row["plny_nazev"];
      $kategorie = $row["kategorie"];
      $popis = $row["plny_popis"];
      $podminky = $row["podminky_vyuziti"];

      /*echo "<p id='projectDetailDesc--nazevTypovehoReseni' style='display:none; visibility:hidden;'>Název typového řešení</p>";

      echo "<h2 id='projectDetail--titul'>".$row["plny_nazev"]."</h2>";

      echo "<div> <strong id='projectDetailDesc--kategorie'> Kategorie: </strong></div><div id='projectDetail--kategorie'>" .$row["kategorie"]. "</div><br>";

      echo "<div> <strong id='projectDetailDesc--plny_popis'> Plný popis: </strong></div><div id='projectDetail--plny_popis'>" .$row["plny_popis"]. "</div><br>";

      echo "<div> <strong id='projectDetailDesc--podminky_vyuziti'> Podmínky využití / bariéry: </strong></div><div id='projectDetail--podminky_vyuziti'>" .$row["podminky_vyuziti"]. "</div><br>";

      echo "<div> <strong id='projectDetailDesc--vyuzitelne_produkty'> Využitelné typy produktů/ odpadů: </strong></div><div id='projectDetail--vyuzitelne_produkty'>" .$row["vyuzitelne_produkty"]. "</div><br>";

      echo "<div> <strong id='projectDetailDesc--SWOT_analyza'> SWOT analýza: </strong></div><div id='projectDetail--SWOT_analyza'>" .$row["SWOT_analyza"]. "</div><br>";

      echo "<div> <strong id='projectDetailDesc--cilova_skupina'> Cílová skupina: </strong></div><div id='projectDetail--cilova_skupina'>" .$row["cilova_skupina"]. "</div><br>";

      echo "<div> <strong id='projectDetailDesc--ekonomicke_podminky'> Ekonomické podmínky a přínosy: </strong></div><div id='projectDetail--ekonomicke_podminky'>" .$row["ekonomicke_podminky"]. "</div><br>";

      echo "<div> <strong id='projectDetailDesc--personálni_narocnost'> Personální náročnost: </strong></div><div id='projectDetail--personálni_narocnost'>" .$row["personálni_narocnost"]. "</div><br>";

      echo "<div> <strong id='projectDetailDesc--pravni_aspekty'> Právní aspekty: </strong></div><div id='projectDetail--pravni_aspekty'>" .$row["pravni_aspekty"]. "</div><br>";

      echo "<div> <strong id='projectDetailDesc--priklad_praxe'> Příklad z praxe: </strong></div><div id='projectDetail--priklad_praxe'>" .$row["priklad_praxe"]. "</div><br>";

      echo "<div> <strong id='projectDetailDesc--souvisejici_kategorie'> Související kategorie </strong></div><div id='projectDetail--souvisejici_kategorie'>" .$row["souvisejici_kategorie"]. "</div><br>";
      */
  }
  echo "";
}
else {
  echo "<h3 style='text-align: center; color: coral'>Projekt s vybraným číslem není v databázi. Vyberte existující projekt!</h3>";
}
//Close the variable after finishing
$con-> close();

/* //check what is in database
echo "Plny nazev: " . $plnyNazev;
echo "<br>";
echo "Kategorie: " . $kategorie;
*/

$plnyNazev = utf8_decode($plnyNazev);
$popis = utf8_decode($popis);
$podminky = utf8_decode($podminky);

//$plnyNazev = iconv('UTF-8', 'windows-1252', $plnyNazev);
//$popis = iconv('UTF-8', 'windows-1252', $popis);
//$podminky = iconv('UTF-8', 'windows-1252', $podminky);

$pdf->AddPage();
$pdf->SetFont('Arial','',12);
$pdf->Ln(10);
$pdf->Write(8,$plnyNazev);
$pdf->Write(8,$popis);
$pdf->Write(8,$podminky);

//add content to PDF
$pdf->Output();


?>

