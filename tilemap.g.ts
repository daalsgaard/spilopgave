// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003010101010101040401020101010103010404010404010404020404010404010104040104040101020104040204040101010101040401040401040401010101010404010404010404010404010404020104040101010101020101010104040101020101040401040401040401010101010404020404010404020404010404010104040104040104040101010104040201010101040401040401040401010101010404010101010101010101010404010104040104040104040104040104040101010101040401040401040402010101010404010404010404010102010404010101010104040204040101010104040103010101010101010101040401010103`, img`
. . . . . . . 2 2 . . . . . . . 
. 2 2 . 2 2 . 2 2 . 2 2 . 2 2 . 
. 2 2 . 2 2 . . . . 2 2 . 2 2 . 
. . . . 2 2 . 2 2 . 2 2 . . . . 
. 2 2 . 2 2 . 2 2 . 2 2 . 2 2 . 
. 2 2 . . . . . . . . . . 2 2 . 
. . . . 2 2 . 2 2 . 2 2 . . . . 
. 2 2 . 2 2 . 2 2 . 2 2 . 2 2 . 
. 2 2 . 2 2 . 2 2 . . . . 2 2 . 
. . . . 2 2 . 2 2 . 2 2 . . . . 
. 2 2 . . . . . . . . . . 2 2 . 
. 2 2 . 2 2 . 2 2 . 2 2 . 2 2 . 
. . . . 2 2 . 2 2 . 2 2 . . . . 
. . . . 2 2 . 2 2 . . . . 2 2 . 
. . . . 2 2 . 2 2 . . . . 2 2 . 
. . . . . . . . . . 2 2 . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.swamp.swampTile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
