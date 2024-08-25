-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "stacks" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "ProExp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ogarnization_name" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "description" TEXT,
    "begin_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "remote" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Stack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typ" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "text" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_url_key" ON "Project"("url");
