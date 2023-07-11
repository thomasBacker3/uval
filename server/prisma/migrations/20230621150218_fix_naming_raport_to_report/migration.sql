/*
  Warnings:

  - You are about to drop the `UserRaportData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_id_fkey";

-- DropTable
DROP TABLE "UserRaportData";

-- CreateTable
CREATE TABLE "UserReportData" (
    "userId" TEXT NOT NULL,
    "rankFullReport" TEXT NOT NULL,
    "fullNameReport" TEXT NOT NULL,
    "positionReport" TEXT NOT NULL,

    CONSTRAINT "UserReportData_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserReportData_userId_key" ON "UserReportData"("userId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "UserReportData"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
