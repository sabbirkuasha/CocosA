import {
  _decorator,
  AnimationComponent,
  CharacterController,
  Component,
  EventKeyboard,
  Input,
  input,
  KeyCode,
  Node,
  Vec3,
} from "cc";
import { Minotaur } from "./Minotaur";
const { ccclass, property } = _decorator;

@ccclass("KeyboardScript")
export class KeyboardScript extends Component {
  private minotaurScript: Minotaur | null = null;
  @property
  public NewSpeed: number = 1200;

  isWalking = false;
  onLoad() {
    this.minotaurScript = this.node.getComponent(Minotaur);
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
  }

  start() {}

  update(deltaTime: number) {
    // if (this.minotaurScript) {
    //   this.minotaurScript.speed = this.isWalking ? 100 : 0;
    // }
    // console.log(this.node.scale);
  }

  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.KEY_A:
        console.log("Press A");
        this.isWalking = true;
        this.getComponent(AnimationComponent).crossFade("Running");
        this.minotaurScript.speed = -this.NewSpeed;
        this.node.setScale(
          new Vec3(
            -Math.abs(this.node.scale.x),
            this.node.scale.y,
            this.node.scale.z
          )
        );
        break;
      case KeyCode.KEY_D:
        console.log("Press D");
        this.isWalking = true;
        this.getComponent(AnimationComponent).crossFade("Running");
        this.minotaurScript.speed = this.NewSpeed;
        this.node.setScale(
          new Vec3(
            Math.abs(this.node.scale.x),
            this.node.scale.y,
            this.node.scale.z
          )
        );
        break;
      case KeyCode.SPACE:
        this.getComponent(AnimationComponent).crossFade("Attacks");
        break;
    }
  }
  onKeyUp(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.KEY_A:
        console.log("Released A");
        this.isWalking = false;
        this.getComponent(AnimationComponent).crossFade("Idle");
        this.minotaurScript.speed = 0;
        break;
      case KeyCode.KEY_D:
        console.log("Released D");
        this.isWalking = false;
        this.getComponent(AnimationComponent).crossFade("Idle");
        this.minotaurScript.speed = 0;
        break;
      case KeyCode.SPACE:
        this.getComponent(AnimationComponent).crossFade("Idle");
        break;
    }
  }

  onHit() {
    console.log("hit");
  }
}
