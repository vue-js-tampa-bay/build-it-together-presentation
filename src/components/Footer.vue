<template lang="pug">
  .footer-container
    footer
      p
        | Made with 
        i.fas.fa-heart
        |  in St. Petersburg, FL
      p
        | 2019 Benjamin Kent. 
        a(href='https://www.benjaminkent.io/') benjaminkent.io
</template>

<script>
export default {
  name: 'appFooter'
}
</script>

<style lang="scss" scoped>
footer {
  background-color: #22222220;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
  }

  a {
    color: #222;
  }
  a:hover {
    color: #30dd4d;
  }
}
</style>

