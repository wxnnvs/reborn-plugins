let backToLWJGL = ["NONE", "ESCAPE", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "MINUS", "EQUALS", "BACK", "TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "LBRACKET", "RBRACKET", "RETURN", "LCONTROL", "A", "S", "D", "F", "G", "H", "J", "K", "L", "SEMICOLON", "APOSTROPHE", "GRAVE", "LSHIFT", "BACKSLASH", "Z", "X", "C", "V", "B", "N", "M", "COMMA", "PERIOD", "SLASH", "RSHIFT", "MULTIPLY", "LMENU", "SPACE", "CAPITAL", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "NUMLOCK", "SCROLL", "NUMPAD7", "NUMPAD8", "NUMPAD9", "SUBTRACT", "NUMPAD4", "NUMPAD5", "NUMPAD6", "ADD", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD0", "DECIMAL", "UNKNOWN", "UNKNOWN", "UNKNOWN", "F11", "F12", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "F13", "F14", "F15", "F16", "F17", "F18", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "KANA", "F19", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "CONVERT", "UNKNOWN", "NOCONVERT", "UNKNOWN", "YEN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "NUMPADEQUALS", "UNKNOWN", "UNKNOWN", "CIRCUMFLEX", "AT", "COLON", "UNDERLINE", "KANJI", "STOP", "AX", "UNLABELED", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "NUMPADENTER", "RCONTROL", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "SECTION", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "NUMPADCOMMA", "UNKNOWN", "DIVIDE", "UNKNOWN", "SYSRQ", "RMENU", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "FUNCTION", "PAUSE", "UNKNOWN", "HOME", "UP", "PRIOR", "UNKNOWN", "LEFT", "UNKNOWN", "RIGHT", "UNKNOWN", "END", "DOWN", "NEXT", "INSERT", "DELETE", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "UNKNOWN", "CLEAR", "LMETA", "RMETA", "APPS", "POWER", "SLEEP"];
if (localStorage.getItem("UKeysFT") !== "yes") {
    localStorage.setItem("UKeysFT", "yes");
    localStorage.setItem("UKeys", JSON.stringify({
        keyids: [],
        keyvals: [],
        functions: []
    }));
}
let UKeysObj = JSON.parse(localStorage.getItem("UKeys"));

function sleep(delay = 0) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

function removeFromArray(array, index) {
    if (index > -1) {
        array.splice(index, 1);
    }
}
let unikbui = {
    "queue": [],
    openbutton: document.createElement("button")
};
unikbui.openbutton.innerHTML = "Open Mod Controls";
unikbui.html = "<div style=\"font-family:Minecraftia;color:#fff;\"><h4 style=\"text-align: center;\">Mod Controls</h4><div style=\"background-color: rgba(0, 0, 0, 0.3);\"><table id=\"uktable\" style=\"margin-left: auto;margin-right: auto;table-layout: fixed; width: 35%;\"></table><br></div><p style=\"text-align: center;\"><button class=\"mcButton\" onclick=\"unikbui.div.style.display = 'none';localStorage.setItem('UKeys', JSON.stringify(UKeysObj));ukui = false\">Done</button>&nbsp&nbsp<button class=\"mcButton\" onclick=\"localStorage.setItem('UKeysFT', 'none');alert('UniBinds will reset binds next time you open EaglerForge')\">Reset</button></p></div>";
unikbui.div = document.createElement("div");
document.body.appendChild(unikbui.div);
unikbui.div.style.display = "none";
unikbui.div.style.zIndex = 1e3;
unikbui.div.style.position = "absolute";
unikbui.div.style.top = "0px";
unikbui.div.style.left = "0px";
unikbui.div.style.bottom = "0px";
unikbui.div.style.right = "0px";
unikbui.div.style.backgroundImage = "url(data:image/png;base64,UklGRhoBAABXRUJQVlA4TA0BAAAvn8AnAIWjtpEECdnA2N0DsTROy7xUqfrWw0jbyLkJKTz0+I20jTT/Bo89e1YR/Wfktm0Y+wNKLobT7QP/n/B7Z/naW26QHoTpHB7LFouyKHlzeHxfCStSuj9KdbC8z1IJ5iWiyQed48vtYJ+lUu0t4VwranS1XMIutSiLYlbb8G54uf2p3VPSfRZtSrlsPFjOzZZrd/us3B3uK+HcHJQql+xbLMrS/WqNpm6DeZ/VIPVYaN/KzUbp91nd9xl5pYu50dU2W417nbdTj5l2Ne92uM9qXNpyf6+oXkabHKXaZ1HS4Iaqpim+1KIJ+0M49/LjNbTGP5mrrMZEuc7Uzcb1ViOJ6TuOt4NGJs+zDgA=)";
unikbui.div.style.backgroundColor = "#3c3c3c";
unikbui.div.style.backgroundBlendMode = "multiply";
unikbui.div.style.backgroundSize = "64px";
unikbui.openbutton.setAttribute("onclick", "unikbui.div.innerHTML = unikbui.html;unikbui.div.style.display = 'initial';UKrenderui();ukui = true");
unikbui.openbutton.setAttribute("class", "mcButton");
unikbui.style = document.createElement("style");
unikbui.style.innerHTML = "@font-face{font-family:Minecraftia;src:url(https://raw.githubusercontent.com/wxnnvs/reborn-plugins/main/unikeys/minecraftia.ttf)}.mcButton{background:url(https://raw.githubusercontent.com/wxnnvs/reborn-plugins/main/unikeys/mcButton.png) 0 0/cover no-repeat;color:inherit;border:none;padding:0;font:inherit;outline:inherit;min-width:300px;min-height:37px;cursor:default}.mcButton:hover{background-image:url(https://raw.githubusercontent.com/wxnnvs/reborn-plugins/main/unikeys/mcButtonHover.png)}.mcKeybindButton{min-width:150px;min-height:40px}.mcResetButton{min-width:100px;min-height:40px}";
document.head.appendChild(unikbui.style);
ModAPI.addEventListener("gui", function () {
    sleep(1e3).then(() => {
        let guiElement = document.getElementById("eaglerpl_gui");
        guiElement.appendChild(document.createElement("br"));
        guiElement.appendChild(unikbui.openbutton);
    });
});

function UKrenderui() {
    var tableElement = document.getElementById("uktable");
    tableElement.innerHTML = "<tr><th>Title</th><th>Keybind</th></tr>";
    for (let i = 0; i < UKeysObj.keyids.length; i++) {
        let rowElement = document.createElement("tr");
        let titleElement = document.createElement("td");
        titleElement.innerHTML = UKeysObj.keyids[i];
        rowElement.appendChild(titleElement);
        let keybindElement = document.createElement("td");
        let keybindButton = document.createElement("button");
        let resetButton = document.createElement("button");
        keybindButton.innerHTML = UKeysObj.keyvals[i] !== "NONE" ? backToLWJGL[UKeysObj.keyvals[i]] : "NONE";
        keybindButton.setAttribute("id", "kb" + i);
        keybindButton.setAttribute("class", "mcButton mcKeybindButton");
        keybindButton.setAttribute("onclick", "unikbui.queue.push(" + i + ");document.getElementById('kb" + i + "').innerHTML = '[PRESS]'");
        resetButton.setAttribute("class", "mcButton mcResetButton");
        resetButton.innerHTML = "CLEAR";
        resetButton.setAttribute("onclick", "UKeys.setKeybind('" + UKeysObj.keyids[i] + "');UKrenderui()");
        if (UKeysObj.keyvals[i] === "NONE") {
            resetButton.setAttribute("disabled", "true");
        }
        keybindElement.appendChild(keybindButton);
        keybindElement.innerHTML = keybindElement.innerHTML + "&nbsp&nbsp";
        keybindElement.appendChild(resetButton);
        rowElement.appendChild(keybindElement);
        tableElement.appendChild(rowElement);
    }
}
const UKeys = {
    addKeybind: function (keyId, keyFunction, keyVal = "NONE") {
        if (UKeysObj.keyids.indexOf(keyId) === -1) {
            UKeysObj.keyids.push(keyId);
            UKeysObj.keyvals.push(keyVal);
            UKeysObj.functions.push(keyFunction);
        }
    },
    removeKeybind: function (keyId) {
        let index = UKeysObj.keyids.indexOf(keyId);
        removeFromArray(UKeysObj.keyids, index);
        removeFromArray(UKeysObj.keyvals, index);
        removeFromArray(UKeysObj.functions, index);
    },
    setKeybind: function (keyId, keyVal = "NONE") {
        let index = UKeysObj.keyids.indexOf(keyId);
        UKeysObj.keyvals[index] = keyVal;
    }
};
ModAPI.addEventListener("key", function (event) {
    for (let i = 0; i < UKeysObj.keyids.length; i++) {
        if (event.key === UKeysObj.keyvals[i]) {
            eval(UKeysObj.functions[i]);
        }
    }
});