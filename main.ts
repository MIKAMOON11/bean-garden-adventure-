namespace SpriteKind {
    export const bee = SpriteKind.create()
    export const ShopKeeper = SpriteKind.create()
}
function Bee_Swarm () {
    Bee1 = sprites.create(img`
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
    Bee2 = sprites.create(img`
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
    Bee3 = sprites.create(img`
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
    mySprite2 = sprites.create(img`
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
    mySprite3 = sprites.create(img`
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
    mySprite4 = sprites.create(img`
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
    mySprite5 = sprites.create(img`
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
    mySprite6 = sprites.create(img`
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
    mySprite7 = sprites.create(img`
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
    mySprite8 = sprites.create(img`
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
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
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
        . . . . . . . . . . . . . . . . 
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
info.onScore(60, function () {
    info.setScore(0)
    game.splash("Quest 1", "COMPLETED")
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    game.splash("QUEST 2", "Talk to the bee's so they can pollinate your garden!")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
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
        . . . . . . . . . . . . . . . . 
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
        . . . . . . . . . . . . . . . . 
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
        . . . . . . . . . . . . . . . . 
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
            `, SpriteKind.ShopKeeper)
        tiles.placeOnRandomTile(mySprite9, assets.tile`myTile46`)
    }
})
let mySprite9: Sprite = null
let QueenBee: Sprite = null
let InventoryVisible = false
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
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
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
game.splash("Quest 1", "Finish the tutorial")
game.showLongText("How to play, Use button, B to tow the ground below you!", DialogLayout.Bottom)
game.showLongText("And use the button A, to pick weeds!", DialogLayout.Bottom)
