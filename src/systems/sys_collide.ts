import { Collide } from "../components/com_collide.js";
import { Get, Has } from "../components/com_index.js";
import { Transform2D } from "../components/com_transform2d.js";
import { Game } from "../game.js";
import { Vec2 } from "../math/index.js";
import { negate } from "../math/vec2.js";

const QUERY = Has.Transform2D | Has.Collide;

export function sys_collide(game: Game, delta: number) {
    // Collect all colliders.
    let all_colliders: Collide[] = [];
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) === QUERY) {
            let transform = game[Get.Transform2D][i];
            let collider = game[Get.Collide][i];

            // Prepare the collider for this tick.
            collider.Collisions = [];
            compute_aabb(transform, collider);
            all_colliders.push(collider);
        }
    }

    for (let i = 0; i < all_colliders.length; i++) {
        check_collisions(all_colliders[i], all_colliders);
    }
}

function compute_aabb(transform: Transform2D, collide: Collide) {
    let width = collide.Size[0];
    let height = collide.Size[1];
    let x = transform.Translation[0];
    let y = transform.Translation[1];
    // change to coll ide.Center[0] ; collide.Center[1]etc.
    collide.Center = [x, y];
    collide.Min = [x - width / 2, y - height / 2];
    collide.Max = [x + width / 2, y + height / 2];
    // console.log(collide)
}

function check_collisions(collider: Collide, colliders: Collide[]) {

    for (let collide of colliders) {
        if (collider.EntityId === collide.EntityId) return;
        if (intersect_aabb(collider, collide)) {
            let penetration = penetrate_aabb(collider, collide);
            collider.Collisions.push({
                Other: collide,
                Hit: penetration,
            });
            collide.Collisions.push({
                Other: collider,
                Hit: negate([0, 0], penetration),
            });
        }
    }

}

function penetrate_aabb(a: Collide, b: Collide) {
    let distance_x = a.Center[0] - b.Center[0];
    let penetration_x = a.Size[0] / 2 + b.Size[0] / 2 - Math.abs(distance_x);

    let distance_y = a.Center[1] - b.Center[1];
    let penetration_y = a.Size[1] / 2 + b.Size[1] / 2 - Math.abs(distance_y);

    if (penetration_x < penetration_y) {
        return <Vec2>[penetration_x * Math.sign(distance_x), 0];
    } else {
        return <Vec2>[0, penetration_y * Math.sign(distance_y)];
    }
}

function intersect_aabb(a: Collide, b: Collide) {
    return a.Min[0] < b.Max[0] && a.Max[0] > b.Min[0] && a.Min[1] < b.Max[1] && a.Max[1] > b.Min[1];
}
