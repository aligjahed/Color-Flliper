function rnd1() {
  return Math.floor(Math.random() * 200 + 1);
}
function rnd2() {
  return Math.floor(Math.random() * 200 + 1);
}
function rnd3() {
  return Math.floor(Math.random() * 256 + 1);
}

function btn_Click() {
  let color = "rgb(" + rnd1() + "," + rnd2() + "," + rnd3() + ")";

  onclick = document.getElementById("BG").style.backgroundColor = color;

  onclick = document.getElementById("colorCode").innerHTML = color;
}
