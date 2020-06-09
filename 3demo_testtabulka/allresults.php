<?php
include("includes/header.php");
?>
<!-- CSS for the table of projects -->

<script src="assets/js/tabulka.js"></script>
<script src="assets/js/filtertable.js"></script>

<?php
include("includes/tableprojectswebmenu.php");
?>

<div class="col-md-12 col-xs-12 main_column column">

    <div class="project_table">
      <h1 style="text-align:center;">Typová řešení</h1>

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
  
        <div class="project_table_info">Stránka je optimalizována pro rozlišení s šířkou 1000px a větší.</div>
        <br>
            <input type="text" id="mySearchInput" onkeyup="mySearchFunction()" placeholder="Hledej v projektech.." title="Hledat v projektech">
        <br>

        <br>

        <table id="mySearchTable" class="search_project_table">
            <tr class="mySearchTable_header">
                <th>Plný název 
                  <br>
                  <span onclick="sortTable(0)"><i>Seřadit</i></span>
                  <br>
                  <input type="text" class="hledej form-control" id="myInput0" onkeyup="mySearchColumnFunction(0)" placeholder="Hledej ..." title="Hledej ...">
                </th>
                <th>Plný popis 
                  <br>
                  <span onclick="sortTable(1)"><i>Seřadit</i></span>
                  <br>
                  <input type="text" class="hledej form-control" id="myInput1" onkeyup="mySearchColumnFunction(1)" placeholder="Hledej ..." title="Hledej ...">
                </th>

                <th>Kategorie
                  <br>
                  <span onclick="sortTable(2)"><i>Seřadit</i></span>
                  <br>
                  <input type="text" class="hledej form-control" id="myInput4" onkeyup="mySearchColumnFunction(2)" placeholder="Hledej ..." title="Hledej ...">
                </th>

                <th>Cílová skupina 
                  <br>
                  <span onclick="sortTable(3)"><i>Seřadit</i></span>
                  <br>
                  <input type="text" class="hledej form-control" id="myInput2" onkeyup="mySearchColumnFunction(3)" placeholder="Hledej ..." title="Hledej ...">
                </th>
                <th>Související kategorie 
                  <br>
                  <span onclick="sortTable(4)"><i>Seřadit</i></span>
                  <br>
                  <input type="text" class="hledej form-control" id="myInput3" onkeyup="mySearchColumnFunction(4)" placeholder="Hledej ..." title="Hledej ...">
                </th>
                <th>Využitelné produkty
                  <br>
                  <span onclick="sortTable(5)"><i>Seřadit</i></span>
                  <br>
                  <input type="text" class="hledej form-control" id="myInput4" onkeyup="mySearchColumnFunction(5)" placeholder="Hledej ..." title="Hledej ...">
                </th>
            </tr>

            <?php
            //conect to the database
            //old: $conn = mysqli_conect("md54.wedos.net", "a223948_sbforum", "phx5EXKm", "d223948_sbforum");
            //in case of error during conecting to the database display error
            if ($con_projects-> conect_error) {
                die("conection Failed:". $con_projects-> conect_error);
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
            $sql = "SELECT id, web_nazev, kategorie, plny_nazev, plny_popis, cilova_skupina, souvisejici_kategorie, vyuzitelne_produkty from typova_reseni ORDER BY plny_nazev ASC";
            //variable to catch the results
            $results = $con_projects-> query($sql);
            //function to fatch the data
            if ($results-> num_rows > 0 ) {
                while ($row = $results-> fetch_assoc()) {

                    $rowEdit_plny_popis = truncate($row["plny_popis"], 600);
                    $rowEdit_vyuzitelne_produkty = truncate($row["vyuzitelne_produkty"], 600);
                    
                    echo "<tr class='tableProjectRowStart'><td><strong> <a href='projecdetail.php?projectnumber=".$row["id"]."'>".$row["plny_nazev"]."</a></strong></td><td>".$rowEdit_plny_popis."</td> <td>".$row["kategorie"]."</td> <td>".$row["cilova_skupina"]."</td><td>".$row["souvisejici_kategorie"]."</td><td>". $rowEdit_vyuzitelne_produkty ."</td></tr>";
                }
                echo "";
            }
            else {
                echo "0 result";
            }
            //Close the variable after finishing
            $con_projects-> close();

            ?>

            <tr>
                <td>KONEC TABULKY</td>
            </tr>

        </table>

    </div>


</div>


</div> <!-- closing of the wrapper div, this div stars in the included header file-->

<script src="assets/js/projectSearchTable.js"></script>

</body>
</html>
