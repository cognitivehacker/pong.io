// import moment from 'moment';
// var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(rightNow);

import GameEngine from './engine.js'
import {PLAYER_ONE, PLAYER_TWO} from './players.js'
import Listeners from './listeners.js'

GameEngine().render()
Listeners.addListeners()
