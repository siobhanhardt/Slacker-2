import axios from "axios";

async function getRandomCardFromCollection(rarity, minId, maxId, usedIds) {
  try {
    let randomId;
    do {
      randomId = getRandomInt(minId, maxId + 1);
    } while (usedIds.includes(randomId));
    usedIds.push(randomId); // Add the id to the list of used ids

    const response = await axios.get(`http://localhost:8080/cards${rarity}`, {
      params: {
        id: randomId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${rarity}: `, error);
  }
}

export async function getRandomCard() {
  let array = [];
  let userIds = [];
  try {
    for (let i = 0; i < 3; i++) {
      const card = await getRandomCardFromCollection("Common", 1, 30, userIds);
      array.push(...card);
    }

    const card4Num = Math.floor(Math.random() * 100) + 1;

    if (card4Num <= 80) {
      const card = await getRandomCardFromCollection("Rare", 51, 70, userIds);
      array.push(...card);
    } else if (card4Num <= 95) {
      const card = await getRandomCardFromCollection("Epic", 31, 40, userIds);
      array.push(...card);
    } else {
      const card = await getRandomCardFromCollection("Legendary", 41, 50, userIds);
      array.push(...card);
    }

    const card5Num = Math.floor(Math.random() * 100) + 1;

    if (card5Num <= 80) {
      const card = await getRandomCardFromCollection("Rare", 51, 70, userIds);
      array.push(...card);
    } else if (card5Num <= 95) {
      const card = await getRandomCardFromCollection("Epic", 31, 40, userIds);
      array.push(...card);
    } else {
      const card = await getRandomCardFromCollection("Legendary", 41, 50, userIds);
      array.push(...card);
    }

    return array;
  } catch (error) {
    console.error(`Error generating random card set: `, error);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
