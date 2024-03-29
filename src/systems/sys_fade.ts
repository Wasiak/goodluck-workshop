import { Get, Has } from "../components/com_index.js";
import { Entity, Game } from "../game.js";

const QUERY = Has.Transform2D | Has.Fade;

export function sys_fade(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let fade = game[Get.Fade][entity];
    let transform = game[Get.Transform2D][entity];

    let scale = transform.Scale;

    if (scale[0] <= 0) {
        game.Destroy(entity)
    }
    transform.Scale = [scale[0] - fade.Step, scale[1] - fade.Step];
    transform.Dirty = true;
}
