ModAPI.require("player");

// handle message and teleport player
function handleMessage(e){
    msg = e.message;
    if (msg === ".teleport"){
        e.preventDefault = True;
        X = prompt("Teleporter v1\nInput an X-coordinate");
        Y = prompt("Teleporter v1\nInput a Y-coordinate");
        Z = prompt("Teleporter v1\nInput a Z-coordinate");
        ModAPI.player.setPosition({x: X, y: Y, z:Z});
        ModAPI.sendToChat({msg: "teleported to desired location"});
    }
}

ModAPI.addEventListener("sendchatmessage", handleMessage(e));