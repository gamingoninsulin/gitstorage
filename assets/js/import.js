function loadHTML(elementId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

loadHTML("psp-content", "../../assets/sony/games_psp.html");
loadHTML("ps1-content", "../../assets/sony/games_ps1.html");
loadHTML("ps2-content", "../../assets/sony/games_ps2.html");
loadHTML("ps3-content", "../../assets/sony/games_ps3.html");

loadHTML("gb-content", "../../assets/nintendo/games_gb.html");
loadHTML("nds-content", "../../assets/nintendo/games_nds.html");
loadHTML("switch-content", "../../assets/nintendo/games_switch.html");


