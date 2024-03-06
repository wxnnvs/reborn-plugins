/*
    Untested plugin that should disable the web effect when toggled on.
*/

ModAPI.require("player");

var isToggled = false; // stores whether the plugin is on or off

window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "h") {
        isToggled = !isToggled;
        ModAPI.player.setInWeb(isToggled);
        ModAPI.player.reload();
        ModAPI.displayToChat({msg: "NoWeb toggled " + isToggled})
    }
});
