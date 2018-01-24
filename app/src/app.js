// import moment from 'moment';
// var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(rightNow);

import GameEngine from './modules/game-engine/gameEngine'
import GameObjects from './modules/game-objects/gameObjects'
import GraphicsEngine from './modules/graphics/graphicsEngine'
import Listeners from './modules/physics/listeners'

const engine = new GameEngine()
engine.setGameObject(new GameObjects())
engine.setGraphicsEngine(new GraphicsEngine())
engine.setListeners(new Listeners())
engine.execute()
