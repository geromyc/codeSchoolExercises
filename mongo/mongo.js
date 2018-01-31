<<<<<<< HEAD
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
=======
mongo level 3
// monsters with attack lower than 10
db.monsters.find({"stats.attack": {"$lt": 10}})
>>>>>>> mongoLvl2

// monsters above level 5 but lower than 15 inclusive
db.monsters.find({"Level": {"$gt": 5, "$lte": 15}})

// monsters that do not have bite attack
db.monsters.find({"attacks": {"$ne": "bite"}})

// monsters less than level 6 but only return the name, level and health
db.monsters.find({"Level": {"$lt": 6}},
{"name": true, "Level": true, "health": true, "_id": false})

// monsters who attack is between 10 and 20 but do not include health or style
db.monsters.find({"stats.attack": {"$gt": 10, "$lt": 20}},
{"health": false, "style": false})

// monsters in the collection
db.monsters.find().count()

// sort collection highest level first
db.monsters.find().sort({"Level": -1})

// mongo level 1
// function mongo(name, health, last_fought, attacks, stats, db) {
//     db.monsters.insert({
//         "name": name, 
//         "health": health, 
//         "last_fought": last_fought,
//         "attacks": [attacks], 
//         "stats" {stats}
// };
// mongo(Peon, 50, new Date(2018, 0, 28), ["Stab", "Slash", "Poke"], {"attack": 10, "defense": 5})

// console.log(db.monsters.find());

// db.monsters.find("name": "Peon")

// db.monsters.find({"attacks": "Slash"})

// db.monsters.find({"stats.defense": 5})