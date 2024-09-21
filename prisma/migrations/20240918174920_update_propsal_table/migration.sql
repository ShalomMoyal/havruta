/*
  Warnings:

  - You are about to drop the column `sessionId` on the `Proposal` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Proposal` table. All the data in the column will be lost.
  - Added the required column `createdById` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_userId_fkey";

-- AlterTable
ALTER TABLE "Proposal" DROP COLUMN "sessionId",
DROP COLUMN "userId",
ADD COLUMN     "createdById" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
