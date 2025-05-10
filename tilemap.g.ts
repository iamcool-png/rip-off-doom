// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010606060606060606060606060606010106060606060606060606060606060101060606020306060606060506060601010606060603060606060606060606010106060606060606060606060605060101060606060606060606060606060601010606060606050606060606060606010106060604040404060606060606060101060606060606060606060606060601010606060606060606060606060606010106060606060606060606060606060101060606060605060402030506060601010606060606060302040206060606010106060606060606030306060606060101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 2 . . . . . 2 . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . 2 2 2 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 . 2 2 2 2 . . . 2 
2 . . . . . . 2 2 2 2 . . . . 2 
2 . . . . . . . 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.rock0,sprites.castle.rock2,sprites.castle.rock1,sprites.castle.saplingPine,sprites.castle.tilePath5], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100003020b02070207030303030b020202020301010101010101010101010101010203010d010101010101010101010101090a010101010101010101010c01010106020101010c01010d0101010101010103020101010101010101010101010101030a01010101010101010101010101010302010101010101010101010101010103050101010101010101010101010d01020201010101010101010101010101010202010101010101010101010101010109020101010101010101010101010101030301010d01010d0d01010101010101060a01010101010d0d01010101010101030301010101010101010101010101010303020202040203080302080204020203`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 . . 2 2 . . . . . . . 2 
2 . . . . . 2 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedEast,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorLockedSouth,sprites.dungeon.doorLockedEast,sprites.dungeon.doorLockedWest,sprites.dungeon.doorLockedNorth,sprites.swamp.swampTile2,sprites.builtin.forestTiles22], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
