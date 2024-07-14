//ElementSection
const title = document.getElementById("title");
const playerStat = document.getElementById("playerStat");
const interface = document.getElementById("interface");
    const display = document.getElementById("display");
    const choices = document.getElementById("choices");
const credits = document.getElementById("credits")
//ElementStat
const currentVitalityStat = document.getElementById("currentVitalityStat")
const currentEnduranceStat = document.getElementById("currentEnduranceStat")
const currentStrengthStat = document.getElementById("currentStrengthStat")
const currentAgilityStat = document.getElementById("currentAgilityStat")
const currentIntelligenceStat = document.getElementById("currentIntelligenceStat")
const currentWisdomStat = document.getElementById("currentWisdomStat")
const currentPerceptionStat = document.getElementById("currentPerceptionStat")
const currentCharismaStat = document.getElementById("currentCharismaStat")

const maxVitalityStat = document.getElementById("maxVitalityStat")
const maxEnduranceStat = document.getElementById("maxEnduranceStat")
const maxStrengthStat = document.getElementById("maxStrengthStat")
const maxAgilityStat = document.getElementById("maxAgilityStat")
const maxIntelligenceStat = document.getElementById("maxIntelligenceStat")
const maxWisdomStat = document.getElementById("maxWisdomStat")
const maxPerceptionStat = document.getElementById("maxPerceptionStat")
const maxCharismaStat = document.getElementById("maxCharismaStat")
//text
const text = document.getElementById("text")
 
//Start
function characterCreation() {
    text.innerText = "Build Your character"
    
    const vitalityLabel = document.createElement('label')
    vitalityLabel.for

    const baseVitalityStat = document.createElement('input')
    baseVitalityStat.type = "number"
    interface.appendChild(baseVitalityStat)
    
    const baseEnduranceStat = document.createElement('input')
    baseEnduranceStat.type = "number"
    interface.appendChild(baseEnduranceStat)

    const baseStrengthStat = document.createElement('input')
    baseStrengthStat.type = "number"
    interface.appendChild(baseStrengthStat)

    const baseAgilityStat = document.createElement('input')
    baseAgilityStat.type = "number"
    interface.appendChild(baseAgilityStat)

    const baseIntelligenceStat = document.createElement('input')
    baseIntelligenceStat.type = "number"
    interface.appendChild(baseIntelligenceStat)

    const baseWisdomStat = document.createElement('input')
    baseWisdomStat.type = "number"
    interface.appendChild(baseWisdomStat)

    const basePerceptionStat = document.createElement('input')
    basePerceptionStat.type = "number"
    interface.appendChild(basePerceptionStat)

    const baseCharismaStat = document.createElement('input')
    baseCharismaStat.type = "number"
    interface.appendChild(baseCharismaStat)
}

function stuff() {
    const newButton = document.createElement('button');
    newButton.textContent = 'Click me!';
    interface.appendChild(newButton);
    newButton.addEventListener('click', () => {
        alert('New button clicked!');
      });
}