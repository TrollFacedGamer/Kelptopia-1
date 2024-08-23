//ElementSection
const title = document.getElementById("title");
const playerStat = document.getElementById("playerStat");
const interface = document.getElementById("interface");
    const display = document.getElementById("display");
    const choices = document.getElementById("choices");
const credits = document.getElementById("credits")
//ElementStat
const money = document.getElementById("money")

const levelStat = document.getElementById("levelStat")
const currentEXPStat = document.getElementById("currentEXPStat")
const maxEXPStat = document.getElementById("maxEXPStat")

const currentHealthStat = document.getElementById("currentHealthStat")
const currentManaStat = document.getElementById("currentManaStat")

const currentVitalityStat = document.getElementById("currentVitalityStat");
const currentEnduranceStat = document.getElementById("currentEnduranceStat");
const currentStrengthStat = document.getElementById("currentStrengthStat");
const currentAgilityStat = document.getElementById("currentAgilityStat");
const currentIntelligenceStat = document.getElementById("currentIntelligenceStat");
const currentWisdomStat = document.getElementById("currentWisdomStat");
const currentPerceptionStat = document.getElementById("currentPerceptionStat");
const currentCharismaStat = document.getElementById("currentCharismaStat");

const maxHealthStat = document.getElementById("maxHealthStat")
const maxManaStat = document.getElementById("maxManaStat")

const maxVitalityStat = document.getElementById("maxVitalityStat");
const maxEnduranceStat = document.getElementById("maxEnduranceStat");
const maxStrengthStat = document.getElementById("maxStrengthStat");
const maxAgilityStat = document.getElementById("maxAgilityStat");
const maxIntelligenceStat = document.getElementById("maxIntelligenceStat");
const maxWisdomStat = document.getElementById("maxWisdomStat");
const maxPerceptionStat = document.getElementById("maxPerceptionStat");
const maxCharismaStat = document.getElementById("maxCharismaStat");

function resetStat() {
    currentVitalityStat.innerText = maxVitalityStat.innerText
    currentEnduranceStat.innerText = maxEnduranceStat.innerText
    currentStrengthStat.innerText = maxStrengthStat.innerText 
    currentAgilityStat.innerText = maxAgilityStat.innerText
    currentIntelligenceStat.innerText = maxIntelligenceStat.innerText
    currentWisdomStat.innerText = maxWisdomStat.innerText
    currentPerceptionStat.innerText = maxPerceptionStat.innerText
    currentCharismaStat.innerText = maxCharismaStat.innerText
    
    maxHealthStat.innerText = Number(maxVitalityStat.innerText) * Number(10)
    if (Number(levelStat.innerText) > 0) {
        maxManaStat.innerText = Number(maxWisdomStat.innerText) * Number(10)
    }
    currentHealthStat.innerText = maxHealthStat.innerText
    currentManaStat.innerText = maxManaStat.innerText
}
//text
const text = document.getElementById("text")
const sceneNumber = document.getElementById("sceneNumber")
const character = document.getElementById("character")

//clear
function clear() {
    text.innerText = "Loading . . ."
    choices.innerHTML = ""
}

//Start
function characterCreation() {
    clear()
    text.innerText = "Build Your character"
    sceneNumber.innerText = "000"
    
    const vitalityLabel = document.createElement("label")
    vitalityLabel.setAttribute("for", "baseVitalityStat")
    vitalityLabel.innerText = "Vitality"
    choices.appendChild(vitalityLabel)
    const baseVitalityStat = document.createElement("input")
    baseVitalityStat.type = "number"
    baseVitalityStat.min = 0
    baseVitalityStat.max = 5
    baseVitalityStat.value = 0
    baseVitalityStat.id = "baseVitalityStat"
    choices.appendChild(baseVitalityStat)
    
    choices.appendChild(document.createElement("br"))
    
    const enduranceLabel = document.createElement("label")
    enduranceLabel.setAttribute("for", "baseEnduranceStat")
    enduranceLabel.innerText = "Endurance"
    choices.appendChild(enduranceLabel)
    const baseEnduranceStat = document.createElement("input")
    baseEnduranceStat.type = "number"
    baseEnduranceStat.min = 0
    baseEnduranceStat.max = 5
    baseEnduranceStat.value = 0
    baseEnduranceStat.id = "baseEnduranceStat"
    choices.appendChild(baseEnduranceStat)

    choices.appendChild(document.createElement("br"))
    
    const strengthLabel = document.createElement("label")
    strengthLabel.setAttribute("for", "baseStrengthStat")
    strengthLabel.innerText = "Strength"
    choices.appendChild(strengthLabel)
    const baseStrengthStat = document.createElement("input")
    baseStrengthStat.type = "number"
    baseStrengthStat.min = 0
    baseStrengthStat.max = 5
    baseStrengthStat.value = 0
    baseStrengthStat.id = "baseStrengthStat"
    choices.appendChild(baseStrengthStat)

    choices.appendChild(document.createElement("br"))
    
    const agilityLabel = document.createElement("label")
    agilityLabel.setAttribute("for", "baseAgilityStat")
    agilityLabel.innerText = "Agility"
    choices.appendChild(agilityLabel)
    const baseAgilityStat = document.createElement("input")
    baseAgilityStat.type = "number"
    baseAgilityStat.min = 0
    baseAgilityStat.max = 5
    baseAgilityStat.value = 0
    baseAgilityStat.id = "baseAgilityStat"
    choices.appendChild(baseAgilityStat)

    choices.appendChild(document.createElement("br"))
    
    const intelligenceLabel = document.createElement("label")
    intelligenceLabel.setAttribute("for", "baseIntelligenceStat")
    intelligenceLabel.innerText = "Intelligence"
    choices.appendChild(intelligenceLabel)
    const baseIntelligenceStat = document.createElement("input")
    baseIntelligenceStat.type = "number"
    baseIntelligenceStat.min = 0
    baseIntelligenceStat.max = 5
    baseIntelligenceStat.value = 0
    baseIntelligenceStat.id = "baseIntelligenceStat"
    choices.appendChild(baseIntelligenceStat)

    choices.appendChild(document.createElement("br"))
    
    const wisdomStatLabel = document.createElement("label")
    wisdomStatLabel.setAttribute("for", "baseWisdomStat")
    wisdomStatLabel.innerText = "Wisdom"
    choices.appendChild(wisdomStatLabel)
    const baseWisdomStat = document.createElement("input")
    baseWisdomStat.type = "number"
    baseWisdomStat.min = 0
    baseWisdomStat.max = 5
    baseWisdomStat.value = 0
    baseWisdomStat.id = "baseWisdomStat"
    choices.appendChild(baseWisdomStat)

    choices.appendChild(document.createElement("br"))
    
    const perceptionLabel = document.createElement("label")
    perceptionLabel.setAttribute("for", "basePerceptionStat")
    perceptionLabel.innerText = "Perception"
    choices.appendChild(perceptionLabel)
    const basePerceptionStat = document.createElement("input")
    basePerceptionStat.type = "number"
    basePerceptionStat.min = 0
    basePerceptionStat.max = 5
    basePerceptionStat.value = 0
    basePerceptionStat.id = "basePerceptionStat"
    choices.appendChild(basePerceptionStat)

    choices.appendChild(document.createElement("br"))

    const CharismaLabel = document.createElement("label")
    CharismaLabel.setAttribute("for", "baseCharismaStat")
    CharismaLabel.innerText = "Charisma"
    choices.appendChild(CharismaLabel)
    const baseCharismaStat = document.createElement("input")
    baseCharismaStat.type = "number"
    baseCharismaStat.min = 0
    baseCharismaStat.max = 5
    baseCharismaStat.value = 0
    baseCharismaStat.id = "baseCharismaStat"
    choices.appendChild(baseCharismaStat)

    choices.appendChild(document.createElement("br"))

    const roleLabel = document.createElement("label");
    roleLabel.innerText = "Role: "
    roleLabel.setAttribute("for", "roleSelection");
    choices.appendChild(roleLabel)

    const roleSelection = document.createElement("select");
    roleSelection.id = "roleSelection"
    choices.appendChild(roleSelection)

    const roleChoicePriest = document.createElement("option")
    roleChoicePriest.innerText = "Priest"
    roleSelection.appendChild(roleChoicePriest)

    choices.appendChild(document.createElement("br"))
    
    const resetButton = document.createElement("button")
    resetButton.id = "resetButton"
    resetButton.innerText = "Reset"
    resetButton.addEventListener("click", () => {
        characterCreation()
    })
    choices.appendChild(resetButton)
    const doneButton = document.createElement("button")
    doneButton.id = "doneButton"
    doneButton.innerText = "Done"
    doneButton.addEventListener("click", () => {
        baseStatUpdate()
    })
    choices.appendChild(doneButton)

    function baseStatUpdate() {
        if (Number(baseVitalityStat.value) + 
        Number(baseEnduranceStat.value) + 
        Number(baseStrengthStat.value) + 
        Number(baseAgilityStat.value) + 
        Number(baseIntelligenceStat.value) + 
        Number(baseWisdomStat.value) +
        Number(basePerceptionStat.value) +
        Number(baseCharismaStat.value) ==
        5
    ) {
        maxVitalityStat.innerText = Number(baseVitalityStat.value) + 1
        maxEnduranceStat.innerText = Number(baseEnduranceStat.value) + 1
        maxStrengthStat.innerText = Number(baseStrengthStat.value) + 1
        maxAgilityStat.innerText = Number(baseAgilityStat.value) + 1
        maxIntelligenceStat.innerText = Number(baseIntelligenceStat.value) + 1
        maxWisdomStat.innerText = Number(baseWisdomStat.value) + 1
        maxPerceptionStat.innerText = Number(basePerceptionStat.value) + 1
        maxCharismaStat.innerText = Number(baseCharismaStat.value) + 1

        resetStat()

        if (roleSelection.innerText = "Priest") {
            priestScene001()
            character.innerText = "priest"
        }
        else {
            characterCreation()
            alert("role error")
        }
    }
    else {
        alert("invaild")
    }
    }
}

function priestScene001() {
    clear();
    text.innerText = "You wake up to the sound of your alarm tucked in your bed, before slaping your alarm clock off.";
    sceneNumber.innerText = "001";

    const getUp = document.createElement("button");
    getUp.innerText = "Get up";
    getUp.addEventListener("click", () => {
        priestScene002();
    });
    choices.appendChild(getUp);
}

function priestScene002() {
    clear();
    text.innerText = "You look groggily around your old house.";
    sceneNumber.innerText = "002";
    
    const bed = document.createElement("button");
    bed.innerText = "Bed";
    bed.addEventListener("click",() => {
        priestScene004();
    });
    choices.appendChild(bed);

    const poseter = document.createElement("button");
    poseter.innerText = "Poseter";
    poseter.addEventListener("click", () => {
        priestScene006();
    })
    choices.appendChild(poseter);

    const stove = document.createElement("button");
    stove.innerText = "Stove"
    stove.addEventListener("click", () => {
        priestScene007()
    });
    choices.appendChild(stove)
}

function priestScene004() {
    clear();
    text.innerText = "You feel the exhaustion of your labored flesh and its yearning for more rest.";
    sceneNumber.innerText = "004";

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene011();
    });
    choices.appendChild(nextScene);
};

function priestScene005() {
    clear();
    text.innerText = "You resist the temptation from your bed.";
    sceneNumber.innerText = "005";

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene002();
    });
    choices.appendChild(nextScene);
};

function priestScene006() {
    clear();
    text.innerText = "Kelp. It is sustenance. It is fuel. It is god.";
    sceneNumber.innerText = "006";

    const back = document.createElement("button");
    back.innerText = "Back";
    back.addEventListener("click", () => {
        priestScene002();
    });
    choices.appendChild(back)
};

function priestScene007() {
    clear();
    text.innerText = "You stare at your empty pot and feel your stomach rumble in hunger.";
    sceneNumber.innerText = "007";

    if () {
        
    }
};

function priestScene008() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";

    
};

function priestScene009() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";

    
};

function priestScene010() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";

    
};

function priestScene011() {
    clear()
    text.innerText = "Do you return to sleep?"
    sceneNumber.innerText = "011"

    const yes = document.createElement("button")
    yes.innerText = "Yes"
    yes.addEventListener("click", () => {
        priestScene031()
    })
    choices.appendChild(yes)
    
    const no = document.createElement("button")
    no.innerText = "No"
    no.addEventListener("click", () => {
        priestScene005()
    })
    choices.appendChild(no)
}

function priestScene031() {
    clear()
    text.innerText = "You give in to your exhaustion and fall onto the bed."
    sceneNumber.innerText = "031"
    
    const toBeContinued = document.createElement("button")
    toBeContinued.innerText = "Coming Soon"
    choices.appendChild(toBeContinued)
}
/*
function stuff() {
    const newButton = document.createElement("button");
    newButton.textContent = "Click me!";
    interface.appendChild(newButton);
    newButton.addEventListener("click", () => {
        alert("New button clicked!");
      });
}
*/
