import { Get, Has } from "../components/com_index.js";
import { Entity, Game } from "../game.js";
import { Vec2 } from "../math/index.js";

const QUERY = Has.Transform2D | Has.ControlPaddle;

export function sys_control_paddle(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let direction = <Vec2>[0, 0];
    let speed = 100;


    let inputState = game.InputState;
    if (inputState.ArrowLeft) {
        direction[0] += -1;
        console.log('elo arrow left')
    }
    if (inputState.ArrowRight) {
        direction[0] += 1;
        console.log('elo arrow right')
    }
    if (inputState.ArrowUp) {
        direction[1] += -1;
        console.log('elo arrow up')
    }
    if (inputState.ArrowDown) {
        direction[1] += 1;
        console.log('elo arrow down')
    }
    let transform = game[Get.Transform2D][entity];
    transform.Translation[0] += direction[0] * speed * delta;
    transform.Translation[1] += direction[1] * speed * delta;
    transform.Dirty = true;
    // console.log(JSON.stringify(game.InputState))
    // console.log(game.InputState)
}
