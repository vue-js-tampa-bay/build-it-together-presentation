<template lang="pug">
  .done-container
    .links
      router-link(to='/create-taco')
        i.fas.fa-chevron-left
    h2 And that's it!
    img.nph(src='https://media.giphy.com/media/9Jcw5pUQlgQLe5NonJ/giphy.gif')
    p We've created a basic app with Vue.js, using some techniques that you will use regularly as you develop apps with Vue.
    p In this presentation we've covered:
    ol
      li Starting a new Vue.js project
      li Pug for the template language
      li Axios to call a RESTful API
      li Routing views with Dynamic Route Matching
      li 
        samp v-for 
        | directive for iterating over lists
    p Of course there is still so much more we could do!
    p Styling is the first thing that comes to mind.
    p We also might want to add a form for creating new tacos, or a way to delete tacos if they don't sound tasty anymore. The sky is the limit and only your imagination can hold you back!
</template>

<script>
export default {
  name: 'done'
}
</script>

<style lang="scss" scoped>
.done-container {
  background-color: #fff;
  width: 85%;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 0 2px 2px #22222220;
  padding: 20px;
}

li {
  margin: 5px 0;
}

.nph {
  height: 300px;
}

.links {
  margin-top: 11px;
}
</style>

