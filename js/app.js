var submitBtn = document.getElementById('submitBtn');

// Wait for click event
submitBtn.onclick = function(e) {
  e.preventDefault();
  console.log(e);
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
    // TO-DO: Create a fallback function in case unexpected input is entered
    // For now:
    var error = "Error: Please enter valid data.";
    document.getElementById('errors').className = "error-messages u-center";
    document.getElementById('errors').innerHTML = error;
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
  return  input.replace(/Yeas--/, "<strong class=\"yeas\">Yeas--</strong><br>")
               .replace(/[A-Z]\./g, "")
               .replace(/\s\s/g, " ")
               .replace(/(Total--).+\./g, "")
               .replace(/(Nays--)/, "<br><strong class=\"nays\">Nays--</strong><br>")
               .replace(/(Absent or those not voting)-{1,}/, "<br><strong class=\"absent\">Absent or those not voting</strong><br>")
               .split(/[,]/g);

  // TO-DO: Put Yays, Nays, and Absent sections in their own respective indexes

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
  document.getElementById('colored-results').innerHTML = names;
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
  document.getElementById('colored-results').innerHTML = names;
}