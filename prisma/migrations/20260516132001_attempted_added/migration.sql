/*
  Warnings:

  - You are about to drop the column `correct` on the `questions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `attempts` ADD COLUMN `correct` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `questions` DROP COLUMN `correct`;
