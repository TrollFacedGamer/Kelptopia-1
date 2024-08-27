//ElementSection
const title = document.getElementById("title");
const playerStat = document.getElementById("playerStat");
const interface = document.getElementById("interface");
    const display = document.getElementById("display");
    const choices = document.getElementById("choices");
const credits = document.getElementById("credits")
//ElementStat
const currentMoney = document.getElementById("currentMoney")
const currentInventory = document.getElementById("currentInventory")

const levelStat = document.getElementById("levelStat")
const currentEXPStat = document.getElementById("currentEXPStat")
const maxEXPStat = document.getElementById("maxEXPStat")

const currentHealthStat = document.getElementById("currentHealthStat")
const currentManaStat = document.getElementById("currentManaStat")

const currentHungerStat = document.getElementById("currentHungerStat")
const currentThirstStat = document.getElementById("currentThirstStat")

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

const maxHungerStat = document.getElementById("maxHungerStat")
const maxThirstStat = document.getElementById("maxThirstStat")

const maxVitalityStat = document.getElementById("maxVitalityStat");
const maxEnduranceStat = document.getElementById("maxEnduranceStat");
const maxStrengthStat = document.getElementById("maxStrengthStat");
const maxAgilityStat = document.getElementById("maxAgilityStat");
const maxIntelligenceStat = document.getElementById("maxIntelligenceStat");
const maxWisdomStat = document.getElementById("maxWisdomStat");
const maxPerceptionStat = document.getElementById("maxPerceptionStat");
const maxCharismaStat = document.getElementById("maxCharismaStat");

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

        restoreStat()

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
}

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

    inventory.innerText = " "

    restoreStat()
}

function broken() {
    clear()
    text.innerText = ""  
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
