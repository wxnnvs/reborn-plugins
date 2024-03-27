// Original by radmanplays
// Fixed by wxnnvs

ModAPI.require("settings");

var gamma = 1000;
var toggled = false;
ModAPI.addEventListener("key", function (ev) {
    if (ev.key == 33) {
        if (!toggled) {
            toggled = true;
            var win = open();
            win.close();

        } else {
            toggled = false;
            var win = open();
            win.close();
        }
    }

})


ModAPI.addEventListener("frame", function () {
    if (toggled) {
        ModAPI.settings.gammaSetting = gamma;
        ModAPI.settings.reload();
    } else {
        ModAPI.settings.gammaSetting = 1;
        ModAPI.settings.reload();
    }
})