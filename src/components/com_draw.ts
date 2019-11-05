import { Entity, Game } from "../game.js";
import { Get, Has } from "./com_index.js";

export interface Draw {
    // Size: number;
    Height: number;
    Width: number;
    Color: string;
}

export function draw_rect(Height: number, Width: number, Color: string) {
    return (game: Game, entity: Entity) => {
        game.World[entity] |= Has.Draw;
        game[Get.Draw][entity] = <Draw>{
            // Size,
            Height, Width, Color
        };
    };
}
