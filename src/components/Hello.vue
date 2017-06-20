<template>
	<div>
		<h3>test api</h3>
		<span>server：{{server.message}}</span>
	</div>
</template>

<script type="text/ecmascript-6">
	import {postServer} from '../api/api'

	export default {
		name: 'hello',
		data () {
			return {
				server: {},
				url: '/get',
				item: {
					loginname: '15296284098',
					password: '123456'
				}
			}
		},
		created() {
			//axios 插件 打包发布服务器环境下
			postServer(this.url, this.item).then((res) => {
				this.server = res
			})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
