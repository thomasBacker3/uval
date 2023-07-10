-- DropForeignKey
ALTER TABLE "UserRaportData" DROP CONSTRAINT "UserRaportData_userId_fkey";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "UserRaportData"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
