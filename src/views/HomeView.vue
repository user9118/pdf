<template>
  <div class="home">
    <VuePdfEmbed
      ref="pdfRef"
      :source="pdfSource"
    />
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

export default {
  name: 'HomeView',
  components: {
    VuePdfEmbed
  },
  data() {
    return {
      pdfSource:
        'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf',
    }
  }
}
</script>
