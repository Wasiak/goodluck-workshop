import { Entity, Game } from "../game";
import { Vec2 } from "../math";
import { Get, Has } from "./com_index";


// export function move(game: Game, entity: Entity, delta: number, direction: Vec2) {
//     // let direction = <Vec2>[2, 1];
//     // normalize change to normal vector NOT SPEED
//     normalize(direction, direction);
//     let speed = 100;

//     let transform = game[Get.Transform2D][entity];
//     transform.Translation[0] += direction[0] * speed * delta;
//     transform.Translation[1] += direction[1] * speed * delta;
//     transform.Dirty = true;
// }
export interface Move {
    Direction: Vec2;
}

export function move(Direction: Vec2 = [0, 0]) {
    return (game: Game, entity: Entity) => {
        game.World[entity] |= Has.Move;
        game[Get.Move][entity] = <Move>{
            Direction
        };
    };
}