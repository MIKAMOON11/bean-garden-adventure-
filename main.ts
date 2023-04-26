namespace SpriteKind {
    export const bee = SpriteKind.create()
    export const ShopKeeper = SpriteKind.create()
}
function Bee_Swarm () {
    Bee1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    Bee2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    Bee3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    mySprite8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 f f . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . 4 4 4 e e e 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
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
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 2 3 2 . . . . . . 
        . . . . . . . . . 3 . . . . . . 
        . . . . . . . 2 3 2 . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . 2 3 2 . . . . . . . . 
        . . . . . 3 . . . . . . . . . . 
        . . . . . 2 3 2 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . 2 3 2 . . . . . . . 
        . . . . . . 3 . . . . . . . . . 
        . . . . . . 2 3 2 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 2 3 2 . . . . . 
        . . . . . . . . . . 3 . . . . . 
        . . . . . . . . 2 3 2 . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
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
info.onCountdownEnd(function () {
    game.setDialogFrame(img`
        777777777777777777777777
        7dddddddddddddddddddddd7
        7d77777777777777777777d7
        777777777777777777777777
        676dd67777777777776dd676
        676776777777777777677676
        676666777777777777666676
        677777777777777777777776
        677777777777777777777776
        677777777777777777777776
        677777777777777777777776
        677777777777777777777776
        677777777777777777777776
        677777777777777777777776
        677777777777777777777776
        677777777777777777777776
        677777777777777777777776
        677777777777777777777776
        676dd67777777777776dd676
        676776777777777777677676
        676666777777777777666676
        667777777777777777777766
        666666666666666666666666
        666666666666666666666666
        `)
    game.showLongText("Oh a imp, how funny what do you want", DialogLayout.Bottom)
    game.showLongText("Fine I'll send over my bees", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    if (controller.up.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level9`)
        mySprite9 = sprites.create(img`
            . . . . . . 7 . 7 . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . 6 f 6 6 6 6 6 6 6 f 6 . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . . 6 6 6 6 6 6 6 . . . . . 
            . . . . . 6 . . . 6 . . . . . . 
            . . . . . 6 . . . 6 . . . . . . 
            . . . . 6 6 . . . 6 6 . . . . . 
            `, SpriteKind.ShopKeeper)
        tiles.placeOnRandomTile(mySprite9, assets.tile`myTile46`)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . . . . 3 . . . . 
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    selectedIndex = Math.max(selectedIndex - 1, 0)
})
function Open_Inventory () {
    InventoryVisible = true
    controller.moveSprite(mySprite, 0, 0)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    QueenBee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bee)
    Bee_Swarm()
    Positions()
    game.setDialogFrame(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
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
    InventoryVisible = false
    controller.moveSprite(mySprite)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    let list: number[] = []
    selectedIndex = Math.max(selectedIndex + 1, list.length - 1)
})
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
    if (InventoryVisible) {
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
        . . . . . . . . . . . . . . . . 
        . . 3 3 2 3 2 3 2 3 2 3 2 3 . . 
        . . . . . . . . . . . . . . . . 
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
        . . . . 3 2 3 . 3 2 3 . . . . . 
        . . 3 3 2 . 2 3 2 . 2 3 . . . . 
        . . . . . . . . . . . . . . . . 
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
        . . . . . . . . . . . . . . . . 
        . . 3 3 2 3 2 3 2 3 2 3 2 3 . . 
        . . . . . . . . . . . . . . . . 
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
        . . . . 3 2 3 . 3 2 3 . . . . . 
        . . 3 3 2 . 2 3 2 . 2 3 . . . . 
        . . . . . . . . . . . . . . . . 
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
        8888.....88....888....888...8888.
        867788..8768..86768..8678.887768.
        8767768.877788676768877788677678.
        87767768676778776778776786776778.
        .877876667767877677876778678778..
        .867786686766867676866766687768..
        ..8666868867688686886768686668...
        .88866688888888888888888866688...
        8777768866666666666666668886688..
        86767768666666666666666688677778.
        .8776678666666666666666686776768.
        ..87766866666666666666668766778..
        ..8888886666666666666666866778...
        .86776886666666666666666888888...
        8677776866666666666666668867768..
        87666688666666666666666686777768.
        86777768666666666666666688666678.
        .8677688666666666666666686777768.
        ..88888866666666666666668867768..
        ..8776686666666666666666888888...
        .87766786666666666666666866778...
        8676776866666666666666668766778..
        87777688666666666666666686776768.
        .8866888666666666666666688677778.
        ..88666888888888888888888666888..
        ..8666868676886868867688686668...
        .867786667668676768667686687768..
        .877876877678776778767766678778..
        87767768767787767787767686776778.
        876776887778867676887778.8677678.
        867788.8768..86768..8678..887768.
        8888...888....888....88.....8888.
        .................................
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
        . . . . . . . . . . . . . . . . 
        . . 3 2 3 2 3 2 3 2 3 2 3 3 . . 
        . . . . . . . . . . . . . . . . 
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
        . . . . . 3 2 3 . 3 2 3 . . . . 
        . . . . 3 2 . 2 3 2 . 2 3 3 . . 
        . . . . . . . . . . . . . . . . 
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
        . . . . . . . . . . . . . . . . 
        . . 3 2 3 2 3 2 3 2 3 2 3 3 . . 
        . . . . . . . . . . . . . . . . 
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
        . . . . . 3 2 3 . 3 2 3 . . . . 
        . . . . 3 2 . 2 3 2 . 2 3 3 . . 
        . . . . . . . . . . . . . . . . 
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
spriteutils.createRenderable(100, function (screen2) {
    if (InventoryVisible) {
        screen2.fillRect(10, 10, 140, 100, 13)
        screen2.drawRect(10, 10, 140, 100, 14)
        images.print(screen2, "INVENTORY", 14, 14, 1)
        screen2.fillRect(14, 24, 132, 1, 14)
        tooltop = 28
        selectedIndex = 0
        for (let index = 0; index <= tools.length - 1; index++) {
            spriteutils.drawTransparentImage(tools[index], screen2, 14 + index * 20, tooltop)
        }
        spriteutils.drawTransparentImage(assets.image`selector`, screen2, 14 + selectedIndex * 20 - 2, tooltop - 2)
    }
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
let tooltop = 0
let QueenBee: Sprite = null
let InventoryVisible = false
let selectedIndex = 0
let mySprite9: Sprite = null
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
let tools: Image[] = []
let mySprite: Sprite = null
info.setScore(0)
info.setLife(3)
spriteutils.setLifeImage(img`
    . . . 5 . . . 
    . . 7 5 7 . . 
    . . 7 7 7 5 . 
    . . . 7 6 5 6 
    5 . . 7 6 6 6 
    5 7 . 7 . 6 . 
    7 7 . 7 . 6 . 
    7 . . 7 . 6 . 
    `)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 3 2 3 . . 2 3 2 . 2 3 3 . . . 
    . 2 . 2 . . 3 . 3 . 3 . . . . . 
    . 3 . 3 2 3 2 . 2 3 2 . . . . . 
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
    ..44244224422442244444..
    .4554255425542554244554.
    255554255425542554255552
    255554422442244224455552
    24554dddddddddddddd45542
    4424dddddddddddddddd4424
    4244dddddddddddddddd4254
    2452dddddddddddddddd2552
    2552dddddddddddddddd2542
    4524dddddddddddddddd4424
    4244dddddddddddddddd4254
    2452dddddddddddddddd2552
    2552dddddddddddddddd2542
    4524dddddddddddddddd4424
    4244dddddddddddddddd4254
    2452dddddddddddddddd2552
    2552dddddddddddddddd2542
    4524dddddddddddddddd4424
    4244dddddddddddddddd4244
    24554dddddddddddddd45542
    255554422442244224455552
    255552455245524552455552
    .2554424552455245524552.
    ..22244224422442244222..
    `)
game.splash("Quest 1", "Finish the tutorial")
game.showLongText("How to play, Use button, B to tow the ground below you!", DialogLayout.Bottom)
game.showLongText("And use the button A, to pick weeds!", DialogLayout.Bottom)
tools = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 4 4 4 4 
    . . . . 4 4 4 4 4 4 . . . e e . 
    . . 4 4 e e e e e e 4 . 4 4 . . 
    . 4 . 4 4 4 4 4 4 4 4 4 4 . . . 
    4 . . 4 4 4 4 4 4 4 4 e . . . . 
    4 . . 4 4 4 4 4 4 4 4 . . . . . 
    4 . . 4 4 4 4 4 4 4 4 . . . . . 
    e . . 4 4 4 4 4 4 4 4 . . . . . 
    . e . e 4 4 4 4 4 4 4 . . . . . 
    . . e e e e e e e e 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . e . . . . . . . . . . . . . 
    . . e e . . . . . . . . . . . . 
    . . . e e . . . . . . . . . . . 
    . . . . e e . . . . . . . . . . 
    . . . . . e e . . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . . e 4 . . b . . . . 
    . . . . . . . . 4 4 b b b . . . 
    . . . . . . . . . b b b b b . . 
    . . . . . . . . b b b b b b b . 
    . . . . . . . . . b b b b b b . 
    . . . . . . . . . . b b b b b . 
    . . . . . . . . . . . b b b b . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . b . . . . . . . . . . . . 
    . . . b . . . . . . . . . . . . 
    . . b b . . . . . . . . . . . . 
    . . b . . . . . . . . . . . . . 
    . b b 4 . . . . . . . . . . . . 
    . b b e 4 . . . . . . . . . . . 
    . . . . e 4 . . . . . . . . . . 
    . . . . . e 4 . . . . . . . . . 
    . . . . . . e 4 . . . . . . . . 
    . . . . . . . e 4 . . . . . . . 
    . . . . . . . . e 4 . . . . . . 
    . . . . . . . . . e 4 . . . . . 
    . . . . . . . . . . e 4 . . . . 
    . . . . . . . . . . . e 4 . . . 
    . . . . . . . . . . . . e 4 . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
