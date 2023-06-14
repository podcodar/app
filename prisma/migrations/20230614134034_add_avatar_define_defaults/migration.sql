-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT NOT NULL DEFAULT '/images/default-user.svg',
ALTER COLUMN "roles" SET DEFAULT ARRAY['USER']::"Roles"[];
