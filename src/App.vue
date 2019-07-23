<template lang="pug">
  .app-container
    header
      h1 Let's Build an App Together!
    router-view
</template>


<style lang="scss">
.app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
  background-color: #eaeaea;
  min-height: 100vh;
  min-width: 100vw;
}

header {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
  }
}

body {
  margin: 0;
}

i {
  color: #30dd4d;
}
</style>
