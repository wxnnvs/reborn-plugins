/*
    Broken on EaglerForge's side
*/
ModAPI.require("player");

// handle message and teleport player
ModAPI.addEventListener("sendchatmessage", (e) => {
    let msg = e.message;
    if (msg === ".teleport") {
        e.preventDefault = true;
        let X = prompt("Teleporter v1\nInput an X-coordinate");
        let Y = prompt("Teleporter v1\nInput a Y-coordinate");
        let Z = prompt("Teleporter v1\nInput a Z-coordinate");
        ModAPI.player.setPosition({
            x: X,
            y: Y,
            z: Z
        });
        ModAPI.sendToChat({
            msg: "teleported to desired location"
        });
    }
});