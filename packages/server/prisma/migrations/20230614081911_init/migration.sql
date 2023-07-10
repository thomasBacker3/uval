-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "rankFull" TEXT NOT NULL,
    "rankShort" TEXT NOT NULL,
    "garrison" TEXT NOT NULL,
    "chatNickname" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "platoonId" INTEGER NOT NULL,
    "departmentId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platoon" (
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Platoon_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "Department" (
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("number")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_number_key" ON "User"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Platoon_number_key" ON "Platoon"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Platoon_name_key" ON "Platoon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_number_key" ON "Department"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_platoonId_fkey" FOREIGN KEY ("platoonId") REFERENCES "Platoon"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
