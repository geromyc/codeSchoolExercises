var mongo = function(name, health, last_fought, attacks, db) {
    db.monsters.insert({
        "name": "Peon", 
        "health": 50, 
        "last_fought": new Date(2018, 0, 28),
        "attacks": ["Stab", "Slash", "Poke"], 
        "db": {"attack": 10, "defense": 5}})
};

console.log(db.monsters.find());

db.monsters.find("name": "Peon")

db.monsters.find({"attacks": "Slash"})

db.monsters.find({"stats.defense": 5})