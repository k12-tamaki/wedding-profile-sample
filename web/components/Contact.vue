<template lang="pug">
  div.content--box.content--bottom
    v-row(no-gutters)
      v-col(cols="12")
        div.title--text Contact
        div.line
          v-divider

    v-row.mt-5(no-gutters)
      v-col(cols="6")
        div.item GroomName
        div.mt-3
          v-btn(fab dark color="secondary" @click="onClickTel('groom')")
            v-icon phone
          v-btn.ml-3(fab dark color="secondary" @click="onClickMail('groom')")
            v-icon mail
      v-col(cols="6")
        div.item BrideName
        div.mt-3
          v-btn(fab dark color="secondary" @click="onClickTel('bride')")
            v-icon phone
          v-btn.ml-3(fab dark color="secondary" @click="onClickMail('bride')")
            v-icon mail
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {}
  },
  methods: {
    onClickTel(type) {
      if (type === 'groom') {
        location.href = 'tel:0000000000'
      }
      if (type === 'bride') {
        location.href = 'tel:1234567890'
      }
    },
    onClickMail(type) {
      if (type === 'groom') {
        location.href = 'mailto:abcdefghijk@gmail.com'
      }
      if (type === 'bride') {
        location.href = 'mailto:lmnopqrstu@gmail.com'
      }
    }
  }
}
</script>

<style scoped>
div.item {
  font-size: 1.5rem;
}
@media (max-width: 767px) {
  div.item {
    font-size: 1rem;
  }
}
</style>
