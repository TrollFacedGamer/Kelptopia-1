// player info
const player = {
    stats: {
        base: {
            // vitality
            vitality: {
                current: 0,
                max: 10,
                restore: function() {
                    this.current = this.max
                }
            },
            // endurance
            endurance: {
                current: 0,
                max: 10,
                restore: function() {
                    this.current = this.max
                }
            },
            // strength
            strength: {
                current: 0,
                max: 10,
                restore: function() {
                    this.current = this.max
                }
            },
            // agility
            agility: {
                current: 0,
                max: 10,
                restore: function() {
                    this.current = this.max
                }
            },
            // intelligence
            intelligence: {
                current: 0,
                max: 10,
                restore: function() {
                    this.current = this.max
                }
            },
            // wisdom
            wisdom: {
                current: 0,
                max: 10,
                restore: function() {
                    this.current = this.max
                }
            },
            // perception
            perception: {
                current: 0,
                max: 10,
                restore: function() {
                    this.current = this.max
                }
            },
            // charisma
            charisma: {
                current: 0,
                max: 10,
                restore: function() {
                    this.current = this.max
                }
            }
        },
        combat: {
            hp: {
                current: 5,
                max: 10,
                restore: function() {
                    this.current = this.max
                },
                // recalculate hp max
                recalculate: function() {
                    this.max = this.current * 10
                },
                // change
                change: function(amount) {
                    this.current += amount;
                    if (this.current > this.max) {
                        this.current = this.max;
                    }
                    else if (this.current <= 0) {
                        gameOver();
                    };
                },
            },
            mana: {
                current: 0,
                max: 0,
                restore: function() {
                    this.current = this.max
                },
                recalculate: function() {
                    this.max = this.current * 10
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
                    return /*...*/
                }
            },
        },
        sustenance: {
            hunger: {
                current: 0,
                max: 100,
                restore: function() {
                    this.current = this.max
                }
            },
            thirst: {
                current: 0,
                max: 100,
                restore: function() {
                    this.current = this.max
                },
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
                        },
                        recalculate: function() {
                            this.max = player.stats.miscellaneous.level.current * 5 + 5 - this.used
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

    //titles
    titles: {

    },

    //status effects
    status: {

    },

    //inventory
    inventory: {
        // Slot storage
        slots: [hand, null, null, null, null, null, null, null, null,],

        recalculate: function() {
            //recalculates amount of inventory slots
            for (let index = 1; index < this.slots[0].maxSlots + 1; index++) {
                const element = this.slots[index];
                if (element == null) {
                    this.slots[index] = " "
                    // " " looks better
                }
            }
        },


        
        
    },
};