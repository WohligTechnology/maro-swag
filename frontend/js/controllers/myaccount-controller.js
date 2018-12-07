myApp.controller("MyAccountCtrl", function(
  $scope,
  toastr,
  $state,
  OrderService,
  WishlistService,
  TemplateService,
  $uibModal,
  $translate,
  $rootScope,
  UserService,
  $stateParams,
  $filter
) {
  $scope.template = TemplateService.getHTML("content/myaccount.html");
  TemplateService.title = "My Account"; //This is the Title of the Website
  $scope.msg = "Loading...";
  $scope.showMSG = false;
  $scope.adminurl = adminurl;
  $scope.stateButton = "State";
  $scope.countryButton = "india";
  $scope.selectedState = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  $scope.visible = true;
  $scope.hidden = false;
  $scope.userDetails = {};
  $scope.showEditAddress = false;
  $scope.editAddress = {};
  $scope.addressIndex = 0;
  $scope.isDisabled = {};
  $scope.save = false; // used for Edit tab on profile button to save user's details
  $scope.selectCounteries = [
    {
      name: "Afghanistan",
      code: "AF",
      continent: "Asia",
      filename: "afghanistan"
    },
    {
      name: "Åland Islands",
      continent: "Europe",
      code: "AX"
    },
    {
      name: "Albania",
      code: "AL",
      continent: "Europe",
      filename: "albania"
    },
    {
      name: "Algeria",
      code: "DZ",
      continent: "Africa",
      filename: "algeria"
    },
    {
      name: "American Samoa",
      code: "AS",
      continent: "Oceania"
    },
    {
      name: "Andorra",
      code: "AD",
      continent: "Europe",
      filename: "andorra"
    },
    {
      name: "Angola",
      code: "AO",
      continent: "Africa",
      filename: "angola"
    },
    {
      name: "Anguilla",
      code: "AI",
      continent: "North America"
    },
    {
      name: "Antarctica",
      continent: "Antarctica",
      code: "AQ"
    },
    {
      name: "Antigua and Barbuda",
      code: "AG",
      continent: "North America",
      filename: "antigua-and-barbuda"
    },
    {
      name: "Argentina",
      code: "AR",
      continent: "South America",
      filename: "argentina"
    },
    {
      name: "Armenia",
      code: "AM",
      continent: "Europe",
      filename: "armenia"
    },
    {
      name: "Aruba",
      code: "AW",
      continent: "Europe"
    },
    {
      name: "Australia",
      code: "AU",
      continent: "Oceania",
      filename: "australia"
    },
    {
      name: "Austria",
      code: "AT",
      continent: "Europe",
      filename: "austria"
    },
    {
      name: "Azerbaijan",
      code: "AZ",
      continent: "Europe",
      filename: "azerbaijan"
    },
    {
      name: "Bahamas",
      code: "BS",
      continent: "North America",
      filename: "bahamas"
    },
    {
      name: "Bahrain",
      code: "BH",
      continent: "Asia",
      filename: "bahrain"
    },
    {
      name: "Bangladesh",
      code: "BD",
      continent: "Asia",
      filename: "bangladesh"
    },
    {
      name: "Barbados",
      code: "BB",
      continent: "North America",
      filename: "barbados"
    },
    {
      name: "Belarus",
      code: "BY",
      continent: "Europe",
      filename: "belarus"
    },
    {
      name: "Belgium",
      code: "BE",
      continent: "Europe",
      filename: "belgium"
    },
    {
      name: "Belize",
      code: "BZ",
      continent: "North America",
      filename: "belize"
    },
    {
      name: "Benin",
      code: "BJ",
      continent: "Africa",
      filename: "benin"
    },
    {
      name: "Bermuda",
      code: "BM",
      continent: "North America"
    },
    {
      name: "Bhutan",
      code: "BT",
      continent: "Asia",
      filename: "bhutan"
    },
    {
      name: "Bolivia",
      code: "BO",
      continent: "South America",
      filename: "bolivia"
    },
    {
      name: "Bosnia and Herzegovina",
      code: "BA",
      continent: "Europe",
      filename: "bosnia-and-herzegovina"
    },
    {
      name: "Botswana",
      code: "BW",
      continent: "Africa",
      filename: "botswana"
    },
    {
      name: "Bouvet Island",
      continent: "Antarctica",
      code: "BV"
    },
    {
      name: "Brazil",
      code: "BR",
      continent: "South America",
      filename: "brazil"
    },
    {
      name: "British Indian Ocean Territory",
      continent: "Africa",
      code: "IO"
    },
    {
      name: "Brunei Darussalam",
      code: "BN",
      continent: "Asia",
      filename: "brunei-darussalam"
    },
    {
      name: "Bulgaria",
      code: "BG",
      continent: "Europe",
      filename: "bulgaria"
    },
    {
      name: "Burkina Faso",
      code: "BF",
      continent: "Africa",
      filename: "burkina-faso"
    },
    {
      name: "Burundi",
      code: "BI",
      continent: "Africa",
      filename: "burundi"
    },
    {
      name: "Cambodia",
      code: "KH",
      continent: "Asia",
      filename: "cambodia"
    },
    {
      name: "Cameroon",
      code: "CM",
      continent: "Africa",
      filename: "cameroon"
    },
    {
      name: "Canada",
      code: "CA",
      continent: "North America",
      filename: "canada"
    },
    {
      name: "Cape Verde",
      code: "CV",
      continent: "Africa",
      filename: "cape-verde"
    },
    {
      name: "Cayman Islands",
      code: "KY",
      continent: "North America"
    },
    {
      name: "Central African Republic",
      code: "CF",
      continent: "Africa",
      filename: "central-african-republic"
    },
    {
      name: "Chad",
      code: "TD",
      continent: "Africa",
      filename: "chad"
    },
    {
      name: "Chile",
      code: "CL",
      continent: "South America",
      filename: "chile"
    },
    {
      name: "China",
      code: "CN",
      continent: "Asia",
      filename: "china"
    },
    {
      name: "Christmas Island",
      code: "CX",
      continent: "Oceania"
    },
    {
      name: "Cocos (Keeling) Islands",
      code: "CC",
      continent: "Oceania"
    },
    {
      name: "Colombia",
      code: "CO",
      continent: "South America",
      filename: "colombia"
    },
    {
      name: "Comoros",
      code: "KM",
      continent: "Africa",
      filename: "comoros"
    },
    {
      name: "Congo",
      code: "CG",
      continent: "Africa",
      filename: "congo"
    },
    {
      name: "Congo, The Democratic Republic of the",
      code: "CD",
      continent: "Africa",
      filename: "congo-the-democratic-republic-of-the"
    },
    {
      name: "Cook Islands",
      continent: "Oceania",
      code: "CK"
    },
    {
      name: "Costa Rica",
      code: "CR",
      continent: "North America",
      filename: "costa-rica"
    },
    {
      name: "Côte d'Ivoire, Republic of",
      code: "CI",
      continent: "Africa",
      filename: "cote-d-ivoire-republic-of"
    },
    {
      name: "Croatia",
      code: "HR",
      continent: "Europe",
      filename: "croatia"
    },
    {
      name: "Cuba",
      code: "CU",
      continent: "North America",
      filename: "cuba"
    },
    {
      name: "Curaçao",
      code: "CW",
      continent: "Europe"
    },
    {
      name: "Cyprus",
      code: "CY",
      continent: "Europe",
      filename: "cyprus"
    },
    {
      name: "Czech Republic",
      code: "CZ",
      continent: "Europe",
      filename: "czech-republic"
    },
    {
      name: "Denmark",
      code: "DK",
      continent: "Europe",
      filename: "denmark"
    },
    {
      name: "Djibouti",
      code: "DJ",
      continent: "Africa",
      filename: "djibouti"
    },
    {
      name: "Dominica",
      code: "DM",
      continent: "North America",
      filename: "dominica"
    },
    {
      name: "Dominican Republic",
      code: "DO",
      continent: "North America",
      filename: "dominican-republic"
    },
    {
      name: "Ecuador",
      code: "EC",
      continent: "South America",
      filename: "ecuador"
    },
    {
      name: "Egypt",
      code: "EG",
      continent: "Africa",
      filename: "egypt"
    },
    {
      name: "El Salvador",
      code: "SV",
      continent: "North America",
      filename: "el-salvador"
    },
    {
      name: "Equatorial Guinea",
      code: "GQ",
      continent: "Africa",
      filename: "equatorial-guinea"
    },
    {
      name: "Eritrea",
      code: "ER",
      continent: "Africa",
      filename: "eritrea"
    },
    {
      name: "Estonia",
      code: "EE",
      continent: "Europe",
      filename: "estonia"
    },
    {
      name: "Ethiopia",
      code: "ET",
      continent: "Africa",
      filename: "ethiopia"
    },
    {
      name: "Falkland Islands (Malvinas)",
      code: "FK",
      continent: "South America"
    },
    {
      name: "Faroe Islands",
      continent: "Europe",
      code: "FO"
    },
    {
      name: "Fiji",
      code: "FJ",
      continent: "Oceania",
      filename: "fiji"
    },
    {
      name: "Finland",
      code: "FI",
      continent: "Europe",
      filename: "finland"
    },
    {
      name: "France",
      code: "FR",
      continent: "Europe",
      filename: "france"
    },
    {
      name: "French Guiana",
      code: "GF",
      continent: "South America"
    },
    {
      name: "French Polynesia",
      code: "PF",
      continent: "Oceania"
    },
    {
      name: "French Southern Territories",
      continent: "Antarctica",
      code: "TF"
    },
    {
      name: "Gabon",
      code: "GA",
      continent: "Africa",
      filename: "gabon"
    },
    {
      name: "Gambia",
      code: "GM",
      continent: "Africa",
      filename: "gambia"
    },
    {
      name: "Georgia",
      code: "GE",
      continent: "Europe",
      filename: "georgia"
    },
    {
      name: "Germany",
      code: "DE",
      continent: "Europe",
      filename: "germany"
    },
    {
      name: "Ghana",
      code: "GH",
      continent: "Africa",
      filename: "ghana"
    },
    {
      name: "Gibraltar",
      continent: "Europe",
      code: "GI"
    },
    {
      name: "Greece",
      code: "GR",
      continent: "Europe",
      filename: "greece"
    },
    {
      name: "Greenland",
      code: "GL",
      continent: "North America",
      filename: "greenland"
    },
    {
      name: "Grenada",
      code: "GD",
      continent: "North America",
      filename: "grenada"
    },
    {
      name: "Guadeloupe",
      code: "GP",
      continent: "North America"
    },
    {
      name: "Guam",
      code: "GU",
      continent: "Oceania"
    },
    {
      name: "Guatemala",
      code: "GT",
      continent: "North America",
      filename: "guatemala"
    },
    {
      name: "Guernsey",
      continent: "Europe",
      code: "GG"
    },
    {
      name: "Guinea",
      code: "GN",
      continent: "Africa",
      filename: "guinea"
    },
    {
      name: "Guinea-Bissau",
      code: "GW",
      continent: "Africa",
      filename: "guinea-bissau"
    },
    {
      name: "Guyana",
      code: "GY",
      continent: "South America",
      filename: "guyana"
    },
    {
      name: "Haiti",
      code: "HT",
      continent: "North America",
      filename: "haiti"
    },
    {
      name: "Heard Island and Mcdonald Islands",
      continent: "Oceania",
      code: "HM"
    },
    {
      name: "Holy See (Vatican City State)",
      code: "VA",
      continent: "Europe"
    },
    {
      name: "Honduras",
      code: "HN",
      continent: "North America",
      filename: "honduras"
    },
    {
      name: "Hong Kong",
      code: "HK",
      continent: "Asia",
      filename: "hong-kong"
    },
    {
      name: "Hungary",
      code: "HU",
      continent: "Europe",
      filename: "hungary"
    },
    {
      name: "Iceland",
      code: "IS",
      continent: "Europe",
      filename: "iceland"
    },
    {
      name: "India",
      code: "IN",
      continent: "Asia",
      filename: "india"
    },
    {
      name: "Indonesia",
      code: "ID",
      continent: "Asia",
      filename: "indonesia"
    },
    {
      name: "Iran, Islamic Republic Of",
      code: "IR",
      continent: "Asia",
      filename: "iran-islamic-republic-of"
    },
    {
      name: "Iraq",
      code: "IQ",
      continent: "Asia",
      filename: "iraq"
    },
    {
      name: "Ireland",
      code: "IE",
      continent: "Europe",
      filename: "ireland"
    },
    {
      name: "Isle of Man",
      continent: "Europe",
      code: "IM"
    },
    {
      name: "Israel",
      code: "IL",
      continent: "Asia",
      filename: "israel"
    },
    {
      name: "Italy",
      code: "IT",
      continent: "Europe",
      filename: "italy"
    },
    {
      name: "Jamaica",
      code: "JM",
      continent: "North America",
      filename: "jamaica"
    },
    {
      name: "Japan",
      code: "JP",
      continent: "Asia",
      filename: "japan"
    },
    {
      name: "Jersey",
      continent: "Europe",
      code: "JE"
    },
    {
      name: "Jordan",
      code: "JO",
      continent: "Asia",
      filename: "jordan"
    },
    {
      name: "Kazakhstan",
      code: "KZ",
      continent: "Europe",
      filename: "kazakhstan"
    },
    {
      name: "Kenya",
      code: "KE",
      continent: "Africa",
      filename: "kenya"
    },
    {
      name: "Kiribati",
      code: "KI",
      continent: "Oceania",
      filename: "kiribati"
    },
    {
      name: "Korea, Democratic People's Republic of",
      code: "KP",
      continent: "Asia",
      filename: "korea-democratic-people-s-republic-of"
    },
    {
      name: "Korea, Republic of",
      code: "KR",
      continent: "Asia",
      filename: "korea-republic-of"
    },
    {
      name: "Kuwait",
      code: "KW",
      continent: "Asia",
      filename: "kuwait"
    },
    {
      name: "Kyrgyzstan",
      code: "KG",
      continent: "Asia",
      filename: "kyrgyzstan"
    },
    {
      name: "Lao People's Democratic Republic",
      code: "LA",
      continent: "Asia",
      filename: "lao-people-s-democratic-republic"
    },
    {
      name: "Latvia",
      code: "LV",
      continent: "Europe",
      filename: "latvia"
    },
    {
      name: "Lebanon",
      code: "LB",
      continent: "Asia",
      filename: "lebanon"
    },
    {
      name: "Lesotho",
      code: "LS",
      continent: "Africa",
      filename: "lesotho"
    },
    {
      name: "Liberia",
      code: "LR",
      continent: "Africa",
      filename: "liberia"
    },
    {
      name: "Libyan Arab Jamahiriya",
      code: "LY",
      continent: "Africa",
      filename: "libyan-arab-jamahiriya"
    },
    {
      name: "Liechtenstein",
      code: "LI",
      continent: "Europe",
      filename: "liechtenstein"
    },
    {
      name: "Lithuania",
      code: "LT",
      continent: "Europe",
      filename: "lithuania"
    },
    {
      name: "Luxembourg",
      code: "LU",
      continent: "Europe",
      filename: "luxembourg"
    },
    {
      name: "Macao",
      code: "MO",
      continent: "Asia"
    },
    {
      name: "Macedonia, The Former Yugoslav Republic of",
      code: "MK",
      continent: "Europe",
      filename: "macedonia-the-former-yugoslav-republic-of"
    },
    {
      name: "Madagascar",
      code: "MG",
      continent: "Africa",
      filename: "madagascar"
    },
    {
      name: "Malawi",
      code: "MW",
      continent: "Africa",
      filename: "malawi"
    },
    {
      name: "Malaysia",
      code: "MY",
      continent: "Asia",
      filename: "malaysia"
    },
    {
      name: "Maldives",
      code: "MV",
      continent: "Asia",
      filename: "maldives"
    },
    {
      name: "Mali",
      code: "ML",
      continent: "Africa",
      filename: "mali"
    },
    {
      name: "Malta",
      code: "MT",
      continent: "Europe",
      filename: "malta"
    },
    {
      name: "Marshall Islands",
      code: "MH",
      continent: "Oceania",
      filename: "marshall-islands"
    },
    {
      name: "Martinique",
      code: "MQ",
      continent: "North America"
    },
    {
      name: "Mauritania",
      code: "MR",
      continent: "Africa",
      filename: "mauritania"
    },
    {
      name: "Mauritius",
      code: "MU",
      continent: "Africa",
      filename: "mauritius"
    },
    {
      name: "Mayotte",
      code: "YT",
      continent: "Africa"
    },
    {
      name: "Mexico",
      code: "MX",
      continent: "North America",
      filename: "mexico"
    },
    {
      name: "Micronesia, Federated States of",
      code: "FM",
      continent: "Oceania",
      filename: "micronesia-federated-states-of"
    },
    {
      name: "Moldova, Republic of",
      code: "MD",
      continent: "Europe",
      filename: "moldova-republic-of"
    },
    {
      name: "Monaco",
      code: "MC",
      continent: "Europe",
      filename: "monaco"
    },
    {
      name: "Mongolia",
      code: "MN",
      continent: "Asia",
      filename: "mongolia"
    },
    {
      name: "Montenegro",
      code: "ME",
      continent: "Europe",
      filename: "montenegro"
    },
    {
      name: "Montserrat",
      code: "MS",
      continent: "North America"
    },
    {
      name: "Morocco",
      code: "MA",
      continent: "Africa",
      filename: "morocco"
    },
    {
      name: "Mozambique",
      code: "MZ",
      continent: "Africa",
      filename: "mozambique"
    },
    {
      name: "Myanmar",
      code: "MM",
      continent: "Asia",
      filename: "myanmar"
    },
    {
      name: "Namibia",
      code: "NA",
      continent: "Africa",
      filename: "namibia"
    },
    {
      name: "Nauru",
      code: "NR",
      continent: "Oceania",
      filename: "nauru"
    },
    {
      name: "Nepal",
      code: "NP",
      continent: "Asia",
      filename: "nepal"
    },
    {
      name: "Netherlands",
      code: "NL",
      continent: "Europe",
      filename: "netherlands"
    },
    {
      name: "Netherlands Antilles",
      code: "AN",
      continent: "Europe"
    },
    {
      name: "New Caledonia",
      code: "NC",
      continent: "Oceania"
    },
    {
      name: "New Zealand",
      code: "NZ",
      continent: "Oceania",
      filename: "new-zealand"
    },
    {
      name: "Nicaragua",
      code: "NI",
      continent: "North America",
      filename: "nicaragua"
    },
    {
      name: "Niger",
      code: "NE",
      continent: "Africa",
      filename: "niger"
    },
    {
      name: "Nigeria",
      code: "NG",
      continent: "Africa",
      filename: "nigeria"
    },
    {
      name: "Niue",
      continent: "Oceania",
      code: "NU"
    },
    {
      name: "Norfolk Island",
      code: "NF",
      continent: "Oceania"
    },
    {
      name: "Northern Mariana Islands",
      continent: "Oceania",
      code: "MP"
    },
    {
      name: "Norway",
      code: "NO",
      continent: "Europe",
      filename: "norway"
    },
    {
      name: "Oman",
      code: "OM",
      continent: "Asia",
      filename: "oman"
    },
    {
      name: "Pakistan",
      code: "PK",
      continent: "Asia",
      filename: "pakistan"
    },
    {
      name: "Palau",
      code: "PW",
      continent: "Oceania",
      filename: "palau"
    },
    {
      name: "Palestinian Territory, Occupied",
      code: "PS",
      continent: "Asia",
      filename: "palestinian-territory-occupied"
    },
    {
      name: "Panama",
      code: "PA",
      continent: "North America",
      filename: "panama"
    },
    {
      name: "Papua New Guinea",
      code: "PG",
      continent: "Oceania",
      filename: "papua-new-guinea"
    },
    {
      name: "Paraguay",
      code: "PY",
      continent: "South America",
      filename: "paraguay"
    },
    {
      name: "Peru",
      code: "PE",
      continent: "South America",
      filename: "peru"
    },
    {
      name: "Philippines",
      code: "PH",
      continent: "Asia",
      filename: "philippines"
    },
    {
      name: "Pitcairn",
      continent: "Oceania",
      code: "PN"
    },
    {
      name: "Poland",
      code: "PL",
      continent: "Europe",
      filename: "poland"
    },
    {
      name: "Portugal",
      code: "PT",
      continent: "Europe",
      filename: "portugal"
    },
    {
      name: "Puerto Rico",
      code: "PR",
      continent: "North America"
    },
    {
      name: "Qatar",
      code: "QA",
      continent: "Asia",
      filename: "qatar"
    },
    {
      name: "Réunion",
      code: "RE",
      continent: "Africa"
    },
    {
      name: "Romania",
      code: "RO",
      continent: "Europe",
      filename: "romania"
    },
    {
      name: "Russian Federation",
      code: "RU",
      continent: "Europe",
      filename: "russian-federation"
    },
    {
      name: "Rwanda",
      code: "RW",
      continent: "Africa",
      filename: "rwanda"
    },
    {
      name: "Saint Helena, Ascension and Tristan da Cunha",
      code: "SH",
      continent: "Africa",
      filename: "saint-helena-ascension-and-tristan-da-cunha"
    },
    {
      name: "Saint Kitts and Nevis",
      code: "KN",
      continent: "North America",
      filename: "saint-kitts-and-nevis"
    },
    {
      name: "Saint Lucia",
      code: "LC",
      continent: "North America",
      filename: "saint-lucia"
    },
    {
      name: "Saint Pierre and Miquelon",
      code: "PM",
      continent: "North America"
    },
    {
      name: "Saint Vincent and the Grenadines",
      code: "VC",
      continent: "North America",
      filename: "saint-vincent-and-the-grenadines"
    },
    {
      name: "Samoa",
      code: "WS",
      continent: "Oceania",
      filename: "samoa"
    },
    {
      name: "San Marino",
      code: "SM",
      continent: "Europe",
      filename: "san-marino"
    },
    {
      name: "São Tomé and Príncipe",
      code: "ST",
      continent: "Africa",
      filename: "sao-tome-and-principe"
    },
    {
      name: "Saudi Arabia",
      code: "SA",
      continent: "Asia",
      filename: "saudi-arabia"
    },
    {
      name: "Senegal",
      code: "SN",
      continent: "Africa",
      filename: "senegal"
    },
    {
      name: "Serbia",
      code: "RS",
      continent: "Europe",
      filename: "serbia"
    },
    {
      name: "Seychelles",
      code: "SC",
      continent: "Africa",
      filename: "seychelles"
    },
    {
      name: "Sierra Leone",
      code: "SL",
      continent: "Africa",
      filename: "sierra-leone"
    },
    {
      name: "Singapore",
      code: "SG",
      continent: "Asia",
      filename: "singapore"
    },
    {
      name: "Sint Maarten",
      code: "SX",
      continent: "Europe"
    },
    {
      name: "Slovakia",
      code: "SK",
      continent: "Europe",
      filename: "slovakia"
    },
    {
      name: "Slovenia",
      code: "SI",
      continent: "Europe",
      filename: "slovenia"
    },
    {
      name: "Solomon Islands",
      code: "SB",
      continent: "Oceania",
      filename: "solomon-islands"
    },
    {
      name: "Somalia",
      code: "SO",
      continent: "Africa",
      filename: "somalia"
    },
    {
      name: "South Africa",
      code: "ZA",
      continent: "Africa",
      filename: "south-africa"
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      code: "GS",
      continent: "South America"
    },
    {
      name: "South Sudan",
      code: "SS",
      continent: "Africa",
      filename: "south-sudan"
    },
    {
      name: "Spain",
      code: "ES",
      continent: "Europe",
      filename: "spain"
    },
    {
      name: "Sri Lanka",
      code: "LK",
      continent: "Asia",
      filename: "sri-lanka"
    },
    {
      name: "Sudan",
      code: "SD",
      continent: "Africa",
      filename: "sudan"
    },
    {
      name: "Suriname",
      code: "SR",
      continent: "South America",
      filename: "suriname"
    },
    {
      name: "Svalbard and Jan Mayen",
      continent: "Europe",
      code: "SJ"
    },
    {
      name: "Swaziland",
      code: "SZ",
      continent: "Africa",
      filename: "swaziland"
    },
    {
      name: "Sweden",
      code: "SE",
      continent: "Europe",
      filename: "sweden"
    },
    {
      name: "Switzerland",
      code: "CH",
      continent: "Europe",
      filename: "switzerland"
    },
    {
      name: "Syrian Arab Republic",
      code: "SY",
      continent: "Asia",
      filename: "syrian-arab-republic"
    },
    {
      name: "Taiwan, Province of China",
      code: "TW",
      continent: "Asia",
      filename: "taiwan-province-of-china"
    },
    {
      name: "Tajikistan",
      code: "TJ",
      continent: "Asia",
      filename: "tajikistan"
    },
    {
      name: "Tanzania, United Republic of",
      code: "TZ",
      continent: "Africa",
      filename: "tanzania-united-republic-of"
    },
    {
      name: "Thailand",
      code: "TH",
      continent: "Asia",
      filename: "thailand"
    },
    {
      name: "Timor-Leste",
      code: "TL",
      continent: "Oceania",
      filename: "timor-leste"
    },
    {
      name: "Togo",
      code: "TG",
      continent: "Africa",
      filename: "togo"
    },
    {
      name: "Tokelau",
      continent: "Oceania",
      code: "TK"
    },
    {
      name: "Tonga",
      code: "TO",
      continent: "Oceania",
      filename: "tonga"
    },
    {
      name: "Trinidad and Tobago",
      code: "TT",
      continent: "North America",
      filename: "trinidad-and-tobago"
    },
    {
      name: "Tunisia",
      code: "TN",
      continent: "Africa",
      filename: "tunisia"
    },
    {
      name: "Turkey",
      code: "TR",
      continent: "Europe",
      filename: "turkey"
    },
    {
      name: "Turkmenistan",
      code: "TM",
      continent: "Asia",
      filename: "turkmenistan"
    },
    {
      name: "Turks and Caicos Islands",
      code: "TC",
      continent: "North America"
    },
    {
      name: "Tuvalu",
      code: "TV",
      continent: "Oceania",
      filename: "tuvalu"
    },
    {
      name: "Uganda",
      code: "UG",
      continent: "Africa",
      filename: "uganda"
    },
    {
      name: "Ukraine",
      code: "UA",
      continent: "Europe",
      filename: "ukraine"
    },
    {
      name: "United Arab Emirates",
      code: "AE",
      continent: "Asia",
      filename: "united-arab-emirates"
    },
    {
      name: "United Kingdom",
      code: "GB",
      continent: "Europe",
      filename: "united-kingdom"
    },
    {
      name: "United States",
      code: "US",
      continent: "North America",
      filename: "united-states"
    },
    {
      name: "United States Minor Outlying Islands",
      code: "UM",
      continent: "North America",
      filename: "united-states-minor-outlying-islands"
    },
    {
      name: "Uruguay",
      code: "UY",
      continent: "South America",
      filename: "uruguay"
    },
    {
      name: "Uzbekistan",
      code: "UZ",
      continent: "Asia",
      filename: "uzbekistan"
    },
    {
      name: "Vanuatu",
      code: "VU",
      continent: "Oceania",
      filename: "vanuatu"
    },
    {
      name: "Venezuela",
      code: "VE",
      continent: "South America",
      filename: "venezuela"
    },
    {
      name: "Viet Nam",
      code: "VN",
      continent: "Asia",
      filename: "viet-nam"
    },
    {
      name: "Virgin Islands, British",
      code: "VG",
      continent: "North America"
    },
    {
      name: "Virgin Islands, U.S.",
      code: "VI",
      continent: "North America"
    },
    {
      name: "Wallis and Futuna",
      continent: "Oceania",
      code: "WF"
    },
    {
      name: "Western Sahara",
      continent: "Africa",
      code: "EH"
    },
    {
      name: "Yemen",
      code: "YE",
      continent: "Asia",
      filename: "yemen"
    },
    {
      name: "Zambia",
      code: "ZM",
      continent: "Africa",
      filename: "zambia"
    },
    {
      name: "Zimbabwe",
      code: "ZW",
      continent: "Africa",
      filename: "zimbabwe"
    }
  ];

  /**
   * On initialize.
   */

  if (_.isEmpty($.jStorage.get("accessToken"))) {
    toastr.error("Please login to access your details", "Error:");
    $state.go("home");
  }
  if ($stateParams.view) {
    $scope.view = $stateParams.view;
  } else {
    $scope.view = "profTab";
  }

  var input = {
    userId: $.jStorage.get("userId")
  };
  $scope.refreshUser = function() {
    if (input.userId) {
      UserService.getUserDetails(input, function(data) {
        $scope.userDetails = data.data.data;
        $scope.showEditAddress =
          $scope.userDetails.shippingAddresses.length == 0 ? true : false;
      });
    }
  };
  $scope.refreshUser();

  /**
   * On view change
   */

  $scope.changeView = function(view) {
    $scope.view = view;
    $scope.showMSG = true;
  };

  /**
   * Get product which are cancelled or returned.
   * @param {cancelled/return} view
   */
  $scope.retriveCancelledProducts = function(view) {
    var data = {
      user: $.jStorage.get("userId"),
      accessToken: $.jStorage.get("accessToken"),
      status: view
    };

    $scope.paramview = view;
    OrderService.cancelledProduct(data, function(output) {
      console.log(output.data.data);
      if (output.data.data.length == 0) {
        if (view == "returned") {
          $scope.isDisabled.return = true;
        } else {
          $scope.isDisabled.cancelled = true;
        }
      }else{
        if (view == "returned") {
          $scope.returned = output.data.data;
          $scope.isDisabled.return = false;
        } else {
          $scope.cancelled = output.data.data;
          $scope.isDisabled.cancelled = false;
        }
      }
      console.log("return", $scope.returned);
      console.log("cancelled", $scope.cancelled);
    });
  };

  $scope.retriveCancelledProducts("returned");
  $scope.retriveCancelledProducts("cancelled");

  /**
   * Get user orders.
   */
  OrderService.getUserOrders(input, function(data) {
    $scope.orders = data.data.data;
    if (_.isEmpty($scope.orders)) {
      $scope.isDisabled.order = true;
    }
  });

  $scope.setDefault = function(index) {
    _.map($scope.userDetails.shippingAddresses, function(n) {
      return (n.isDefault = false);
    });
    $scope.userDetails.shippingAddresses[index].isDefault = true;
    $scope.miniSaveUser();
  };

  /**
   * PROFILE SECTION
   * Edit and Save switch
   */
  $scope.editOrSave = function() {
    $scope.save = !$scope.save;
  };

  $scope.miniSaveUser = function() {
    UserService.updateUserInfo($scope.userDetails, function(data) {});
  };

  $scope.saveUser = function() {
    UserService.updateUserInfo($scope.userDetails, function(data) {
      $scope.editOrSave();
      if (data.data.value) {
        $scope.refreshUser();

        toastr.success("Profile Updated Successfully.", "Success");
      } else {
        toastr.success("Error in updating profile", "Error");
      }
    });
  };

  $scope.switchShowEditAddress = function() {
    $scope.showEditAddress = !$scope.showEditAddress;
  };

  $scope.addNewAddress = function() {
    $scope.addressIndex = -1;
    $scope.editAddress = {};
    $scope.switchShowEditAddress();
  };

  $scope.updateAddress = function(data, index) {
    $scope.addressIndex = index;
    $scope.switchShowEditAddress();
    $scope.editAddress = data;
  };

  $scope.createAndEdit = function() {
    if ($scope.addressIndex == -1) {
      $scope.userDetails.shippingAddresses.push($scope.editAddress);
    } else {
      $scope.userDetails.shippingAddresses[$scope.addressIndex] =
        $scope.editAddress;
    }
    $scope.saveUser();
  };

  $scope.deleteAddress = function() {
    $scope.userDetails.shippingAddresses.splice($scope.deleteIndex, 1);
    $scope.saveUser();
  };

  $scope.confDelete = function(index) {
    $scope.deleteIndex = index;
    $uibModal.open({
      animation: true,
      templateUrl: "views/modal/confirmDelete.html",
      scope: $scope
    });
  };

  /**
   * On State and Country change.
   * @param {country/state} name
   */
  $scope.changeCountry = function(name) {
    $scope.countryButton = name;
    $scope.userDetails.shippingAddresses[$scope.addressIndex].country = name;
  };

  $scope.changeState = function(name) {
    $scope.stateButton = name;
    $scope.userDetails.shippingAddresses[$scope.addressIndex].state = name;
  };

  /**
   * WISHLIST FUNCTIONALITY
   */

  $scope.refreshWishlist = function() {
    WishlistService.getWishlist(input, function(data) {
      $scope.wishlists = data.data.data;
      if (_.isEmpty($scope.wishlists)) {
        $scope.isDisabled.wishlist = true;
      }
      $scope.wl = _.chunk($scope.wishlists, 3);
    });
  };
  $scope.refreshWishlist();

  $scope.removeWishlist = function(prodId, parentIndex, index) {
    var data = {};
    data.accessToken = $.jStorage.get("accessToken");
    data.productId = prodId;
    WishlistService.removeProduct(data, function(data) {
      $scope.wl[parentIndex].splice(index, 1);
      $scope.refreshWishlist();
    });
  };

  /**
   *  CHANGE PASSWORD FUNCTIONALITY
   */
  $scope.changePassword = function() {
    $scope.changePasswordModal = $uibModal.open({
      animation: true,
      templateUrl: "views/modal/resetForgotPassword.html",
      scope: $scope,
      // windowClass: 'loginModalSize',
      controller: "MyAccountCtrl"
      // windowClass: 'modal-content-radi0'
    });
  };
  $scope.savePassword = function(formData) {
    $scope.userData = {};
    if ($.jStorage.get("userId")) {
      $scope.userData.userId = $.jStorage.get("userId");
      if (formData.newPassword == formData.confirmPassword) {
        $scope.userData.new = formData.newPassword;
        UserService.changePassword($scope.userData, function(data) {
          if (data.data.value) {
            toastr.success(
              "You have Successfully changed the Password",
              "Success"
            );
            $state.reload();
          }
        });
      } else {
        $scope.errorCnfMsg =
          "new password and confirm password must be same!!!";
      }
    }
  };
});
myApp.controller("ProductReturnCtrl", function(
  $scope,
  toastr,
  $state,
  OrderService,
  WishlistService,
  TemplateService,
  $translate,
  $rootScope,
  UserService
) {
  $scope.template = TemplateService.getHTML("content/product-return.html");
});
myApp.controller("ReturnSuccessCtrl", function(
  $scope,
  TemplateService,
  $translate,
  $rootScope
) {
  $scope.template = TemplateService.getHTML("content/return-success.html");
  TemplateService.title = "Return Successful"; //This is the Title of the Website
  //  $scope.navigation = NavigationService.getNavigation();
});
myApp.controller("CancelMsgCtrl", function(
  $scope,
  TemplateService,
  $translate,
  $rootScope
) {
  $scope.template = TemplateService.getHTML("content/cancel-msg.html");
  TemplateService.title = "Canceld Oreder"; //This is the Title of the Website
  //  $scope.navigation = NavigationService.getNavigation();
});
myApp.controller("GiftCardCtrl", function(
  $scope,
  TemplateService,
  $translate,
  $rootScope,
  CartService,
  $state
) {
  $scope.template = TemplateService.getHTML("content/giftcard.html");
  TemplateService.title = "Your Gift Card"; //This is the Title of the Website
  //  $scope.navigation = NavigationService.getNavigation();
  $scope.giftCards = [];
  if ($.jStorage.get("giftCards")) {
    var giftV = $.jStorage.get("giftCards");
    $scope.giftCards.push(giftV);
  }
  $scope.giftAddToCart = function(giftDetails) {
    var timestamp = Date.now();
    var couponCode = "BU" + timestamp;
    giftDetails.userId = $.jStorage.get("userId");
    giftDetails.couponCode = couponCode;
    $scope.giftCards.push(giftDetails);
    $.jStorage.set("giftCards", $scope.giftCards);
    CartService.giftSave(giftDetails, function(data) {
      var gift = {};
      gift.giftDetails = data.data.data;
      gift.accessToken = $.jStorage.get("accessToken");
      gift.userId = $.jStorage.get("userId");
      CartService.saveProduct(gift, function(data) {
        if (data.data.data.message == "Cart updated successfully") {
          $state.go("mycart");
        }
      });
    });
  };
});
myApp.controller("StoreLocatorCtrl", function(
  $scope,
  $state,
  $timeout,
  toastr,
  TemplateService,
  myService,
  NavigationService,
  $translate,
  $rootScope,
  $filter
) {
  $scope.template = TemplateService.getHTML("content/storelocator.html");
  TemplateService.title = "Stores"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  myService.ctrlBanners("mycart", function(data) {
    console.log("called api");
    $scope.banner = data;
    console.log("$scope.banner", $scope.banner);
  });
  NavigationService.getAllLocation(function(data) {
    $scope.location = data.data.data.results;
  });
  $scope.storeLocation = []; // We need to add city and subCity array of obj
  $scope.locationButton; // To change the value(City) of button
  $scope.locationDropdownOpen = false;
  // $scope.location = [{
  //     'city': 'Mumbai',
  //     'lat': 19.0760,
  //     'long': 72.8777,
  //     'subCity': [{
  //         'brand': 'img/brands/tony1.png',
  //         'name': 'Location 1 Name',
  //         'subCity': 'borivali',
  //         'url': 'Location 1 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road, borivali, Mumbai - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntum1'
  //     }, {
  //         'brand': 'img/brands/ms-custom.png',
  //         'name': 'Location 1 Name',
  //         'subCity': 'lowerparel',
  //         'url': 'Location 2 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road, lowerparel, Mumbai - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntum2'
  //     }, {
  //         'brand': 'img/brands/umber.png',
  //         'name': 'Location 1 Name',
  //         'subCity': 'mumbai central',
  //         'url': 'Location 2 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road,  mumbai central, Mumbai - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntum3'
  //     }]

  // }, {
  //     'city': 'Pune',
  //     'lat': 18.5204,
  //     'long': 73.8567,
  //     'subCity': [{
  //         'brand': 'img/brands/dockers.png',
  //         'name': 'Location 1 Name',
  //         'subCity': 'hadapsar',
  //         'url': 'Location 1 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road,  hadapsar West, pune - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntumpuna1'
  //     }, {
  //         'brand': 'img/brands/ms-custom.png',
  //         'name': 'Location 2 Name',
  //         'subCity': 'aundh',
  //         'url': 'Location 2 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road, aundh, pune - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntumpuna2'
  //     }, {
  //         'brand': 'img/brands/ralph.png',
  //         'name': 'Location 3 Name',

  //         'subCity': 'nanded',
  //         'url': 'Location 3 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road, nanded, pune - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntumpuna3'
  //     }],

  // }, {
  //     'city': 'Hyderabad',
  //     'lat': 17.3850,
  //     'long': 78.4867,
  //     'subCity': [{
  //         'brand': 'img/brands/ms-custom.png',
  //         'name': 'Location 1 Name',
  //         'subCity': 'banjara hills',
  //         'url': 'Location 1 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road, banjara hills, hyderabad - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntumpuna1'
  //     }, {
  //         'brand': 'img/brands/dockers.png',
  //         'name': 'Location 2 Name',
  //         'subCity': 'lb nagar',
  //         'url': 'Location 2 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road, lb nagar, hyderabad - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntumpuna2'
  //     }, {
  //         'brand': 'img/brands/ralph.png',
  //         'name': 'Location 3 Name',
  //         'subCity': 'hitec city',
  //         'url': 'Location 3 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road, hitec city, hyderabad - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntumpuna3'
  //     }],

  // }, {
  //     'city': 'Chennai',
  //     'lat': 13.0827,
  //     'long': 80.2707,
  //     'subCity': [{
  //         'brand': 'img/brands/dockers.png',
  //         'name': 'Location 1 Name',
  //         'subCity': 'ramapuram',
  //         'url': 'Location 1 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road, ramapuram,chennai - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntumpuna1'
  //     }, {
  //         'brand': 'img/brands/umber.png',
  //         'name': 'Location 2 Name',
  //         'subCity': 'tiruvallur',
  //         'url': 'Location 2 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road, tiruvallur,chennai - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntumpuna2'
  //     }, {
  //         'brand': 'img/brands/tony1.png',
  //         'name': 'Location 3 Name',
  //         'subCity': 'avadi',
  //         'url': 'Location 3 URL',
  //         'address': 'Shop No 2, Morya Mahal,Linking Road, avadi,chennai - 400050',
  //         'contactNo': '+(91)-22-26559556 +(91)-9769422251, 9821593786',
  //         'email': 'info@burntumpuna3'
  //     }],

  // }];

  /* Start of map */
  $scope.showSlider = true;
  var map;
  // which will hold the value of google map API
  var geocoder = new google.maps.Geocoder(); // which will hold the value of google map geocoder API

  //After 500 ms the map initialize function will be called
  var mapOptions = {
    center: new google.maps.LatLng(20.5937, 78.9629), // we have set up India lat & long
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  $timeout(function() {
    function myMap() {
      var mapCanvas = document.getElementById("map");
      for (i = 0; i < $scope.location.length; i++) {
        // We need to set the default location or city in dropdown i.e mumbai. So for that we need to iterate $scope.location to get the mumbai city
        if ($scope.location[i] == $scope.location[0]) {
          $scope.locationButton = $scope.location[0].city;
          mapOptions.center = new google.maps.LatLng(
            $scope.location[0].lat,
            $scope.location[0].long
          );
          for (j = 0; j < $scope.location[i].subCity.length; j++) {
            geocodeAddress($scope.location[0].subCity[j]);
          }
        }
      }

      map = new google.maps.Map(mapCanvas, mapOptions);
    }
    myMap();
  }, 500);

  function geocodeAddress(locations) {
    // console.log("locati", locations);
    var title = locations.name;
    var address = locations.subCity;
    var url = locations.url;
    $scope.storeLocation.push({
      address: locations.address,
      contactNo: locations.contactNo,
      email: locations.email,
      brand: locations.brand
    });
    geocoder.geocode(
      {
        address: address
      },

      function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var marker = new google.maps.Marker({
            icon: "img/map-marker-img.png",
            //icon: 'http://maps.google.com/mapfiles/ms/icons/red.png',
            map: map,
            position: results[0].geometry.location,
            title: title,
            animation: google.maps.Animation.DROP,
            address: address,
            url: url
          });
          infoWindow(marker, map, title, address, url);
        } else {
          toastr.warning("Geocode of" + address + "failed:" + status);
          //alert("geocode of " + address + " failed:" + status);
        }
      }
    );
  }

  function infoWindow(marker, map, title, address, url) {
    google.maps.event.addListener(marker, "click", function() {
      var html =
        "<div><h6 style='margin-top: 5px; margin-bottom: 5px;'>" +
        title +
        "</h6><p style='margin-bottom: 5px;'>" +
        address +
        "<br></div><a href='" +
        url +
        "'>View location</a></p></div>";
      iw = new google.maps.InfoWindow({
        content: html,
        maxWidth: 200
      });
      iw.open(map, marker);
    });
  }

  //This is dropdown's function wihich is used for changing the map location after clicking on  a particular city from the dropdown list.

  // For changing addresses after clicking on a particular city
  $scope.changePlaces = function(place) {
    $scope.locationDropdownOpen = false;
    $scope.locationButton = place.city; // After clicking on dropdown, the button value changes
    $scope.showSlider = false;
    $scope.storeLocation = [];

    map.setCenter(new google.maps.LatLng(place.lat, place.long)); //Set the lat & long of selected dropdown's city

    for (i = 0; i < $scope.location.length; i++) {
      if ($scope.location[i].city == place.city) {
        for (j = 0; j < $scope.location[i].subCity.length; j++) {
          // alert($scope.location[i].subCity[j].subCity);
          geocodeAddress($scope.location[i].subCity[j]);
        }
        $timeout(function() {
          $scope.showSlider = true;
        }, 0.5);
      }
    }

    // End of map
  }; // End of click
});
