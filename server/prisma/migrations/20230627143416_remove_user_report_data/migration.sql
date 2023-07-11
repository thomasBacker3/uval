/*
  Warnings:

  - You are about to drop the `UserReportData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserReportData" DROP CONSTRAINT "UserReportData_userId_fkey";

-- DropTable
DROP TABLE "UserReportData";
