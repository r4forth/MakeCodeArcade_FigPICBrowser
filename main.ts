controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    select += 1
    if (list.length < select) {
        select = 0
    }
    scene.setBackgroundImage(list[select])
    screenTransitions.startTransition(screenTransitions.Horizontal, 500, false)
})
let select = 0
let list: Image[] = []
scene.setBackgroundImage(assets.image`我的影像`)
list = [
assets.image`StartingForth`,
assets.image`eForth中文書`,
assets.image`Charles Moore`,
assets.image`丁陳漢蓀博士`,
assets.image`太空望遠鏡`,
assets.image`儀器`,
assets.image`Apple遊戲`,
assets.image`小機器人遊戲`
]
