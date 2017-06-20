<template>
	<div>
		<h3>codiv</h3>
		<ul>
			<li v-for="(item, index) in test" v-if="index<5">{{item.dissid}}</li>
		</ul>
		<span>{{codiv.message}}</span>
		<span>server:{{server.message}}</span>
	</div>
</template>

<script type="text/ecmascript-6">
//	import {CrossDomain} from '../common/js/config'
//	import {getDiscList, postQsdata} from '../api/api'
	import {postServer} from '../api/api'

	export default {
		name: 'hello',
		data () {
			return {
				test: [],
				codiv: {},
				server: {},
				url: 'http://member.eqkaos.com/home/login',//http://api.eqkaos.com/api/values
				aurl: '/api/getQsdata',
				item: {
					loginname: '15296284098',
					password: '123456'
				}
			}
		},
		created() {
			//vue-resource 插件
//			this.$http.get('api/goods').then((response) => {
//				let res = response.body
//				if (res.errno === 0) {
//					this.test = res.data
//				}
//			})
//			this.$http.post(this.url, this.item, CrossDomain).then((response) => {
//				this.codiv = response.data
//			})

			//axios 插件 webpack环境下
//			getDiscList().then((res) => {
//				this.test = res.data.list
//			})
//			postQsdata(this.aurl, this.item).then((res) => {
//				this.codiv = res
//			})

			//axios 插件 打包发布服务器环境下
			postServer(this.url, this.item).then((res) => {
				this.server = res
				console.log(res)
			})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
