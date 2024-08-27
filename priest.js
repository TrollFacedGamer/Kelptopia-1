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

    if (inventory.innerText = "Large Bowl of Uncooked Kelp Soup") {
        priestScene009();
    }
    else {
        priestScene008()
    }
};

function priestScene008() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";

    
};

function priestScene009() {
    clear();
    text.innerText = "you began heating the [Large Bowl of Uncooked Kelp Soup]].";
    sceneNumber.innerText = "009";

    
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