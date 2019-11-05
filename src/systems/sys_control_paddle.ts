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

    let transform = game[Get.Transform2D][entity];
    let draw = game[Get.Draw][entity];
    let inputState = game.InputState;
    if (inputState.ArrowLeft && (transform.Translation[0] - draw.Width / 2) > 0) {
        move.Direction[0] += -1;
    }
    if (inputState.ArrowRight && (transform.Translation[0] + draw.Width / 2) < game.ViewportWidth) {
        move.Direction[0] += 1;
    }
}
