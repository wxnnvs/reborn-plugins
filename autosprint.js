ModAPI.require("player");

var isToggled = false; //stores whether the plugin is on or off

window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "r") {
        isToggled = !isToggled;
        ModAPI.player.capabilities.isSprinting = isToggled;
        ModAPI.displayToChat({msg: "Autosprint toggled " + isToggled})
    }
});