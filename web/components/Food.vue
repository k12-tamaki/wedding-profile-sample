<template lang="pug">
  div.content--box.content--bottom
    v-row(no-gutters)
      v-col(cols="12")
        div.title--text Food
        div.line
          v-divider

    v-row.mt-5(no-gutters)
      v-col(cols="12")
        div.comment.mb-3 お料理選択の参考にしてください
      v-col(md="6" cols="12")
        img(src="~@/static/food/food01.jpg")
        div.comment.mb-5 黒毛和牛のステーキ
      v-col(md="6" cols="12")
        img(src="~@/static/food/food02.jpg")
        div.comment.mb-5 海鮮お作り

</template>

<script>
export default {
  name: 'Food',
  data() {
    return {}
  }
}
</script>

<style scoped>
.comment {
  font-size: 1.5rem;
}
@media (max-width: 767px) {
  .comment {
    font-size: 1rem;
  }
}

img {
  max-width: 90%;
  max-height: 90%;
}
</style>
