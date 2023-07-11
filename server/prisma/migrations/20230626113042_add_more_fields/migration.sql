/*
  Warnings:

  - You are about to drop the column `rankFull` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `rankShort` on the `User` table. All the data in the column will be lost.
  - The primary key for the `UserReportData` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `rankId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_id_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "rankFull",
DROP COLUMN "rankShort",
ADD COLUMN     "rankId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserReportData" DROP CONSTRAINT "UserReportData_pkey";

-- CreateTable
CREATE TABLE "UserProfile" (
    "userId" TEXT NOT NULL,
    "lastName1" TEXT NOT NULL,
    "name1" TEXT NOT NULL,
    "middleName1" TEXT NOT NULL,
    "lastName2" TEXT NOT NULL,
    "name2" TEXT NOT NULL,
    "middleName2" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name2" TEXT NOT NULL,
    "name3" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReportData" ADD CONSTRAINT "UserReportData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
