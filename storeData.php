<?php
	include 'sollution/config/config4.php';

	$region_cr = mysqli_real_escape_string($connector, $_POST['region_cr']);
  $town_name = mysqli_real_escape_string($connector, $_POST['town_name']);
  $naklady_oh = mysqli_real_escape_string($connector, $_POST['naklady_oh']);
  $prijmy_oh = mysqli_real_escape_string($connector, $_POST['prijmy_oh']);
  $naklady_tridenySber_tuny = mysqli_real_escape_string($connector, $_POST['naklady_tridenySber_tuny']);
  $naklady_tridenySber_perCapita = mysqli_real_escape_string($connector, $_POST['naklady_tridenySber_perCapita']);
  $naklady_sko_tuny = mysqli_real_escape_string($connector, $_POST['naklady_sko_tuny']);
  $naklady_sko_perCapita = mysqli_real_escape_string($connector, $_POST['naklady_sko_perCapita']);
  $produkce_odpady = mysqli_real_escape_string($connector, $_POST['produkce_odpady']);
  $produkce_o_odpadu = mysqli_real_escape_string($connector, $_POST['produkce_o_odpadu']);
  $produkce_n_odpadu = mysqli_real_escape_string($connector, $_POST['produkce_n_odpadu']);
  $produkce_komun_odpadu = mysqli_real_escape_string($connector, $_POST['produkce_komun_odpadu']);
  $produkce_sko = mysqli_real_escape_string($connector, $_POST['produkce_sko']);
  $produkce_plast = mysqli_real_escape_string($connector, $_POST['produkce_plast']);
  $produkce_papir = mysqli_real_escape_string($connector, $_POST['produkce_papir']);
  $produkce_sklo = mysqli_real_escape_string($connector, $_POST['produkce_sklo']);
  $produkce_kovy = mysqli_real_escape_string($connector, $_POST['produkce_kovy']);
  $date = mysqli_real_escape_string($connector, $_POST['date']);

  if (!mysqli_set_charset($connector, "utf8")) {
    printf("Error loading character set utf8: %s\n", mysqli_error($con));
    exit();
    } else {
            //printf("Current character set: %s\n", mysqli_character_set_name($con));//used only for testing
    }

	$sql = "INSERT INTO `waste_calculation`( `region_cr`,`town_name`,`naklady_oh`,`prijmy_oh`,`naklady_tridenySber_tuny`,`naklady_tridenySber_perCapita`,`naklady_sko_tuny`,`naklady_sko_perCapita`,`produkce_odpady`,`produkce_o_odpadu`,`produkce_n_odpadu`,`produkce_komun_odpadu`,`produkce_sko`,`produkce_plast`,`produkce_papir`,`produkce_sklo`,`produkce_kovy`, `date`) 
	VALUES ('$region_cr ', '$town_name', '$naklady_oh', '$prijmy_oh', '$naklady_tridenySber_tuny', '$naklady_tridenySber_perCapita', '$naklady_sko_tuny', '$naklady_sko_perCapita', '$produkce_odpady', '$produkce_o_odpadu', '$produkce_n_odpadu', '$produkce_komun_odpadu', '$produkce_sko', '$produkce_plast', '$produkce_papir', '$produkce_sklo', '$produkce_kovy', '$date')";

  //Error case
  if (!$sql) {
      echo "Failed! <br> Error: ".mysql_error();
  }

	if (mysqli_query($connector, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>418));
	}

	mysqli_close($connector);
?>