// --------------------------------------------------------------------------------------------
// LOCALSTORAGE EMMAGATZEMATGE DEL FORMULARI, primer pasarà les validacions i posteriorment arribarà aquí
// Save data from form to using localstorage -- First validate the form, then save data using localstorage
// --------------------------------------------------------------------------------------------

var itemId = 0;

function setAllItems(){

		var /*newDate,*/ formSave;
		
		//Incrementará el itemID segons la longitud del localstorage per returnar i realitza
		//itemID++
		itemId = localStorage.length +1;
		
		formSave = {
			fname: $("input[name='userid']").val(),
			passw: $("input[name='passid']").val(),
			passw2: $("input[name='passid2']").val(),
			usname: $("input[name='username']").val(),
			conam: $("input[name='conamen']").val(),
			birthh: $("input[name='birthn']").val(),
			dna: $("input[name='dni']").val(),
			adds: $("input[name='addressn']").val(),
			ucoun : $("select[name='country']").val(),
			uton: $("input[name='townn']").val(),
			uzipp: $("input[name='zip']").val(),
			umeil: $("input[name='email']").val(),
			utelfff: $("input[name='telfn']").val(),
			

		};
	
	// convertir data a cadena JSON
	// turn data into JSON string
	localStorage.setItem(itemId, JSON.stringify([formSave.fname, formSave.passw, formSave.passw2, formSave.usname, formSave.conam, formSave.birthh, formSave.dna, formSave.adds, formSave.ucoun, formSave.uton, formSave.uzipp, formSave.umeil, formSave.utelfff]));
	
	alert("Nou usuari enregistrat!");
	document.getElementById("registration").reset();
	
	};

// --------------------------------------------------------------------------------------------
// LOCALSTORAGE LOGIN DEL USUARI. Un cop enregistrat apareixerà el login i realitzarà aquest codi
// Check if the user exists in the localstorage for a future login, if user exists then he can login
// --------------------------------------------------------------------------------------------
function checkUser() {
	var nicknm = document.getElementById('usernick').value;
	var uid = document.registration2.userid;
	var passido = document.getElementById('pawidoo').value;
	var passid = document.registration2.passid;
	
	//Valida un usuari
	//User validation
	if(userid_validation2(uid,5,12)){
		if(passid_validation(passid,7,12)){
				//RECORRE VECTOR LOCALSTORAGE per les ID o KEY i emmagatzema valors
				//Check the lenght of the localstorage id -itemID- looking for the user
				for (var key in localStorage) {
					var usuariOn = false;
					var usuariNOcorre = false;
					var passwNOcorre = false;
					var noInventes = false;
					
					if((nicknm == JSON.parse(localStorage.getItem(key))[0]) && (passido == JSON.parse(localStorage.getItem(key))[1])){
						usuariOn = true;
					}else if((nicknm != JSON.parse(localStorage.getItem(key))[0]) && (passido == JSON.parse(localStorage.getItem(key))[1])){
						usuariNOcorre = true;
					}else if((nicknm == JSON.parse(localStorage.getItem(key))[0]) && (passido != JSON.parse(localStorage.getItem(key))[1])){
						passwNOcorre = true;
					}else if((nicknm != JSON.parse(localStorage.getItem(key))[0]) && (passido != JSON.parse(localStorage.getItem(key))[1])){
						noInventes = true;
					}
					}
					
					if(usuariOn == true){
						alert("Benvingut:  "+nicknm);
						document.getElementById("registration2").reset();
					}else if(usuariNOcorre == true){
						alert("Usuari Incorrecte");
					}else if(passwNOcorre == true){
						alert("Contrasenya Incorrecte");
					}else if(noInventes == true){
						alert("L'usuari no existeix");
					}	
		}
	}
	return false;
	
}
//-------------------------------------------------------------------------------------------------------
// Validació 2 per el USUARI del LOGIN - Teníem que passar USERID per variable diferent per tal de no haver problemes
// USERID validation, checks if user exists in the localstorage
//-------------------------------------------------------------------------------------------------------
function userid_validation2(uid,mx,my) {
		var uid_len = uid.value.length;
		if (uid_len == 0 || uid_len >= my || uid_len < mx){
			alert("El camp NICK\n- NO pot estar buit i ha de ser ENTRE "+mx+" i "+my+" paraules.");
				uid.focus();
				
				return false;
		}
	return true;
}
//-------------------------------------------------------------------------------------------------------
//USUARI ENREGISTRA ACCEDIRA A AQUESTA PAGINA I ALS JOCS
//Everything ok, then go to the webpage
function btntest_onclick() 
{
    window.location.href = "games.html";
}