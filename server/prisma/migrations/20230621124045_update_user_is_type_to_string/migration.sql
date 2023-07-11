/*
  Warnings:

  - The primary key for the `UserRaportData` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "UserRaportData" DROP CONSTRAINT "UserRaportData_userId_fkey";

-- AlterTable
ALTER TABLE "UserRaportData" DROP CONSTRAINT "UserRaportData_pkey",
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserRaportData_pkey" PRIMARY KEY ("userId");

-- AddForeignKey
ALTER TABLE "UserRaportData" ADD CONSTRAINT "UserRaportData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
