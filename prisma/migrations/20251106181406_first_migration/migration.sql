-- CreateTable
CREATE TABLE "GameCollection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "gameTypeId" TEXT NOT NULL,

    CONSTRAINT "GameCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameType" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "GameType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GameCollection" ADD CONSTRAINT "GameCollection_gameTypeId_fkey" FOREIGN KEY ("gameTypeId") REFERENCES "GameType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
