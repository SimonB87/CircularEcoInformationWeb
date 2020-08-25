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
          <div class="close"> <a class="closeLink" href="index.php"> Close</a></div>
				  <h2 class="major">Odpadová kalkulačka</h2>
					<p>Porovnejte Vaše celoroční výsledky s Vaším krajem nebo s celou republikou.</p>
					<form method="post" action="#" class="wasteCaclForm">
						<div class="fields form_style">
							<div class="field half">
								<label for="region_cr">Kraj ČR </label>
								<select name="region_cr" id="region_cr" class>
									<option value="default">Vyberte ...</option>
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
								<input type="text" name="town_name" id="town_name" class/>
							</div>
						

							<div class="formToglerControls">
              <ul class="actions formToglerControls_items">
                <li id="formToglerControls_item1"><a href="#" class="button primary" onclick="switchFormView(1);">1</a></li>
                <li id="formToglerControls_item2"><a href="#" class="button" onclick="switchFormView(2);">2</a></li>
                <li id="formToglerControls_item3"><a href="#" class="button" onclick="switchFormView(3);">3</a></li>
              </ul>

							</div>
							<!-- formTogler_panel1 childs -->
							 
								<div class="field half formTogler_panel1">
									<label for="naklady_oh">Náklady na Odpadové hospodářství (OH)<br>(Kč/obyvatele)</label>
									<input type="text" name="naklady_oh" id="naklady_oh" class="wasteResult01"/>
									<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 1106</p>
								</div>
								<div class="field half formTogler_panel1">
									<label for="prijmy_oh">Přijmy z OH <br>(Kč/obyvatele)</label>
									<input type="text" name="prijmy_oh" id="prijmy_oh" class="wasteResult02"/>
									<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 612</p>
								</div>
								<div class="field half formTogler_panel1">
									<label for="naklady_tridenySber_tuny">Náklady na tříděný sběr <br>(Kč/t)</label>
									<input type="text" name="naklady_tridenySber_tuny" id="naklady_tridenySber_tuny" class="wasteResult03"/>
									<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 3760</p>
								</div>
								<div class="field half formTogler_panel1">
									<label for="naklady_tridenySber_perCapita">Náklady na tříděný sběr <br>(Kč/obyvatele)</label>
									<input type="text" name="naklady_tridenySber_perCapita" id="naklady_tridenySber_perCapita" class="wasteResult04"/>
									<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 164</p>
								</div>
								<div class="field half formTogler_panel1">
									<label for="naklady_sko_tuny">Náklady za Směsný komunální odpad (SKO) <br>(Kč/t)</label>
									<input type="text" name="naklady_sko_tuny" id="naklady_sko_tuny" class="wasteResult05" />
									<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 2605</p>
								</div>
								<div class="field half formTogler_panel1">
									<label for="naklady_sko_perCapita">Náklady za SKO <br>(Kč/obyvatele)</label>
									<input type="text" name="naklady_sko_perCapita" id="naklady_sko_perCapita" class="wasteResult06"/>
									<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 501</p>
								</div>
								<div class="field half formTogler_panel1">
									<label for="produkce_odpady">Produkce odpadů - celková <br>(kg/obyvatele)</label>
									<input type="text" name="produkce_odpady" id="produkce_odpady" class="wasteResult07"/>
									<p class="tooltip tooltip-bottom"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 3325</p>
								</div>
								<div class="field half formTogler_panel1">
									<label for="produkce_o_odpadu">Produkce ostatních (O) odpadů <br>(kg/obyvatele)</label>
									<input type="text" name="produkce_o_odpadu" id="produkce_o_odpadu" class="wasteResult08"/>
									<p class="tooltip tooltip-bottom"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 3161</p>
								</div>
							<!-- formTogler_panel2 childs -->
							<div class="field half formTogler_panel2">
								<label for="produkce_n_odpadu">Produkce nebezpečných (N) odpadů <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_n_odpadu" id="produkce_n_odpadu" class="wasteResult09"/>
								<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 163</p>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_komun_odpadu">Produkce komunálních odpadů (skupina 20) <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_komun_odpadu" id="produkce_komun_odpadu" class="wasteResult10"/>
								<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 542</p>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_sko">Produkce SKO <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_sko" id="produkce_sko" class="wasteResult11"/>
								<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 259</p>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_plast">Produkce plast <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_plast" id="produkce_plast" class="wasteResult12"/>
								<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 25,2</p>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_papir">Produkce papír <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_papir" id="produkce_papir" class="wasteResult13"/>
								<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 49,8</p>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_sklo">Produkce sklo <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_sklo" id="produkce_sklo" class="wasteResult14"/>
								<p class="tooltip"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 20,5</p>
							</div>
							<div class="field half formTogler_panel2">
								<label for="produkce_kovy">Produkce kovy <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_kovy" id="produkce_kovy" class="wasteResult15"/>
								<p class="tooltip tooltip-bottom"><strong>Nápověda: </strong>republiková hodnota za celý rok je: 7,5</p>
							</div> 
							<div class="field half formTogler_panel2 hideElement">
								<label for="produkce_bro_zahrady">Produkce biologicky rozložitelných odpadů (BRO) ze zahrad a parků <br>(kg/obyvatele)</label>
								<input type="text" name="produkce_bro_zahrady" id="produkce_bro_zahrady" class="wasteResult16"/>
								<p class="tooltip tooltip-bottom"><strong>Nápověda: </strong>republiková hodnota za celý rok je: neznámo</p>
							</div>
						</div>
						<ul class="actions formToglerActions">
							<li id="formToglerActions__back" onclick="toggleForm(1,2);"><span class="button primary disabled">Zpět</span></li>
							<li id="formToglerActions__forward" onclick="toggleForm(2,1);"><span class="button primary">Dále</span></li>
							<li id="formToglerActions__send">
								<span class="button primary submitButton disabled" onclick="calculateWaste()">Spočítat</span>
							<li id="formToglerActions__reset"><input type="reset" onclick="resetForm();" value="Reset" /></li>
							<li class="formActions_goHome"><a href="index.php">Domů</a> </li>
						</ul>
					</form>
					<!-- formTogler_panel3 childs -->
					<div class="results formTogler_panel3">
						<form>
							<div class="fields">
							<div class="field full"><h2 class="align-center">Výsledky porovnání:</h2></div>

								<div class="field half result1">
									<div class="gauge">
										<h3 class="result_title">Náklady na OH</h3>
										<h4 class="result_unit">(Kč/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice01" class="valueHighlight"></span></p>
										<p class="regionalValue">Regionální hodnota: <span id="valueCompariosonRegion01" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry01" class="valueHighlight"></span></p>
										<div id="google_gauge_chart1" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result2">
									<div class="gauge">
										<h3 class="result_title">Přijmy z OH</h3>
										<h4 class="result_unit">(Kč/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice02" class="valueHighlight"></span></p>
										<p class="regionalValue">Regionální hodnota: <span id="valueCompariosonRegion02" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry02" class="valueHighlight"></span></p>
										<div id="google_gauge_chart2" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result3">
									<div class="gauge">
										<h3 class="result_title">Náklady na tříděný sběr</h3>
										<h4 class="result_unit">(Kč/t)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice03" class="valueHighlight"></span></p>
										<p class="regionalValue">Regionální hodnota: <span id="valueCompariosonRegion03" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry03" class="valueHighlight"></span></p>
										<div id="google_gauge_chart3" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result4">
									<div class="gauge">
										<h3 class="result_title">Náklady na tříděný sběr</h3>
										<h4 class="result_unit">(Kč/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice04" class="valueHighlight"></span></p>
										<p class="regionalValue">Regionální hodnota: <span id="valueCompariosonRegion04" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry04" class="valueHighlight"></span></p>
										<div id="google_gauge_chart4" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result5">
									<div class="gauge">
										<h3 class="result_title">Náklady za SKO</h3>
										<h4 class="result_unit">(Kč/t)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice05" class="valueHighlight"></span></p>
										<p class="regionalValue">Regionální hodnota: <span id="valueCompariosonRegion05" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry05" class="valueHighlight"></span></p>
										<div id="google_gauge_chart5" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result6">
									<div class="gauge">
										<h3 class="result_title">Náklady za SKO</h3>
										<h4 class="result_unit">(kg/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice06" class="valueHighlight"></span></p>
										<p class="regionalValue">Regionální hodnota: <span id="valueCompariosonRegion06" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry06" class="valueHighlight"></span></p>
										<div id="google_gauge_chart6" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result7">
									<div class="gauge">
										<h3 class="result_title">Produkce odpadů - celková</h3>
										<h4 class="result_unit">(kg/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice07" class="valueHighlight"></span></p>
										<p class="regionalValue">Regionální hodnota: <span id="valueCompariosonRegion07" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry07" class="valueHighlight"></span></p>
										<div id="google_gauge_chart7" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result8">
									<div class="gauge">
										<h3 class="result_title">Produkce O odpadů</h3>
										<h4 class="result_unit">(kg/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice08" class="valueHighlight"></span></p>
										<p class="regionalValue">Regionální hodnota: <span id="valueCompariosonRegion08" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry08" class="valueHighlight"></span></p>
										<div id="google_gauge_chart8" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result9">
									<div class="gauge">
										<h3 class="result_title">Produkce N odpadů</h3>
										<h4 class="result_unit">(kg/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice09" class="valueHighlight"></span></p>
										<p class="regionalValue">Regionální hodnota: <span id="valueCompariosonRegion09" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry09" class="valueHighlight"></span></p>
										<div id="google_gauge_chart9" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result10">
									<div class="gauge">
										<h3 class="result_title">Produkce komunálních odpadů (skupina 20)</h3>
										<h4 class="result_unit">(kg/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice10" class="valueHighlight"></span></p>
										<p class="regionalValue">Regionální hodnota: <span id="valueCompariosonRegion10" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry10" class="valueHighlight"></span></p>
										<div id="google_gauge_chart10" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result11">
									<div class="gauge">
										<h3 class="result_title">Produkce SKO</h3>
										<h4 class="result_unit">(kg/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice11" class="valueHighlight"></span></p>
										<p class="regionalValue">Regionální hodnota: <span id="valueCompariosonRegion11" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry11" class="valueHighlight"></span></p>
										<div id="google_gauge_chart11" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result12">
									<div class="gauge">
										<h3 class="result_title">Produkce plast</h3>
										<h4 class="result_unit">(kg/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice12" class="valueHighlight"></span></p>
										<p class="regionalValue hideElement">Regionální hodnota: <span id="valueCompariosonRegion12" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry12" class="valueHighlight"></span></p>
										<div id="google_gauge_chart12" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result13">
									<div class="gauge">
										<h3 class="result_title">Produkce papír</h3>
										<h4 class="result_unit">(kg/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice13" class="valueHighlight"></span></p>
										<p class="regionalValue hideElement hideThisElement">Regionální hodnota: <span id="valueCompariosonRegion13" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry13" class="valueHighlight"></span></p>
										<div id="google_gauge_chart13" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result14">
									<div class="gauge">
										<h3 class="result_title">Produkce sklo</h3>
										<h4 class="result_unit">(kg/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice14" class="valueHighlight"></span></p>
										<p class="regionalValue hideElement hideThisElement">Regionální hodnota: <span id="valueCompariosonRegion14" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry14" class="valueHighlight"></span></p>
										<div id="google_gauge_chart14" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result15">
									<div class="gauge">
										<h3 class="result_title">Produkce kovy</h3>
										<h4 class="result_unit">(kg/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice15" class="valueHighlight"></span></p>
										<p class="regionalValue hideElement hideThisElement">Regionální hodnota: <span id="valueCompariosonRegion15" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry15" class="valueHighlight"></span></p>
										<div id="google_gauge_chart15" class="google_gauge">
  									</div>
									</div>
								</div>
								<div class="field half result16 hideElement">
									<div class="gauge">
										<h3 class="result_title">Produkce BRO ze zahrad a parků</h3>
										<h4 class="result_unit">(kg/obyvatele)</h4>
										<p>Vaše hodnota: <span id="wasteResultNotice16" class="valueHighlight"></span></p>
										<p class="regionalValue hideElement hideThisElement">Regionální hodnota: <span id="valueCompariosonRegion16" class="valueHighlight"></span></p>
										<p class="countryValue">Republiková hodnota: <span id="valueCompariosonCountry16" class="valueHighlight"></span></p>
										<div id="google_gauge_chart16" class="google_gauge">
  									</div>
									</div>
								</div>
							</div>
							<ul class="actions formToglerActions">
								<li class="formActions_goHome"><a href="index.php">Domů</a> </li>
						  </ul>
						</form>
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
		<script src="assets/js/googleChartsLib.js" defer></script>
		<script src="assets/js/googleChartsDrawGauges.js" defer></script>
  </body>
</html>
