let onTitle = false
let onHub = false
let onLv1 = false
let onLv2 = false
let onLv3 = false
let inHub = false
let pressStart = sprites.create(img`
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
`)

titleScreen()

function titleScreen() {
    onTitle = true

    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffff
        ffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffff
        ffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffff
        ffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555fffffffffff
        ffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffff5555fffffffffff
        ffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffff5555fffffffffffffffffffffff555ffffffffffff
        ffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffff5555fffffffffffffffffffffff555ffffffffffff
        ffffff55555fffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffff5555fffffffffffffffffffffff5555ffffffffffff
        ffffff555555fffffffffffffffffffffffffffffff22222222ffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffff55555ffffffffffffffffffffff55555ffffffffffff
        ffffffff55555ffffffffffffffffff22222222222222222222fffffffffffffffffffffffffffff22222ffffffffffffffff22222ffffffffff5555fffffffffffffffffffffff5555fffffffffffff
        fffffffff55555ffffffffffffff22222222222222222222222fffffffffffffffffffffffffffff22222ffffffffffffffff22222fffffffff5555ffffffffffffffffffffffff555ffffffffffffff
        ffffffffff55552222222222222222222222222222222222222ffffffffff22222ffffffffffffff222222fffffffffffffff22222ffffffff55555fffffffffffffffffffffff5555ffffffffffffff
        fffffffffff5552222222222222222222222222222222222222ffffffffff222222fffffffffffff222222fffffffffffffff22222ffffffff5555ffffffffffffffffffffffff5555ffffffffffffff
        fffffffffff222222222222222222222222222222222222ffffffffffffff222222fffffffffffff2222222ffffffffffffff222222ffffff5555ffffffff2222222ffffffffff555fffffffffffffff
        fffffffffff2222222222222222222222222fffffffffffffffffffffffff222222fffffffffffff2222222ffffffffffffff222222ffffff5555fffffff22222222222222222f555fffffffffffffff
        ffffffffff222222222222222222222222fffffffffffffffffffffffffff222222ffffffffffffff222222ffffffffffffff222222fffff5555fffffff2222222222222222222ffffffffffffffffff
        ffffffffff22222222fffffffffff22222ffffffffffffffffffffffffffff22222ffffffffffffff222222ffffffffffffff222222fffff5555fffffff22222222222222222222fffffffffffffffff
        ffffffffff2222222ffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffff22222ffff5555fffffff2222222222222222222222ffffffffffffffff
        ffffffffff222222fffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffff22222ffff5555fffffff2222222222222222222222ffffffffffffffff
        ffffffffff22222ff555fffffffff22222fffffffffffffffffffffffffffffffffffffffffffffff222222fffffffffffffff22222ffff555fffffff22222222ffffffff2222222ffffffffffffffff
        fffffffffffffffff555fffffffff222222ffffffffffffffffffffffffffffffffffffffffffffff22222222222222fffffff222222ff5555fffffff2222222ffffffffff222222ffffffffffffffff
        fffffffffffffffff5555ffffffff222222ffffffffffffffffffffffffffff22222ffffffffff22222222222222222fffffff222222ff5555fffffff22222222222222222222222ffffffffffffffff
        fffffffffffffffff5555ffffffff222222ffffffffffffffffffffffffffff22222fffffffff222222222222222222fffffff222222ff555ffffffff22222222222222222222222ffffffffffffffff
        fffffffffffffffff555555ffffff222222ffffffffffffffffffffffffffff22222ffffffff2222222222222222222fffffff222222f5555ffffffff22222222222222222222222ffffffffffffffff
        ffffffffffffffffff555555ffffff22222ffffffffffffffffffffffffffff22222fffffff22222222222222222222ffffffff2222255555ffffffff22222222222222222222222ffffffffffffffff
        fffffffffffffffffff555555fffff22222fffffffffffffffffffffffffff222222ffffff22222222222222222222fffffffff222255555fffffffff222222222222222222222ffffffffffffffffff
        ffffffffffffffffffff55555fffff22222fffffffffffffffffffffffff22222222fffff222222222222ffffffffffffffffff22225555ffffffffff222222fffffffffffffffffffffffffffffffff
        fffffffffffffffffffff5555fffff22222ffffffffffffffffffffffff222222222fffff222222222222ffffffffffffffffff22225555ffffffffff222222fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff5555ffff22222fffffffffffffffffffffff2222222222fffff222222222222ffffffffffffffffff2222555fffffffffff222222fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff5555ffff22222ffffffffffffffffffffff2222222222ffffff222222f22222ffffffffffffffffff22222fffffffffffff222222fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff55555ff222222ffffffffffffffffffff22222222222fffffff222222f22222ffffffffffffffffff22222ffffffffffffff222222ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff5555f2222222fffffffffffffffffff22222222222fffffffffffffff22222ffffffffffffffffff22222ffffffffffffff222222ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff555f2222222fffffffffffffffffff2222222222ffffffffffffffff22222ffffffffffffffffff22222ffffffffffffff222222ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff55522222222fffffffffffffffffff222222222fffffffffffffffff22222ffffffffffffffffff22222ffffffffffffff222222ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff2222222fffffffffffffffffff22222222fffffffffffffffffff22222fffffffffffffff55522222fffffffffffffff222222fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff2222222555ffffffffffffffff2222222ffffffffffffffffffff22222fffffffffffffff55522222fffffffffffffff222222fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff222222f55555fffffffffffff2222222fffffffffffffffffffff22222fffffffffffffff55522222fffffffffffffff2222222ffffffff22222fffffffffffffffff
        fffffffffffffffffffffffffff222222f555555ffffffffffff2222222fffffffffffffffffffff22222ffffffffffffff5555222222ffffffffffffff2222222222fff2222222fffffffffffffffff
        fffffffffffffffffffffffffff22222fff55555ffffffffffff222222ffffffffffffffffffffff22222ffffffffffffff5555222222fffffffffffffff2222222222222222222fffffffffffffffff
        fffffffffffffffffffffffffff222222fff55555fffffffffff222222ffffffffffffffffffffff22222fffffffffffff5555f2222222f222222fffffff2222222222222222222fffffffffffffffff
        fffffffffffffffffffffffffff222222ffff55555ffffffffff222222ffffffffffffffffffffff222222fffffffffff55555f22222222222222fffffff2222222222222222222fffffffffffffffff
        fffffffffffffffffffffffffff222222fffff5555ffffffffff22222fffffffffffffffffffffff222222fffffffffff5555fff2222222222222fffffffff22222222222222222fffffffffffffffff
        fffffffffffffffffffffffffff222222ffffff5555fffffffff22222fffffffffffffffffffffff222222fffffffffff555ffff2222222222222ffffffffffff22222222222ffffffffffffffffffff
        fffffffffffffffffffffffffff2222222fffff55555ffffffff22222fffffffffffffffffffffff222222fffffffffff555ffff2222222222222fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff222222ffffff5555ffffffff22222ffffffffffffffffffffffff22222ffffffffff5555ffffff222222222fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff222222fffffff5555fffffff22222fffffffffffffffffffffffffffffffffffffff5555fffffff2222222fffffffffffffffffff555ffffffffffffffffffffffff
        ffffffffffffffffffffffffffff222222fffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff
        ffffffffffffffffffffffffffff222222ffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff555f55555fffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff55555ff5555fffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff5555555fff5555fffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff5555555ffff55555ffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffff
        fffffffffffffffffffffffffffffffff5555555fffffff55555fffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffff
        fffffffffffffffffffffffffffffff5555555ffffffffff5555fffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffff
        ffffffffffffffffffffffffffffff5555555ffffffffffff555fffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffff
        ffffffffffffffffffffffffffff5555555ffffffffffffff5555ffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffff
        ffffffffffffffffffffffffff5555555ffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffff
        fffffffffffffffffffffffff5555555ffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffff
        fffffffffffffffffffffff5555555ffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffff
        ffffffffffffffffffffff555555fffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffff
        ffffffffffffffffffff5555555fffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
        ffffffffffffffffff5555555fffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffff
        fffffffffffffffff5555555fffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffff
        fffffffffffffff5555555ffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffff
        fffffffffffff5555555ffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffff
        fffffffffff55555555ffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffff5555fffffffffffffffff
        fffffffffff555555ffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffff5555fffffffffffffffff
        fffffffffff5555fffffffffffffffffffffffffffffffffffffffff5555ffffffffffff55555ffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffff55555fffffffffffffffff
        fffffffffff55555ffffffffffffffffffffffffffffffffffffffff5555ffffffffff5555555fffffffffffffffffffff5555fffffffffffffffffffffffffffffffffff555555fffffffffffffffff
        ffffffffffff5555fffffffffffffffffffffffffffffffffffffffff5555fffffff555555555fffffffffffffffffffff5555ffffffffffffffffffffffffffffffffff555555ffffffffffffffffff
        fffffffffffff5555ffffffffffffffffffffffffffffffffffffffff55555ffff555555555555fffffffffffffffffffff5555ffffffffffffffffffffffffffffffff55555ffffffffffffffffffff
        fffffffffffff55555ffffffffffffffffffffffffffffffffffffffff5555ff55555555ff5555fffffffffffffffffffff5555fffffffffffffffffffffffffffffff55555fffffffffffffffffffff
        ffffffffffffff5555fffffffffffffffffffffffffffffffffffffffff55555555555fffff555ffffffffffffffffffffff5555fffffffffffffffffffffffffffff55555ffffffffffffffffffffff
        fffffffffffffff5555ffffffffffffffffffffffffffffffffffffffff555555555fffffff5555ffffffffffffffffff5555555fffffffffffffffffffffffffffff55555ffffffffffffffffffffff
        fffffffffffffff5555fffffffffffffffffffffffffffffffffffffffff555555fffffffff5555ffffffffffffffff555555555fffffffffffffffffffffffffffff55555ffffffffffffffffffffff
        ffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffff555ffffffffffff5555fffffffffffff555555555fffffffffffffffffffffffffffffff555555fffffffffffffffffffff
        ffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffff555ffffffffffff5555fffffffffff55555555ffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffff
        fffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffff55555555fffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffff
        fffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffff55555555ffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffff
        ffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffff55555555ffffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffff
        ffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555f55555555fffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffff
        fffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffff
        fffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555ffffffffffffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffff
        ffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffff
        ffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffff
        fffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffff
        fffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffff5555555ff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffff
        ffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffff555555ffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffff
        ffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffff555555ffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555fffffffffffff
        fffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffff5555555ffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555fffffffffffff
        fffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffff55555555fffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffff555f5555ffffffffffff
        ffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffff5555555fffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffff555f55555fffffffffff
        ffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffff5555555ffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff5555fffffffffff
        fffffffffffffffffffffffff5555ffffffffffffffffffffffffffffff5555555ffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffff555fff5555ffffffffff
        fffffffffffffffffffffffff5555ffffffffffffffffffffffffffffff555555ffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffff555fff5555ffffffffff
        ffffffffffffffffffffffffff5555fffffffffffffffffffffffffffff5555ffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffff555ffff555ffffffffff
        ffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        fffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        fffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        ffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        ffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        fffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        fffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        ffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        ffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        fffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        fffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        ffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        ffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        fffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        fffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
        ffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffff
    `)

    pressStart = sprites.create(img`
        fffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff111111111ffffffffffffffffffffffffffffffffffffffffff111fffff
        fffff111fff111fffffffffffffffffffffffffffffffffffffffff1111fffff
        fffff111fff111ff111ffffffffffffffffffffffffffffffffffff1111fffff
        fffff111fff111ff11111111fffffffffffff111ff111ffffffffff11111ffff
        fffff111111111ff11111111f11111111fff1111f1111ffffffffff11111ffff
        fffff111111111ff11111111f111111111ff1111f1111fffffffff1111111fff
        fffff111111111ff111111fff111111111ff1111f1111ffffffff11111111fff
        fffff111ffffffff111ffffff111111111ff11111f1111fffffff1111f111fff
        fffff111ffffffff111ffffff111111111ff11111f1111ffffff1111111111ff
        fffff111ffffffff111ffffff11111111ffff111111111ffffff1111111111ff
        fffff111ffffffff111ffffff11111111fffff11111111fffff11111111111ff
        fffff111ffffffff111ffffffff11111111ff111111111fffff1111ffff111ff
        fffff111ffffffff111fffffffff1111111ff111111111fffff111fffff111ff
        fffff111ffffffff111ffffffffffff1111ff111ff111ffffffffffffff111ff
    `)
    tiles.placeOnTile(pressStart, tiles.getTileLocation(39, 70))
}


function hub() {
    tiles.setTilemap(tilemap`mainArea`)

    let player = sprites.create(img`
        ................
        ................
        ................
        ................
        .....ffffff.....
        ...ffeeeef2f....
        ..ffeeeef222f...
        ..feeeffeeeef...
        ..ffffee2222ef..
        ..fe222ffffe2f..
        .fffffffeeefff..
        .ffe44ebf44eef..
        .fee4d41fddef...
        ..feee4ddddf....
        ...ffee444ef....
        ....edde222f....
        ....edde222f....
        ....edde222f....
        ....edde222f....
        ....edde222f....
        ....edde222f....
        ....edde222f....
        ....edde222f....
        ....edde222f....
        ....4dde222f....
        ....edde222f....
        ....feef455f....
        ....ffffffff....
        .....f2f.f2f....
        .....f2f.f2f....
        .....fff.fff....
        ......ff.ff.....
    `)
    tiles.placeOnTile(player, tiles.getTileLocation(2, 30))
    scene.cameraFollowSprite(player)
    
}


function innerHub() {
    inHub = true

}


 function lv1() {

 }


 function lv2() {

 }


 function lv3() {
 
 }


controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
    if(onTitle == true) {
        onTitle = false
        hub()
        pressStart.destroy()
    }
})