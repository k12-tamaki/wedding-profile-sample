<template lang="pug">
  v-app
    v-app-bar(
      :clipped-left="clipped"
      fixed
      app
      :color="barColor"
      elevation="0"
      height="60"
    )
      v-spacer
      v-btn(icon @click.stop="drawer = !drawer")
        v-icon(large) menu

    v-content
      nuxt

    v-navigation-drawer(
      dark
      v-model="drawer"
      right=true
      temporary
      fixed
      width="70%"
      :src="navigationBG"
    )
      v-list
        v-list-item(
          v-for="(content, i) in contents"
          :key="i"
          @click="onClickMenu(content)"
        )
          v-list-item-content
            v-list-item-title.title--text.menu--text {{content}}
      //- v-row(no-gutters align="center")
      //-   v-col(
      //-     class="mt-3"
      //-     cols="12"
      //-     v-for="(content, i) in contents"
      //-     :key="i"
      //-     @click="onClickMenu(content)"
      //-   )
      //-     div(class="title--text menu--text pl-5") {{ content }}
      //-       div(class="line")
      //-         v-divider
</template>

<script>
export default {
  data() {
    return {
      navigationBG: require('../static/top/menu.jpg'),
      barColor: 'rgba(0,0,0,0)',
      clipped: false,
      fixed: false,
      contents: [
        'Top',
        'Message',
        'Profile',
        'Beginning',
        'Photo',
        'Food',
        'Contact',
        'Access'
      ],
      drawer: false
    }
  },
  methods: {
    onClickMenu(item) {
      this.drawer = !this.drawer
      const options = {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      }
      let target = 0
      if (item !== 'Top') {
        target = '#' + item
      }
      this.$vuetify.goTo(target, options)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar {
  display: none;
  -webkit-appearance: none;
}

@font-face {
  font-family: 'MightypeScript';
  src: url('../static/font/MightypeScript.otf') format('opentype');
}
@font-face {
  font-family: 'Harenosora';
  src: url('../static/font/Harenosora.otf') format('opentype');
}
@font-face {
  font-family: 'Harenosora';
  src: url('../static/font/Harenosora.otf') format('opentype');
}
.normal-font {
  font-family: 'Harenosora';
}
.big-font {
  font-family: 'MightypeScript';
}

.title--text {
  font-size: 8rem;
  font-family: 'MightypeScript';
}
.line {
  width: 300px !important;
  margin: auto;
}
@media (max-width: 767px) {
  .title--text {
    font-size: 4rem;
  }
  .line {
    width: 100px !important;
  }
}

.content--box {
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.content--box > div {
  width: 100vw;
}
.content--bottom {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.menu--text {
  font-size: 4rem !important;
  padding-left: 25%;
  line-height: 1.5 !important;
  text-shadow: 6px 6px 0 gray;
  text-align: left;
}
@media (max-width: 767px) {
  .menu--text {
    font-size: 2.5rem !important;
  }
}
</style>
