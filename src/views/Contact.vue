<template>
  <div class="contact">
    <h1 class="title">This is an contact page</h1>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactForm from '@/components/Form.vue'

export default {
  name: 'contact',
  data() {
  return {
    texte:"Formulaire de contact"
  }
  },
  components: {
    ContactForm
  }
}
</script>

