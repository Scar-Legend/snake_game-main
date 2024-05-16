import LRKeyInputHandler from "./LRKeyInputHandler";
import  Snake from "./Snake";
import  WorldModel from "./worldmodel";
class SnakeController {
    private snakeWorld: WorldModel;
    private slitherer: Snake;
   // wasLeftArrowPushed: boolean=false;
   // wasRightArrowPushed: boolean=false;
  
    constructor(world: WorldModel, snake: Snake) {
      this.snakeWorld = world;
      this.slitherer = snake;
    }

  /*madeLeftMove(): boolean {
    throw new Error("Method not implemented.");
  }
  madeRightMove(): boolean {
    throw new Error("Method not implemented.");
  }
  resetLeftMove(): void {
    throw new Error("Method not implemented.");
  }
  resetRightMove(): void {
    throw new Error("Method not implemented.");
  }*/
  
    
    // Method to turn the snake left
    public turnSnakeLeft(): void {
      this.slitherer.turnLeft();
      
    }
  
    // Method to turn the snake right
    public turnSnakeRight(): void {
      this.slitherer.turnRight();
    }
    // Getter for Snake's position
    public get snakePosition() {
      return (this.slitherer.position);
    }
  
    // Getter for Snake's direction
    public get snakeDirection(): number {
      return this.slitherer.getCurrentDirection();
    }
  
    // Getters for WorldModel's width and height
    public get worldWidth(): number {
      return this.snakeWorld.Width;
    }
  
    public get worldHeight(): number {
      return this.snakeWorld.Height;
    }
  }
  export default SnakeController ;