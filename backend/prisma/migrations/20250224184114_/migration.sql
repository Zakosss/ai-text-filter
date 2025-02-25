-- CreateTable
CREATE TABLE "word" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "explicit" BOOLEAN NOT NULL,
    "explicitScore" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "word_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "word_word_key" ON "word"("word");
