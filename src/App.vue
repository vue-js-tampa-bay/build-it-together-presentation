<template lang="pug">
  .app-container
    header
      h1 Let's Build an App Together!
    router-view
    AppFooter
</template>

<script>
import AppFooter from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    AppFooter
  }
}
</script>


<style lang="scss">
.app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
  background-color: #eaeaea;
  min-height: 91vh;
  display: block;
  overflow: hidden;
  padding-bottom: 120px;
  position: relative;
}

header {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
  }
}

body, html {
  margin: 0;
  height: 100%;
  position: relative;
}

i {
  color: #30dd4d;
}
</style>
