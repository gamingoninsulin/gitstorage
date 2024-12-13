// import.js

async function importHTML(url, containerId) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = html; //Replace the content of the div
    } else {
      console.error(`Container element with id "${containerId}" not found.`);
    }
  } catch (error) {
    console.error('Error importing HTML:', error);
    // Handle the error appropriately (e.g., display an error message)
  }
}

const htmlData = [
  { url: '../../assets/SONY/games_psp.html', containerId: 'psp-content' },
  { url: '../../assets/SONY/games_ps1.html', containerId: 'ps1-content' },
  { url: '../../assets/SONY/games_ps2.html', containerId: 'ps2-content' },
  { url: '../../assets/SONY/games_ps3.html', containerId: 'ps3-content' },

  { url: '../../assets/NINTENDO/games_gb.html', containerId: 'gb-content' },
  { url: '../../assets/NINTENDO/games_nds.html', containerId: 'nds-content' },
  { url: '../../assets/NINTENDO/games_switch.html', containerId: 'switch-content' }
];

//Import each HTML file into its own div
htmlData.forEach(data => {
  importHTML(data.url, data.containerId).then(() => {
    console.log(`HTML from ${data.url} imported into ${data.containerId}`);
  });
});