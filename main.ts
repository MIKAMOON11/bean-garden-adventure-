namespace SpriteKind {
    export const bee = SpriteKind.create()
    export const ShopKeeper = SpriteKind.create()
}
function Bee_Swarm () {
    Bee1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    Bee2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    Bee3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . . . . 6 6 6 . . . . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e f f f . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . 4 4 4 e e e 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . 2 3 2 . . . . . . . . 
        . . . . . 3 . . . . . . . . . . 
        . . . . . 2 3 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 3 2 . . . . . . 
        . . . . . . . . . 3 . . . . . . 
        . . . . . . . 2 3 2 . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 2 3 2 . . . . . 
        . . . . . . . . . . 3 . . . . . 
        . . . . . . . . 2 3 2 . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . 2 3 2 . . . . . . . 
        . . . . . . 3 . . . . . . . . . 
        . . . . . . 2 3 2 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
info.onScore(60, function () {
    info.setScore(0)
    game.splash("Quest 1", "COMPLETED")
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    game.splash("QUEST 2", "Talk to the bee's so they can pollinate your garden!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
	
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . 2 3 2 . . . . . . . . 
        . . . . . 3 . . . . . . . . . . 
        . . . . . 2 3 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 3 2 . . . . . . 
        . . . . . . . . . 3 . . . . . . 
        . . . . . . . 2 3 2 . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 2 3 2 . . . . . 
        . . . . . . . . . . 3 . . . . . 
        . . . . . . . . 2 3 2 . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . 2 3 2 . . . . . . . 
        . . . . . . 3 . . . . . . . . . 
        . . . . . . 2 3 2 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
info.onCountdownEnd(function () {
    game.showLongText("Oh a imp, how funny what do you want", DialogLayout.Bottom)
    game.showLongText("Fine I'll send over my bees", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile1`) && controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile0`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level16`)
    }
})
function Open_Inventory () {
    InPauseScreen = true
    controller.moveSprite(mySprite, 0, 0)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    QueenBee = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ..........5.........
        .....ff..555..ff....
        ....f..f.565.f..f...
        .......f.555.f......
        ..66...eeeeeee...66.
        .666..e4444444e..666
        .6666.e1f4441fe.6666
        .6666.ef1444f1e.6666
        .66666e4444444e66666
        .6666efeeeeeeefe6666
        ..666efffffffffe666.
        ....e4efffffffe4e...
        ....e44eeeeeee44e...
        ....ee4444444444e...
        ....eee44444444ee...
        .....eeeeeeeeeee....
        ......fffffffff.....
        .......fffffff......
        ........fffff.......
        .........fff........
        ..........f.........
        ....................
        `, SpriteKind.bee)
    Bee_Swarm()
    Positions()
    game.setDialogFrame(img`
        ...cc......................cc....
        ..c55c..bbbb...bbbbb......c55c...
        .cb55bcbdddbbbbbdddbbbbbbcb55bc..
        b555555bbdddb111bdddb11db555555b.
        bb5555bbdbdb11111bdb1111bb5555bb.
        cb5555bcddd11111ddd11111cb5555bc.
        .c5bb5c1111d111d111d111ddc5bb5c..
        .cbbbbc111111111111111111cbbbbc..
        ..b11111111111111111111111d111bb.
        ..b111111111111111111111111d1bdb.
        ..bb11111111111111111111111dbddb.
        .bbdb1d11111111111111111111ddddb.
        .bdddd11111111111111111111d1bdbb.
        .bddbd11111111111111111111111bb..
        .bdb1d111111111111111111111111b..
        .bb111d11111111111111111111111b..
        ..b11111111111111111111111d111bb.
        ..b111111111111111111111111d1bdb.
        ..bb11111111111111111111111dbddb.
        .bbdb1d11111111111111111111ddddb.
        .bdddd11111111111111111111d1bdbb.
        .bddbd11111111111111111111111bb..
        .bdbb1111111111111111111111111b..
        .bbbd1111111111111111111111111b..
        ..bcc111111111111111111111dccdb..
        ..c55c111d111d111d111d1111c55cb..
        .cb55bcdd11111ddd11111dddcb55bc..
        b555555b11111bdb11111bdbb555555b.
        bb5555bbb111bdddb111bdddbb5555bb.
        cb5555bcdbbbbbdddbbbbbddcb5555bc.
        .c5bb5c.bb...bbbbb...bbbbc5bb5c..
        .cbbbbc..................cbbbbc..
        .................................
        `)
    info.startCountdown(5)
})
function tomato () {
    tiles.setTileAt(tiles.getTileLocation(1, 2), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(2, 2), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(1, 3), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(2, 3), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(0, 4), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(1, 4), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(2, 4), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(1, 5), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(2, 5), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(3, 5), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(0, 6), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(1, 6), assets.tile`myTile43`)
    tiles.setTileAt(tiles.getTileLocation(2, 6), assets.tile`myTile43`)
}
function Close_inventory () {
    InPauseScreen = false
    controller.moveSprite(mySprite)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
	
})
function potato () {
    tiles.setTileAt(tiles.getTileLocation(1, 2), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(2, 2), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(1, 3), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(2, 3), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(0, 4), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(1, 4), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(2, 4), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(1, 5), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(2, 5), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(3, 5), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(0, 6), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(1, 6), assets.tile`myTile48`)
    tiles.setTileAt(tiles.getTileLocation(2, 6), assets.tile`myTile48`)
}
function carrot () {
    tiles.setTileAt(tiles.getTileLocation(1, 2), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(2, 2), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(1, 3), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(2, 3), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(0, 4), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(1, 4), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(2, 4), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(1, 5), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(2, 5), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(3, 5), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(0, 6), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(1, 6), assets.tile`myTile49`)
    tiles.setTileAt(tiles.getTileLocation(2, 6), assets.tile`myTile49`)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (InPauseScreen) {
        Close_inventory()
    } else {
        Open_Inventory()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 3 3 
        . . . . . . . . . . . . . 3 . . 
        . . . . 3 2 3 2 3 2 3 2 3 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 2 3 . . 2 3 3 
        . . . . . . . . 2 . 2 . . 3 . . 
        . . . . . . 3 2 3 . 3 2 3 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 3 3 
        . . . . . . . . . . . . . 3 . . 
        . . . . 3 2 3 2 3 2 3 2 3 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 2 3 . . 2 3 3 
        . . . . . . . . 2 . 2 . . 3 . . 
        . . . . . . 3 2 3 . 3 2 3 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile0`) && controller.B.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile6`)
        info.changeScoreBy(1)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        3 3 2 . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . . . . 
        . . 2 3 2 3 2 3 2 3 2 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 2 3 . . 2 3 3 
        . . . . . . . . 2 . 2 . . 3 . . 
        . . . . . . 3 2 3 . 3 2 3 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 2 3 3 
        . . . . . . . . . . . . . 3 . . 
        . . . . 3 2 3 2 3 2 3 2 3 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 2 3 . . 2 3 3 
        . . . . . . . . 2 . 2 . . 3 . . 
        . . . . . . 3 2 3 . 3 2 3 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ShopKeeper, function (sprite, otherSprite) {
    game.splash("QUEST 3", "Get seeds!")
    game.setDialogFrame(img`
        8888.....88....888....88.88....888....888...8888
        867788..8768..86768..8678768..86768..8678.887768
        8767768.8777886767688777877788676768877788677678
        877677686767787767787767676778776778776786776778
        .8778766677678776778767767767877677876778678778.
        .8677866867668676768667686766867676866766687768.
        ..86668688676886868867688867688686886768686668..
        .888666888888888888888888888888888888888866688..
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87768866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87766866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        ..886668888888888888888888888888888888888666888.
        ..86668686768868688676888676886868867688686668..
        .8677866676686767686676867668676768667686687768.
        .8778768776787767787677677678776778767766678778.
        877677687677877677877676767787767787767686776778
        8767768877788676768877787778867676887778.8677678
        867788.8768..86768..8678768..86768..8678..887768
        8888...888....888....88.88....888....88.....8888
        `)
    game.showLongText("So its seeds you want eh, well which ones?", DialogLayout.Bottom)
    game.showLongText("They all cost tent pincions so you can only get one.", DialogLayout.Bottom)
    story.showPlayerChoices("🥔 potato 🥔 ", "🥕 carrot 🥕 ", "🍅 tomato 🍅 ")
    if (story.checkLastAnswer("🥔 potato 🥔 ")) {
        game.showLongText("Okay well I will get those planted in for you.", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level5`)
        carrot()
        sprites.destroyAllSpritesOfKind(SpriteKind.ShopKeeper)
    } else if (story.checkLastAnswer("🥕 carrot 🥕 ")) {
        game.showLongText("Okay, see you after I've planted them in.", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level5`)
        potato()
        sprites.destroyAllSpritesOfKind(SpriteKind.ShopKeeper)
    } else if (story.checkLastAnswer("🍅 tomato 🍅 ")) {
        game.showLongText("Kay go back to look at your plants!", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level5`)
        tomato()
        sprites.destroyAllSpritesOfKind(SpriteKind.ShopKeeper)
    }
    game.splash("QUEST 3 COMPLETED")
})
function Positions () {
    tiles.placeOnRandomTile(Bee1, assets.tile`myTile19`)
    tiles.placeOnRandomTile(Bee2, assets.tile`myTile20`)
    tiles.placeOnRandomTile(Bee3, assets.tile`myTile21`)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile22`)
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile23`)
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile24`)
    tiles.placeOnRandomTile(mySprite5, assets.tile`myTile25`)
    tiles.placeOnRandomTile(mySprite6, assets.tile`myTile26`)
    tiles.placeOnRandomTile(mySprite7, assets.tile`myTile27`)
    tiles.placeOnRandomTile(mySprite8, assets.tile`myTile28`)
    tiles.placeOnRandomTile(QueenBee, assets.tile`myTile16`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.setTileAt(tiles.getTileLocation(1, 1), assets.tile`myTile10`)
    sprites.destroyAllSpritesOfKind(SpriteKind.bee)
    game.splash("QUEST 2", "COMPLETED")
    game.showLongText("Now that you have a complete garden and skills why don't you get seeds! ", DialogLayout.Bottom)
    game.splash("QUEST 3", "Find Mr. fox.")
    game.splash("Press ^ to open the door.", "Mr. fox will be hidden.")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    if (controller.up.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level9`)
        mySprite9 = sprites.create(img`
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . e e . e e . . . 
            . . . . . . e 4 4 4 e . . . 
            . . 4 4 4 4 4 4 4 4 4 . . . 
            d d 4 4 4 4 1 e 4 e 1 . . . 
            d d 4 4 4 4 d d e d d . . . 
            . . f . . . f . f . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            `, SpriteKind.ShopKeeper)
        tiles.placeOnRandomTile(mySprite9, assets.tile`myTile46`)
    }
})
let mySprite9: Sprite = null
let QueenBee: Sprite = null
let InPauseScreen = false
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let Bee3: Sprite = null
let Bee2: Sprite = null
let Bee1: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
info.setLife(3)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 3 2 3 2 . . . . . . 
    . . . . . 3 . . . 3 . 3 3 . . . 
    . . . . . 2 . . . 2 . 2 . . . . 
    . . . . 2 3 . . . 3 2 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
game.setDialogFrame(img`
    ..ccccc....333.....333...ccccc...
    .cf3f33c..34443...34443.c33f33c..
    cfb33f3fc34444433344444c3fff3b3c.
    c33b3333c44111444441114c3f33b3fc.
    cf33b3ffc41444144414441cf33b33bc.
    c3f33bffc1444441114444bcfff33f3c.
    c333fffc1411111444111111bff3fbfc.
    .cf3ffc111111111111111111bff33c..
    ..cccc11111111111111111111cccc...
    .3441411111111111111111111b443...
    3441441111111111111111111141443..
    34414411111111111111111111441443.
    34414411111111111111111111441443.
    .3441411111111111111111111441443.
    ..34414111111111111111111141443..
    ..3441411111111111111111141443...
    ..3441411111111111111111141443...
    .34414111111111111111111141443...
    3441441111111111111111111141443..
    34414411111111111111111111444443.
    34414411111111111111111111444443.
    .3441411111111111111111111444443.
    ..644b11111111111111111111b1443..
    ..cccc11111111111111111111cccc...
    .cf3ffc111111111111111111cff33c..
    c333fffc1f11114441111111cfff3f3c.
    c3f33fffcb444411144444bcfff3333c.
    cf33bfffc14441444144414cf33b3f3c.
    c33b3f3fc41114444411144c3f33b3fc.
    cbb333f3c44444333444443cf33f3b3c.
    .cb3f33c.34443...34443..c3f333c..
    ..ccccc...333.....333....ccccc...
    .................................
    `)
game.splash("Quest 1", "Finish the tutorial")
game.showLongText("How to play, Use button, B to tow the ground below you!", DialogLayout.Bottom)
game.showLongText("And use the button A, to pick weeds!", DialogLayout.Bottom)
