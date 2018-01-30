db.monsters.insert({"name": "Peon", "health": 50, "last fought": "3 Jan 2018", "attacks": ["Stab", "Slash", "Poke"], "db": {"attack": 10, "defense": 5}})

db.monsters.insert({"name": "Peon", "health": 50, "last fought": "3 Jan 2018", "attacks": ["Stab", "Slash", "Poke"]})

db.monsters.find()

db.monsters.find("name": "Peon")

db.monsters.find({"attacks": "Slash"})

db.monsters.find({"stats.defense": 5})