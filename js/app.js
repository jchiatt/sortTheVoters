var submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = function(e) {
  e.preventDefault();

  var input = document.getElementById('voters').value;
  input = input.replace(/[A-Z]\./g, "")
  var namesArray = input.split(/[\s]/g);

  var colored = colorTheInput(namesArray);

  console.log(colored);
}