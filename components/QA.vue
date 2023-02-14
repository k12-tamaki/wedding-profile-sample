<template lang="pug">
  div.content--box.content--bottom
    div
      div.title--text Beginning
        div.line
          v-divider

      v-row.mt-5(no-gutters align="center")
        v-col(cols="12")
          v-list.qa--content(color="transparent")
            v-list-group.question--content(
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              no-action=""
              active-class="question--content--active"
            )
              template(v-slot:activator="")
                v-list-item-content
                  v-list-item-title.question--item.ptb--08 {{item.question}}
              v-list-item.answer--item.ptb--08(no-action)
                div
                  p(v-for="answer in item.answer") {{answer}}

</template>

<script>
export default {
  name: 'Beginning',
  components: {},
  data() {
    return {
      items: [
        {
          question: '2人の出会いは？',
          answer: [
            '職場の先輩と後輩',
            '新郎が働いてる部署に新人として新婦がやってきました。',
            '初めての飲み会で意気投合して、徐々に2人で飲みに行く機会が増えました。'
          ]
        },
        {
          question: 'プロポーズの言葉は？',
          answer: [
            '「2人で幸せになろう」',
            'と浜辺で新郎からプロポーズしました。'
          ]
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.qa--content {
  border-top: 1px solid #1b2538;
  border-color: #1b2538 !important;
  padding: 0;
}
.question--content {
  border-bottom: 1px solid #1b2538;
}
.question--item {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1b2538;
}
.question--content--active .question--item {
  color: #00838f;
}

.answer--item {
  padding-left: 1rem !important;
  text-align: left;
  background: rgba(0, 131, 143, 0.5);
}
.answer--item p {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: bold;
}
@media (max-width: 767px) {
  .answer--item p {
    font-size: 1rem;
  }
}

.ptb--08 {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}
</style>
