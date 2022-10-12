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
            case "level1":return tiles.createTilemap(hex`100010000a07070707070702060708070707070a070206070206070104080206070206070701040703050707080703050801040707070707030507020607030507070707070206070104070104070104070206080701040707070707080707070701040707080707020607020607020607070707070206080305070305080104070206070701040703050703050707070701040807070707010407010407090907070707070b0b07070707070707070707020607070b0b070206070206070206070104070707070703050703050701040807070707070807030507030507070807020607070707070104080104070707070104070a07070707070707070709090707070a`, img`
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
`, [myTiles.transparency16,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tileGrass2,sprites.swamp.swampTile1], TileScale.Sixteen);
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
