ModAPI.require("player");

ModAPI.addEventListener("update", () => {
    if (ModAPI.player.getHealth() < ModAPI.player.getMaxHealth()) {
        ModAPI.player.setPlayerSPHealth({health: 20});
    }
})