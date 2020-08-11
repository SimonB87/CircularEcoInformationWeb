<!DOCTYPE html>
<!--
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
  <head>

  <?php
	include("includes/mainsitehead.php");
  ?>

  </head>
  <body> <!-- class="is-preload" -->
    <!-- Wrapper -->
    <div id="wrapper">

      <!-- Main -->
      <div id="main">

				<article id="calc_input" class="calcArticle"> 
          <div class="close">Close</div>
				  <h2 class="major">Odpadová kalkulačka</h2>
					<p>Porovnejte Vaše výsledky s Vaším krajem nebo s celou republikou.</p>
					<form method="post" action="#" class="wasteCaclForm">
						<div class="fields form_style">
							<div class="field half">
								<label for="region_cr">Kraj ČR </label>
								<select name="region_cr" id="region_cr">
									<option value="Vyberte ...">Vyberte ...</option>
									<option value="jm">Jihomoravský</option>
									<option value="kr">Královéhradecký</option>
									<option value="ms">Moravskoslezský</option>
									<option value="zl">Zlínský</option>
									<option value="vy">Vysočina</option>
									<option value="ol">Olomoucký</option>
									<option value="pa">Pardubický</option>
									<option value="us">Ústecký</option>
									<option value="ka">Karlovarský</option>
									<option value="li">Liberecký</option>
									<option value="pl">Plzeňský</option>
									<option value="sc">Středočeský</option>
									<option value="jc">Jihočeský</option>
									<option value="cr">Průměr ČR</option>

								</select>
							</div>
							<div class="field half">
								<label for="town_name">Název obce </label>
								<input type="text" name="town_name" id="town_name" />
							</div>
						

							<div class="formToglerControls">
              <ul class="actions formToglerControls_items">
                <li id="formToglerControls_item1"><a href="#" class="button primary" onclick="switchFormView(1);">1</a></li>
                <li id="formToglerControls_item2"><a href="#" class="button" onclick="switchFormView(2);">2</a></li>
                <li id="formToglerControls_item3"><a href="#" class="button" onclick="switchFormView(3);">3</a></li>
              </ul>

<!-- 								<ul class="formToglerControls__itemNumbers">
									<li class="formToglerControls__itemNumber itemNumber1 active">1
									</li>
									<li class="formToglerControls__itemNumber itemNumber2">2
									</li>
									<li class="formToglerControls__itemNumber itemNumber3">3
									</li>
								</ul> -->
							</div>

							<!-- formTogler_panel1 childs -->
							 
								<div class="field half formTogler_panel1">
									<label for="naklady_oh">Náklady na OH <br>(Kč/obyvatele)</label>
									<input type="text" name="naklady_oh" id="naklady_oh" class="wasteResult01"/>
								</div>
								<div class="field half formTogler_panel1">
									<label for="prijmy_oh">Přijmy z OH <br>(Kč/obyvatele)</label>
									<input type="text" name="prijmy_oh" id="prijmy_oh" class="wasteResult02"/>
								</div>
								<div class="field half formTogler_panel1">
									<label for="naklady_tridenySber_tuny">Náklady na tříděný sběr <br>(Kč/t)</label>
									<input type="text" name="naklady_tridenySber_tuny" id="naklady_tridenySber_tuny" class="wasteResult03"/>
								</div>
								<div class="field half formTogler_panel1">
									<label for="naklady_tridenySber_perCapita">Náklady na tříděný sběr <br>(Kč/obyvatele)</label>
									<input type="text" name="naklady_tridenySber_perCapita" id="naklady_tridenySber_perCapita" class="wasteResult04"/>
								</div>
								<div class="field half formTogler_panel1">
									<label for="naklady_sko_tuny">Náklady za SKO <br>(Kč/t)</label>
									<input type="text" name="naklady_sko_tuny" id="naklady_sko_tuny" class="wasteResult05" />
								</div>
								<div class="field half formTogler_panel1">
									<label for="naklady_sko_perCapita">Náklady za SKO <br>(Kč/obyvatele)</label>
									<input type="text" name="naklady_sko_perCapita" id="naklady_sko_perCapita" class="wasteResult06"/>
								</div>
								<div class="field half formTogler_panel1">
									<label for="produkce_odpady">Produkce odpadů - celková <br>(kg/obyvatele)</label>
									<input type="text" name="produkce_odpady" id="produkce_odpady" class="wasteResult07"/>
								</div>
								<div class="field half formTogler_panel1">
									<label for="produkce_o_odpadu">Produkce O odpadů  <br>(kg/obyvatele)</label>
									<input type="text" name="produkce_o_odpadu" id="produkce_o_odpadu" class="wasteResult08"/>
								</div>
							<!-- formTogler_panel2 childs -->
							<div class="field half formTogler_panel2">
								<label for="produkce_n_odpadu">Produkce N odpadů <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_n_odpadu" id="produkce_n_odpadu" class="wasteResult09"/>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_komun_odpadu">Produkce komunálních odpadů (skupina 20) <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_komun_odpadu" id="produkce_komun_odpadu" class="wasteResult10"/>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_sko">Produkce SKO <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_sko" id="produkce_sko" class="wasteResult11"/>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_plast">Produkce plast <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_plast" id="produkce_plast" class="wasteResult12"/>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_papir">Produkce papír <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_papir" id="produkce_papir" class="wasteResult13"/>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_sklo">Produkce sklo <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_sklo" id="produkce_sklo" class="wasteResult14"/>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_kovy">Produkce kovy <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_kovy" id="produkce_kovy" class="wasteResult15"/>
							</div> 
							<div class="field half formTogler_panel2">
								<label for="produkce_bro_zahrady">Produkce BRO ze zahrad a parků <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_bro_zahrady" id="produkce_bro_zahrady" class="wasteResult16"/>
							</div>
						</div>
						<ul class="actions formToglerActions">
							<li id="formToglerActions__back" onclick="toggleForm(1,2);"><span class="button primary disabled">Zpět</span></li>
							<li id="formToglerActions__forward" onclick="toggleForm(2,1);"><span class="button primary">Dále</span></li>
							<li id="formToglerActions__send">
								<span class="button primary submitButton disabled" onclick="calculateWaste()">Spočítat</span>
							<li id="formToglerActions__reset"><input type="reset" onclick="resetForm();" value="Reset" /></li>
						</ul>
					</form>

					<div class="results formTogler_panel3">
						<h3>Výsledky porovnání:</h3>
					  <div class="row_panel">

						  <div class="field half result1">
							  <div class="gauge">
									<h2>Gauge 1</h2>
									<p>Value: <span id="wasteResultNotice1"></span></p>
								</div>

							</div>
							<div class="field half result2">
							  <div class="gauge">
									<h2>Gauge 2</h2>
									<p>Value: <span id="wasteResultNotice2"></span></p>
								</div>
							</div>

						</div>

					</div>

				</article>

 </div>

	  <!-- Footer -->
	  <?php
	  include("includes/mainsitefooter.php");
  	  ?>

    </div>

    <!-- BG -->
    <div id="bg"></div>

    <!-- Scripts -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
<!--     <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>
		<script src="assets/js/topicselect.js" defer></script> -->
		<script src="assets/js/wasteCalcManagement.js" defer></script>
		<script src="assets/js/wasteCalcData.js" defer></script>
  </body>
</html>
