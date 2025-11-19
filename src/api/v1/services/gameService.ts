import prisma from "../../../../prisma/client";
import { GameDTO } from "../types/gameDTO";
import { GameTypeDTO } from "../types/gameTypeDTO";

export const fetchAllGames = async () => {
  const data = await prisma.gameCollection.findMany({
    include: {
      gameType: true,
    },
  });
  return data.map(
    (x) =>
      ({
        id: x.id,
        description: x.description,
        title: x.title,
        price: x.price.toNumber(),
        createdAt: x.createdAt,
        updatedAt: x.updatedAt,
        typeId: x.gameTypeId,
      } as GameDTO)
  );
};

export const fetchAllGameTypes = async () => {
  const data = await prisma.gameType.findMany();
  return data.map(
    (x) =>
      ({
        id: x.id,
        name: x.type,
      } as GameTypeDTO)
  );
};

export const deleteGame = async (gameId: string) => {
  await prisma.gameCollection.delete({
    where: {
      id: gameId,
    },
  });
};
