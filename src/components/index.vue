<template>
  <div class="wrap">
  	<div class="top_tips"><span class="level">{{ level }}</span></div>

    <div class="banner">
  	  <img src="../assets/1-2.png">
  	  <router-link to="/item" class="start-btn"></router-link>
    </div>	
  </div>
  
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'index',
		data() {
			return {

			}
		},
		computed: mapState([
          'level'
			])
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
		width: 263px;
		height: 232px;
		margin: 0 auto;
	}

	.banner img{
      width: 100%;
	}

	.start-btn{
		display: block;
		width: 86px;
		height: 42px;
		margin: 0 auto;
		background: url(../assets/1-4.png) no-repeat;
		background-size: contain;
	}
</style>