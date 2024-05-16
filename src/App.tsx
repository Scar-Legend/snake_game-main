import "./App.css";
import "./App.css";
import Snake from "./Snake";
import Point from "./Point";
import display from "./display";
import  WorldModel from "./worldmodel";
//import {IWorldView} from "./iworldview"
import { useEffect } from "react";
import AvoidWallsPlayer from "./avoidWallsPlayer";
import  CanvasWorldView  from "./canvasWorldView";
//import { hasBeenLoadedMultipleTimes } from "typedoc/dist/lib/utils/general";
import SnakeController from "./SnakeController";
import LRKeyInputHandler from "./LRKeyInputHandler";
//import Player from "./Player";
import HumanPlayer from "./humanPlayer";
import GameController from "./gameController";
import IInputHandler from "./IInputHandler";

/*export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
        // Include your display statements to test below
       document.getElementById("output")!.innerText = "OUTPUT:\n";
        display("hey");
      
    const worldModel = new WorldModel();
    const canvasWorldView = new CanvasWorldView(20)
    //worldModel.view()=canvasWorldView
    worldModel.update();

    const startPosition=new Point(0,0)
    const snake = new Snake(startPosition,1);
    const wm = new WorldModel();
    snake.move(6);
    snake.turnLeft();
    snake.move(3);
    snake.turnLeft();
    snake.move(2);
    snake.turnLeft();
    snake.move(1);
    snake.turnRight();
    snake.move(1);

    display (wm.Width, wm.Height)
    const currentPosition = snake.position.x + "," + snake.position.x;
    display("The snake's position is", currentPosition);
  
    
  }, []);

    

console.log("Hello")
  

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
*/

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    display ("nyehh i saw you flinch")
    const startPosition=new Point(0,0)
    const snake1 = new Snake(startPosition,0);
    snake1.turnRight();
    snake1.move(1);
    snake1.turnRight();
    snake1.move(1);
    snake1.turnLeft();
    snake1.move(1);
   /* const currentspace = snake1.position.x + "," + snake1.position.y;
    console.log("Snake's current position is", currentspace);*/
    const WorldModel_ = new WorldModel();
    const CanvasWorldView_ = new CanvasWorldView(5)
    const Snakecontroller = new SnakeController(WorldModel_, snake1)
    const Gpt = new AvoidWallsPlayer(Snakecontroller)
    const LrKeyInputHandler = new LRKeyInputHandler;
    const Human = new HumanPlayer(LrKeyInputHandler, Snakecontroller) 
    const startgame = new GameController(WorldModel_,Human)
    startgame.player2 = Gpt
    startgame.player1 = Human
    WorldModel_.view = CanvasWorldView_
    WorldModel_.update(1)
    startgame.run()

  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
       OUTPUT: <br />
      </pre>
    </div>
  );
}

