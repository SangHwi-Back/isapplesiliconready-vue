import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('EnvironmentComponent', {
  data: function() {
    return {
      currnetType: ''
    }
  },
  created: function() {
    this.$on('typeButtonClicked', function(val) {
      this.currentType = val
      console.log(val);
    })
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
