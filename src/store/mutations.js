import { ADD_ITEMNUM, REMEMBER_ANSWER, TOTAL_TIME, INIT_DATA } from './mutation-types'

export default {
  [ADD_ITEMNUM](state) {
    state.itemNum ++;
  },
  [REMEMBER_ANSWER](state, answerId) {
  	state.answerid.push(answerId)
  },
  [TOTAL_TIME](state) {
    state.timer = setInterval(() => {
    	state.allTime++;
    }, 1000)
  },
  [INIT_DATA](state){
  	state.itemNum = 1
  	state.allTime = 0
  	state.answerid = []
  }
}