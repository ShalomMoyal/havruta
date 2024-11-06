/*
  Warnings:

  - You are about to drop the column `body` on the `Proposal` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Proposal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Proposal" DROP COLUMN "body",
DROP COLUMN "title",
ADD COLUMN     "contact" TEXT,
ADD COLUMN     "interested_studies" TEXT,
ADD COLUMN     "studyTime" TEXT,
ADD COLUMN     "studytype" TEXT;
