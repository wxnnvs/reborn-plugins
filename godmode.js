//basicly no damage
PluginAPI.require("player");

var isToggled = false; //stores whether the plugin is on or off

window.addEventListener("keypress", (event) => {
    if (event.key === 34) { // Key code for 'g'
        isToggled = !isToggled;
        PluginAPI.player.capabilities.disableDamage = isToggled;
        PluginAPI.updateComponent("player");
    }
});