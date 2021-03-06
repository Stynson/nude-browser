// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var windowTopBar = document.createElement("div");
windowTopBar.style.width = "100%";
windowTopBar.style.height = "32px";
windowTopBar.style.backgroundColor = "#000";
windowTopBar.style.position = "absolute";
windowTopBar.style.top = windowTopBar.style.left = 0;
windowTopBar.style.webkitAppRegion = "drag";
document.body.appendChild(windowTopBar);

document.getElementById("btn-login").addEventListener("click", () => {
    const { ipcRenderer } = require("electron");
    ipcRenderer.send("load-page", "main.html");
});
