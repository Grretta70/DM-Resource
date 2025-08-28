// Tab Navigation
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active class from all links and content
        document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        // Add active class to clicked link and corresponding content
        link.classList.add('active');
        const tabId = link.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Random NPC Generator
function generateNPC() {
    const race = document.getElementById('race').value;
    const names = {
        human: ['Elara Veyne', 'Torren Blackthorn', 'Mira Cole', 'Jaren Holt'],
        elf: ['Liora Sylvaris', 'Aerindel Moonshade', 'Eldrin Starwind', 'Sylvara Greenleaf'],
        dwarf: ['Thrain Ironforge', 'Gilda Stonehammer', 'Borin Deepaxe', 'Dura Flintbeard'],
        orc: ['Gruk Bloodaxe', 'Vara Skullcrusher', 'Rokthar Ironfang', 'Zagra Bonebreaker']
    };
    const personalities = ['Gruff', 'Charming', 'Mysterious', 'Timid', 'Bold'];
    const roles = ['Shopkeeper', 'Guard', 'Villain', 'Adventurer', 'Sage'];
    const goals = ['Protect village', 'Gain power', 'Seek revenge', 'Find lost relic', 'Spread knowledge'];
    
    const name = names[race][Math.floor(Math.random() * names[race].length)];
    const personality = personalities[Math.floor(Math.random() * personalities.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    const goal = goals[Math.floor(Math.random() * goals.length)];
    
    document.getElementById('npc-output').innerText = 
        `Name: ${name}\nRace: ${race.charAt(0).toUpperCase() + race.slice(1)}\nRole: ${role}\nPersonality: ${personality}\nGoal: ${goal}`;
}

// Random Loot Generator
function generateLoot() {
    const loot = [
        '50 gp', 'Potion of Healing', 'Magic Weapon (+1)', 'Scroll of Fireball', 
        '100 gp gem', 'Cloak of Protection', 'Bag of Holding', '20 sp'
    ];
    const item = loot[Math.floor(Math.random() * loot.length)];
    document.getElementById('loot-output').innerText = `Treasure: ${item}`;
}

// Random Encounter Generator
function generateEncounter() {
    const enemies = ['2 Goblins', '1 Ogre', '3 Bandits', '1 Dire Wolf', '5 Skeletons'];
    const locations = ['Forest clearing', 'Abandoned ruins', 'Dark cave', 'City alley', 'Haunted graveyard'];
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    document.getElementById('encounter-output').innerText = `Encounter: ${enemy} in a ${location}`;
}
