function loadHTML(elementId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

loadHTML("psp-content", "../../assets/SONY/games_psp.html");
loadHTML("ps1-content", "../../assets/SONY/games_ps1.html");
loadHTML("ps2-content", "../../assets/SONY/games_ps2.html");
loadHTML("ps3-content", "../../assets/SONY/games_ps3.html");

loadHTML("gb-content", "../../assets/NINTENDO/games_gb.html");
loadHTML("nds-content", "../../assets/NINTENDO/games_nds.html");
loadHTML("switch-content", "../../assets/NINTENDO/games_switch.html");


