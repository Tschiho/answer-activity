export default {
	increment({ commit, state }, id) {
	  commit('REMEMBER_ANSWER', id)
      if(state.itemNum < state.itemDetail.length){
        commit('ADD_ITEMNUM', 1)
      }
	  
      
	},
	initData({ commit, state }) {
	  if(state.timer) clearInterval(state.timer)
      commit('TOTAL_TIME')
      commit('INIT_DATA')
	}
}