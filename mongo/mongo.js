mongo level 1
function mongo(name, health, last_fought, attacks, stats, db) {
    db.monsters.insert({
        "name": name, 
        "health": health, 
        "last_fought": last_fought,
        "attacks": [attacks], 
        "stats" {stats}
};
mongo(Peon, 50, new Date(2018, 0, 28), ["Stab", "Slash", "Poke"], {"attack": 10, "defense": 5})

console.log(db.monsters.find());

db.monsters.find("name": "Peon")

db.monsters.find({"attacks": "Slash"})

db.monsters.find({"stats.defense": 5})