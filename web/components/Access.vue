<template lang="pug">
  div.content--box.content--bottom
    v-row(no-gutters)
      v-col(cols="12")
        div.title--text Access
        div.line
          v-divider

    v-row.mt-5(no-gutters)
      v-col(cols="12")
        p.name
          span 〇〇セレモニーホール
    v-row(no-gutters)
      v-col(cols="12")
        p
          div.address 〒999-9999
          div.address 〇〇県〇〇市99-99
    v-row(no-gutters)
      v-col(cols="12")
        p
          div.access-title ■お車でお越しの場合
          div.access-detail
            div 〇〇バイパス 〇〇ICより
            div 約5分
        p
          div.access-title ■〇〇駅より
          div.access-detail
            div タクシー：〇〇駅北口より
            div 約10分
    v-row.mt-3(no-gutters)
      v-col(cols="12")
        v-btn.white--text(
            color="secondary"
            @click.stop="openMap"
          ) Google Mapで開く

</template>

<script>
export default {
  name: 'Access',
  data() {
    return {}
  },
  methods: {
    openMap() {
      open(
        'https://www.google.com/maps/place/%E6%9D%B1%E4%BA%AC%E9%A7%85/@35.6812362,139.7649308,17z/data=!3m1!4b1!4m5!3m4!1s0x60188bfbd89f700b:0x277c49ba34ed38!8m2!3d35.6812362!4d139.7671248?hl=ja'
      )
    }
  }
}
</script>

<style scoped>
.name {
  font-size: 1.8rem;
}
.address {
  font-size: 1.6rem;
}
.access-title {
  font-size: 1.4rem;
}
.access-detail {
  width: 500px;
  margin: auto;
}
.access-detail div {
  font-size: 1.2rem;
}

@media (max-width: 767px) {
  .name {
    font-size: 1.1rem;
  }
  .address {
    font-size: 1rem;
  }
  .access-title {
    font-size: 1rem;
  }
  .access-detail {
    width: 250px;
    margin: auto;
  }
  .access-detail div {
    font-size: 1rem;
  }
}
</style>
