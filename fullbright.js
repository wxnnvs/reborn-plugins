var isToggled = false; //stores whether the plugin is on or off
var oldBrightness = ModAPI.blocks.air.lightValue //stores the original lightvalue


window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "f") {
        isToggled = !isToggled;
        if (isToggled){
            ModAPI.blocks.air.lightValue = 10;
        } else {
            ModAPI.blocks.air.lightValue = oldBrightness;
        }
        ModAPI.blocks.reload();
        ModAPI.displayToChat({msg: "Fullbright toggled " + isToggled})
    }
});