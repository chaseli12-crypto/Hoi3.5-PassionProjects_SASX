// Troop Data for all factions
const TROOP_DATA = {
  Romans: {
    Infantry: [
      { name: "Light Infantry", str: 3, hp: 6 },
      { name: "Medium Infantry", str: 5, hp: 10 },
      { name: "Heavy Infantry", str: 8, hp: 16 },
      { name: "Mercenary", str: 4, hp: 9 },
      { name: "Shield Bearers", str: 6, hp: 14 }
    ],
    Cavalry: [
      { name: "Light Cavalry", str: 4, hp: 8 },
      { name: "Heavy Cavalry / Cataphracts", str: 6, hp: 14 }
    ],
    Archers: [
      { name: "Light Archers", str: 3, hp: 5 },
      { name: "Heavy Archers", str: 5, hp: 7 }
    ],
    Siege: [
      { name: "Onagers", str: 10, hp: 10 },
      { name: "Ballistas", str: 8, hp: 8 },
      { name: "Trebuchets", str: 12, hp: 12 },
      { name: "Flame Trebuchets", str: 13, hp: 10 }
    ]
  },
  Persians: {
    Infantry: [
      { name: "Light Infantry", str: 3, hp: 5 },
      { name: "Medium Infantry", str: 4, hp: 8 },
      { name: "Heavy Infantry", str: 6, hp: 12 },
      { name: "Mercenary", str: 5, hp: 9 },
      { name: "Shield Bearers", str: 5, hp: 11 }
    ],
    Cavalry: [
      { name: "Light Cavalry", str: 6, hp: 9 },
      { name: "Heavy Cavalry / Cataphracts", str: 9, hp: 16 }
    ],
    Archers: [
      { name: "Light Archers", str: 4, hp: 6 },
      { name: "Heavy Archers", str: 6, hp: 8 }
    ],
    Siege: [
      { name: "Onagers", str: 8, hp: 9 },
      { name: "Ballistas", str: 7, hp: 7 },
      { name: "Trebuchets", str: 11, hp: 11 },
      { name: "Flame Trebuchets", str: 12, hp: 10 }
    ]
  },
  Mongols: {
    Infantry: [
      { name: "Light Infantry", str: 2, hp: 5 },
      { name: "Medium Infantry", str: 3, hp: 7 },
      { name: "Heavy Infantry", str: 5, hp: 12 },
      { name: "Mercenary", str: 4, hp: 8 },
      { name: "Shield Bearers", str: 3, hp: 10 }
    ],
    Cavalry: [
      { name: "Light Cavalry", str: 9, hp: 10 },
      { name: "Heavy Cavalry / Cataphracts", str: 10, hp: 15 }
    ],
    Archers: [
      { name: "Light Archers", str: 6, hp: 5 },
      { name: "Heavy Archers", str: 8, hp: 7 }
    ],
    Siege: [
      { name: "Onagers", str: 7, hp: 8 },
      { name: "Ballistas", str: 6, hp: 7 },
      { name: "Trebuchets", str: 13, hp: 12 },
      { name: "Flame Trebuchets", str: 14, hp: 11 }
    ]
  },
  Islams: {
    Infantry: [
      { name: "Light Infantry", str: 4, hp: 7 },
      { name: "Medium Infantry", str: 5, hp: 9 },
      { name: "Heavy Infantry", str: 7, hp: 14 },
      { name: "Mercenary", str: 5, hp: 9 },
      { name: "Shield Bearers", str: 6, hp: 12 }
    ],
    Cavalry: [
      { name: "Light Cavalry", str: 7, hp: 9 },
      { name: "Heavy Cavalry / Cataphracts", str: 8, hp: 14 }
    ],
    Archers: [
      { name: "Light Archers", str: 5, hp: 6 },
      { name: "Heavy Archers", str: 7, hp: 8 }
    ],
    Siege: [
      { name: "Onagers", str: 9, hp: 9 },
      { name: "Ballistas", str: 7, hp: 7 },
      { name: "Trebuchets", str: 12, hp: 12 },
      { name: "Flame Trebuchets", str: 13, hp: 11 }
    ]
  },
  Chinese: {
    Infantry: [
      { name: "Light Infantry", str: 2, hp: 6 },
      { name: "Medium Infantry", str: 6, hp: 11 },
      { name: "Heavy Infantry", str: 6, hp: 13 },
      { name: "Mercenary", str: 3, hp: 10 },
      { name: "Shield Bearers", str: 4, hp: 14 }
    ],
    Cavalry: [
      { name: "Light Cavalry", str: 7, hp: 9 },
      { name: "Cataphracts", str: 8, hp: 15 }
    ],
    Archers: [
      { name: "Light Archers", str: 6, hp: 5 },
      { name: "Heavy Archers", str: 8, hp: 7 }
    ],
    Siege: [
      { name: "Onagers", str: 8, hp: 8 },
      { name: "Ballistas", str: 8, hp: 9 },
      { name: "Trebuchets", str: 12, hp: 12 },
      { name: "Flame Trebuchets", str: 14, hp: 10 }
    ]
  }
};

// State
let currentBattle = {
  faction1: null,
  faction1Army: [],
  faction2: null,
  faction2Army: []
};

let editStats = JSON.parse(localStorage.getItem("editStats")) || {};

// DOM Elements
const battleBtn = document.getElementById("battleBtn");
const settingsBtn = document.getElementById("settingsBtn");
const battleScreen = document.getElementById("battleScreen");
const settingsScreen = document.getElementById("settingsScreen");
const faction1Select = document.getElementById("faction1-select");
const faction1TroopsContainer = document.getElementById("faction1-troops-container");
const faction2Select = document.getElementById("faction2-select");
const faction2TroopsContainer = document.getElementById("faction2-troops-container");
const startBattleBtn = document.getElementById("startBattleBtn");
const backFromBattleBtn = document.getElementById("backFromBattleBtn");
const battleResult = document.getElementById("battleResult");
const resultText = document.getElementById("resultText");
const resetDataBtn = document.getElementById("resetDataBtn");
const backFromSettingsBtn = document.getElementById("backFromSettingsBtn");
const statsModal = document.getElementById("statsModal");
const editUnitName = document.getElementById("editUnitName");
const editStrInput = document.getElementById("editStrInput");
const editHpInput = document.getElementById("editHpInput");
const saveStatsBtn = document.getElementById("saveStatsBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

let currentEditingUnit = null;

// Screen Navigation
function showBattleScreen() {
  hideAllScreens();
  battleScreen.classList.remove("hidden");
  resetBattle();
}

function showSettingsScreen() {
  hideAllScreens();
  settingsScreen.classList.remove("hidden");
}

function showMainMenu() {
  hideAllScreens();
}

function hideAllScreens() {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.add("hidden");
  });
}

// Faction Selection
function handleFactionChange(factionNum) {
  const select = factionNum === 1 ? faction1Select : faction2Select;
  const container = factionNum === 1 ? faction1TroopsContainer : faction2TroopsContainer;
  
  const factionName = select.value;
  
  if (!factionName) {
    currentBattle[`faction${factionNum}`] = null;
    currentBattle[`faction${factionNum}Army`] = [];
    container.innerHTML = "";
    checkBattleReady();
    return;
  }
  
  currentBattle[`faction${factionNum}`] = factionName;
  renderTroops(factionNum, factionName);
  checkBattleReady();
}

// Render Troop Selection UI
function renderTroops(factionNum, factionName) {
  const container = factionNum === 1 ? faction1TroopsContainer : faction2TroopsContainer;
  const factionTroops = TROOP_DATA[factionName];
  
  // Store existing values before clearing
  const existingValues = {};
  container.querySelectorAll("input[type='number']").forEach(input => {
    existingValues[input.dataset.unit] = input.value;
  });
  
  container.innerHTML = "";
  
  Object.keys(factionTroops).forEach(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "troop-category";
    
    const categoryTitle = document.createElement("h4");
    categoryTitle.textContent = category;
    categoryDiv.appendChild(categoryTitle);
    
    factionTroops[category].forEach(unit => {
      const unitRow = document.createElement("div");
      unitRow.className = "troop-input-group";
      
      // Get stats (edited or default)
      const stats = getUnitStats(factionName, unit.name);
      
      const label = document.createElement("label");
      label.textContent = `${unit.name} (STR: ${stats.str}, HP: ${stats.hp})`;
      
      const input = document.createElement("input");
      input.type = "number";
      input.min = "0";
      input.value = existingValues[unit.name] || "0";
      input.placeholder = "# troops";
      input.dataset.unit = unit.name;
      input.dataset.str = stats.str;
      input.dataset.hp = stats.hp;
      input.addEventListener("change", () => updateArmy(factionNum));
      
      const editBtn = document.createElement("button");
      editBtn.className = "btn-edit-stats";
      editBtn.textContent = "✎";
      editBtn.addEventListener("click", () => openStatsEditor(factionName, unit.name, stats));
      
      unitRow.appendChild(label);
      unitRow.appendChild(input);
      unitRow.appendChild(editBtn);
      categoryDiv.appendChild(unitRow);
    });
    
    container.appendChild(categoryDiv);
  });
}

// Update Army from Inputs
function updateArmy(factionNum) {
  const container = factionNum === 1 ? faction1TroopsContainer : faction2TroopsContainer;
  const inputs = container.querySelectorAll("input[type='number']");
  const army = [];
  
  inputs.forEach(input => {
    const count = parseInt(input.value) || 0;
    if (count > 0) {
      // Get fresh stats in case they were edited
      const str = parseFloat(input.dataset.str) || 0;
      const hp = parseFloat(input.dataset.hp) || 0;
      
      army.push({
        name: input.dataset.unit,
        count: count,
        str: str,
        hp: hp
      });
    }
  });
  
  currentBattle[`faction${factionNum}Army`] = army;
  checkBattleReady();
}

// Check if Battle Ready
function checkBattleReady() {
  const ready = 
    currentBattle.faction1 && 
    currentBattle.faction1Army.length > 0 && 
    currentBattle.faction2 && 
    currentBattle.faction2Army.length > 0;
  
  startBattleBtn.disabled = !ready;
}

// Calculate Battle Casualties
function calculateCasualties(winnerArmy, loserArmy, winnerStrength, loserStrength, winnerHealth, loserHealth, isTie) {
  // Base damage calculation uses BOTH strength and health
  // Strength = attacking power, Health = durability
  const totalDamageToLoser = winnerStrength + (winnerHealth * 0.5);
  const totalDamageToWinner = loserStrength + (loserHealth * 0.5);
  
  // Distribute damage to loser's army
  const loserCasualties = distributeDamage(loserArmy, totalDamageToLoser, winnerArmy);
  
  // Winner takes reduced damage (they're better trained/stronger)
  let winnerCasualties = { totalLosses: 0, casualtiesByUnit: [] };
  if (isTie) {
    // In a true tie, both sides take full damage
    winnerCasualties = distributeDamage(winnerArmy, totalDamageToWinner, loserArmy);
  } else {
    // Winner takes only 40% of the damage dealt to them
    const reducedDamage = totalDamageToWinner * 0.4;
    winnerCasualties = distributeDamage(winnerArmy, reducedDamage, loserArmy);
  }
  
  return {
    winnerCasualties: winnerCasualties,
    loserCasualties: loserCasualties
  };
}

function distributeDamage(army, totalDamage, opposingArmy) {
  // Check for heavy infantry buff against light cavalry
  // Heavy infantry gets a 10% damage bonus against light cavalry
  const hasHeavyInfantry = opposingArmy.some(unit => unit.name === "Heavy Infantry");
  
  // Separate frontline (Infantry + Cavalry) from archers and siege weapons
  const frontline = [];
  const backline = []; // archers and siege weapons
  
  for (let unit of army) {
    if (isArcherUnit(unit.name) || isSiegeUnit(unit.name)) {
      backline.push(unit);
    } else {
      frontline.push(unit);
    }
  }
  
  let remainingDamage = totalDamage;
  let totalLosses = 0;
  let casualtiesByUnit = [];
  
  // First, distribute all damage to frontline units (sorted by HP ascending)
  const sortedFrontline = [...frontline].sort((a, b) => a.hp - b.hp);
  
  for (let unit of sortedFrontline) {
    if (remainingDamage <= 0) break;
    
    let effectiveHp = unit.hp;
    if (hasHeavyInfantry && unit.name === "Light Cavalry") {
      effectiveHp *= (1 / 1.1); // Heavy infantry buff: light cavalry takes 10% more damage
    }
    
    const unitsLost = Math.ceil(remainingDamage / effectiveHp);
    const actualUnitsLost = Math.min(unitsLost, unit.count);
    
    if (actualUnitsLost > 0) {
      casualtiesByUnit.push({
        name: unit.name,
        lost: actualUnitsLost,
        total: unit.count
      });
      totalLosses += actualUnitsLost;
      remainingDamage -= actualUnitsLost * unit.hp;
    }
  }
  
  // Only apply remaining damage to archers and siege weapons if frontline is completely eliminated
  const frontlineEliminated = frontline.every(unit => {
    const casualty = casualtiesByUnit.find(c => c.name === unit.name);
    return !casualty || casualty.lost >= unit.count;
  });
  
  if (frontlineEliminated && remainingDamage > 0) {
    const sortedBackline = [...backline].sort((a, b) => a.hp - b.hp);
    
    for (let unit of sortedBackline) {
      if (remainingDamage <= 0) break;
      
      let effectiveHp = unit.hp;
      if (hasHeavyInfantry && unit.name === "Light Cavalry") {
        effectiveHp *= (1 / 1.1); // Heavy infantry buff: light cavalry takes 10% more damage
      }
      
      const unitsLost = Math.ceil(remainingDamage / effectiveHp);
      const actualUnitsLost = Math.min(unitsLost, unit.count);
      
      if (actualUnitsLost > 0) {
        casualtiesByUnit.push({
          name: unit.name,
          lost: actualUnitsLost,
          total: unit.count
        });
        totalLosses += actualUnitsLost;
        remainingDamage -= actualUnitsLost * unit.hp;
      }
    }
  }
  
  return {
    totalLosses: totalLosses,
    casualtiesByUnit: casualtiesByUnit
  };
}

// Helper function to identify archer units
function isArcherUnit(unitName) {
  return unitName.includes("Archer");
}

// Helper function to identify siege units
function isSiegeUnit(unitName) {
  return unitName.includes("Onagers") || 
         unitName.includes("Ballistas") || 
         unitName.includes("Trebuchets") || 
         unitName.includes("Flame Trebuchets");
}

// Start Battle
function startBattle() {
  const faction1Name = currentBattle.faction1;
  const faction2Name = currentBattle.faction2;
  const faction1Army = currentBattle.faction1Army;
  const faction2Army = currentBattle.faction2Army;
  
  const faction1Strength = faction1Army.reduce((sum, unit) => sum + (unit.str * unit.count), 0);
  const faction2Strength = faction2Army.reduce((sum, unit) => sum + (unit.str * unit.count), 0);
  
  const faction1Health = faction1Army.reduce((sum, unit) => sum + (unit.hp * unit.count), 0);
  const faction2Health = faction2Army.reduce((sum, unit) => sum + (unit.hp * unit.count), 0);
  
  let winnerName = "";
  let winnerArmy = [];
  let loserArmy = [];
  let winnerStrength = 0;
  let loserStrength = 0;
  let winnerHealth = 0;
  let loserHealth = 0;
  let isTie = false;
  
  // Determine winner: strength first, health as tiebreaker
  let faction1Wins = false;
  
  if (faction1Strength > faction2Strength) {
    faction1Wins = true;
  } else if (faction2Strength > faction1Strength) {
    faction1Wins = false;
  } else {
    // Strength is tied, use health as tiebreaker
    if (faction1Health > faction2Health) {
      faction1Wins = true;
    } else if (faction2Health > faction1Health) {
      faction1Wins = false;
    } else {
      // Complete tie - both strength and health equal
      isTie = true;
    }
  }
  
  if (isTie) {
    winnerName = "Both sides (Tie)";
    winnerArmy = faction1Army;
    loserArmy = faction2Army;
    winnerStrength = faction1Strength;
    loserStrength = faction2Strength;
    winnerHealth = faction1Health;
    loserHealth = faction2Health;
  } else if (faction1Wins) {
    winnerName = faction1Name;
    winnerArmy = faction1Army;
    loserArmy = faction2Army;
    winnerStrength = faction1Strength;
    loserStrength = faction2Strength;
    winnerHealth = faction1Health;
    loserHealth = faction2Health;
  } else {
    winnerName = faction2Name;
    winnerArmy = faction2Army;
    loserArmy = faction1Army;
    winnerStrength = faction2Strength;
    loserStrength = faction1Strength;
    winnerHealth = faction2Health;
    loserHealth = faction1Health;
  }
  
  // Calculate casualties
  const casualties = calculateCasualties(winnerArmy, loserArmy, winnerStrength, loserStrength, winnerHealth, loserHealth, isTie);
  
  // Build detailed message
  let message = "";
  
  if (isTie) {
    message = `⚔️ Tie Battle! Both sides fight to mutual destruction!\n\n`;
    message += `${faction1Name} losses:\n`;
    message += `Total units lost: ${casualties.winnerCasualties.totalLosses}\n`;
    if (casualties.winnerCasualties.casualtiesByUnit.length > 0) {
      message += `Breakdown:\n`;
      casualties.winnerCasualties.casualtiesByUnit.forEach(casualty => {
        message += `• ${casualty.name}: ${casualty.lost}/${casualty.total} lost\n`;
      });
      message += `Remaining units:\n`;
      casualties.winnerCasualties.casualtiesByUnit.forEach(casualty => {
        const remaining = casualty.total - casualty.lost;
        message += `• ${casualty.name}: ${remaining} standing\n`;
      });
    }
    
    message += `\n${faction2Name} losses:\n`;
    message += `Total units lost: ${casualties.loserCasualties.totalLosses}\n`;
    if (casualties.loserCasualties.casualtiesByUnit.length > 0) {
      message += `Breakdown:\n`;
      casualties.loserCasualties.casualtiesByUnit.forEach(casualty => {
        message += `• ${casualty.name}: ${casualty.lost}/${casualty.total} lost\n`;
      });
      message += `Remaining units:\n`;
      casualties.loserCasualties.casualtiesByUnit.forEach(casualty => {
        const remaining = casualty.total - casualty.lost;
        message += `• ${casualty.name}: ${remaining} standing\n`;
      });
    }
  } else {
    message = `🎉 ${winnerName} wins with ${winnerStrength} total strength!\n\n`;
    message += `Winner casualties:\n`;
    message += `Total units lost: ${casualties.winnerCasualties.totalLosses}\n`;
    if (casualties.winnerCasualties.casualtiesByUnit.length > 0) {
      message += `Breakdown:\n`;
      casualties.winnerCasualties.casualtiesByUnit.forEach(casualty => {
        message += `• ${casualty.name}: ${casualty.lost}/${casualty.total} lost\n`;
      });
      message += `Remaining units:\n`;
      casualties.winnerCasualties.casualtiesByUnit.forEach(casualty => {
        const remaining = casualty.total - casualty.lost;
        message += `• ${casualty.name}: ${remaining} standing\n`;
      });
    }
    
    message += `\nLoser casualties:\n`;
    message += `Total units lost: ${casualties.loserCasualties.totalLosses}\n`;
    if (casualties.loserCasualties.casualtiesByUnit.length > 0) {
      message += `Breakdown:\n`;
      casualties.loserCasualties.casualtiesByUnit.forEach(casualty => {
        message += `• ${casualty.name}: ${casualty.lost}/${casualty.total} lost\n`;
      });
      message += `Remaining units:\n`;
      casualties.loserCasualties.casualtiesByUnit.forEach(casualty => {
        const remaining = casualty.total - casualty.lost;
        message += `• ${casualty.name}: ${remaining} standing\n`;
      });
    }
  }
  
  resultText.textContent = message;
  resultText.style.whiteSpace = "pre-wrap";
  resultText.style.textAlign = "left";
  battleResult.classList.remove("hidden");
}

// Reset Battle
function resetBattle() {
  currentBattle = {
    faction1: null,
    faction1Army: [],
    faction2: null,
    faction2Army: []
  };
  
  faction1Select.value = "";
  faction2Select.value = "";
  faction1TroopsContainer.innerHTML = "";
  faction2TroopsContainer.innerHTML = "";
  battleResult.classList.add("hidden");
  startBattleBtn.disabled = true;
}

// Reset All Data
function resetAllData() {
  if (confirm("Reset all data?")) {
    localStorage.clear();
    editStats = {};
    alert("Data reset!");
    resetBattle();
  }
}

// Get Unit Stats (with edits or defaults)
function getUnitStats(factionName, unitName) {
  const key = `${factionName}|${unitName}`;
  if (editStats[key]) {
    return editStats[key];
  }
  
  // Find default from TROOP_DATA
  const faction = TROOP_DATA[factionName];
  for (let category in faction) {
    const unit = faction[category].find(u => u.name === unitName);
    if (unit) {
      return { str: unit.str, hp: unit.hp };
    }
  }
  return { str: 0, hp: 0 };
}

// Open Stats Editor Modal
function openStatsEditor(factionName, unitName, stats) {
  currentEditingUnit = { factionName, unitName };
  editUnitName.textContent = `${unitName} (${factionName})`;
  editStrInput.value = stats.str;
  editHpInput.value = stats.hp;
  statsModal.classList.remove("hidden");
}

// Close Modal
function closeStatsModal() {
  statsModal.classList.add("hidden");
  currentEditingUnit = null;
}

// Save Stats
function saveEditStats() {
  if (!currentEditingUnit) return;
  
  const str = parseFloat(editStrInput.value) || 0;
  const hp = parseFloat(editHpInput.value) || 0;
  
  const key = `${currentEditingUnit.factionName}|${currentEditingUnit.unitName}`;
  editStats[key] = { str, hp };
  
  localStorage.setItem("editStats", JSON.stringify(editStats));
  
  // Re-render the troops to update labels and data attributes
  const factionNum = currentBattle.faction1 === currentEditingUnit.factionName ? 1 : 2;
  if (currentBattle[`faction${factionNum}`]) {
    renderTroops(factionNum, currentEditingUnit.factionName);
    // Update army with new stats
    updateArmy(factionNum);
  }
  
  closeStatsModal();
}

// Event Listeners
battleBtn.addEventListener("click", showBattleScreen);
settingsBtn.addEventListener("click", showSettingsScreen);
backFromBattleBtn.addEventListener("click", showMainMenu);
backFromSettingsBtn.addEventListener("click", showMainMenu);
resetDataBtn.addEventListener("click", resetAllData);
faction1Select.addEventListener("change", () => handleFactionChange(1));
faction2Select.addEventListener("change", () => handleFactionChange(2));
startBattleBtn.addEventListener("click", startBattle);
saveStatsBtn.addEventListener("click", saveEditStats);
closeModalBtn.addEventListener("click", closeStatsModal);
document.querySelector(".modal-close").addEventListener("click", closeStatsModal);
