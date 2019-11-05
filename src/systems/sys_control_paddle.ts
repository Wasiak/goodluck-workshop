import { Get, Has } from "../components/com_index.js";
import { Entity, Game } from "../game.js";

const QUERY = Has.Transform2D | Has.ControlPaddle | Has.Move;

export function sys_control_paddle(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let move = game[Get.Move][entity];
    move.Direction[0] = 0;
    move.Direction[1] = 0;


    let inputState = game.InputState;
    if (inputState.ArrowLeft) {
        move.Direction[0] += -1;

        console.log('elo arrow left')
    }
    if (inputState.ArrowRight) {
        move.Direction[0] += 1;
        console.log('elo arrow right')
    }
    // if (inputState.ArrowUp) {
    //     move.Direction[1] += -1;
    //     console.log('elo arrow up')
    // }
    // if (inputState.ArrowDown) {
    //     move.Direction[1] += 1;
    //     console.log('elo arrow down')
    // }

}
