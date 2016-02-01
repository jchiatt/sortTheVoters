var submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = function(e) {
  e.preventDefault();

  var input = getVoters();
  var listType = detectListType(input);

  if (listType === "senate") {
    var workingInput = cleanInput(input);
    colorSenate(workingInput);
  }
  else if (listType === "house") {
    var workingInput = cleanInput(input);
    colorHouse(workingInput);
  }
  else if (listType === "oneWord") {
    var error = "Error: You must provide a list of names.";
    document.getElementById('errors').className = "error-messages u-center";
    document.getElementById('errors').innerHTML = error;
  }
  else {
    var workingInput = cleanUnexpectedInput(input);
    var error = "For best results, copy and paste an entire voter sheet.";
    document.getElementById('errors').className = "error-messages u-center";
    document.getElementById('errors').innerHTML = error;
    console.log(workingInput);
    colorUnexpectedInput(workingInput);
  }
}

function getVoters() {
  var voters = document.getElementById('voters').value;
  return voters;
}

function detectListType(input) {
  var senateHeader = new RegExp(/(Mississippi\sState\sSenate)/);
  var houseHeader = new RegExp(/(Mississippi\sHouse\sof\sRepresentatives)/);
  var singleWord = new RegExp(/[,\n\s]/g);
  var inputType = "";

  if (senateHeader.test(input)) {
    inputType = "senate";
  }
  else if (houseHeader.test(input)) {
    inputType = "house";
  }
  else if (singleWord.test(input) === false) {
    inputType = "oneWord";
  }
  else {
    inputType = "other";
  }
  return inputType;
}

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

function cleanUnexpectedInput(input) {
  input = input.split(/[,\n]|\s/g);
  console.log(input + " inside cleaning function");
  return input;
}

function colorUnexpectedInput(input) {
  console.log("Inside colorUnexpectedInput()!");
  for (l = 0; l < input.length; l++) {
    console.log("Iterating through " + input[l]);
    for (m = 0; m < senateList.length; m++) {
      console.log("Iterating through " + senateList[m]);
      if (input[l] === senateList[m]["Last"] || input[l] === " " + senateList[m]["Last"]) {
        console.log("Name was found!");
        if (senateList[m]["Party"] === "D") {
          console.log("It was a Democrat!");
          input[l] = ' <span style="color:blue;">' + input[l] + '</span>';
        }
        else if (senateList[m]["Party"] === "R") {
          console.log("It was a Republican!");
          input[l] = ' <span style="color:red;">' + input[l] + '</span>';
        }
      }
    }
  }
  for (n = 0; n < input.length; n++) {
    for (o = 0; o < houseList.length; m++) {
      if (input[n] === houseList[o]["Last"] || input[n] === " " + houseList[o]["Last"]) {
        if (houseList[o]["Party"] === "D") {
          input[n] = ' <span style="color:blue;">' + input[n] + '</span>';
        }
        else if (houseList[o]["Party"] === "R") {
          input[n] = ' <span style="color:red;">' + input[n] + '</span>';
        }
      }
    }
  }
  document.getElementById('colored-results-other').innerHTML = input;
}