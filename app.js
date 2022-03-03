// Array of countries (obtained from https://gist.github.com/incredimike/1469814)
const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];


// Creating an array of banned countries

const banned = [];

const updatecountries = function(){

    let banlist = document.getElementById("bannedcountries");
    banlist.innerHTML = '';

    banned.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        banlist.appendChild(li);
    });

    var bancountries = document.getElementById("unbanacountry");
	bancountries.innerHTML = "";
	var intro = document.createElement("option")
	intro.textContent = "Remove a banned country";
	bancountries.appendChild(intro);

        for(var i = 0; i < banned.length; i++) {
            var country = banned[i];
            var elem = document.createElement("option");
            elem.textContent = country;
            elem.value = country;
            bancountries.appendChild(elem);
        }

    var validcountries = document.getElementById("banacountry");
	validcountries.innerHTML = "";
	var intro = document.createElement("option")
	intro.textContent = "Please select a country to remove";
	validcountries.appendChild(intro);

        for(var i = 0; i < countryList.length; i++) {
            var country = countryList[i];
            if (banned.indexOf(country) == -1){
                var elem = document.createElement("option");
                elem.textContent = country;
                elem.value = country;
                validcountries.appendChild(elem);
            }
        }
}

const bancountry = function() {
    var cnt = document.getElementById("banacountry");
    banned.push(cnt.value);
    cnt.selectedIndex = 0;
	updatecountries();

	var select = document.getElementById("selectCountry");
	select.innerHTML = "";

	for(var i = 0; i < countryList.length; i++) {
    	var country = countryList[i];
    	if (banned.indexOf(country) == -1){
     	    var elem = document.createElement("option");
      		elem.textContent = country;
    	  	elem.value = country;
      	  	select.appendChild(elem);
    }
}
}

const unbancountry = function(){
	var cnt = document.getElementById("unbanacountry");
    var index = banned.indexOf(cnt.value);
	if (index > -1) {
		banned.splice(index, 1);
	}
    cnt.selectedIndex = 0;
	updatecountries();

	var select = document.getElementById("selectCountry");
	select.innerHTML = "";

	for(var i = 0; i < countryList.length; i++) {
    	var country = countryList[i];
    	if (banned.indexOf(country) == -1){
     	    var elem = document.createElement("option");
      		elem.textContent = country;
    	  	elem.value = country;
      	  	select.appendChild(elem);
    	}
	}
}

// Get the modal
var bannedmodal = document.getElementById("myModal");

// Get the button that opens the modal
var bannedbtn = document.getElementById("bannedbox");

// Get the <span> element that closes the modal
var bannedspan = document.getElementById("close");


// When the user clicks on the button, open the modal
bannedbtn.onclick = function() {
    updatecountries();

    bannedmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
bannedspan.onclick = function() {
	updatecountries();
    bannedmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == bannedmodal) {
    bannedmodal.style.display = "none";
  }
}


// Adding the countries to the dropdownlist

var select = document.getElementById("selectCountry");

for(var i = 0; i < countryList.length; i++) {
    var country = countryList[i];
    if (banned.indexOf(country) == -1){
        var elem = document.createElement("option");
        elem.textContent = country;
        elem.value = country;
        select.appendChild(elem);
    }
}


// Storing all entered numbers for session
const enteredCards = [];
var mastercard = document.getElementById("mastercard");
var amex = document.getElementById("amex");
var visa = document.getElementById("visa");

mastercard.checked = true;

const mastercardfunc = function() {
	amex.checked = false;
	visa.checked = false;
}

const visafunc = function() {
	amex.checked = false;
	mastercard.checked = false;
}

const amexfunc = function() {
	mastercard.checked = false;
	visa.checked = false;
}


function acceptCard() {
    card = document.getElementById("cardNum").value;
	
    if (enteredCards.indexOf(card) == -1){
        if(mastercard.checked)
		{
			var regEx = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
			if(card.match(regEx))
			{
				enteredCards.push(card);
			}
			else
			{
				alert("Please enter a valid credit card number.");
			}
		}
		else if(amex.checked)
		{
			var regEx = /^3[47][0-9]{13}$/;
			if(card.match(regEx))
			{
				enteredCards.push(card);
			}
			else
			{
				alert("Please enter a valid credit card number.");
			}
		}
		else if(visa.checked)
		{
			var regEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
			if(card.match(regEx))
			{
				enteredCards.push(card);
			}
			else
			{
				alert("Please enter a valid credit card number.");
			}
		}
    }
    console.log(enteredCards);
    return false;
}


// Viewing all credit cards stored
var creditmodal = document.getElementById("myModal2");
var creditbtn = document.getElementById("creditbox");
var creditspan = document.getElementById("close2");

creditbtn.onclick = function() {
    let list = document.getElementById("credlist");
    list.innerHTML = '';

    enteredCards.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });

    creditmodal.style.display = "block";
}

creditspan.onclick = function() {
    creditmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == creditmodal) {
    creditmodal.style.display = "none";
  }
}