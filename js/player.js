// player info
const player = {
    stats: {
        base: {
            // vitality
            vitality: {
                current: 0,
                max: 0,

                /**
                 * set `current vitality` to `max vitality`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * change `vitality` by `amount`
                 * @param {*} amount int
                 * @param {*} max boolean, if `true` change `max`, if `false` change `current`
                 */
                change: function(amount, max) {
                    if (max) {
                        this.max += amount
                    }
                    else {
                        this.current += amount
                    }
                    player.updateUI()
                }

            },
            // endurance
            endurance: {
                current: 0,
                max: 0,

                /**
                 * set `current endurance` to `max endurance`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * change `endurance` by `amount`
                 * @param {*} amount int
                 * @param {*} max boolean, if `true` change `max`, if `false` change `current`
                 */
                change: function(amount, max) {
                    if (max) {
                        this.max += amount
                    }
                    else {
                        this.current += amount
                    }
                    player.updateUI()
                },
            },
            // strength
            strength: {
                current: 0,
                max: 0,

                /**
                 * set `current strength` to `max strength`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * change `strength` by `amount`
                 * @param {*} amount int
                 * @param {*} max boolean, if `true` change `max`, if `false` change `current`
                 */
                change: function(amount, max) {
                    if (max) {
                        this.max += amount
                    }
                    else {
                        this.current += amount
                    }
                    player.updateUI()
                },
            },
            // agility
            agility: {
                current: 0,
                max: 0,

                /**
                 * set `current agility` to `max agility`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * change `agility` by `amount`
                 * @param {*} amount int
                 * @param {*} max boolean, if `true` change `max`, if `false` change `current`
                 */
                change: function(amount, max) {
                    if (max) {
                        this.max += amount
                    }
                    else {
                        this.current += amount
                    }
                    player.updateUI()
                },
            },
            // intelligence
            intelligence: {
                current: 0,
                max: 0,

                /**
                 * set `current intelligence` to `max intelligence`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * change `intelligence` by `amount`
                 * @param {*} amount int
                 * @param {*} max boolean, if `true` change `max`, if `false` change `current`
                 */
                change: function(amount, max) {
                    if (max) {
                        this.max += amount
                    }
                    else {
                        this.current += amount
                    }
                    player.updateUI()
                },
            },
            // wisdom
            wisdom: {
                current: 0,
                max: 0,

                /**
                 * set `current wisdom` to `max wisdom`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * change `wisdom` by `amount`
                 * @param {*} amount int
                 * @param {*} max boolean, if `true` change `max`, if `false` change `current`
                 */
                change: function(amount, max) {
                    if (max) {
                        this.max += amount
                    }
                    else {
                        this.current += amount
                    }
                    player.updateUI()
                },
            },
            // perception
            perception: {
                current: 0,
                max: 0,

                /**
                 * set `current perception` to `max perception`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * change `perception` by `amount`
                 * @param {*} amount int
                 * @param {*} max boolean, if `true` change `max`, if `false` change `current`
                 */
                change: function(amount, max) {
                    if (max) {
                        this.max += amount
                    }
                    else {
                        this.current += amount
                    }
                    player.updateUI()
                },
            },
            // charisma
            charisma: {
                current: 0,
                max: 0,

                /**
                 * set `current charisma` to `max charisma`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * change `charisma` by `amount`
                 * @param {*} amount int
                 * @param {*} max boolean, if `true` change `max`, if `false` change `current`
                 */
                change: function(amount, max) {
                    if (max) {
                        this.max += amount
                    }
                    else {
                        this.current += amount
                    }
                    player.updateUI()
                },
            },

            /**
             * set `current base stat` to `max base stat`
             */
            restore: function() {
                this.vitality.restore()
                this.endurance.restore()
                this.strength.restore()
                this.agility.restore()
                this.intelligence.restore()
                this.wisdom.restore()
                this.perception.restore()
                this.charisma.restore()
            }
        },
        combat: {
            hp: {
                current: 0,
                max: 0,

                /**
                 * set `current hp` to `max hp`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * recalculate `max hp`
                 */
                recalculate: function() {
                    this.max = player.stats.base.vitality.current * 10

                    player.updateUI()
                },
                /**
                 * change `current hp` by `amount`
                 * @param {*} amount  
                 */
                change: function(amount) {
                    this.current += amount;
                    if (this.current > this.max) {
                        this.current = this.max;
                    }
                    else if (this.current <= 0) {
                        gameOver();
                    };

                    player.updateUI()
                },
            },
            mana: {
                current: 0,
                max: 0,

                /**
                 * set `current mana` to `max mana`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * recalculate `max mana`
                 */
                recalculate: function() {
                    if (player.stats.miscellaneous.level.current > 0) {
                        this.max = this.current * 10
                    }
                    else {
                        this.max = 0
                    }

                    player.updateUI()
                },
                /**
                 * change `current mana` by `amount`
                 * @param {*} amount 
                 */
                change: function(amount) {
                    this.current += amount;
                    if (this.current > this.max) {
                        this.current = thismax;
                    }
                    if (this.current < 0) {
                        broken();
                    }

                    player.updateUI()
                }
            },
        },
        sustenance: {
            hunger: {
                current: 0,
                max: 100,

                /**
                 * set `current hunger` to `max hunger`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * change `current hunger` by `amount`
                 * @param {*} amount 
                 */
                change: function(amount) {
                    this.current += amount
                    if (this.current > this.max) {
                        this.current > this.max;
                    }
                    else if (this.current < 0) {
                        this.current = 0;
                        player.status.negative.starvation.have = true;
                    };

                    player.updateUI()
                },
            },
            thirst: {
                current: 0,
                max: 100,

                /**
                 * set `current thirst` to `max thirst`
                 */
                restore: function() {
                    this.current = this.max

                    player.updateUI()
                },
                /**
                 * change `current thirst` by `amount`
                 * @param {*} amount 
                 */
                change: function(amount) {
                    this.current += amount
                    if (this.current > this.max) {
                        this.current > this.max;
                    }
                    else if (this.current < 0) {
                        this.current = 0;
                        player.status.negative.dehydration.have = true;
                    };

                    player.updateUI()
                },

            },

            /**
             * reduce `current hunger` by 25
             * reduce `current` thirst by 50
             */
            dayPass: function() {
                this.hunger.change(-25)
                this.thirst.change(-50)

                player.updateUI()
            },
        },
        miscellaneous: {
            level: {
                current: 0,
                baseStat: {
                    Points: {
                        current: 0,
                        max: 5,
                        used: 0,
                        restore: function() {
                            this.current = this.max

                            player.updateUI()
                        },
                        recalculate: function() {
                            this.max = player.stats.miscellaneous.level.current * 5 + 5 - this.used

                            player.updateUI()
                        }
                    },
                },
            },
            exp: {
                current: 0,
                max: 5,
            },
            money: {
                current: 0,
                max: 1000,
            },
        },
    },

    //will come in 0.002
    //titles
    titles: {

    },

    //status effects
    status: {
        positive: {

        },
        negative: {
            starvation: {
                have: false,

                /**
                 * reduce hp by 2
                 * if player have starvation
                 */
                effect: function() {
                    if(this.have == true) {
                        player.stats.combat.hp.change(-2)
                    }
                }
            },
            dehydration: {
                have: false,

                /**
                 * reduce hp by 2
                 * if player have starvation
                 */
                effect: function() {
                    if (this.have == true) {
                        player.stats.combat.hp.change(-4)
                    }
                }
            },
        },
    },

    //inventory
    inventory: {
        // Slot storage
        slots: [hand, null, null, null, null, null, null, null, null,],

        change: function(item) {
            if (player.inventory.slots.includes(" ")) {
                this.slots[this.slots.indexOf(" ")] = item
            }
            else {
                window.alert("Error: inventory is full")
            }

            player.updateUI()
        },
        /**
         * recalculate inventory slot
         */
        recalculate: function() {
            //recalculates amount of inventory slots
            for (let index = 1; index < this.slots[0].maxSlots + 1; index++) {
                const element = this.slots[index];
                if (element == null) {
                    this.slots[index] = " "
                    // " " for empty slots
                    // "" for unavailable slots
                }
            }

            player.updateUI()
        },


        
        
    },
    scene: {
        role: "None",
        number: 0,
        /**
         * change `role` to `newRole`
         * @param {*} newRole string
         */
        changeRole: function(newRole) {
            this.role = newRole
        },
        /**
         * change `number` to `newNumber`
         * @param {*} newNumber integer
         */
        changeNumber: function(newNumber) {
            this.number = newNumber
        }
    },

    /**
     * update UI
     */
    updateUI: function() {
        //base
        currentVitalityStat.innerText = player.stats.base.vitality.current
        currentEnduranceStat.innerText = player.stats.base.endurance.current
        currentStrengthStat.innerText = player.stats.base.strength.current
        currentAgilityStat.innerText = player.stats.base.agility.current
        currentIntelligenceStat.innerText = player.stats.base.intelligence.current
        currentWisdomStat.innerText = player.stats.base.wisdom.current
        currentPerceptionStat.innerText = player.stats.base.perception.current
        currentCharismaStat.innerText = player.stats.base.charisma.current

        maxVitalityStat.innerText = player.stats.base.vitality.max
        maxEnduranceStat.innerText = player.stats.base.endurance.max
        maxStrengthStat.innerText = player.stats.base.strength.max
        maxAgilityStat.innerText = player.stats.base.agility.max
        maxIntelligenceStat.innerText = player.stats.base.intelligence.max
        maxWisdomStat.innerText = player.stats.base.wisdom.max
        maxPerceptionStat.innerText = player.stats.base.perception.max
        maxCharismaStat.innerText = player.stats.base.charisma.max

        //combat
        currentHealthStat.innerText = player.stats.combat.hp.current
        currentManaStat.innerText = player.stats.combat.mana.current

        maxHealthStat.innerText = player.stats.combat.hp.max
        maxManaStat.innerText = player.stats.combat.mana.max

        //sustenance
        currentHungerStat.innerText = player.stats.sustenance.hunger.current
        currentThirstStat.innerText = player.stats.sustenance.hunger.current

        maxHungerStat.innerText = player.stats.sustenance.hunger.max
        maxThirstStat.innerText = player.stats.sustenance.thirst.max

        //inventory
        storageUnit.innerText = player.inventory.slots[0].name

            //1
        if (player.inventory.slots[1] == null) {
            inventorySlot1.innerText = ""
        }
        else if (player.inventory.slots[1] == " ") {
            inventorySlot1.innerText = " "
        }
        else {
            inventorySlot1.innerText = player.inventory.slots[1].name
        }
            //2
        if (player.inventory.slots[2] == null) {
            inventorySlot2.innerText = ""
        }
        else if (player.inventory.slots[2] == " ") {
            inventorySlot2.innerText = " "
        }
        else {
            inventorySlot2.innerText = player.inventory.slots[2].name
        }
            //3
        if (player.inventory.slots[3] == null) {
            inventorySlot3.innerText = ""
        }
        else if (player.inventory.slots[3] == " ") {
            inventorySlot3.innerText = " "
        }
        else {
            inventorySlot3.innerText = player.inventory.slots[3].name
        }
            //4
        if (player.inventory.slots[4] == null) {
            inventorySlot4.innerText = ""
        }
        else if (player.inventory.slots[4] == " ") {
            inventorySlot4.innerText = " "
        }
        else {
            inventorySlot4.innerText = player.inventory.slots[4].name
        }
            //5
        if (player.inventory.slots[5] == null) {
            inventorySlot5.innerText = ""
        }
        else if (player.inventory.slots[5] == " ") {
            inventorySlot5.innerText = " "
        }
        else {
            inventorySlot5.innerText = player.inventory.slots[5].name
        }
            //6
        if (player.inventory.slots[6] == null) {
            inventorySlot6.innerText = ""
        }
        else if (player.inventory.slots[6] == " ") {
            inventorySlot6.innerText = " "
        }
        else {
            inventorySlot6.innerText = player.inventory.slots[6].name
        }
            //7
        if (player.inventory.slots[7] == null) {
            inventorySlot7.innerText = ""
        }
        else if (player.inventory.slots[7] == " ") {
            inventorySlot7.innerText = " "
        }
        else {
            inventorySlot7.innerText = player.inventory.slots[7].name
        }
            //8
        if (player.inventory.slots[8] == null) {
            inventorySlot8.innerText = ""
        }
        else if (player.inventory.slots[8] == " ") {
            inventorySlot8.innerText = " "
        }
        else {
            inventorySlot8.innerText = player.inventory.slots[8].name
        }

        //scene
        character.innerText = player.scene.role
        sceneNumber.innerText = player.scene.number
    }
};