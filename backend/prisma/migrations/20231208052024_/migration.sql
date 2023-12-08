/*
  Warnings:

  - You are about to drop the column `token` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `token`,
    ADD COLUMN `access_token` VARCHAR(100) NULL,
    ADD COLUMN `refresh_token` VARCHAR(100) NULL;
