<template lang="pug">
  .home-container
    .top-link
      router-link(to='start-project')
        i.fas.fa-chevron-right
    h1.welcome Welcome!
    .intro
      h2 To view this presentation, go to:
      h2.presentation-link bit.ly/vuetb-together
      p My name is Ben Jehl. A graduate of Suncoast Developers Guild and current Junior Software Engineer at KnowBe4, I am the founder/organizer of the Vue.js Tampa Bay meetup group.
      p If you ever have any questions, feedback, concerns or just want to say hi, you can reach me here:
      ul
        li
          a(href='https://www.linkedin.com/in/benjaminkentjehl' target='_blank' rel='noreferrer noopener') LinkedIn
        li
          a(href='https://www.meetup.com/Vue-js-Tampa-Bay/' target='_blank' rel='noreferrer noopener') Meetup
        li
          a(href='https://www.facebook.com/vue.js.tampabay' target='_blank' rel='noreferrer noopener') Facebook
        li By email at: vue.js.tampabay@gmail.com
        li suncoast-devs Slack channel
    .sponsor
      .sponsor-header
        h2 Special thank you to our sponsor
        img.kbfour(src='../assets/kmsat-logo.png' alt='KnowBe4')
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
    .bottom-link
      router-link(to='start-project')
        i.fas.fa-chevron-right
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
.home-container {
  background-color: #fff;
  width: 85%;
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
      flex-direction: column;
      align-items: center;

      .kbfour {
        height: 60px;
        margin-top: 5px;
      }
    }
  }

  h2 {
    margin: 0;
  }
}
li {
  margin: 5px 0;
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
.presentation-link {
  color: #30dd4d;
}
.next {
  margin: 50px 0;
}

.top-link {
  margin-top: 11px;
  display: flex;
  justify-content: flex-end;
}
.bottom-link {
  display: flex;
  justify-content: flex-end;
}
</style>
