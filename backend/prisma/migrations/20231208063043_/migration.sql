/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `access_token` TEXT NULL,
    MODIFY `refresh_token` TEXT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_id_key` ON `users`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);
