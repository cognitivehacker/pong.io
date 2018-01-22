// import moment from 'moment';
// var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(rightNow);

import GameEngine from './components/engine'
import {PLAYER_ONE, PLAYER_TWO} from './components/players'
import Listeners from './components/listeners'

GameEngine().render()
Listeners.addListeners()
