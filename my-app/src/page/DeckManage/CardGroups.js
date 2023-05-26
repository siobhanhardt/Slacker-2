import CardData from "./CardArray";

const rarityGroups = {
    1: [],
    2: [],
    3: [],
    4: [],
  };
  
  CardData.cards.forEach((card) => {
    rarityGroups[card.rarity].push(card);
  });

export default rarityGroups;