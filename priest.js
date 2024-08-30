let largeBowlOfUncookedKelpSoupPresent = true
let shrimpPresent = true
let turtlehunger = 0

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
        priestScene003();
    });
    choices.appendChild(bed);

    const poseter = document.createElement("button");
    poseter.innerText = "Poseter";
    poseter.addEventListener("click", () => {
        priestScene006();
    })
    choices.appendChild(poseter);

    const stove = document.createElement("button");
    stove.innerText = "Stove";
    stove.addEventListener("click", () => {
        priestScene007();
    });
    choices.appendChild(stove);

    const refeigtor = document.createElement("button");
    refeigtor.innerText = "Refeigtor";
    refeigtor.addEventListener("click", () => {
        priestScene010();
    })
    choices.appendChild(refeigtor);
}

function priestScene003() {
    clear();
    text.innerText = "You look at the cozy red blanket and white pillow of your aging bed.";
    sceneNumber.innerText = "003";

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene004();
    });
    choices.appendChild(nextScene);
};

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

    if (currentInventory.innerText == "Large Bowl of Uncooked Kelp Soup") {
        priestScene009();
    }
    else {
        priestScene008()
    }
};

function priestScene008() {
    clear();
    text.innerText = "You remember you have some leftover soup in the fridge.";
    sceneNumber.innerText = "008";

    const back = document.createElement("button");
    back.innerText = "Back";
    back.addEventListener("click", () => {
        priestScene002();
    });
    choices.appendChild(back)
};

function priestScene009() {
    clear();
    text.innerText = "you began heating the [Large Bowl of Uncooked Kelp Soup]].";
    sceneNumber.innerText = "009";

    const eat = document.createElement("button");
    eat.innerText = "Eat";
    eat.addEventListener("click", () => {
        hunger(50);
        thirst(50);
        priestScene002();
    });
    choices.appendChild(eat)
};

function priestScene010() {
    clear();
    text.innerText = "You open the door of your Refeigtor and find a [Large Bowl of Uncooked Kelp Soup] and [Shrimp].";
    sceneNumber.innerText = "010";

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene024();
    });
    choices.appendChild(nextScene);
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

function priestScene012() {
    clear()
    text.innerText = "Your turtle appears bored, he stares at you intently."
    sceneNumber.innerText = "012"

    if (turtlehunger == 0) {
        priestScene018()
    }
    else if (turtlehunger == 1) {
        priestScene017()
    }
    else {
        broken()
    }
}

function priestScene013() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene014() {
    clear()
    text.innerText = "Do you take the [Large Bowl of Uncooked Kelp Soup]?"
    sceneNumber.innerText = "014"

    const yes = document.createElement("button")
    yes.innerText = "Yes"
    yes.addEventListener("click", () => {
        priestScene002()
        currentInventory.innerText = "Large Bowl of Uncooked Kelp Soup"
        largeBowlOfUncookedKelpSoupPresent = false;
    })
    choices.appendChild(yes)

    if (currentInventory.innerText != " ") {
        yes.disabled = true
    };
    
    const no = document.createElement("button")
    no.innerText = "No"
    no.addEventListener("click", () => {
        priestScene002()
    })
    choices.appendChild(no) 
}

function priestScene015() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene016() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene017() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene018() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene019() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene020() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene021() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene022() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene023() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene024() {
    clear()
    text.innerText = "Interact."
    sceneNumber.innerText = "024"

    const largeBowlOfUncookedKelpSoup = document.createElement("button");
    largeBowlOfUncookedKelpSoup.innerText = "[Large Bowl of Uncooked Kelp Soup]";
    largeBowlOfUncookedKelpSoup.addEventListener("click", () => {
        priestScene014();
    })
    if (largeBowlOfUncookedKelpSoupPresent == false) {
        largeBowlOfUncookedKelpSoup.disabled = true
    }
    choices.appendChild(largeBowlOfUncookedKelpSoup);

    const shrimp = document.createElement("button");
    shrimp.innerText = "[Shrimp]";
    shrimp.addEventListener("click", () => {
        priestScene025();
    })
    if (shrimpPresent == false) {
        shrimp.disabled = true
    }
    choices.appendChild(shrimp)
}

function priestScene025() {
    clear()
    text.innerText = "Do you take the [Shrimp]?."
    sceneNumber.innerText = "025"

    const yes = document.createElement("button")
    yes.innerText = "Yes"
    yes.addEventListener("click", () => {
        priestScene002()
        currentInventory.innerText = "Shrimp"
        shrimpPresent = false
    })
    choices.appendChild(yes)

    if (currentInventory.innerText != " ") {
        yes.disabled = true
    };
    
    const no = document.createElement("button")
    no.innerText = "No"
    no.addEventListener("click", () => {
        priestScene002()
    })
    choices.appendChild(no)
}

function priestScene026() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene027() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene028() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene029() {
    clear()
    text.innerText = ""
    sceneNumber.innerText = ""
}

function priestScene030() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene031() {
    clear()
    text.innerText = "You give in to your exhaustion and fall onto the bed."
    sceneNumber.innerText = "031"
    
    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        comingSoon(priestScene002);
    });
    choices.appendChild(nextScene);
}

function priestScene032() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};