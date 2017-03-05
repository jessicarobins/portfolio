<template>
  <section>
	  <div class="container" id="contact" v-viewport="{onEnter: scrollEnter}">
	    <h1 class="center-align">Contact Me</h1>
	    <div class="card-panel">
  	    <form v-on:submit.prevent="sendEmail" novalidate>
  	      <div class="input-field">
            <input v-model="name" id="name" type="text" class="validate" required />
            <label for="name">Name</label>
          </div>
          <div class="input-field">
            <input v-model="email" id="email" type="email" class="validate" required />
            <label for="email">Email</label>
          </div>
          <div class="input-field">
            <textarea v-model="message" id="message" class="materialize-textarea validate" required></textarea>
            <label for="message">Message</label>
          </div>
          <button class="waves-effect waves-light btn" type="submit">
            Send <i class="material-icons">send</i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import bus from '../utils/Bus'
import emailjs from 'emailjs'

export default {
  name: 'contact',
  data() {
    return {
      email: '',
      message: '',
      name: ''
    }
  },
  methods: {
    scrollEnter() {
      bus.$emit('scrollEnter', 'Contact');
    },
    sendEmail(event) {
      if (this.email.length && this.name.length && this.message.length) {
        emailjs.send('gmail', 'default', {
          name: this.name,
          email: this.email,
          message: this.message
        })
      }
    }
  },
  created() {
    emailjs.init('user_b1ijeAQmMMPIiCNyYlcXV')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.btn {
  display: flex;
  
  i {
    padding-left: 20px;
  }
}

form {
  input, textarea, label {
    font-size: 20px;
  }
}
</style>
