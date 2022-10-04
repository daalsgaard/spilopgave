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
            case "level1":return tiles.createTilemap(hex`10001000070707070707070206070707070707070702060702060701040702060702060707010407030507070707030507010407070707070305070206070305070707070702060701040701040701040702060707010407070707070707070707010407070707070206070206070206070707070702060703050703050701040702060707010407030507030507070707010407070707070104070104070909070707070702060707070707070707070702060707010407020607020607020607010407070707070305070305070104070707070a0a0a070305070305070707070206070a0a0a070104080104070707070104070a0a0a07070707070707090907070707`, img`
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
. . . . 2 2 . 2 2 . 2 2 . 2 2 . 
. . . . . . . . . . 2 2 . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
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
