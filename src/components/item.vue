<template>
  <div class="wrap">
  	<div class="time">用时: {{ allTime }}&nbsp;秒</div>
  	<div class="top_tips"><span class="level">题目{{ itemNum }}</span></div>

    <div class="banner">
    	<div class="question">
    	  <div class="question-title">{{ itemDetail[itemNum-1].topic_name }} :</div>
    	  <ul>
    	  	<li class="question-item" v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choose(index, item.topic_answer_id)">
    	  		<span class="dot" :class="{ hasChoosed: index === chosenIdx}">{{ index | toLetter}}</span>
    	  		{{ item.answer_name }}
    	  	</li>
    	  </ul>
          

    	  <button class="btn" v-if="itemNum >= itemDetail.length " type="button" @click="submitFm()"><img src="../assets/3-1.png"></button>
    	  <button class="btn" v-else type="button" @click="nextQuestion()"><img src="../assets/2-2.png"></button>
    	</div>
    	
    </div>
  </div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'

	export default {
		name: 'item',
		data() {
			return {
              chosenIdx: null,
              answerId: null
			}
		},
		created() {
			this.initData()
		},
		filters: {
          toLetter(value) {
            switch(value) {
            	case 0: return 'A'
            	case 1: return 'B'
            	case 2: return 'C'
            	case 3: return 'D'
            }
          }
		},
		computed: mapState([
           'itemNum',
           'itemDetail',
           'allTime',
           'timer'
			]),
		methods: {
			...mapActions([
              'increment',
              'initData'
				]),
			choose(idx, answerId) {
				this.chosenIdx = idx
				this.answerId = answerId
			},
			nextQuestion() {
				if(this.chosenIdx !== null){
                   this.increment(this.answerId)
                   this.chosenIdx = null
				}else{
					alert('你还没有选择答案哦~');
				}
			},
			submitFm() {
				if(this.chosenIdx !== null){
                   this.increment(this.answerId)
                   clearInterval(this.timer)
                   this.$router.push('score')
				}else{
					alert('你还没有选择答案哦~');
				}
			}
		}
	}
</script>

<style scoped>
.wrap{
      background: url('../assets/1-1.jpg') no-repeat;
	  background-size: contain;
	  width: 100%;
	  height: 100%;
	  padding-top: 100px;
    }

.top_tips{
		width: 74px;
		height: 148px;
		background: url('../assets/WechatIMG2.png') no-repeat;
		background-size: contain;
		position: absolute;
		top: 0;
		right: 40px;

	}

	.time{
		color: #fff;
		margin-bottom: 50px;
	}

	.level{
		color: #a57c50;
		position: absolute;
		width: 100%;
		bottom: 20px;
		left: 0;
		text-align: center;
		font-size: 14px;
	}

	.banner{
		width: 264px;
		height: 233px;
		background: url(../assets/2-1.png) no-repeat;
		background-size: cover;
		margin: 0 auto;
	}

	.banner img{
      width: 100%;
	}

	.question-title, .dot, .question-item{
		color: #fff;
	}

	.dot{
		display: inline-block;
		padding:0 4px;
		border: 1px solid #ccc;
		border-radius: 50%;

	}

	.dot.hasChoosed{
		background-color: #ffd400;
		border-color: #ffd400;
	}

	.question-item{
      margin-top: 12px;
	}

	.btn{
		display: block;
		width: 86px;
		height: 42px;
		margin: 30px auto;
	}
</style>