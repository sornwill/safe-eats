// Test getState function
//console.log("state = " + getState(49));

// Get full text version of a state by index value
function getState(stateLk) {
  var state = new Array();
  state[0] = "Alabama";
  state[1] = "Alaska";
  state[2] = "Arizona";
  state[3] = "Arkansas";
  state[4] = "California";
  state[5] = "Colorado";
  state[6] = "Connecticut";
  state[7] = "Delaware";
  state[8] = "Florida";
  state[9] = "Georgia";
  state[10] = "Hawaii";
  state[11] = "Idaho";
  state[12] = "Illinois";
  state[13] = "Indiana";
  state[14] = "Iowa";
  state[15] = "Kansas";
  state[16] = "Kentucky";
  state[17] = "Louisiana";
  state[18] = "Maine";
  state[19] = "Maryland";
  state[20] = "Massachusetts";
  state[21] = "Michigan";
  state[22] = "Minnesota";
  state[23] = "Mississippi";
  state[24] = "Missouri";
  state[25] = "Montana";
  state[26] = "Nebraska";
  state[27] = "Nevada";
  state[28] = "New Hampshire";
  state[29] = "New Jersey";
  state[30] = "New Mexico";
  state[31] = "New York";
  state[32] = "North Carolina";
  state[33] = "North Dakota";
  state[34] = "Ohio";
  state[35] = "Oklahoma";
  state[36] = "Oregon";
  state[37] = "Pennsylvania";
  state[38] = "Rhode Island";
  state[39] = "South Carolina";
  state[40] = "South Dakota";
  state[41] = "Tennessee";
  state[42] = "Texas";
  state[43] = "Utah";
  state[44] = "Vermont";
  state[45] = "Virginia";
  state[46] = "Washington";
  state[47] = "West Virginia";
  state[48] = "Wisconsin";
  state[49] = "Wyoming";
  var n = state[stateLk];
  return n;
}

// Test lookUpStateIndex() function
// Case sensitive so may need to call titleCase() first
// var titleCaseText = titleCase("minnesota");
// console.log("State index = " + lookUpStateIndex(titleCaseText));

// Get index value of a state by state name
function lookUpStateIndex(val) {
  var lookup = {
    Alabama: "1",
    Alaska: "2",
    Arizona: "3",
    Arkansas: "4",
    California: "5",
    Colorado: "6",
    Connecticut: "7",
    Delaware: "8",
    Florida: "9",
    Georgia: "10",
    Hawaii: "11",
    Idaho: "12",
    Illinois: "13",
    Indiana: "14",
    Iowa: "15",
    Kansas: "16",
    Kentucky: "17",
    Louisiana: "18",
    Maine: "19",
    Maryland: "20",
    Massachusetts: "21",
    Michigan: "22",
    Minnesota: "23",
    Mississippi: "24",
    Missouri: "25",
    Montana: "26",
    Nebraska: "27",
    Nevada: "28",
    "New Hampshire": "29",
    "New Jersey": "30",
    "New Mexico": "31",
    "New York": "32",
    "North Carolina": "33",
    "North Dakota": "34",
    Ohio: "35",
    Oklahoma: "36",
    Oregon: "37",
    Pennsylvania: "38",
    "Rhode Island": "39",
    "South Carolina": "40",
    "South Dakota": "41",
    Tennessee: "42",
    Texas: "43",
    Utah: "44",
    Vermont: "45",
    Virginia: "46",
    Washington: "47",
    "West Virginia": "48",
    Wisconsin: "49",
    Wyoming: "50",
  };
  return lookup[val];
}

// Test lookUpStateIndex() function
// Case sensitive so may need to call titleCase() first
// var titleCaseText = titleCase("minnesota");
// console.log("State index = " + lookUpStateIndex(titleCaseText));

// Get index value of a state by state name
function lookUpStateIndex02(val) {
  var lookup = {
    Maine: "0",
    Massachusetts: "1",
    Michigan: "2",
    Montana: "3",
    Nevada: "4",
    "New Jersey": "5",
    "New York": "6",
    "North Carolina": "7",
    Ohio: "8",
    Pennsylvania: "9",
    "Rhode Island": "10",
    Tennessee: "11",
    Texas: "12",
    Utah: "13",
    Washington: "14",
    Wisconsin: "15",
    "Puerto Rico": "16",
    Maryland: "17",
    Alabama: "18",
    Alaska: "19",
    Arizona: "20",
    Arkansas: "21",
    California: "22",
    Colorado: "23",
    Connecticut: "24",
    Delaware: "25",
    "District of Columbia": "26",
    Florida: "27",
    Georgia: "28",
    Hawaii: "29",
    Idaho: "30",
    Illinois: "31",
    Indiana: "32",
    Iowa: "33",
    Kansas: "34",
    Kentucky: "35",
    Louisiana: "36",
    Minnesota: "37",
    Mississippi: "38",
    Missouri: "39",
    Nebraska: "40",
    "New Hampshire": "41",
    "New Mexico": "42",
    "North Dakota": "43",
    Oklahoma: "44",
    Oregon: "45",
    "South Carolina": "46",
    "South Dakota": "47",
    Vermont: "48",
    Virginia: "49",
    "West Virginia": "50",
    Wyoming: "51",
  };
  return lookup[val];
}

// Test titleCase
// var txt = "new york";
// var test = titleCase(txt);
// console.log(test);

// Function titleCase() capitalizes the first letter of each word
function titleCase(txt) {
  var text = txt;
  var firstLtr = 0;
  for (var i = 0; i < text.length; i++) {
    if (i == 0 && /[a-zA-Z]/.test(text.charAt(i))) firstLtr = 2;
    if (firstLtr == 0 && /[a-zA-Z]/.test(text.charAt(i))) firstLtr = 2;
    if (firstLtr == 1 && /[^a-zA-Z]/.test(text.charAt(i))) {
      if (text.charAt(i) == "'") {
        if (i + 2 == text.length && /[a-zA-Z]/.test(text.charAt(i + 1)))
          firstLtr = 3;
        else if (i + 2 < text.length && /[^a-zA-Z]/.test(text.charAt(i + 2)))
          firstLtr = 3;
      }
      if (firstLtr == 3) firstLtr = 1;
      else firstLtr = 0;
    }
    if (firstLtr == 2) {
      firstLtr = 1;
      text =
        text.substr(0, i) + text.charAt(i).toUpperCase() + text.substr(i + 1);
    } else {
      text =
        text.substr(0, i) + text.charAt(i).toLowerCase() + text.substr(i + 1);
    }
  }
  return text;
}

// Get the current numeric day of the month.
function getNumDay() {
  var d = new Date();
  var n = d.getDate();
  return n;
}
