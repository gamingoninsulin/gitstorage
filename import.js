function loadHTML(elementId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

loadHTML("psp-content", "./games_psp.html");
loadHTML("ps1-content", "./games_ps1.html");
loadHTML("ps2-content", "./games_ps2.html");
loadHTML("ps3-content", "./games_ps3.html");

loadHTML("gb-content", "./games_gb.html");
loadHTML("nds-content", "./games_nds.html");
loadHTML("switch-content", "./games_switch.html");


