<template lang="pug">
  .axios-setup-container
    .top-links
      router-link(to='/setup')
        i.fas.fa-chevron-left
      h1 Step 3
      router-link(to='/finish-home')
        i.fas.fa-chevron-right
    h2 Setting up Axios to call our back-end
    p In src folder, update main.js:
    .gist(id='axiosGist')
    .bottom-links
      router-link(to='/setup')
        i.fas.fa-chevron-left
      router-link(to='/finish-home')
        i.fas.fa-chevron-right
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

.axios-setup-container {
  background-color: #fff;
  width: 85%;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 0 2px 2px #22222220;
  padding: 20px;
}
</style>
