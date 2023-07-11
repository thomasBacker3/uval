-- CreateTable
CREATE TABLE "UserRaportData" (
    "userId" INTEGER NOT NULL,
    "rankFullReport" TEXT NOT NULL,
    "fullNameReport" TEXT NOT NULL,
    "positionRaport" TEXT NOT NULL,

    CONSTRAINT "UserRaportData_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRaportData_userId_key" ON "UserRaportData"("userId");

-- AddForeignKey
ALTER TABLE "UserRaportData" ADD CONSTRAINT "UserRaportData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
