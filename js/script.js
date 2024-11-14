//ElementSection
const title = document.getElementById("title");
const playerStat = document.getElementById("playerStat");
const interface = document.getElementById("interface");
    const display = document.getElementById("display");
    const choices = document.getElementById("choices");
const credits = document.getElementById("credits")

//base stats
const currentVitalityStat = document.getElementById("currentVitalityStat");
const currentEnduranceStat = document.getElementById("currentEnduranceStat");
const currentStrengthStat = document.getElementById("currentStrengthStat");
const currentAgilityStat = document.getElementById("currentAgilityStat");
const currentIntelligenceStat = document.getElementById("currentIntelligenceStat");
const currentWisdomStat = document.getElementById("currentWisdomStat");
const currentPerceptionStat = document.getElementById("currentPerceptionStat");
const currentCharismaStat = document.getElementById("currentCharismaStat");

const maxVitalityStat = document.getElementById("maxVitalityStat");
const maxEnduranceStat = document.getElementById("maxEnduranceStat");
const maxStrengthStat = document.getElementById("maxStrengthStat");
const maxAgilityStat = document.getElementById("maxAgilityStat");
const maxIntelligenceStat = document.getElementById("maxIntelligenceStat");
const maxWisdomStat = document.getElementById("maxWisdomStat");
const maxPerceptionStat = document.getElementById("maxPerceptionStat");
const maxCharismaStat = document.getElementById("maxCharismaStat");

//combat
const maxHealthStat = document.getElementById("maxHealthStat")
const maxManaStat = document.getElementById("maxManaStat")

const currentHealthStat = document.getElementById("currentHealthStat")
const currentManaStat = document.getElementById("currentManaStat")

//sustenance
const maxHungerStat = document.getElementById("maxHungerStat")
const maxThirstStat = document.getElementById("maxThirstStat")

const currentHungerStat = document.getElementById("currentHungerStat")
const currentThirstStat = document.getElementById("currentThirstStat")

//miscellaneous
const currentMoney = document.getElementById("currentMoney")

const levelStat = document.getElementById("levelStat")

const currentEXPStat = document.getElementById("currentEXPStat")
const maxEXPStat = document.getElementById("maxEXPStat")


//inventory
const storageUnit = document.getElementById("storageUnit")

const inventorySlot1 = document.getElementById("inventorySlot1")
const inventorySlot2 = document.getElementById("inventorySlot2")
const inventorySlot3 = document.getElementById("inventorySlot3")
const inventorySlot4 = document.getElementById("inventorySlot4")
const inventorySlot5 = document.getElementById("inventorySlot5")
const inventorySlot6 = document.getElementById("inventorySlot6")
const inventorySlot7 = document.getElementById("inventorySlot7")
const inventorySlot8 = document.getElementById("inventorySlot8")


//reset restart restore
function restoreStat() {
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
function restartGame() {
    resetStat()
    clear()
    characterCreation()
}
function resetStat() {
    maxVitalityStat.innerText = 0
    maxEnduranceStat.innerText = 0
    maxStrengthStat.innerText = 0
    maxAgilityStat.innerText = 0
    maxIntelligenceStat.innerText = 0
    maxWisdomStat.innerText = 0
    maxPerceptionStat.innerText = 0
    maxCharismaStat.innerText = 0
    
    currentHungerStat.innerText = 50
    currentThirstStat.innerText = 50
    money.innerText = 20

    levelStat.innerText = 0
    currentEXPStat.innerText = 0
    maxEXPStat.innerText = 0

    currentInventory.innerText = " "

    restoreStat()
}

//text
const text = document.getElementById("text")
const sceneNumber = document.getElementById("sceneNumber")
const character = document.getElementById("character")
const ascii = document.getElementById("ascii")

//clear
function clear() {
    text.innerText = "Loading . . ."
    ascii.innerText = ""
    choices.innerHTML = ""
}

//Start
function characterCreation() {
    clear()
    text.innerText = "Build Your Character"
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
    baseVitalityStat.className = "buildYourCharacter"
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
    baseEnduranceStat.className = "buildYourCharacter"
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
    baseStrengthStat.className = "buildYourCharacter"
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
    baseAgilityStat.className = "buildYourCharacter"
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
    baseIntelligenceStat.className = "buildYourCharacter"
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
    baseWisdomStat.className = "buildYourCharacter"
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
    basePerceptionStat.className = "buildYourCharacter"
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
    baseCharismaStat.className = "buildYourCharacter"
    choices.appendChild(baseCharismaStat)

    choices.appendChild(document.createElement("br"))

    const roleLabel = document.createElement("label");
    roleLabel.innerText = "Role: "
    roleLabel.setAttribute("for", "roleSelection");
    choices.appendChild(roleLabel)

    //role selection
    const roleSelection = document.createElement("select");
    roleSelection.id = "roleSelection"
    roleSelection.className = "buildYourCharacter"
    choices.appendChild(roleSelection)

        //priest
    const roleChoicePriest = document.createElement("option")
    roleChoicePriest.innerText = "Priest"
    roleSelection.appendChild(roleChoicePriest)
    
    choices.appendChild(document.createElement("br"))

    //reset button
    const resetButton = document.createElement("button")
    resetButton.id = "resetButton"
    resetButton.innerText = "Reset"
    resetButton.className = "buildYourCharacter"
    resetButton.addEventListener("click", () => {
        characterCreation()
    })
    choices.appendChild(resetButton)
    //done button
    const doneButton = document.createElement("button")
    doneButton.id = "doneButton"
    doneButton.innerText = "Done"
    doneButton.className = "buildYourCharacter"
    doneButton.addEventListener("click", () => {
        initialStatUpdate()
    })
    choices.appendChild(doneButton)
}

function initialStatUpdate() {
    if (Number(baseVitalityStat.value) + 
        Number(baseEnduranceStat.value) + 
        Number(baseStrengthStat.value) + 
        Number(baseAgilityStat.value) + 
        Number(baseIntelligenceStat.value) + 
        Number(baseWisdomStat.value) +
        Number(basePerceptionStat.value) +
        Number(baseCharismaStat.value) == 5) {
        player.stats.base.vitality.max = Number(baseVitalityStat.value) + 1
        player.stats.base.endurance.max = Number(baseEnduranceStat.value) + 1
        player.stats.base.strength.max = Number(baseStrengthStat.value) + 1
        player.stats.base.agility.max = Number(baseAgilityStat.value) + 1
        player.stats.base.intelligence.max = Number(baseIntelligenceStat.value) + 1
        player.stats.base.wisdom.max = Number(baseWisdomStat.value) + 1
        player.stats.base.perception.max = Number(basePerceptionStat.value) + 1
        player.stats.base.charisma.max = Number(baseCharismaStat.value) + 1

        player.stats.base.restore()

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

//Stat Change
function health() {
    currentHealthStat.innerText = Number(currentHealthStat.innerText) + change;
    if (Number(currentHealthStat.innerText) > Number(maxHealthStat.innerText)) {
        currentHealthStat.innerText = maxHealthStat.innerText;
    }
    if (Number(currentHungerStat.innerText) <= 0) {
        currentHealthStat.innerText = maxHealthStat.innerText
        gameOver();
    }
}
function mana() {
    currentManaStat.innerText = Number(currentManaStat.innerText) + change;
    if (Number(currentManaStat.innerText) > Number(maxManaStat.innerText)) {
        currentManaStat.innerText = maxManaStat.innerText;
    }
    if (Number(currentManaStat.innerText) < 0) {
        broken();
    }
}
function hunger(change) {
    currentHungerStat.innerText = Number(currentHungerStat.innerText) + change;
    if (Number(currentHungerStat.innerText) > Number(maxHungerStat.innerText)) {
        currentHungerStat.innerText = maxHungerStat.innerText;
    }
    if (Number(currentHungerStat.innerText) < 0) {
        currentHungerStat.innerText = 0;
    }
}
function thirst(change) {
    currentThirstStat.innerText = Number(currentThirstStat.innerText) + change;
    if (Number(currentThirstStat.innerText) > Number(maxThirstStat.innerText)) {
        currentThirstStat.innerText = maxThirstStat.innerText;
    }
    if (Number(currentThirstStat.innerText) < 0) {
        currentThirstStat.innerText = 0;
    }
}
function money(change) {
    currentMoney,innerText = Number(currentMoney.innerText) + change;
    if (currentMoney < 0) {
        broken();
    }
}
function inventory(change) {
    currentInventory.innerText = change;
}

//Extra
function gameOver() {
    clear()
    text.innerText = ""  
    ascii.innerText = 
    `
  ▄████  ▄▄▄       ███▄ ▄███▓▓█████     ▒█████   ██▒   █▓▓█████  ██▀███  
 ██▒ ▀█▒▒████▄    ▓██▒▀█▀ ██▒▓█   ▀    ▒██▒  ██▒▓██░   █▒▓█   ▀ ▓██ ▒ ██▒
▒██░▄▄▄░▒██  ▀█▄  ▓██    ▓██░▒███      ▒██░  ██▒ ▓██  █▒░▒███   ▓██ ░▄█ ▒
░▓█  ██▓░██▄▄▄▄██ ▒██    ▒██ ▒▓█  ▄    ▒██   ██░  ▒██ █░░▒▓█  ▄ ▒██▀▀█▄  
░▒▓███▀▒ ▓█   ▓██▒▒██▒   ░██▒░▒████▒   ░ ████▓▒░   ▒▀█░  ░▒████▒░██▓ ▒██▒
 ░▒   ▒  ▒▒   ▓▒█░░ ▒░   ░  ░░░ ▒░ ░   ░ ▒░▒░▒░    ░ ▐░  ░░ ▒░ ░░ ▒▓ ░▒▓░
  ░   ░   ▒   ▒▒ ░░  ░      ░ ░ ░  ░     ░ ▒ ▒░    ░ ░░   ░ ░  ░  ░▒ ░ ▒░
░ ░   ░   ░   ▒   ░      ░      ░      ░ ░ ░ ▒       ░░     ░     ░░   ░ 
      ░       ░  ░       ░      ░  ░       ░ ░        ░     ░  ░   ░     
                                                     ░                   
    `                  
    character.innerText = "Extra"
    sceneNumber.innerText = "001"
    
    const restart = document.createElement("button")
    restart.innerText = "restart"
    restart.addEventListener("click", () => {
        restartGame()
    })
    choices.appendChild(restart)
}
function broken() {
    clear()
    text.innerText = "Please report any issue to developers"  
    ascii.innerText = 
    `
  ███████ ██████  ██████   ██████  ██████  
  ██      ██   ██ ██   ██ ██    ██ ██   ██ 
  █████   ██████  ██████  ██    ██ ██████  
  ██      ██   ██ ██   ██ ██    ██ ██   ██ 
  ███████ ██   ██ ██   ██  ██████  ██   ██ 
    `                  
    character.innerText = "Extra"
    sceneNumber.innerText = "002"
    
    const restart = document.createElement("button")
    restart.innerText = "restart"
    restart.addEventListener("click", () => {
        restartGame()
    })
    choices.appendChild(restart)
}
function comingSoon(scene, sceneCharacter) {
    clear();
    text.innerText = "Coming Soon";
    character.innerText = "Extra";
    sceneNumber.innerText = "003";

    const GoBack = document.createElement("button");
    GoBack.innerText = "Go Back";
    GoBack.addEventListener("click", () => {
        character.innerText = sceneCharacter;
        scene();
    })
    choices.appendChild(GoBack)
}
