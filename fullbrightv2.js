// By radmanplays
// Modified by: wxnnvs

var gamma = 1000
var toggled = true
    ModAPI.addEventListener("key", function(ev){
        if(ev.key == 33){
            if(!toggled){
                ModAPI.displayToChat({msg: "fullbright enabled! go to an other tab and come back to see the results"})
                toggled = true
                
            } else{
                ModAPI.displayToChat({msg: "fullbright disabled! go to an other tab and come back to see the results"})
                toggled = false
            }
        }
        
    })
ModAPI.addEventListener("frame", function (){
    if(toggled){
        ModAPI.settings.gammaSetting = gamma
    } else {
        ModAPI.settings.gammaSetting = 1
    }
})