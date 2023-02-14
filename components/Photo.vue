<template lang="pug">
  div.content--box.content--bottom
    div
      div.title--text Photo
        div.line
          v-divider

      v-row.mt-5(no-gutters align="center" justify="center")
        v-col(cols="6" sm="4" md="3" lg="2" v-for="img, index in images" :key="index")
          v-row.mt-5(no-gutters align="center")
            v-card.card--layout
              img(:src="img.src" @click="onClickPicture(img.src)")
              v-card-title
                div.card--text {{img.caption}}
</template>

<script>
export default {
  name: 'Photo',
  components: {},
  data() {
    return {
      images: [
        {
          src: require('../static/photo/img00.jpg'),
          caption: '〇〇へ旅行'
        },
        {
          src: require('../static/photo/img01.jpg'),
          caption: '可愛い写真'
        },
        {
          src: require('../static/photo/img02.jpg'),
          caption: 'ひまわり畑にて'
        },
        {
          src: require('../static/photo/img03.jpg'),
          caption: 'ブーケトス'
        },
        {
          src: require('../static/photo/img04.jpg'),
          caption: '挙式会場'
        }
      ]
    }
  },
  methods: {
    onClickPicture(src) {
      window.open(src)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  min-width: 100%;
  height: 180px;
  object-fit: cover;
}

.card--text {
  font-size: 1rem;
  font-weight: bold;
}

.card--layout {
  max-width: 90%;
  min-width: 90%;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
