set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."characters" (
	"characterId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"createdAt" timestamptz NOT NULL default now(),
  "imageUrl" TEXT NOT NULL,
	CONSTRAINT "characters_pk" PRIMARY KEY ("characterId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."moveCategories" (
	"moveCategoryId" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "moveCategories_pk" PRIMARY KEY ("moveCategoryId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."moves" (
	"moveId" serial NOT NULL,
	"characterId" integer NOT NULL,
	"moveCategoryId" integer NOT NULL,
	"name" TEXT NOT NULL,
	"input" TEXT NOT NULL,
	"moveType" TEXT NOT NULL,
	"damage" TEXT NOT NULL,
	"blockDamage" TEXT NOT NULL,
	"startUp" TEXT NOT NULL,
	"active" TEXT NOT NULL,
	"recover" TEXT NOT NULL,
	"blockAdv" TEXT NOT NULL,
	"hitAdv" TEXT NOT NULL,
	"cancel" TEXT NOT NULL,
	CONSTRAINT "moves_pk" PRIMARY KEY ("moveId")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "moves" ADD CONSTRAINT "moves_fk0" FOREIGN KEY ("characterId") REFERENCES "characters"("characterId");
ALTER TABLE "moves" ADD CONSTRAINT "moves_fk1" FOREIGN KEY ("moveCategoryId") REFERENCES "moveCategories"("moveCategoryId");
