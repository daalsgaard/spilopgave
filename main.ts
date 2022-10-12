namespace SpriteKind {
    export const player1 = SpriteKind.create()
    export const player2 = SpriteKind.create()
    export const Glas = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Glas, function (sprite, otherSprite) {
    info.setScore(0)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let eEnemy: Sprite = null
let dEnemy: Sprite = null
let Glas: Sprite = null
let Dåse: Sprite = null
let maxScore1 = 20
let maxScore = 70
tiles.setCurrentTilemap(tilemap`level1`)
info.startCountdown(30)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . f . f . f . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . f f . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, mySprite, 50, 50)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < maxScore; index++) {
    Dåse = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....ffffffffffff....
        ...fffff2222fffff...
        ...fffff2222fffff...
        ...fffff2222fffff...
        ...ffffffffffffff...
        ...f111f11111111f...
        ...f1f1f1f1f1f1ff...
        ...f111f1f1f1f11f...
        ...ff11f1f1f1ff1f...
        ...ff11f1f1f1ff1f...
        ...f1111111f1f11f...
        ...ffffffffffffff...
        ...ffffffffffffff...
        ....................
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(Dåse, sprites.castle.tileGrass1)
}
for (let index = 0; index < maxScore1; index++) {
    Glas = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ......99999999......
        .....9999999999.....
        ......99999999......
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Glas)
    tiles.placeOnRandomTile(Glas, sprites.castle.tileGrass3)
}
for (let index = 0; index < 4; index++) {
    dEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . 2 . 2 . 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . 2 2 . 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    dEnemy.follow(mySprite, 50)
}
for (let index = 0; index < 4; index++) {
    eEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    eEnemy.follow(mySprite, 50)
}
