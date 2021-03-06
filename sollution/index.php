<?php
include("includes/element_html_head.php");

?>
  <title>Výběr typových řešení dle témat | Obce v kruhu.cz</title>
  <link rel="stylesheet" href="assets/css/style_designed.min.css">
  <link rel="stylesheet" href="assets/css/checkboxesStyle2019.css">
  <link rel="stylesheet" href="assets/css/projecttablestyle2019.css">
</head>
<body>

<?php

include("includes/section_header_menu.php");

?>
<!-- CSS for the table of projects -->

<script src="assets/js/tabulka.js"></script>
<script src="assets/js/filtertable.js"></script>

<?php
include("includes/tableprojectswebmenu.php");
?>

<div class="col-md-12 col-xs-12 col-md-push-1 main_column column extraDarkBack" id="main_column">
  <div class="table-wrapper">
    <div class="project_table">
        <h1 class="textCenter paddingTopBottom_big">Typová řešení</h1>

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
        </div>
        <br>
        <input type="text" id="mySearchInput" placeholder="Hledej v projektech.." title="Hledat v projektech" class="tableProjectSearchInput" onkeyup="mySearchFunction();">
        <br>

        <br>
        <div class="row actionButtons">
          <div class="actionButtons--itemWrapper col-sm-12 col-md-4 col-lg-4 col-xl-4">
           <button type="button" class="btn btn-success" onclick="setAllSolutionCheckboxes(true);">Přidat všechna řešení <i class="far fa-file-pdf"></i></button>
          </div>
          <div class="actionButtons--itemWrapper col-sm-12 col-md-4 col-lg-4 col-xl-4">
           <button type="button" class="btn btn-primary"><a href="solutionmpdfbatch.php?types=[1002,1003,1203,1204,2202,2204,1105,2003,2303,1103,1207,2002,1201,2102,1001,1107,1102,1101,1205,2103,1106,2301,1104,1202,2201,1302,2001,1206,1303,1301,2203,2101,1006,1004,1005,2302,2304]" target="_blank" style="text-decoration:none;color:#fff;"> 
           Stáhnout všechna řešení v katalogu <i class="far fa-file-pdf"></i></a></button>
          </div>
          <div class="actionButtons--itemWrapper col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <button type="button" class="btn btn-warning" onclick="setAllSolutionCheckboxes(false);">Pročistit výběr řešení</button>
          </div>
        </div>

        <table id="mySearchTable" class="table tableDesign2019">
          <tbody>
            <tr class="mySearchTable_header">
                <th>Plný název 
                  <br>
                  <span class="sortAction" onclick="sortTable(0)"> <em>Seřadit</em> <i class="fas fa-sort"></i> </span>
                  <br>
                  <!-- <input type="text" class="hledej form-control" id="myInput0" onkeyup="mySearchColumnFunction(0)" placeholder="Hledej ..." title="Hledej ..."> -->
                </th>
                <th data-breakpoints="xs sm md" style="min-width: 22vw;">
                  <strong class="">Plný popis</strong>
                  <br>
                  <span class="sortAction" onclick="sortTable(1)"> <em>Seřadit</em> <i class="fas fa-sort"></i> </span>
                  <br>
                  <!-- <input type="text" class="hledej form-control" id="myInput1" onkeyup="mySearchColumnFunction(1)" placeholder="Hledej ..." title="Hledej ..."> -->
                </th>

                <th data-breakpoints="xs sm">Kategorie
                  <br>
                  <span class="sortAction" onclick="sortTable(2)"> <em>Seřadit</em> <i class="fas fa-sort"></i> </span>
                  <br>
                  <!-- <input type="text" class="hledej form-control" id="myInput4" onkeyup="mySearchColumnFunction(2)" placeholder="Hledej ..." title="Hledej ..."> -->
                </th>

                <th data-breakpoints="xs sm">Cílová skupina 
                  <br>
                  <span class="sortAction" onclick="sortTable(3)"> <em>Seřadit</em> <i class="fas fa-sort"></i> </span>
                  <br>
                 <!--  <input type="text" class="hledej form-control" id="myInput2" onkeyup="mySearchColumnFunction(3)" placeholder="Hledej ..." title="Hledej ..."> -->
                </th>
                <th data-breakpoints="xs sm md">Související kategorie 
                  <br>
                  <span class="sortAction" onclick="sortTable(4)"> <em>Seřadit</em> <i class="fas fa-sort"></i> </span>
                  <br>
                  <!-- <input type="text" class="hledej form-control" id="myInput3" onkeyup="mySearchColumnFunction(4)" placeholder="Hledej ..." title="Hledej ..."> -->
                </th>
                <th data-breakpoints="xs">Využitelné produkty
                  <br>
                  <span class="sortAction" onclick="sortTable(5)"> <em>Seřadit</em> <i class="fas fa-sort"></i> </span>
                  <br>
                  <!-- <input type="text" class="hledej form-control" id="myInput4" onkeyup="mySearchColumnFunction(5)" placeholder="Hledej ..." title="Hledej ..."> -->
                </th>
                <th class="headerIcon">
                  <a id="pdfBatchDownload" class="pdfDownloadLink" target="_blank" href="#" solutions=""> 
                    <button type="button" class="btn btn-primary" >
                      Stáhnout vybraná řešení 
                      <span class="pdfIcon headerIcon textCenter">
                        <i class="far fa-file-pdf"></i> 
                      <span>
                    </button>
                  </a> 
                </th>
            </tr>

            <?php
             //sanitize string
             $link = $con;
             $url_project_search = mysqli_real_escape_string($link, "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");

             //work on getting the search results
             $search_position_in_string = strpos($url_project_search, "searchstring=[");
             $search_query_description_length = strlen("searchstring=[");
             $position_to_cut_search_string = $search_position_in_string + $search_query_description_length;
             $search_query = substr($url_project_search, $position_to_cut_search_string);
             $search_query = substr($search_query, 0, -1);
             $search_query_array = explode(',', $search_query);

             //test start
             //echo "<br> search_query_string:: ";
             //print_r($search_query);
             //echo "<br>";
             //test end

             $search_columns = array();
             
             //change codes for columns
             foreach ($search_query_array as $item) {

              if ( $item == "01") {$item = "podkate_Trideni_odpadu";}
              else if ( $item == "02") {$item = "podkate_Snizeni_nakladu_OH";}
              else if ( $item == "03") {$item = "podkate_Vyuziti_bio_odpadu";}
              else if ( $item == "04") {$item = "podkate_Nebezpecny_odpad";}
              else if ( $item == "05") {$item = "podkate_Kompostovani";}
              else if ( $item == "06") {$item = "podkate_Nakladani_vodou";}
              else if ( $item == "07") {$item = "podkate_Zadej_verejne_zakazky";}
              else if ( $item == "08") {$item = "podkate_Podpora_lokalpodnikani";}
              else if ( $item == "09") {$item = "podkate_Pece_verejny_prostor";}
              else if ( $item == "10") {$item = "podkate_Udrzitelna_doprava";}
              else if ( $item == "11") {$item = "podkate_Sber_odpadu";}
              else if ( $item == "12") {$item = "podkate_Vzniku_odpadu";}
              else if ( $item == "13") {$item = "podkate_Zelene_uradovani";}
              else if ( $item == "14") {$item = "podkate_Inovativni_reseni";}
              else if ( $item == "15") {$item = "podkate_Obecni_akce";}
              else if ( $item == "16") {$item = "podkate_Recyklace_odpadu";}
              else if ( $item == "17") {$item = "podkate_Zpetny_odber";}
              else if ( $item == "18") {$item = "podkate_ObecniMajetek_aPodnikani";}
              else if ( $item == "19") {$item = "podkate_Vzdelavani";}
              else if ( $item == "20") {$item = "podkate_Cerne_skladky";}
              else if ( $item == "21") {$item = "podkate_Omezeni_obalu";}
              else if ( $item == "22") {$item = "podkate_Energeticka_biomasa";}
              else if ( $item == "23") {$item = "podkate_Sdileni";}
              else {
                echo "<br><h4 style='color:red;'>Jsou zadány ve vyhledávání špatné hodnoty!</h4><br>";
              }

              array_push($search_columns, $item);

            }

            //test start
            //print_r($search_columns);
            //echo "<br> search project counts :: ";
            //print_r(count($search_columns));
            //echo "<br>";
            //test end
              

            //conect to the database
            //old: $conn = mysqli_conect("md54.wedos.net", "a223948_sbforum", "phx5EXKm", "d223948_sbforum");
            //in case of error during conecting to the database display error
            if (!$con) {
              die('Connect Error: ' . mysqli_connect_error());
            }

            //truncate a string only at a whitespace (by nogdog)
            function truncate($text, $length) {
              $length = abs((int)$length);
              if(strlen($text) > $length) {
                $text = preg_replace("/^(.{1,$length})(\s.*|$)/s", '\\1...', $text);
                return($text);
              }
              return($text);
            }

            //print the used character set - just for testing
            //printf("Initial character set: %s\n", mysqli_character_set_name($con_projects));

            /* change character set to utf8 */
            if (!mysqli_set_charset($con_projects, "utf8")) {
                    printf("Error loading character set utf8: %s\n", mysqli_error($con_projects));
                    exit();
            } else {
                    //printf("Current character set: %s\n", mysqli_character_set_name($con_projects));//used only for testing
            }

            //Select columns named from "a" to "e" from a database
            if ( count($search_columns) == 1 ) {
              $sql = "SELECT id, web_nazev, kategorie, plny_nazev, plny_popis, cilova_skupina, souvisejici_kategorie, vyuzitelne_produkty FROM typova_reseni WHERE " . $search_columns[0] . " > 0 ORDER BY " . $search_columns[0] . " DESC";
            } else if ( count($search_columns) == 0 ) {
              $sql = "SELECT id, web_nazev, kategorie, plny_nazev, plny_popis, cilova_skupina, souvisejici_kategorie, vyuzitelne_produkty FROM typova_reseni";
            } else {


              $searchTotal = $search_columns[0];

              for ($x = 1; $x < count($search_columns); $x++) {
                $searchTotal = $searchTotal . " + " . $search_columns[$x];
              }

              $searchTotal = ", ". $searchTotal;
              $searchTotal = $searchTotal . " AS searchTotal ";


              $sql = "SELECT id, web_nazev, kategorie, plny_nazev, plny_popis, cilova_skupina, souvisejici_kategorie, vyuzitelne_produkty" . $searchTotal . "FROM typova_reseni WHERE " . $search_columns[0] . " > 0 ";
              
              for ($x = 1; $x < count($search_columns); $x++) {
                $sqlAdditionUnion = " UNION " . "SELECT id, web_nazev, kategorie, plny_nazev, plny_popis, cilova_skupina, souvisejici_kategorie, vyuzitelne_produkty " . $searchTotal . "FROM typova_reseni WHERE " . $search_columns[$x] . " > 0 ";
                $sql = $sql . $sqlAdditionUnion;
              }

              $sql = $sql . "ORDER BY searchTotal DESC";

              //test
              //echo "<br>" . $sql . "<br>";//test
            }
 
            //variable to catch the results
            $results = $con_projects-> query($sql);
            //function to fatch the data
            if ($results-> num_rows > 0 ) {
                while ($row = $results-> fetch_assoc()) {

                    $rowEdit_plny_popis = truncate($row["plny_popis"], 600);
                    $rowEdit_vyuzitelne_produkty = truncate($row["vyuzitelne_produkty"], 600);
                    
                    echo "<tr data-expanded='false' class='tableProjectRowStart'><td><strong> <a href='projectdetail.php?projectnumber=".$row["id"]."' target='_blank'>".$row["plny_nazev"]."</a></strong></td><td>".$rowEdit_plny_popis."</td> <td>".$row["kategorie"]."</td> <td>".$row["cilova_skupina"]."</td><td>".$row["souvisejici_kategorie"]."</td><td>". $rowEdit_vyuzitelne_produkty ."</td> <td> <input type='checkbox' id='type_" . $row["id"] . "' onclick='addTypeIDtoLink(" . $row["id"] . ")' name='Typ_". $row["id"] ."' solutionid='". $row["id"] ."' class='includeSolutionToPdf'>" . 
                    " <label class='labelAddToPDF' onclick='clickCheckbox(". $row["id"] .");' for='typ_". $row["id"] ."'>" . 
                    "<span class='addToPDF '> <i class='fas fa-plus plusIcon addIcon'></i> <i class='far fa-file-pdf pdfIcon checkboxIcon'></i> </span></label></td> </tr>";
                }
                echo "";
            }
            else {
                echo "<em>Počet výsledků: 0 </em>";
            }
            //Close the variable after finishing
            $con_projects-> close();

            ?>

            </tbody>
          </table>
        </div>
      </div>
    </div> <!-- closing of the wrapper div, this div stars in the included header file-->
  </div> <!-- closing tag of background -->
</div> <!-- closing tag of background -->

<script src="assets/js/projectSearchTable.js"></script>
<script src="assets/libs/footablebootstrap/js/footable.js" defer></script>
<script defer>
jQuery(function($){
    $('.table').footable();
  });
/*
Sollution guide 15.10.2020: http://fooplugins.github.io/FooTable/docs/examples/basic/single-header.html
*/
</script>
<script src="assets/js/createPdfBatchLink.js" defer></script>

</body>
</html>
