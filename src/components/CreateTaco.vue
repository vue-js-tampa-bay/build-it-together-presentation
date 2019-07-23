<template lang="pug">
  .create-taco-container
    .links
      router-link(to='/finish-home') Previous
      router-link(to='#') Next
    h2 Now let's create the Taco view
    p In src/views, create a file named Taco.vue and add this code:
    .gist(id='createTacoGist')
</template>

<script>
import postscribe from 'postscribe'
/* eslint-disable no-useless-escape */

export default {
  name: 'createTaco',
  mounted () {
    postscribe('#createTacoGist', `<script src="https://gist.github.com/benjaminkent/1922b62d0d0f9f3b9eb10adeab614db9.js"><\/script>`)
  }
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}


.create-taco-container {
  background-color: #fff;
  width: 85%;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 0 2px 2px #22222220;
  padding: 20px;
}
</style>
