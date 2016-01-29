// TO-DO: Finish housekeeping stuff at end of each color function.

var submitBtn = document.getElementById('submitBtn');

// Wait for click event
submitBtn.onclick = function(e) {
  e.preventDefault();

  // Grab input
  var input = getVoters();

  // Detect House or Senate
  var listType = detectListType(input);

  // Make a "working" input variable
  var workingInput = cleanInput(input);

  // Send "working" array to House or Senate (or fallback) based on type of input entered
  if (listType === "senate") {
    colorSenate(workingInput);
  }
  else if (listType === "house") {
    colorHouse(workingInput);
  }
  else {
    var error = "Error: Please enter valid data.";
    document.getElementById('errors').className = "error-messages u-center";
    document.getElementById('errors').innerHTML = error;
    // TO-DO: Create a fallback function in case unexpected input is entered
    // colorRandomInput(workingInput);
  }
}

// Getting Voters from Input
function getVoters() {
  var voters = document.getElementById('voters').value;
  return voters;
}

// Discerning between House or Senate input
function detectListType(input) {
  var senateHeader = new RegExp(/(Mississippi\sState\sSenate)/);
  var houseHeader = new RegExp(/(Mississippi\sHouse\sof\sRepresentatives)/);
  var inputType = "";

  if (senateHeader.test(input)) {
    inputType = "senate";
  }
  else if (houseHeader.test(input)) {
    inputType = "house";
  }
  else {
    inputType = "other";
  }
  return inputType;
}

// Returning a "working" array
function cleanInput(input) {
  input = input.substring(input.indexOf("Yeas--") + 0);
  input = input.substring(0, input.indexOf("DISCLAIMER"));
  input = input.replace(/Yeas--/, "<strong class=\"yeas\">Yeas--</strong><br>,")
               .replace(/[A-Z]\./g, "")
               .replace(/\s\s/g, " ")
               .replace(/(Total--).+\./g, "")
               .replace(/(Nays--)/, "<br><strong class=\"nays\">Nays--</strong><br>,")
               .replace(/(Necessary\sfor\sPassage--59)/, "")
               .replace(/(Absent (or|and) those not voting)-{1,}/, "<br><strong class=\"absent\">Absent or those not voting</strong><br>,")
               .replace(/(Vacancies)-{1,}./, "")
               .split(/[\n,\t]|(\.\s)/g);

  for (var x = 0; x < input.length; x++) {
    if(input[x] === "") {
      input.splice(x, 1);
    }
    if(input[x] === " Mr") {
      input.splice(x, 1);
    }
    if(input[x] === ". ") {
      input[x] = input[x].replace(input[x], "");
    }
    if(input[x] === "Speaker") {
      input[x] = input[x].replace(input[x], "Mr. Speaker");
    }
  }

  for (var y = 0; y < input.length; y++) {
    if(input[y] === undefined) {
      input.splice(y, 1);
    }
    if(input[y] === "") {
      input.splice(y, 1);
    }
  }

  for (var z = 0; z < input.length; z++) {
    if(input[z] === undefined) {
      input.splice(z, 1);
    }
    if(input[z] === "") {
      input.splice(z, 1);
    }
  }

  return input;


}

// Coloring the Senate input
function colorSenate(names) {
  var hasNumber = new RegExp("\\d{2,3}");

  for (a = 0; a < names.length; a++) {
    if (hasNumber.test(names[a]) == false) {
      for (b = 0; b < senateList.length; b++) {
        if (names[a] == senateList[b]["Last"] || names[a] == " " + senateList[b]["Last"]) {
          if (senateList[b]["Party"] == "D") {
            names[a] = ' <span style="color:blue;">' + names[a] + '</span>';
          }
          else if (senateList[b]["Party"] == "R") {
            names[a] = ' <span style="color:red;">' + names[a] + '</span>';
          }
        }
      }
    }
    else if (hasNumber.test(names[a]) == true) {
      for (c = 0; c < senateList.length; c++) {
        if (parseInt(hasNumber.exec(names[a]), 10) === parseInt(hasNumber.exec(senateList[c]["District"]), 10)) {
          if (senateList[c]["Party"] == "D") {
            names[a] = ' <span style="color:blue;">' + names[a] + '</span>';
          }
          else if (senateList[c]["Party"] == "R") {
            names[a] = ' <span style="color:red;">' + names[a] + '</span>';
          }
        }
      }
    }
  }
  var indexOfFirstNay = parseInt(names.indexOf("<br><strong class=\"nays\">Nays--</strong><br>"));
  var ys = names.slice(1, indexOfFirstNay);
  document.getElementById('colored-results-y').innerHTML = ys;

  var indexOfFirstAbsent = parseInt(names.indexOf("<br><strong class=\"absent\">Absent or those not voting</strong><br>"));
  document.getElementById('colored-results-n').innerHTML = names.slice(indexOfFirstNay + 1, indexOfFirstAbsent);
  document.getElementById('colored-results-a').innerHTML = names.slice(indexOfFirstAbsent + 1, -1);
}

// Coloring the House input
function colorHouse(names) {
  var hasNumber = new RegExp("\\d{2,3}");

  for (a = 0; a < names.length; a++) {
    if (hasNumber.test(names[a]) == false) {
        for (b = 0; b < houseList.length; b++) {
          if (names[a] == houseList[b]["Last"] || names[a] == " " + houseList[b]["Last"]) {
            if (houseList[b]["Party"] == "D") {
              names[a] = ' <span style="color:blue;">' + names[a] + '</span>';
            }
            else if (houseList[b]["Party"] == "R") {
              names[a] = ' <span style="color:red;">' + names[a] + '</span>';
            }
          }
        }
    }
    else if (hasNumber.test(names[a]) == true) {
      for (c = 0; c < houseList.length; c++) {
          if (parseInt(hasNumber.exec(names[a]), 10) === parseInt(hasNumber.exec(houseList[c]["District"]), 10)) {
            if (houseList[c]["Party"] == "D") {
              names[a] = ' <span style="color:blue;">' + names[a] + '</span>';
            }
            else if (houseList[c]["Party"] == "R") {
              names[a] = ' <span style="color:red;">' + names[a] + '</span>';
            }
          }
      }
    }
  }
  var indexOfFirstNay = parseInt(names.indexOf("<br><strong class=\"nays\">Nays--</strong><br>"));
  var ys = names.slice(1, indexOfFirstNay);
  document.getElementById('colored-results-y').innerHTML = ys;

  var indexOfFirstAbsent = parseInt(names.indexOf("<br><strong class=\"absent\">Absent or those not voting</strong><br>"));
  document.getElementById('colored-results-n').innerHTML = names.slice(indexOfFirstNay + 1, indexOfFirstAbsent);
  document.getElementById('colored-results-a').innerHTML = names.slice(indexOfFirstAbsent + 1, -1);

}

// // Attempting to color unexpected input
// function colorRandomInput(input) {
//   var hasNumber = new RegExp("\\d{2,3}");
//   for (m = 0; m < input.length; m++) {
//     if (hasNumber.test(input[m]) == false) {
//       for (n = 0; n < combinedList.length; n++) {
//         if (input[m] == combinedList[n]["Last"] || input[m] == " " + combinedList[n]["Last"]) {
//             if (combinedList[n]["Party"] == "D") {
//               input[m] = ' <span style="color:blue;">' + input[m] + '</span>';
//             }
//             else if (combinedList[n]["Party"] == "R") {
//               input[m] = ' <span style="color:red;">' + input[m] + '</span>';
//             }
//           }
//       }
//     }
//     else if (hasNumber.test(input[m]) == true) {
//       for (o = 0; o < combinedList.length; o++) {
//         if (parseInt(hasNumber.exec(input[m]), 10) === parseInt(hasNumber.exec(combinedList[o]["District"]), 10)) {
//           if (combinedList[o]["Party"] == "D") {
//             input[m] = ' <span style="color:blue;">' + input[m] + '</span>';
//           }
//           else if (combinedList[o]["Party"] == "R") {
//             input[m] = ' <span style="color:red;">' + input[m] + '</span>';
//           }
//         }
//       }
//     }
//   }

//   var indexOfFirstNay = parseInt(input.indexOf("<br><strong class=\"nays\">Nays--</strong><br>"));
//   var ys = input.slice(1, indexOfFirstNay);
//   document.getElementById('colored-results-y').innerHTML = ys;

//   var indexOfFirstAbsent = parseInt(input.indexOf("<br><strong class=\"absent\">Absent or those not voting</strong><br>"));
//   document.getElementById('colored-results-n').innerHTML = input.slice(indexOfFirstNay + 1, indexOfFirstAbsent);
//   document.getElementById('colored-results-a').innerHTML = input.slice(indexOfFirstAbsent + 1, -1);
// }