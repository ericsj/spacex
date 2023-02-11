-- CreateTable
CREATE TABLE "PastLaunch" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "date" TIMESTAMP(3),
    "details" TEXT,
    "success" BOOLEAN,

    CONSTRAINT "PastLaunch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UpcomingLaunch" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "date" TIMESTAMP(3),
    "details" TEXT,
    "flightNumber" INTEGER,

    CONSTRAINT "UpcomingLaunch_pkey" PRIMARY KEY ("id")
);
