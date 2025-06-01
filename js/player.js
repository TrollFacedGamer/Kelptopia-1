// player info
const player = {
    stats: {
        base: {
            // vitality
            vitality: {
                current: {
                    points: 0,
                    
                    /**
                     * change `current vitality` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },
                max: {
                    points: 0,

                    /**
                     * change `max vitality` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },

                /**
                 * set `current vitality` to `max vitality`
                 */
                restore: function() {
                    this.current.points = this.max.points

                    updateUI()
                },

            },
            // endurance
            endurance: {
                current: {
                    points: 0,
                    
                    /**
                     * change `current endurance` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },
                max: {
                    points: 0,

                    /**
                     * change `max endurance` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },

                /**
                 * set `current endurance` to `max endurance`
                 */
                restore: function() {
                    this.current.points = this.max.points

                    updateUI()
                },
            },
            // strength
            strength: {
                current: {
                    points: 0,
                    
                    /**
                     * change `current strength` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },
                max: {
                    points: 0,

                    /**
                     * change `max strength` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },

                /**
                 * set `current strength` to `max strength`
                 */
                restore: function() {
                    this.current.points = this.max.points

                    updateUI()
                },
            },
            // agility
            agility: {
                current: {
                    points: 0,
                    
                    /**
                     * change `current agility` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },
                max: {
                    points: 0,

                    /**
                     * change `max agility` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },

                /**
                 * set `current agility` to `max agility`
                 */
                restore: function() {
                    this.current.points = this.max.points

                    updateUI()
                },
            },
            // intelligence
            intelligence: {
                current: {
                    points: 0,
                    
                    /**
                     * change `current intelligence` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },
                max: {
                    points: 0,

                    /**
                     * change `max intelligence` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },

                /**
                 * set `current intelligence` to `max intelligence`
                 */
                restore: function() {
                    this.current.points = this.max.points

                    updateUI()
                },
            },
            // wisdom
            wisdom: {
                current: {
                    points: 0,
                    
                    /**
                     * change `current wisdom` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },
                max: {
                    points: 0,

                    /**
                     * change `max wisdom` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },

                /**
                 * set `current wisdom` to `max wisdom`
                 */
                restore: function() {
                    this.current.points = this.max.points

                    updateUI()
                },
            },
            // perception
            perception: {
                current: {
                    points: 0,
                    
                    /**
                     * change `current perception` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },
                max: {
                    points: 0,

                    /**
                     * change `max perception` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },

                /**
                 * set `current perception` to `max perception`
                 */
                restore: function() {
                    this.current.points = this.max.points

                    updateUI()
                },
            },
            // charisma
            charisma: {
                current: {
                    points: 0,
                    
                    /**
                     * change `current charisma` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },
                max: {
                    points: 0,

                    /**
                     * change `max charisma` by `amount`
                     * @param {*} amount integer
                     */
                    change: function(amount) {
                        this.points += amount
                        updateUI()
                    },
                },

                /**
                 * set `current charisma` to `max charisma`
                 */
                restore: function() {
                    this.current.points = this.max.points

                    updateUI()
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

                    updateUI()
                },
                /**
                 * recalculate `max hp`
                 */
                recalculate: function() {
                    this.max = player.stats.base.vitality.current * 10

                    updateUI()
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

                    updateUI()
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

                    updateUI()
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

                    updateUI()
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

                    updateUI()
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

                    updateUI()
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

                    updateUI()
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

                    updateUI()
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

                    updateUI()
                },

            },

            /**
             * reduce `current hunger` by 25
             * reduce `current` thirst by 50
             */
            dayPass: function() {
                this.hunger.change(-25)
                this.thirst.change(-50)

                updateUI()
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

                            updateUI()
                        },
                        recalculate: function() {
                            this.max = player.stats.miscellaneous.level.current * 5 + 5 - this.used

                            updateUI()
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

            updateUI()
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

            updateUI()
        },


        
        
    },
    scene: {
        role: {
            current: "None",

            /**
             * change `current role` to `newRole`
             * @param {*} newRole string
             */
            change: function(newRole) {
                this.current = newRole
            },
        },
        number: {
            current: 0,

            /**
             * change `current number` to `newNumber`
             * @param {*} newNumber integer
             */
            change: function(newNumber) {
                this.current = newNumber
            },
        },

    },
};