// Original by radmanplays
// Modified by wxnnvs

ModAPI.require("settings");

var gamma = 1000;
var toggled = false;
ModAPI.addEventListener("key", function (ev) {
    if (ev.key == 33) {
        if (!toggled) {
            var win = open();
            win.close();
            toggled = true;

        } else {
            var win = open();
            win.close();
            toggled = false;
        }
    }

})


ModAPI.addEventListener("frame", function () {
    if (toggled) {
        ModAPI.settings.gammaSetting = gamma;
    } else {
        ModAPI.settings.gammaSetting = 1;
    }
})