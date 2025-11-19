export interface GameDTO {
  id: string;
  title: string;
  description: string;
  price: number;
  typeId: string; // gameType
  createdAt: Date;
  updatedAt: Date;
}
