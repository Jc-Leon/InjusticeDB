insert into "characters" ("name","imageUrl")
values ('Aquaman','/images/characters/aquaman.png'),( 'Atom','/images/characters/atom.png'),( 'Atrocitus','/images/characters/atrocitus.png'),('Bane','/images/characters/bane.png'),( 'Batman','/images/characters/batman.png'),( 'Black Adam','/images/characters/blackadam.png'),( 'Black Canary','/images/characters/blackcanary.png'),( 'Black Manta','/images/characters/blackmanta.png'),( 'Blue Beetle','/images/characters/bluebeetle.png'),( 'Brainiac','/images/characters/brainiac.png'),( 'Captain Cold','/images/characters/captaincold.png'),( 'Catwoman','/images/characters/catwoman.png'),( 'Cheetah','/images/characters/cheetah.png'),( 'Cyborg','/images/characters/cyborg.png'),( 'Darkseid','/images/characters/darkseid.png'),( 'Deadshot','/images/characters/deadshot.png'),( 'Doctor Fate','/images/characters/doctorfate.png'),( 'Enchantress','/images/characters/enchantress.png'),( 'Firestorm','/images/characters/firestorm.png'),( 'Flash','/images/characters/flash.png'),( 'Gorilla Grodd','/images/characters/gorillagrodd.png'),('Green Arrow','/images/characters/greenarrow.png'),( 'Green Lantern','/images/characters/greenlantern.png'),( 'Harley Quinn','/images/characters/harleyquinn.png'),( 'Hellboy','/images/characters/hellboy.png'),( 'Joker','/images/characters/joker.png'),( 'Poison Ivy','/images/characters/poisonivy.png'),('Raiden','/images/characters/raiden.png'),( 'Red Hood','/images/characters/redhood.png'),( 'Robin','/images/characters/robin.png'),( 'Scarecrow','/images/characters/scarecrow.png'),( 'Starfire','/images/characters/starfire.png'),( 'Subzero','/images/characters/subzero.png'),( 'Supergirl','/images/characters/supergirl.png'),( 'Superman','/images/characters/superman.png'),( 'Swamp Thing','/images/characters/swampthing.png'),( 'TMNT','/images/characters/tmnt.png'),( 'Wonder Woman','/images/characters/wonderwoman.png')
returning *;

insert into "moves" ("characterId", "moveCategoryId", "name", "input", "moveType", "damage","blockDamage", "startUp", "active","recover","blockAdv", "hitAdv","cancel" )
values ('','','','','','','','',''.'','','','')
returning *;

select "characters"."name" as "characterName","characters"."imageUrl" as "characterImage", json_agg("moves")
  from "characters"
  join "moves" using ("characterId")
  join "moveCategories" using ("moveCategoryId")
where "characterId" = 35
group by "characterId"
