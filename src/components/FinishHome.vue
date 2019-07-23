<template lang="pug">
  .finish-home-container
    .links
      router-link(to='/axios-setup') Previous
      router-link(to='#') Next
    h2 Finishing up the Home.vue file
    p In src/Home.vue:
    .gist(id='finishHomeGist')
</template>

<script>
import postscribe from 'postscribe'
/* eslint-disable no-useless-escape */

export default {
  name: 'axiosSetup',
  mounted () {
    postscribe('#finishHomeGist', `<script src="https://gist.github.com/benjaminkent/6b60852ec53aff3183abc486b5d36e11.js"><\/script>`)
  }
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
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
