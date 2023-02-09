<template lang="pug">
  div.content--box.content--bottom
    div
      div.title--text Profile
        div.line
          v-divider

      v-row.mt-5(no-gutters)
        v-col(cols="4" offset="1")
          img.icon--img(src="../static/profile/groom.png")
        v-col(cols="4" offset="2")
          img.icon--img(src="../static/profile/bride.png")

      v-row.mt-5(no-gutters)
        v-col.answer(cols="4") GroomName
        v-col.question(cols="4") Name
        v-col.answer(cols="4") BrideName

      v-row.mt-5(no-gutters)
        v-col.answer(cols="4") 2000年1月1日
        v-col.question(cols="4") BirthDay
        v-col.answer(cols="4") 2002年12月31日

      v-row.mt-5(no-gutters)
        v-col.answer(cols="4") A型
        v-col.question(cols="4") Blood Type
        v-col.answer(cols="4") O型

      v-row.mt-5(no-gutters)
        v-col.answer(cols="4") 会社員 営業
        v-col.question(cols="4") Job
        v-col.answer(cols="4") WEBデザイナー

      v-row.mt-5(no-gutters)
        v-col.answer(cols="4") カメラ、読書
        v-col.question(cols="4") Hobby
        v-col.answer(cols="4") 雑貨屋巡り

      v-row.mt-5(no-gutters)
        v-col.answer(cols="4") ラーメン
        v-col.question(cols="4") Food
        v-col.answer(cols="4") パンケーキ

</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {}
  }
}
</script>

<style scoped>
img.icon--img {
  max-width: 300px;
  width: 100%;
  max-height: 100%;
}

.question,
.answer {
  font-size: 1.5rem;
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.question {
  font-weight: bold;
  border-bottom: solid 2px #242540;
}
.answer {
  border-bottom: solid 2px #fafafa;
}

@media (max-width: 767px) {
  .answer,
  .question {
    font-size: 0.8rem;
    min-height: 2rem;
  }
}
</style>
