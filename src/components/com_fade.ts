import { Entity, Game } from "../game.js";
import { Get, Has } from "./com_index.js";

export interface Fade {
    Step: number,
}

export function draw_fade(Step: number) {
    return (game: Game, entity: Entity) => {
        game.World[entity] |= Has.Fade;
        game[Get.Fade][entity] = <Fade>{
            Step
        };
    };
}
