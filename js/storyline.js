const storyline = {
    priest: {
        role: "priest",
        scene: {
            _001: function() {
                num = 1;
                clear();
                text.innerText = "You wake up to the sound of your alarm tucked in your bed, before slaping your alarm clock off.";
                sceneNumber.innerText = "001";
            
                const getUp = document.createElement("button");
                getUp.innerText = "Get up";
                getUp.addEventListener("click", () => {
                    _002();
                });
                choices.appendChild(getUp);
            },
            
            _002: function() {
                clear();
                text.innerText = "You look groggily around your old house.";
                sceneNumber.innerText = "002";
                
                const bed = document.createElement("button");
                bed.innerText = "Bed";
                bed.addEventListener("click",() => {
                    _003();
                });
                choices.appendChild(bed);
            
                const poseter = document.createElement("button");
                poseter.innerText = "Poseter";
                poseter.addEventListener("click", () => {
                    _006();
                })
                choices.appendChild(poseter);
            
                const stove = document.createElement("button");
                stove.innerText = "Stove";
                stove.addEventListener("click", () => {
                    _007();
                });
                choices.appendChild(stove);
            
                const refeigtor = document.createElement("button");
                refeigtor.innerText = "Refeigtor";
                refeigtor.addEventListener("click", () => {
                    _010();
                })
                choices.appendChild(refeigtor);
            
                const turtle = document.createElement("button");
                turtle.innerText = "Turtle";
                turtle.addEventListener("click", () => {
                    _012();
                })
                choices.appendChild(turtle);
            
                const calendear = document.createElement("button");
                calendear.innerText = "Calendear";
                calendear.addEventListener("click", () => {
                    _023();
                })
                choices.appendChild(calendear);
            
                const door = document.createElement("button");
                door.innerText = "Door"
                door.addEventListener("click", () => {
                    _026();
                }) 
                choices.appendChild(door);
            },
            
            _003: function() {
                clear();
                text.innerText = "You look at the cozy red blanket and white pillow of your aging bed.";
                sceneNumber.innerText = "003";
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _004();
                });
                choices.appendChild(nextScene);
            },
            
            _004: function() {
                clear();
                text.innerText = "You feel the exhaustion of your labored flesh and its yearning for more rest.";
                sceneNumber.innerText = "004";
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _011();
                });
                choices.appendChild(nextScene);
            },
            
            _005: function() {
                clear();
                text.innerText = "You resist the temptation from your bed.";
                sceneNumber.innerText = "005";
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _002();
                });
                choices.appendChild(nextScene);
            },
            
            _006: function() {
                clear();
                text.innerText = "Kelp. It is sustenance. It is fuel. It is god.";
                sceneNumber.innerText = "006";
            
                const back = document.createElement("button");
                back.innerText = "Back";
                back.addEventListener("click", () => {
                    _002();
                });
                choices.appendChild(back)
            },
            
            _007: function() {
                clear();
                text.innerText = "You stare at your empty pot and feel your stomach rumble in hunger.";
                sceneNumber.innerText = "007";
            
                if (currentInventory.innerText == "Large Bowl of Uncooked Kelp Soup") {
                    _009();
                }
                else {
                    _008()
                }
            },
            
            _008: function() {
                clear();
                text.innerText = "You remember you have some leftover soup in the fridge.";
                sceneNumber.innerText = "008";
            
                const back = document.createElement("button");
                back.innerText = "Back";
                back.addEventListener("click", () => {
                    _002();
                });
                choices.appendChild(back)
            },
            
            _009: function() {
                clear();
                text.innerText = "you began heating the [Large Bowl of Uncooked Kelp Soup]].";
                sceneNumber.innerText = "009";
            
                const eat = document.createElement("button");
                eat.innerText = "Eat";
                eat.addEventListener("click", () => {
                    hunger(50);
                    thirst(50);
                    _002();
                });
                choices.appendChild(eat)
            },
            
            _010: function() {
                clear();
                text.innerText = "You open the door of your Refeigtor and find a [Large Bowl of Uncooked Kelp Soup] and [Shrimp].";
                sceneNumber.innerText = "010";
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _024();
                });
                choices.appendChild(nextScene);
            },
            
            _011: function() {
                clear()
                text.innerText = "Do you return to sleep?"
                sceneNumber.innerText = "011"
            
                const yes = document.createElement("button")
                yes.innerText = "Yes"
                yes.addEventListener("click", () => {
                    _031()
                })
                choices.appendChild(yes)
                
                const no = document.createElement("button")
                no.innerText = "No"
                no.addEventListener("click", () => {
                    _005()
                })
                choices.appendChild(no)
            },
            
            _012: function() {
                clear()
                text.innerText = "Your turtle appears bored, he stares at you intently."
                sceneNumber.innerText = "012"
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    if (turtlehunger == 0) {
                        _018();
                    }
                    else if (turtlehunger == 1) {
                        _017();
                    }
                    else {
                        broken();
                    };
                });
                choices.appendChild(nextScene);
            },
            
            _013: function() {
                clear()
                text.innerText = "You remember you had forgotten to feed your turtle for a week.";
                sceneNumber.innerText = "013";
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _015()
                });
                choices.appendChild(nextScene);
            },
            
            _014: function() {
                clear()
                text.innerText = "Do you take the [Large Bowl of Uncooked Kelp Soup]?"
                sceneNumber.innerText = "014"
            
                const yes = document.createElement("button")
                yes.innerText = "Yes"
                yes.addEventListener("click", () => {
                    _002()
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
                    _002()
                })
                choices.appendChild(no) 
            },
            
            _015: function() {
                clear()
                text.innerText = "Do you feed the turtle?"
                sceneNumber.innerText = "015"
            
                const yes = document.createElement("button")
                yes.innerText = "Yes"
                yes.addEventListener("click", () => {
                    if (currentInventory.innerText == "Shrimp") {
                        _016()
                    }
                    else if (currentInventory.innerText != "Shrimp") {
                        _019()
                    }
                    else {
                        broken()
                    }
                })
                choices.appendChild(yes)
                
                const no = document.createElement("button")
                no.innerText = "No"
                no.addEventListener("click", () => {
                    _022()
                })
                choices.appendChild(no) 
            },
            
            _016: function() {
                clear()
                text.innerText = "You throw the [Shrimp] into the tank. Your Turtle hungrily consumes bites into the [Shrimp]."
                sceneNumber.innerText = "016"
                
                turtlehunger = 1
                
                const back = document.createElement("button");
                back.innerText = "Back";
                back.addEventListener("click", () => {
                    _002();
                });
                choices.appendChild(back)
            },
            
            _017: function() {
                clear()
                text.innerText = "You notice your turtle seems sleepy and decide to leave him alone."
                sceneNumber.innerText = "017"
            
                const back = document.createElement("button");
                back.innerText = "Back";
                back.addEventListener("click", () => {
                    _002();
                });
                choices.appendChild(back)
            },
            
            _018: function() {
                clear()
                text.innerText = "Looking closer you notice he appears a bit famished."
                sceneNumber.innerText = "018"
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _013();
                });
                choices.appendChild(nextScene);
            },
            
            _019: function() {
                clear()
                text.innerText = "You crack open the jar of turtle food but find it empty."
                sceneNumber.innerText = "019"
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _020();
                });
                choices.appendChild(nextScene);
            },
            
            _020: function() {
                clear()
                text.innerText = "You suddenly remember that it wasn't that you forgot to feed the turtle, it was that you kept forgetting to buy turtle food."
                sceneNumber.innerText = "020"
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _021();
                });
                choices.appendChild(nextScene);
            },
            
            _021: function() {
                clear()
                text.innerText = "You recall you managed to catch a [Shrimp] yesterday and placed it in the refrigerator."
                sceneNumber.innerText = "021"
            
                const back = document.createElement("button");
                back.innerText = "Back";
                back.addEventListener("click", () => {
                    _002();
                });
                choices.appendChild(back)
            },
            
            _022: function() {
                clear()
                text.innerText = "You decide to leave the turtle as is."
                sceneNumber.innerText = "022"
            
                const back = document.createElement("button");
                back.innerText = "Back";
                back.addEventListener("click", () => {
                    _002();
                });
                choices.appendChild(back)
            },
            
            _023: function() {
                clear()
                text.innerText = "You have work today."
                sceneNumber.innerText = "023"
            
                const back = document.createElement("button");
                back.innerText = "Back";
                back.addEventListener("click", () => {
                    _002();
                });
                choices.appendChild(back);
            },
            
            _024: function() {
                clear()
                text.innerText = "Interact."
                sceneNumber.innerText = "024"
            
                const largeBowlOfUncookedKelpSoup = document.createElement("button");
                largeBowlOfUncookedKelpSoup.innerText = "[Large Bowl of Uncooked Kelp Soup]";
                largeBowlOfUncookedKelpSoup.addEventListener("click", () => {
                    _014();
                })
                if (largeBowlOfUncookedKelpSoupPresent == false) {
                    largeBowlOfUncookedKelpSoup.disabled = true
                }
                choices.appendChild(largeBowlOfUncookedKelpSoup);
            
                const shrimp = document.createElement("button");
                shrimp.innerText = "[Shrimp]";
                shrimp.addEventListener("click", () => {
                    _025();
                })
                if (shrimpPresent == false) {
                    shrimp.disabled = true
                }
                choices.appendChild(shrimp)
            },
            
            _025: function() {
                clear()
                text.innerText = "Do you take the [Shrimp]?."
                sceneNumber.innerText = "025"
            
                const yes = document.createElement("button")
                yes.innerText = "Yes"
                yes.addEventListener("click", () => {
                    _002()
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
                    _002()
                })
                choices.appendChild(no)
            },
            
            _026: function() {
                clear()
                text.innerText = "You walk out of the house."
                sceneNumber.innerText = "026"
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _032()
                });
                choices.appendChild(nextScene);
            },
            
            _031: function() {
                clear()
                text.innerText = "You give in to your exhaustion and fall onto the bed."
                sceneNumber.innerText = "031"
                
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    comingSoon(_002, "priest");
                });
                choices.appendChild(nextScene);
            },
            
            _032: function() {
                clear();
                text.innerText = "You take a deep breath of the polluted waters as you look around the streets.";
                sceneNumber.innerText = "032";
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _033()
                });
                choices.appendChild(nextScene);
            },
            
            _033: function() {
                clear();
                text.innerText = "You cough.";
                sceneNumber.innerText = "033";
            
                currentHealthStat.innerText -= 0.5
                
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _034()
                });
                choices.appendChild(nextScene);
            },
            
            _034: function() {
                clear();
                text.innerText = "You should probaly go to the doctor.";
                sceneNumber.innerText = "034";
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _035()
                });
                choices.appendChild(nextScene);
            },
            
            _035: function() {
                clear();
                text.innerText = "Should be just around the corner.";
                sceneNumber.innerText = "035";
            
                const goBack = document.createElement("button")
                goBack.innerText = "Go Back"
                goBack.addEventListener("click", () => {
                    _002()
                });
                choices.appendChild(goBack);
            
                const bakary = document.createElement("button")
                bakary.innerText = "Bakary"
                bakary.addEventListener("click", () => {
                    _036()
                });
                choices.appendChild(bakary);
            
                const nextStreet = document.createElement("button")
                nextStreet.innerText = "Next Street"
                nextStreet.addEventListener("click", () => {
                    _052()
                });
                choices.appendChild(nextStreet);
            
                const cliinc = document.createElement("button")
                cliinc.innerText = "Cliinc"
                cliinc.addEventListener("click", () => {
                    _042()
                });
                choices.appendChild(cliinc);
            },
            
            _036: function() {
                clear();
                text.innerText = "You walk into the bakery.";
                sceneNumber.innerText = "036";
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _037()
                });
                choices.appendChild(nextScene);
            },
            
            _037: function() {
                clear();
                text.innerText = "The baker greets you.";
                sceneNumber.innerText = "037";
            
                const nextScene = document.createElement("button");
                nextScene.innerText = "continue";
                nextScene.addEventListener("click", () => {
                    _038()
                });
                choices.appendChild(nextScene);
            },
            
            _038: function() {
                clear();
                text.innerText = "Baker: What would you like.";
                sceneNumber.innerText = "038";
            
                const kelpBread = document.createElement("button")
                kelpBread.innerText = "Kelp Bread"
                kelpBread.addEventListener("click", () => {
                    _027()
                })
                choices.appendChild(kelpBread)
            
                const kelpTart = document.createElement("button")
                kelpTart.innerText = "Kelp Tart"
                kelpTart.addEventListener("click", () => {
                    _039()
                })
                choices.appendChild(kelpTart)
            
                const breadStick = document.createElement("button")
                breadStick.innerText = "Bread Stick"
                breadStick.addEventListener("click", () => {
                    _040()
                })
                choices.appendChild(breadStick)
            
                const leave = document.createElement("button")
                leave.innerText = "Leave"
                leave.addEventListener("click", () => {
                    _041()
                })
                choices.appendChild(leave)
            },
            
            _039: function() {
                clear();
                text.innerText = "";
                sceneNumber.innerText = "";
            },
        }
    },
    homeless: {
        role: "homeless",
        scene: {
            _1: function() {
                clear()
            }
        }
    }
}











let largeBowlOfUncookedKelpSoupPresent = true
let shrimpPresent = true
let turtlehunger = 0

