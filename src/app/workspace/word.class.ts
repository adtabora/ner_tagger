export class tagged_word{
    word: string
    tag: string
    color: string
};

export let tagTypes = [
    ["Loc", "grey"],
    ["Per", "grey"],
    ["Org", "grey"],
    ["Misc", "grey"],

    ["Country", "red"], 
    ["State", "gold"],
    ["City", "green"],
    ["Zone", "blue"], 
    
    //Specialized Zones
    ["Col", "darkblue"],  //Colonia
    ["Res", "DodgerBlue"],  //Residencial
    ["Bar", "LightSkyBlue"],  //Barrio
    

    

]