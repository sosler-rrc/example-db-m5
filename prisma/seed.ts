import prisma from "./client";

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
  await seedData();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function seedData() {
  await prisma.gameCollection.deleteMany();
  await prisma.gameType.deleteMany();

  const action = await prisma.gameType.create({
    data: {
      type: "Action",
    },
  });

  const adventure = await prisma.gameType.create({
    data: {
      type: "Adventure",
    },
  });

  const rpg = await prisma.gameType.create({
    data: {
      type: "RPG",
    },
  });

  const strategy = await prisma.gameType.create({
    data: {
      type: "Strategy",
    },
  });

  const sports = await prisma.gameType.create({
    data: {
      type: "Sports",
    },
  });

  await prisma.gameCollection.create({
    data: {
      title: "Battlefield 6",
      description: "Intense first-person shooter with massive multiplayer battles",
      price: 69.99,
      gameTypeId: action.id,
    },
  });

  await prisma.gameCollection.create({
    data: {
      title: "Escape from Tarkov",
      description: "Hardcore survival shooter with realistic combat mechanics",
      price: 120.99,
      gameTypeId: action.id,
    },
  });

  await prisma.gameCollection.create({
    data: {
      title: "The Legend of Zelda: Tears of the Kingdom",
      description: "Epic open-world adventure with puzzle-solving and exploration",
      price: 69.99,
      gameTypeId: adventure.id,
    },
  });

  await prisma.gameCollection.create({
    data: {
      title: "Skyrim 10: Special Edition",
      description: "Classic open-world RPG with endless quests and character customization",
      price: 89.99,
      gameTypeId: rpg.id,
    },
  });

  await prisma.gameCollection.create({
    data: {
      title: "Baldur's Gate 3",
      description: "Critically acclaimed RPG with deep storytelling and tactical combat",
      price: 69.99,
      gameTypeId: rpg.id,
    },
  });

  await prisma.gameCollection.create({
    data: {
      title: "Civilization VI",
      description: "Turn-based strategy game where you build an empire through the ages",
      price: 69.99,
      gameTypeId: strategy.id,
    },
  });

  await prisma.gameCollection.create({
    data: {
      title: "XCOM 2",
      description: "Tactical strategy game featuring alien invasion and squad management",
      price: 39.99,
      gameTypeId: strategy.id,
    },
  });

  await prisma.gameCollection.create({
    data: {
      title: "FIFA 24",
      description: "The ultimate football simulation with realistic gameplay",
      price: 29.99,
      gameTypeId: sports.id,
    },
  });
}
