<template lang="pug">
  .create-taco-container
    .links
      router-link(to='/finish-home') Previous
      router-link(to='/done') Next
    h2 Working on the Taco view
    p Next we'll set up a route for our Taco view. In src/router.js add the route:
    .gist(id='updateRoutes')
    p.margin-top Ok, now we're ready to create the file.
    ol
      li In src/views, create a file named Taco.vue
      li Add the following code:
    .gist(id='createTaco')
</template>

<script>
import postscribe from 'postscribe'
/* eslint-disable no-useless-escape */

export default {
  name: 'createTaco',
  mounted () {
    postscribe('#updateRoutes', `<script src="https://gist.github.com/benjaminkent/89564594d4a850de49c1cdd81ca6b3bf.js"><\/script>`)
    postscribe('#createTaco', `<script src="https://gist.github.com/benjaminkent/3f4a71192777b2fa4bbf3c5ecd6dd98e.js"><\/script>`)
  }
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.margin-top {
  margin-top: 50px;
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
