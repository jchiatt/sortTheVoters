var submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = function(e) {
  e.preventDefault();
  
  var input = document.getElementById('voters').value;
  input = input.split(/[\s]/g);

  console.log("before colored")

  var colored = houseList.filter(checkList (input));

  console.log(houseList);
  console.log(colored)

}

function checkList(obj, input) {
    if ('Last' in obj == input) {
      console.log("found " + obj);
    }
}