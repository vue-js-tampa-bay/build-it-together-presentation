<template lang="pug">
  .finish-home-container
    .top-links
      router-link(to='/axios-setup')
        i.fas.fa-chevron-left
      h1 Step 4
      router-link(to='create-taco')
        i.fas.fa-chevron-right
    h2 Finishing up the Home.vue file
    p In src/Home.vue:
    .gist(id='finishHomeGist')
    .bottom-links
      router-link(to='/axios-setup')
        i.fas.fa-chevron-left
      router-link(to='create-taco')
        i.fas.fa-chevron-right
</template>

<script>
import postscribe from 'postscribe'
/* eslint-disable no-useless-escape */

export default {
  name: 'finishHome',
  mounted () {
    postscribe('#finishHomeGist', `<script src="https://gist.github.com/benjaminkent/1922b62d0d0f9f3b9eb10adeab614db9.js"><\/script>`)
  }
}
</script>

<style lang="scss" scoped>
.top-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;

  h1 {
    margin: 0;
    color: #30dd4d;
  }
}
.bottom-links {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
}

.finish-home-container {
  background-color: #fff;
  width: 85%;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 0 2px 2px #22222220;
  padding: 20px;
}
</style>
