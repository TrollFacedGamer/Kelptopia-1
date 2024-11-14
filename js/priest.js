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

    const turtle = document.createElement("button");
    turtle.innerText = "Turtle";
    turtle.addEventListener("click", () => {
        priestScene012();
    })
    choices.appendChild(turtle);

    const calendear = document.createElement("button");
    calendear.innerText = "Calendear";
    calendear.addEventListener("click", () => {
        priestScene023();
    })
    choices.appendChild(calendear);

    const door = document.createElement("button");
    door.innerText = "Door"
    door.addEventListener("click", () => {
        priestScene026();
    }) 
    choices.appendChild(door);
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

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        if (turtlehunger == 0) {
            priestScene018();
        }
        else if (turtlehunger == 1) {
            priestScene017();
        }
        else {
            broken();
        };
    });
    choices.appendChild(nextScene);
}

function priestScene013() {
    clear()
    text.innerText = "You remember you had forgotten to feed your turtle for a week.";
    sceneNumber.innerText = "013";

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene015()
    });
    choices.appendChild(nextScene);
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
    text.innerText = "Do you feed the turtle?"
    sceneNumber.innerText = "015"

    const yes = document.createElement("button")
    yes.innerText = "Yes"
    yes.addEventListener("click", () => {
        if (currentInventory.innerText == "Shrimp") {
            priestScene016()
        }
        else if (currentInventory.innerText != "Shrimp") {
            priestScene019()
        }
        else {
            broken()
        }
    })
    choices.appendChild(yes)
    
    const no = document.createElement("button")
    no.innerText = "No"
    no.addEventListener("click", () => {
        priestScene022()
    })
    choices.appendChild(no) 
}

function priestScene016() {
    clear()
    text.innerText = "You throw the [Shrimp] into the tank. Your Turtle hungrily consumes bites into the [Shrimp]."
    sceneNumber.innerText = "016"
    
    turtlehunger = 1
    
    const back = document.createElement("button");
    back.innerText = "Back";
    back.addEventListener("click", () => {
        priestScene002();
    });
    choices.appendChild(back)
}

function priestScene017() {
    clear()
    text.innerText = "You notice your turtle seems sleepy and decide to leave him alone."
    sceneNumber.innerText = "017"

    const back = document.createElement("button");
    back.innerText = "Back";
    back.addEventListener("click", () => {
        priestScene002();
    });
    choices.appendChild(back)
}

function priestScene018() {
    clear()
    text.innerText = "Looking closer you notice he appears a bit famished."
    sceneNumber.innerText = "018"

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene013();
    });
    choices.appendChild(nextScene);
}

function priestScene019() {
    clear()
    text.innerText = "You crack open the jar of turtle food but find it empty."
    sceneNumber.innerText = "019"

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene020();
    });
    choices.appendChild(nextScene);
}

function priestScene020() {
    clear()
    text.innerText = "You suddenly remember that it wasn't that you forgot to feed the turtle, it was that you kept forgetting to buy turtle food."
    sceneNumber.innerText = "020"

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene021();
    });
    choices.appendChild(nextScene);
}

function priestScene021() {
    clear()
    text.innerText = "You recall you managed to catch a [Shrimp] yesterday and placed it in the refrigerator."
    sceneNumber.innerText = "021"

    const back = document.createElement("button");
    back.innerText = "Back";
    back.addEventListener("click", () => {
        priestScene002();
    });
    choices.appendChild(back)
}

function priestScene022() {
    clear()
    text.innerText = "You decide to leave the turtle as is."
    sceneNumber.innerText = "022"

    const back = document.createElement("button");
    back.innerText = "Back";
    back.addEventListener("click", () => {
        priestScene002();
    });
    choices.appendChild(back)
}

function priestScene023() {
    clear()
    text.innerText = "You have work today."
    sceneNumber.innerText = "023"

    const back = document.createElement("button");
    back.innerText = "Back";
    back.addEventListener("click", () => {
        priestScene002();
    });
    choices.appendChild(back);
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
    text.innerText = "You walk out of the house."
    sceneNumber.innerText = "026"

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene032()
    });
    choices.appendChild(nextScene);
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
        comingSoon(priestScene002, "priest");
    });
    choices.appendChild(nextScene);
}

function priestScene032() {
    clear();
    text.innerText = "You take a deep breath of the polluted waters as you look around the streets.";
    sceneNumber.innerText = "032";

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene033()
    });
    choices.appendChild(nextScene);
};

function priestScene033() {
    clear();
    text.innerText = "You cough.";
    sceneNumber.innerText = "033";

    currentHealthStat.innerText -= 0.5
    
    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene034()
    });
    choices.appendChild(nextScene);
};

function priestScene034() {
    clear();
    text.innerText = "You should probaly go to the doctor.";
    sceneNumber.innerText = "034";

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene035()
    });
    choices.appendChild(nextScene);
};

function priestScene035() {
    clear();
    text.innerText = "Should be just around the corner.";
    sceneNumber.innerText = "035";

    const goBack = document.createElement("button")
    goBack.innerText = "Go Back"
    goBack.addEventListener("click", () => {
        priestScene002()
    });
    choices.appendChild(goBack);

    const bakary = document.createElement("button")
    bakary.innerText = "Bakary"
    bakary.addEventListener("click", () => {
        priestScene036()
    });
    choices.appendChild(bakary);

    const nextStreet = document.createElement("button")
    nextStreet.innerText = "Next Street"
    nextStreet.addEventListener("click", () => {
        priestScene052()
    });
    choices.appendChild(nextStreet);

    const cliinc = document.createElement("button")
    cliinc.innerText = "Cliinc"
    cliinc.addEventListener("click", () => {
        priestScene042()
    });
    choices.appendChild(cliinc);
};

function priestScene036() {
    clear();
    text.innerText = "You walk into the bakery.";
    sceneNumber.innerText = "036";

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene037()
    });
    choices.appendChild(nextScene);
};

function priestScene037() {
    clear();
    text.innerText = "The baker greets you.";
    sceneNumber.innerText = "037";

    const nextScene = document.createElement("button");
    nextScene.innerText = "continue";
    nextScene.addEventListener("click", () => {
        priestScene038()
    });
    choices.appendChild(nextScene);
};

function priestScene038() {
    clear();
    text.innerText = "Baker: What would you like.";
    sceneNumber.innerText = "038";

    const kelpBread = document.createElement("button")
    kelpBread.innerText = "Kelp Bread"
    kelpBread.addEventListener("click", () => {
        priestScene027()
    })
    choices.appendChild(kelpBread)

    const kelpTart = document.createElement("button")
    kelpTart.innerText = "Kelp Tart"
    kelpTart.addEventListener("click", () => {
        priestScene039()
    })
    choices.appendChild(kelpTart)

    const breadStick = document.createElement("button")
    breadStick.innerText = "Bread Stick"
    breadStick.addEventListener("click", () => {
        priestScene040()
    })
    choices.appendChild(breadStick)

    const leave = document.createElement("button")
    leave.innerText = "Leave"
    leave.addEventListener("click", () => {
        priestScene041()
    })
    choices.appendChild(leave)
};

function priestScene039() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene040() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene041() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene042() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene043() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene044() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene045() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene046() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene047() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene048() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene049() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene050() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene051() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene052() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene053() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene054() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene055() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene056() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene057() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};

function priestScene058() {
    clear();
    text.innerText = "";
    sceneNumber.innerText = "";
};