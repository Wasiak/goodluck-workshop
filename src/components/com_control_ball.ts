import { Entity, Game } from "../game.js";
import { Rad, Vec2 } from "../math/index.js";
import { Get, Has } from "./com_index.js";

export interface ControlBall {
    Direction: Vec2;
}

export function control_ball(angle: Rad) {
    return (game: Game, entity: Entity) => {
        game.World[entity] |= Has.ControlBall;
        game[Get.ControlBall][entity] = <ControlBall>{
            Direction: [Math.cos(angle), Math.sin(angle)],
        };
    };
}
