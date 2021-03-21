	function postData() {
		$("#formToglerActions__send__button").attr("disabled", "disabled");

		var region_cr = $('#region_cr').val();
		var town_name = $('#town_name').val();
		var naklady_oh = $('#naklady_oh').val();
		var prijmy_oh = $('#prijmy_oh').val();
		var naklady_tridenySber_tuny = $('#naklady_tridenySber_tuny').val();
		var naklady_tridenySber_perCapita = $('#naklady_tridenySber_perCapita').val();
		var naklady_sko_tuny = $('#naklady_sko_tuny').val();
		var naklady_sko_perCapita = $('#naklady_sko_perCapita').val();
		var produkce_odpady = $('#produkce_odpady').val();
		var produkce_o_odpadu = $('#produkce_o_odpadu').val();
		var produkce_n_odpadu = $('#produkce_n_odpadu').val();
		var produkce_komun_odpadu = $('#produkce_komun_odpadu').val();
		var produkce_sko = $('#produkce_sko').val();
		var produkce_plast = $('#produkce_plast').val();
		var produkce_papir = $('#produkce_papir').val();
		var produkce_sklo = $('#produkce_sklo').val();
		var produkce_kovy = $('#produkce_kovy').val();
		
		var currentDate = new Date();

		var dataToPost = {
			region_cr : region_cr,
			town_name : town_name,
			naklady_oh : naklady_oh,
			prijmy_oh : prijmy_oh,
			naklady_tridenySber_tuny : naklady_tridenySber_tuny,
			naklady_tridenySber_perCapita : naklady_tridenySber_perCapita,
			naklady_sko_tuny : naklady_sko_tuny,
			naklady_sko_perCapita : naklady_sko_perCapita,
			produkce_odpady : produkce_odpady,
			produkce_o_odpadu : produkce_o_odpadu,
			produkce_n_odpadu : produkce_n_odpadu,
			produkce_komun_odpadu : produkce_komun_odpadu,
			produkce_sko : produkce_sko,
			produkce_plast : produkce_plast,
			produkce_papir : produkce_papir,
			produkce_sklo : produkce_sklo,
			produkce_kovy : produkce_kovy,
			date: currentDate
		};

			$.ajax({
				url: "storeData.php",
				type: "POST",
				data: dataToPost,
				cache: false,
				success: function (dataResult) {
					var dataResult = JSON.parse(dataResult);

					if ( dataResult.statusCode == 200 ) {
						$("#formToglerActions__send__button").removeAttr("disabled");
						//console.log('Data byla odeslána...');
					} else if ( dataResult.statusCode == 418) {
						 console.log('Nastala chyba č. "418" ... ');
					}
					
				}
			});
	}