import { _decorator, Component, Node, UITransform, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Minotaur")
export class Minotaur extends Component {
  @property
  public speed: number = 0;

  start() {}

  update(deltaTime: number) {
    // Get the current position
    let currentPosition = this.node.getPosition();

    // Update the x value of the position
    let newX = currentPosition.x + this.speed * deltaTime;

    // Set the new position of the node
    this.node.setPosition(new Vec3(newX, currentPosition.y));

    // Logging the new position for debugging purposes
    // console.log(this.node.getPosition().toString());
  }
}
