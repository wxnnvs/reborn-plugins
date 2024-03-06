/*
    Doesn't work because of the server's health sync
*/

ModAPI.require("player");

var isToggled = false; // stores whether the plugin is on or off

window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "g") {
        isToggled = !isToggled;
        ModAPI.player.capabilities.disableDamage = isToggled;
        ModAPI.player.reload();
        ModAPI.displayToChat({msg: "Godmode toggled " + isToggled})
    }
});
