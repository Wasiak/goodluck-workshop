import { Collide } from "./com_collide";
import { ControlBall } from "./com_control_ball";
import { ControlBrick } from "./com_control_brick";
import { ControlPaddle } from "./com_control_paddle";
import { Draw } from "./com_draw";
import { Fade } from "./com_fade";
import { Move } from "./com_move";
import { Transform2D } from "./com_transform2d";

export const enum Get {
    Collide,
    ControlPaddle,
    Draw,
    Transform2D,
    ControlBall,
    Move,
    ControlBrick,
    Fade
}

export interface ComponentData {
    [Get.Collide]: Array<Collide>;
    [Get.ControlPaddle]: Array<ControlPaddle>;
    [Get.ControlBall]: Array<ControlBall>;
    [Get.ControlBrick]: Array<ControlBrick>;
    [Get.Draw]: Array<Draw>;
    [Get.Transform2D]: Array<Transform2D>;
    [Get.Move]: Array<Move>;
    [Get.Fade]: Array<Fade>;
}

export const enum Has {
    Collide = 1 << Get.Collide,
    ControlPaddle = 1 << Get.ControlPaddle,
    Draw = 1 << Get.Draw,
    Transform2D = 1 << Get.Transform2D,
    ControlBall = 1 << Get.ControlBall,
    Move = 1 << Get.Move,
    ControlBrick = 1 << Get.ControlBrick,
    Fade = 1 << Get.Fade,
}
