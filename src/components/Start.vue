<template lang="pug">
  .starting-container
    .links
      router-link(to='/') Previous
      router-link(to='/setup') Next
    h2 Starting a new Vue.js project
    p In your terminal run:
    pre
      code $ vue create < project name >
    p.margin-top You will be presented with several options to start a new project.
    p For our project you will choose:
    ol
      li Manually select features
      li add Router and CSS Pre-processors
      li y (When asked about using history mode for router)
      li Sass/SCSS
      li ESLint with error prevention only
      li Lint on save
      li In dedicated config files
      li n (When asked to save this as a preset for future projects)
    p.margin-top Next you will cd into your project and add pug:
    pre
      code $ cd < project name >
    pre
      code $ vue add pug
    p.margin-top Then we will start the server so we can see our project in our local browser
    pre
      code $ yarn serve
    p.margin-top 
      | Now go to your browser and navigate to 
      a(href='http://localhost:8080' target='_blank' rel='noreferrer noopener') http://localhost:8080
      |  and you should see your newly created Vue app!
</template>

<script>
export default {
  name: 'start'
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

.margin-top {
  margin-top: 40px;
}

.links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.starting-container {
  background-color: #fff;
  width: 90%;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 0 2px 2px #22222220;
  padding: 20px;

  h2 {
    margin-top: 0;
  }
}

pre {
  margin-top: 20px;
  code {
    background-color: #222;
    padding: 10px;
    color: #aaff8c;
    font-size: 14px;
  }
}

li {
  margin: 5px 0;
}
</style>

