<?php
include("includes/element_html_head.php");

?>

  <title>Detail typového řešení | Obce v kruhu.cz</title>
  <link rel="stylesheet" href="assets/css/style_designed.min.css">
  <link rel="stylesheet" href="assets/css/projectDetailDesign2019.css">
</head>

<body>

<?php

include("includes/section_header_menu.php");


?>

<?php
include("includes/tableprojectswebmenu.php");
?>

  <div class="col-md-12 col-xs-12 col-md-push-1 main_column column extraDarkBack" id="main_column">
    <div class="projekty-back">
      <h2 class="projekty-back-title">Cirkulární typová řešení</h2>
    </div>
    <div class="row">
      <div id="projectDetailBody" class="col-md-12">
        
        <br>

          <div>
            <button type="button" class="btn btn-success">
              <a href="http://www.obcevkruhu.cz/index.php#jakNaTo_obcan" style="color:#fff">
                Jsem <strong> občan </strong>, jak dál? &nbsp; <i class="fas fa-user-alt"></i>
              </a></button> 
              &nbsp; &nbsp;
            <button type="button" class="btn btn-warning">
              <a href="http://www.obcevkruhu.cz/index.php#jakNaTo_starosta" style="color:#fff">
                Jsem <strong> starosta </strong>, jak dál? &nbsp; <i class="fas fa-users"></i>
              </a></button>
              &nbsp; &nbsp; 
              <button type="button" class="btn btn-info">
              <a id="pdfLink" href="" style="color:#fff" target="_blank">
                Uložit <strong> PDF </strong> &nbsp; <i class="far fa-file-pdf"></i>
              </a></button> 
          </div>

          <?php
          $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
          $position_in_string = strpos($actual_link, "number=");
          $project_number = substr($actual_link, $position_in_string + 7);

          // security function for injections
          $link = $con;
          $project_number = mysqli_real_escape_string($link, $project_number);
          // just work with first 5 characters
          $project_number = substr($project_number, 0, 5);

          //conect to the database
          //old: $conn = mysqli_conect("md54.wedos.net", "a223948_sbforum", "phx5EXKm", "d223948_sbforum");
          //in case of error during conecting to the database display error
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
          
          $getProjectIdForAhrefLink = $project_number;
          echo "<div id='project_number_value' style='display:none; visibility:hidden'>" . $getProjectIdForAhrefLink ."</div>";

          //Select columns named from "a" to "e" from a database
          $sql = "SELECT kategorie, plny_nazev, plny_popis, podminky_vyuziti, vyuzitelne_produkty, SWOT_analyza, cilova_skupina, ekonomicke_podminky, personálni_narocnost, pravni_aspekty, priklad_praxe, souvisejici_kategorie FROM projety_ce WHERE id='$project_number'";
          //variable to catch the results
          $results = $con-> query($sql);
          //function to fatch the data
          if ($results-> num_rows > 0 ) {
            while ($row = $results-> fetch_assoc()) {
                echo "<p id='projectDetailDesc--nazevTypovehoReseni' style='display:none; visibility:hidden;'>Název typového řešení</p>";

                echo "<h2 id='projectDetail--titul' class='projectDetailDesc--heading'>".$row["plny_nazev"]."</h2>";

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

            }
            echo "";
          }
          else {
            echo "<h3 style='text-align: center; color: coral'>Projekt s vybraným číslem není v databázi. Vyberte existující projekt!</h3>";
          }
          //Close the variable after finishing
          $con-> close();
          ?>

          <?php
          include("includes/displayAddedNewExampleProjects.php");
          ?>

          <div>
            <button type="button" class="btn btn-success">
              <a href="http://www.obcevkruhu.cz/index.php#jakNaTo_obcan" style="color:#fff">
                Jsem <strong> občan </strong>, jak dál? &nbsp; <i class="fas fa-user-alt"></i>
              </a></button> 
              &nbsp; &nbsp;
            <button type="button" class="btn btn-warning">
              <a href="http://www.obcevkruhu.cz/index.php#jakNaTo_starosta" style="color:#fff">
                Jsem <strong> starosta </strong>, jak dál? &nbsp; <i class="fas fa-users"></i>
              </a></button>
              &nbsp; &nbsp;
              <button type="button" class="btn btn-info">
              <a id="pdfLink2" href="" style="color:#fff" target="_blank">
                Uložit <strong> PDF </strong> &nbsp; <i class="far fa-file-pdf"></i>
              </a></button> 

          </div>

      <!-- web to PDF -->
      <!--
      <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>-->
      
      <script src="assets/js/pdfgeneration/package/jspdf.min.js"></script>
      <script src="assets/js/pdfgeneration/simon/fontfreeserifnormal.js"></script>
      <script src="assets/js/pdfgeneration/simon/pdffromhtml.js"></script> 
      <script> 
        var projectNumber = document.querySelector('#project_number_value').innerText;
        var urlString = "projectdetailmpdf.php?projectnumber=" + projectNumber;
        console.log(projectNumber);
        console.log(urlString);
        document.querySelector('#pdfLink').setAttribute('href', urlString);
        document.querySelector('#pdfLink2').setAttribute('href', urlString);
      </script>

      </div>
    </div>



    </div> <!-- closing of the wrapper div, this div stars in the included header file-->
  </div> <!-- closing tag of background -->
</div> <!-- closing tag of background -->

</body>
</html>
