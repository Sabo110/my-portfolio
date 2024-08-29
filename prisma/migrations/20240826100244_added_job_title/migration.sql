/*
  Warnings:

  - A unique constraint covering the columns `[typ]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[link]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contact_typ_key" ON "Contact"("typ");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_link_key" ON "Contact"("link");
