/*
  Warnings:

  - Added the required column `checkType` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CheckType" AS ENUM ('MANUAL', 'AUTOMATED', 'VERIFIED');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "checkType" "CheckType" NOT NULL;
