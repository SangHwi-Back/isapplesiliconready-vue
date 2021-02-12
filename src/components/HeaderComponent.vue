<template>
  <div>
    <div style="flow: right">
      <i class="fas fa-moon"></i>
      <i class="fab fa-twitter"></i>
      <button v-on:click="clickSNSButton('coffee')" class="snsStyleButton"> <i class="fas fa-coffee"></i> BUY ME A COFFEE </button>
    </div>
    <a href="/">
      <img class="titleImage" src="../../public/Apple_new-m1-chip-graphic_11102020.jpg" alt="m1 chip Image">
    </a>
    <p class="title1">Is Apple silicon ready?</p>
    <p class="title2">The complete guide for MacOS Apps Optimized for M1 Apple Silicon Macs</p>
    <div style="align-content: center">
      <button v-on:click="clickSNSButton('facebook')" class="facebookStyleButton"> <i class="far fa-thumbs-up"></i> 좋아요 {{propsLikes}}개 </button>
      <button v-on:click="clickSNSButton('facebook')" class="facebookStyleButton"> 공유하기 </button>
    </div>
    <div v-on:click="clickSNSButton('twitter')" style="align-content: center">
      <button class="snsStyleButton"> <i class="fab fa-twitter"></i>SHARE ON TWITTER </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'propsLikes'
  ],
  methods: {
    clickSNSButton: function(val) {
      if (val == "twitter") {
        window.open("https://twitter.com");
      } else if (val == "facebook") {
        window.open("https://facebook.com");
      } else if (val == "coffee") {
        window.open("../../public/coffee.html");
      }
    }
  }
}
</script>

<style scoped>
.titleImage {
  width: 300px;
  height: 200px;
  align-items: flex-end;
}
img {
  cursor: pointer;
}
p {
  display: block;
  text-align: center;
  color: white;
}
span {
  align-content: center;
}
.title1 {
  font-size: 2em;
}
.title2 {
  font-size: 1.17em;
}

</style>