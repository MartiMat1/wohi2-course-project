/*
  Warnings:

  - You are about to drop the column `correct` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `questions` ADD COLUMN `correct` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `correct`;
