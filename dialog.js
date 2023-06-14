
function myFunction() {
  let text;
  let person = prompt("Silakan tulis namamu:", "Namamu siapa");
  if (person == null || person == "") {
    text = "Usernya membatalkan kotak prompt.";
  } else {
    text = "Halo" + person + "! Apa kabarmu hari ini?";
  }
  document.getElementById("demo").innerHTML = text;
}
