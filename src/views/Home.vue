<template lang="pug">
  .home-container
    h1.welcome Welcome!
    .sponsor
      .sponsor-header
        h2 Special thank you to our sponsor
        h2.sponsor-name KnowBe4
      ul
        li World's Largest Provider of New-school Security Awareness Training
        li Headquartered in Clearwater. Locations UK, Netherlands, Germany, South Africa, Singapore, Brazil, Australia and plans for more
        li Ranked #1 Top Workplace 4 Years in a Row
        li Fun, Open Culture with Lots of Benefits
        li Close to 750 Employees. Hiring 200+ this Year
        li
          | Learn More at 
          a(href='https://www.knowbe4.com/jobs' target='_blank' rel='noreferrer noopener') KnowBe4.com/Jobs
    .getting-started-container
      h2 Getting Started
      p You will need the following technologies on your computer to get started:
      table
        thead
          tr
            th Technology
            th Where to download
        tbody
          tr
            td Node
            td
              a(href='https://nodejs.org/en/download/' target='_blank' rel='noreferrer noopener') NodeJS.org
          tr
            td Yarn
            td
              a(href='https://yarnpkg.com/lang/en/docs/install/#mac-stable' target='_blank' rel='noreferrer noopener') YarnPKG.com
          tr
            td Vue CLI
            td
              a(href='https://cli.vuejs.org/guide/installation.html' target='_blank' rel='noreferrer noopener') VueJS.org
          tr
            td Vue Dev Tools
            td Chrome Web Store/Extensions
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
.home-container {
  background-color: #fff;
  width: 90%;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0 0 2px 2px #22222220;
  padding: 20px;

  .welcome {
    text-align: center;
    margin-top: 0;
  }

  .sponsor {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .sponsor-header {
      display: flex;

      .sponsor-name {
        color: #f26721;
        margin-left: 7px;
      }
    }

    ul {
      li {
        margin: 5px 0;
      }
    }
  }

  h2 {
    margin: 0;
  }
}

.getting-started-container {
  margin-top: 30px;
  table {
    width: 80%;

    th {
      text-align: left;
    }
  }
}
</style>
