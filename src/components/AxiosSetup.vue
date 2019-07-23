<template lang="pug">
  .axios-setup-container
    .links
      router-link(to='/setup') Previous
      h1 Step 3
      router-link(to='/finish-home') Next
    h2 Setting up Axios to call our back-end
    p In src folder, update main.js:
    .gist(id='axiosGist')
</template>

<script>
import postscribe from 'postscribe'
/* eslint-disable no-useless-escape */

export default {
  name: 'axiosSetup',
  mounted () {
    postscribe('#axiosGist', `<script src="https://gist.github.com/benjaminkent/6b60852ec53aff3183abc486b5d36e11.js"><\/script>`)
  }
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;

  h1 {
    margin: 0;
    color: #30dd4d;
  }
}


.axios-setup-container {
  background-color: #fff;
  width: 85%;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 0 2px 2px #22222220;
  padding: 20px;
}
</style>
