(function(Vue){

	Vue.component('keyboard', {
		template: '\
			<span>\
				{{message}}\
			</span>\
		',
		data () {
			return {
				message: '111'
			}
		}
	})

})(Vue)