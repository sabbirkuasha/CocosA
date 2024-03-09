import {
  _decorator,
  Button,
  Component,
  director,
  EventHandler,
  Node,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("MainScript")
export class MainScript extends Component {
  @property({ type: Button })
  play: Button = null;

  onLoad() {
    // Ensure the play button is not null
    if (this.play) {
      // Create a new EventHandler to respond to click events
      let clickEventHandler = new EventHandler();
      // Set the target to this node so that the callback will be on this component
      clickEventHandler.target = this.node;
      // Set the component to be called on the target
      clickEventHandler.component = "MainScript";
      // Name the callback function that will be executed on click
      clickEventHandler.handler = "onPlayButtonClick";

      // Assign the EventHandler to the button
      this.play.clickEvents.push(clickEventHandler);
    }
  }

  // Define the callback function for the button click
  onPlayButtonClick() {
    // Load sceneA when the button is clicked
    director.loadScene("sceneA");
  }

  start() {}

  update(deltaTime: number) {}
}
