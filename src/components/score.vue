<template>
	<div class="wrap">
	  <div class="board">
	  	<div class="brd-inner">
	  	  <div class="score-num"><span>{{ score }}</span><span>分!</span></div>
	      <div class="score-txt">{{ scoreTip }}</div>
	  	</div>
	   
	  </div>

	  <div class="share" @click="show = true">
	    <img src="../assets/4-3.png" />
	  </div>

	  <div class="share-code">
	  	 <p>关注葡萄之家，获得答案。</p>
	  	 <img src="../assets/4-4.png" />
	  </div>

	  <div class="shareMask" v-show="show" @click="show = false">
	  	 <img src="../assets/5-2.png" />
	  </div>
	</div>

	
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'score',
		data() {
			return {
				show: false,
				score: 0,
				scoreTip: '',
				rightAnswer: [2, 7, 12, 13, 18], //正确答案
            scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
			}
		},
		created(){
           this.computedScore()
           this.getScoreTip()
		},
		computed: mapState([
           'answerid'
			]),
		methods: {
			computedScore(){
               this.answerid.forEach((item, idx) => {
                 if(item == this.rightAnswer[idx]){
                 	this.score += 20
                 }
               })
			},
			getScoreTip() {
			  const tip = this.score / 20 - 1
			  this.scoreTip = this.scoreTipsArr[tip]
			}
		}
	}
</script>

<style scoped>
.wrap{
	background-image: url(../assets/4-1.jpg);
	 background-size: contain;
	  width: 100%;
	  height: 100%;
	  padding-top: 20px;
}

.board{
	width: 224px;
	height: 200px;
	background: url(../assets/4-2.png) no-repeat;
	background-size: contain;
	margin: 0 auto;
	position: relative;
}

.score-num{
  font-size: 28px;
  font-weight: bold;
  width: 100%;
  text-align: center;
}

.score-txt{
  font-size: 14px;
  width: 90%;
  text-align: center;
}

.brd-inner{
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 94px;
}

.score-num span{
	color: #a51d31;
}

.share{
	width: 116px;
	height: 48px;
	margin: 20px auto;
}

.share img{
	width: 100%;
}

.share-code{
	text-align: center;
}

.shareMask{
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, .8);
	text-align: center;
}

.shareMask img{
	height: 230px;
}
	  
</style>