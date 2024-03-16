// Original by zxmushroom63
// Toggle and xtra ores by: Radmanplayz
// Chunk reload by: wxnnvs

//IIFE. I like scoped variables.
(function () {
    var enabled = false
    ModAPI.addEventListener("key", function (ev) {
        if (ev.key == 45) { // the "x" key
            if (enabled) {
                disable()
                enabled = false
            } else {
                update(); //Trigger the coal xray.
                enabled = true
            }
        }
    })
    var targets = ["diamond_block", "diamond_ore", "gold_block", "gold_ore", "iron_block", "iron_ore", "coal_block", "coal_ore"]; //The target blocks
    var allblocks = Object.keys(ModAPI.blocks); //List of all block IDsw
    function update() {
        ModAPI.mcinstance.$renderGlobal.$loadRenderers()
        ModAPI.displayToChat({
            msg: "xray Enabled!!! move into other chunks further away to see the result!"
        })
        allblocks.forEach(block => { //Loop through all the blocks
            if (targets.includes(block)) { //If it is in the targets list, force it to render.
                ModAPI.blocks[block].forceRender = true;
                ModAPI.blocks[block].reload(); //Push the changes.
            } else if (ModAPI.blocks[block] && ("noRender" in ModAPI.blocks[block])) { //Otherwise, if it is a valid block, and can be set to not render, do so.
                ModAPI.blocks[block].noRender = true;
                ModAPI.blocks[block].reload(); //Push the changes.
            }
        });
    }

    function disable() {
        ModAPI.displayToChat({
            msg: "xray Disabled!!! move into other chunks further away to see the result!"
        })
        allblocks.forEach(block => { //Loop through all the blocks
            if (ModAPI.blocks[block] && ("noRender" in ModAPI.blocks[block])) {
                ModAPI.blocks[block].noRender = false;
                ModAPI.blocks[block].reload(); //Push the changes.
            }
        });
    }
})();

/*
@eventhandler
public void init(FMLInitializationEvent event) {
  // Register the 'X' key as a keybinding
  KeyBinding reloadChunksKey = new KeyBinding("key.reloadChunks", Keyboard.KEY_X, "key.categories.gameplay");
  ClientRegistry.registerKeyBinding(reloadChunksKey);
}

@subscribeevent
public void onKeyInput(InputEvent.KeyInputEvent event) {
  // Check if 'X' key was pressed
  if (reloadChunksKey.isPressed()) {
    // Reload chunks here
    Minecraft mc = Minecraft.getMinecraft();
    if (mc.theWorld != null) {
      mc.renderGlobal.loadRenderers();
    }
  }
}
*/