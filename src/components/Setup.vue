<template lang="pug">
  .setup-container
    .top-links
      router-link(to='/start-project')
        i.fas.fa-chevron-left
      h1 Step 2
      router-link(to='axios-setup')
        i.fas.fa-chevron-right
    h2 Now let's get our basic setup
    ol
      li Go into src/components and delete the HelloWorld.vue file
      li Go into src/views and delete the About.vue file
      li
        | in src/views, update Home.vue file:
        .gist(id='homeGist')
      li
        | in src, update router.js file:
        .gist(id='routerGist')
      li
        | in src, update App.vue file:
        .gist(id='appGist')
    .bottom-links
      router-link(to='/start-project')
        i.fas.fa-chevron-left
      router-link(to='axios-setup')
        i.fas.fa-chevron-right
</template>

<script>
import postscribe from 'postscribe'
/* eslint-disable no-useless-escape */

export default {
  name: 'setup',
  mounted () {
    postscribe('#homeGist', `<script type="application/javascript" src="https://gist.github.com/benjaminkent/d59a6e2a9735240887c15bd00101f42e.js"><\/script>`)
    postscribe('#routerGist', `<script src="https://gist.github.com/benjaminkent/970cc97910d45298d10df78765f394fc.js"><\/script>`)
    postscribe('#appGist', `<script src="https://gist.github.com/benjaminkent/d50a5b7bde6b84180418c1db4474d43d.js"><\/script>`)
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

.gist {
  margin-top: 5px;
}

.setup-container {
  background-color: #fff;
  width: 85%;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 0 2px 2px #22222220;
  padding: 20px;
}

ul {
  padding: 0;
}
li {
  margin: 5px 0;
}

pre {
  margin-top: 20px;
  background-color: #222;
  padding: 20px;
  code {
    background-color: #222;
    color: #aaff8c;
    font-size: 14px;
  }
}
</style>

