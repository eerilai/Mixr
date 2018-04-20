const fs = require('fs');
const db = require('../server/database/models');

let drinks = [];

let json = fs.readFileSync('./drinks.json', 'utf8');

json = JSON.parse(json).result;

for (let drink of json) {
  drinks.push({
    name: drink.name,
    description: drink.descriptionPlain,
    glass: drink.servedIn,
    strId: drink.id
  });
}

db.Drinks.bulkCreate(drinks);