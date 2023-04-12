// ==UserScript==
// @name        The West Duel Cloth Calc
// @author      Mr. Perseus
// @namespace   tw-perseus
// @description Calculates the Duel skill values of your opponents.
// @include     https://*.the-west.*/game.php*
// @include     http://*.the-west.*/game.php*
// @include     https://*.tw.innogames.*/game.php*
// @include     http://*.tw.innogames.*/game.php*
// @version     1.0.0
// @grant       none
// ==/UserScript==

(function(fn) {
    const script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = `(${fn})();`;
    document.body.appendChild(script);
    document.body.removeChild(script);
})(() => {
    $(document).ready(() => {
        const TWDCC = {
            version: '1.0.0',
            serverUrl: window.location.hostname.split(/[.0-9]+/)[0],
        };

        TWDCC.Updater = {
            init() {
                setTimeout(TWDCC.Updater.load, 5000);
            },

            load() {
                $.getScript(
                    'https://rawcdn.githack.com/mr-perseus/tw-js-library/master/script-updater.js',
                    () => {
                        if (scriptUpdater.TWDCC > TWDCC.version) {
                            const updateMessage = new west.gui.Dialog(
                                'Update: The West Duel Cloth Calc',
                                `<span>Update Available<br><br><b>v${scriptUpdater.TWDCC}:</b><br>${scriptUpdater.TWDCCNew}</span>`,
                                west.gui.Dialog.SYS_WARNING,
                            )
                                .addButton('Update', () => {
                                    updateMessage.hide();
                                    window.location.href =
                                        'https://greasyfork.org/scripts/210874-the-west-duel-cloth-calc/code/The%20West%20Duel%20Cloth%20Calc.user.js';
                                })
                                .addButton('cancel')
                                .show();
                        }
                    },
                );
            },
        };

        TWDCC.DuelClothCalc = {
            init() {
                PlayerProfileMain.backup_twdcc_setWear =
                    PlayerProfileMain.setWear;
                PlayerProfileMain.setWear = function() {
                    PlayerProfileMain.backup_twdcc_setWear.apply(
                        this,
                        arguments,
                    );

                    const playerLevel = this.resp.level;

                    let weaponId = 0;

                    const itemKeys = [];

                    Object.keys(this.resp.wear).forEach((key) => {
                        if (
                            this.resp.wear[key] &&
                            (key === 'animal' ||
                            key === 'yield' /* Product */ ||
                                key === 'head' ||
                                key === 'body' ||
                                key === 'pants' ||
                                key === 'foot' ||
                                key === 'neck' ||
                                key === 'belt' ||
                                key === 'right_arm' ||
                                key === 'left_arm')
                        ) {
                            if (key === 'right_arm') {
                                weaponId = this.resp.wear[key];
                            }
                            itemKeys.push(this.resp.wear[key]);
                        }
                    });

                    const values = TWDCC.DuelClothCalc.getSkillValuesFromItemKeys(
                        playerLevel,
                        itemKeys,
                    );
                    const popupData = TWDCC.DuelClothCalc.getPopupData(values);

                    const duelistPopup = TWDCC.DuelClothCalc.generateNpcPopup(
                        popupData,
                        weaponId,
                        this.resp,
                    );
                    const jqueryAvatar = this.window.find('div.profileavatar');
                    jqueryAvatar.attr('title', duelistPopup);

                    const overlayClass = this.window.find('div.overlay');
                    overlayClass.removeClass('overlay');
                };
            },

            getSkillValuesFromItemKeys(playerLevel, itemKeys) {
                const itemObjects = TWDCC.DuelClothCalc.getItemObjects(
                    itemKeys,
                );
                const sets = TWDCC.DuelClothCalc.getSetsNumbers(itemObjects);
                const setObjects = TWDCC.DuelClothCalc.getSetData(sets);

                return TWDCC.DuelClothCalc.calculateValues(
                    itemObjects,
                    playerLevel,
                    sets,
                    setObjects,
                );
            },

            getItemObjects(itemKeys) {
                const itemObjects = [];
                itemKeys.forEach((key) =>
                    itemObjects.push(ItemManager.get(key)),
                );

                return itemObjects;
            },

            calculateValues(itemObjects, playerLevel, sets, setObjects) {
                const values = {
                    strength: 0,
                    flexibility: 0,
                    dexterity: 0,
                    charisma: 0,
                    /* Strength */
                    build: 0,
                    punch: 0,
                    tough: 0,
                    endurance: 0,
                    health: 0,
                    /* flexibility */
                    ride: 0,
                    reflex: 0,
                    dodge: 0,
                    hide: 0,
                    swim: 0,
                    /* Dexterity */
                    aim: 0,
                    shot: 0,
                    pitfall: 0,
                    // eslint-disable-next-line camelcase
                    finger_dexterity: 0,
                    repair: 0,
                    /* charisma */
                    leadership: 0,
                    tactic: 0,
                    trade: 0,
                    animal: 0,
                    appearance: 0,
                };

                itemObjects.forEach((itemObject) => {
                    const newValuesBonus = TWDCC.DuelClothCalc.getBonusObjectValues(
                        itemObject.bonus.item,
                    );
                    TWDCC.DuelClothCalc.factorizeValues(
                        newValuesBonus,
                        playerLevel,
                        itemObject.item_level,
                    );

                    TWDCC.DuelClothCalc.addToValues(values, newValuesBonus);

                    const newValuesSimple = TWDCC.DuelClothCalc.getSimpleObjectValues(
                        itemObject,
                    );
                    TWDCC.DuelClothCalc.addToValues(values, newValuesSimple);
                });

                TWDCC.DuelClothCalc.addSetsToValues(
                    sets,
                    values,
                    playerLevel,
                    setObjects,
                );

                return values;
            },

            factorizeValues(values, playerLevel, itemLevel) {
                const itemPercent = itemLevel ? 1 + itemLevel / 10 : 1;
                Object.keys(values).forEach((key) => {
                    const ceilValue = Math.ceil(values[key] * playerLevel);
                    values[key] = Math.round(ceilValue * itemPercent);
                    if (values[key] === ceilValue && itemPercent !== 1) {
                        values[key] += 1;
                    }
                });
            },

            addToValues(values, newValues) {
                Object.keys(newValues).forEach((key) => {
                    values[key] = values[key]
                        ? values[key] + newValues[key]
                        : newValues[key];
                });
            },

            getBonusObjectValues(item) {
                const values = {};

                item.forEach((valueObj) => {
                    if (
                        valueObj.type === 'character' &&
                        valueObj.key ===
                            'level' /* valueObj.roundingMethod === "ceil" && */ &&
                        (valueObj.bonus.type === 'skill' ||
                            valueObj.bonus.type === 'attribute')
                    ) {
                        values[valueObj.bonus.name] = valueObj.bonus.value;
                    }
                });

                return values;
            },

            getSimpleSetObjectValues(setObject) {
                const values = {};

                setObject.forEach((key) => {
                    if (key.type === 'attribute' || key.type === 'skill') {
                        values[key.name] = key.value;
                    }
                });

                return values;
            },

            getSimpleObjectValues(itemObject) {
                const values = {};

                Object.keys(itemObject.bonus.skills).forEach((key) => {
                    values[key] = itemObject.bonus.skills[key];
                });
                Object.keys(itemObject.bonus.attributes).forEach((key) => {
                    values[key] = itemObject.bonus.attributes[key];
                });

                return values;
            },

            addSetsToValues(sets, values, playerLevel, setObjects) {
                Object.keys(sets).forEach((key) => {
                    const setData = setObjects[key];
                    if (setData && setData.bonus[sets[key]]) {
                        const valuesSetBonus = {};
                        const valuesSetSimple = {};

                        for (let index = 2; index <= sets[key]; index += 1) {
                            const valuesSetBonusLevel = TWDCC.DuelClothCalc.getBonusObjectValues(
                                setData.bonus[index],
                            );
                            TWDCC.DuelClothCalc.addToValues(
                                valuesSetBonus,
                                valuesSetBonusLevel,
                            );

                            const valuesSetSimpleLevel = TWDCC.DuelClothCalc.getSimpleSetObjectValues(
                                setData.bonus[index],
                            );
                            TWDCC.DuelClothCalc.addToValues(
                                valuesSetSimple,
                                valuesSetSimpleLevel,
                            );
                        }

                        TWDCC.DuelClothCalc.factorizeValues(
                            valuesSetBonus,
                            playerLevel,
                        );

                        TWDCC.DuelClothCalc.addToValues(values, valuesSetBonus);
                        TWDCC.DuelClothCalc.addToValues(
                            values,
                            valuesSetSimple,
                        );
                    }
                });
            },

            getPopupData(values) {
                return {
                    shot: values.dexterity + values.shot,
                    punch: values.strength + values.punch,
                    aim: values.dexterity + values.aim,
                    appearance: values.charisma + values.appearance,
                    tactic: values.charisma + values.tactic,
                    reflex: values.flexibility + values.reflex,
                    dodge: values.flexibility + values.dodge,
                    tough: values.strength + values.tough,
                    health: values.strength + values.health,
                };
            },

            getSetsNumbers(itemObjects) {
                const sets = {};
                itemObjects.forEach((itemObject) => {
                    if (itemObject.set) {
                        if (
                            Object.prototype.hasOwnProperty.call(
                                sets,
                                itemObject.set,
                            )
                        ) {
                            sets[itemObject.set] += 1;
                        } else {
                            sets[itemObject.set] = 1;
                        }
                    }
                });
                return sets;
            },

            getSetData(sets) {
                const setObjects = [];
                Object.keys(sets).forEach((key) => {
                    setObjects[key] = west.storage.ItemSetManager.get(key);
                });
                return setObjects;
            },

            generateNpcPopup(npcData, weaponId, character) {
                let weapon;
                let damage;
                if (weaponId) {
                    weapon = ItemManager.get(weaponId);
                    damage = weapon.getDamage(character);
                }
                // noinspection HtmlRequiredAltAttribute
                return (
                    `<table class="dln_npcskill_popup">${
                        weapon
                            ? '<tr><td colspan="5" class="text_bold">' +
                              "The opponent's skill bonus" +
                              '<br />&nbsp;</td></tr>'
                            : ''
                    }<tr><td><img src="https://west${
                        TWDCC.serverUrl
                    }.innogamescdn.com/images/window/duels/npcskill_shot.jpg" /></td><td><img src="https://west${
                        TWDCC.serverUrl
                    }.innogamescdn.com/images/window/duels/npcskill_punch.jpg" /></td>` +
                    `<td><img src="https://west${TWDCC.serverUrl}.innogamescdn.com/images/window/duels/npcskill_aim.jpg" /></td><td><img src="https://west${TWDCC.serverUrl}.innogamescdn.com/images/window/duels/npcskill_appearance.jpg" /></td><td></td></tr>` +
                    `<tr><td class="text_bold">${npcData.shot ||
                        0}</td><td class="text_bold">${npcData.punch ||
                        0}</td>` +
                    `<td class="text_bold">${npcData.aim ||
                        0}</td><td class="text_bold">${npcData.appearance ||
                        0}</td><td></td></tr>` +
                    `<tr><td><img src="https://west${TWDCC.serverUrl}.innogamescdn.com/images/window/duels/npcskill_tactic.jpg" /></td><td><img src="https://west${TWDCC.serverUrl}.innogamescdn.com/images/window/duels/npcskill_reflex.jpg" /></td>` +
                    `<td><img src="https://west${TWDCC.serverUrl}.innogamescdn.com/images/window/duels/npcskill_dodge.jpg" /></td><td><img src="https://west${TWDCC.serverUrl}.innogamescdn.com/images/window/duels/npcskill_tough.jpg" /></td><td><img src="https://west${TWDCC.serverUrl}.innogamescdn.com/images/window/duels/npcskill_health.jpg" /></td></tr>` +
                    `<tr><td class="text_bold">${npcData.tactic ||
                        0}</td><td class="text_bold">${npcData.reflex ||
                        0}</td>` +
                    `<td class="text_bold">${npcData.dodge ||
                        0}</td><td class="text_bold">${npcData.tough ||
                        0}</td><td class="text_bold">${npcData.health ||
                        0}</td></tr>${
                        weapon
                            ? `<tr><td colspan="2" class="text_bold"><img src="${weapon.image}" /></td><td colspan="3" class="text_bold"><br />${weapon.name}<br />(` +
                              'Damage' +
                              `:&nbsp;${damage.min} - ${damage.max})</td></tr>`
                            : ''
                    }</table>`
                );
            },
        };

        try {
            TWDCC.Updater.init();
            TWDCC.DuelClothCalc.init();

            // call TWDuelClothCalc.getRealSkillValuesFormatted(playerLevel, [key1, key2, ...]) to get added and formatted values.
            // call TWDuelClothCalc.getSkillValues(playerLevel, [key1, key2, ...]) to get naked values.
            // eslint-disable-next-line no-undef
            TWDuelClothCalc = {
                getRealSkillValuesFormatted(playerLevel, itemKeys) {
                    const values = TWDCC.DuelClothCalc.getSkillValuesFromItemKeys(
                        playerLevel,
                        itemKeys,
                    );
                    return {
                        strength: {
                            build: values.strength + values.build,
                            punch: values.strength + values.punch,
                            tough: values.strength + values.tough,
                            endurance: values.strength + values.endurance,
                            health: values.strength + values.health,
                        },

                        flexibility: {
                            ride: values.flexibility + values.ride,
                            reflex: values.flexibility + values.reflex,
                            dodge: values.flexibility + values.dodge,
                            hide: values.flexibility + values.hide,
                            swim: values.flexibility + values.swim,
                        },

                        dexterity: {
                            aim: values.dexterity + values.aim,
                            shot: values.dexterity + values.shot,
                            pitfall: values.dexterity + values.pitfall,
                            // eslint-disable-next-line camelcase
                            finger_dexterity:
                                values.dexterity + values.finger_dexterity,
                            repair: values.dexterity + values.repair,
                        },

                        charisma: {
                            leadership: values.charisma + values.leadership,
                            tactic: values.charisma + values.tactic,
                            trade: values.charisma + values.trade,
                            animal: values.charisma + values.animal,
                            appearance: values.charisma + values.appearance,
                        },

                        duelValues: {
                            shot: values.dexterity + values.shot,
                            punch: values.strength + values.punch,
                            aim: values.dexterity + values.aim,
                            appearance: values.charisma + values.appearance,
                            tactic: values.charisma + values.tactic,
                            reflex: values.flexibility + values.reflex,
                            dodge: values.flexibility + values.dodge,
                            tough: values.strength + values.tough,
                            health: values.strength + values.health,
                        },
                    };
                },
                /* eslint-enable no-undef */
                getSkillValues: TWDCC.DuelClothCalc.getSkillValuesFromItemKeys,
            };
        } catch (err) {
            console.error('TWDCC ERROR', err);
        }
    });
});
