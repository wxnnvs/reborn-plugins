/*
    Untested plugin that should disable the web effect when toggled on.
*/

ModAPI.require("player");

var isToggled = false; // stores whether the plugin is on or off

function updatePlayerWeb() {
    ModAPI.player.setInWeb(isToggled);
    ModAPI.player.reload();
}

// add the update event listener
window.addEventListener("update", updatePlayerWeb);

// add the keydown event listener
window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "h") {
        window.removeEventListener("update", updatePlayerWeb);
        isToggled = !isToggled;
        window.addEventListener("update", updatePlayerWeb);
        ModAPI.displayToChat({msg: "NoWeb toggled " + isToggled})
    }
});
