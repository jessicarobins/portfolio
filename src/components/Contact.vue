<template>
  <section>
	  <div class="container" id="contact" v-viewport="{onEnter: scrollEnter}">
	    <h1 class="center-align md-display-4">Contact Me</h1>
	    <div class="row">
	      <div class="col s12 m8 offset-m2">
  	      <div class="card-panel">
      	    <form v-on:submit.prevent="sendEmail" novalidate>
      	      <md-input-container v-bind:class="[className(name)]">
      	        <label for="name">Name</label>
                <md-input 
                  required
                  v-model="name"
                  id="name"
                  type="text" />
              </md-input-container>
              <md-input-container v-bind:class="[className(name)]" >
                <label for="email">Email</label>
                <md-input
                  required
                  v-model="email"
                  id="email"
                  type="email" />
              </md-input-container>
              <md-input-container v-bind:class="[className(name)]" >
                <label for="message">Message</label>
                <md-textarea 
                  required
                  rows="4"
                  v-model="message" 
                  id="message" ></md-textarea>
              </md-input-container>
              <md-button class="md-primary md-raised" type="submit">
                Send <i class="material-icons">send</i>
              </md-button>
            </form>
            <div class="spinner-container" v-if="sending">
              <md-spinner md-indeterminate></md-spinner>
            </div>
          </div>
        </div>
      </div>
      <md-snackbar md-position="bottom right" ref="snackbar">
        <span>{{toastText}}</span>
      </md-snackbar>
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
      email: null,
      message: null,
      name: null,
      dirty: false,
      toastText: '',
      sending: false
    }
  },
  methods: {
    className(field) {
      if (field && field.length) {
        return 'valid'
      }
      else {
        return (this.dirty ? 'md-input-invalid' : '')
      }
    },
    scrollEnter() {
      bus.$emit('scrollEnter', 'Contact');
    },
    formIsValid() {
      return this.email && this.email.length && this.message 
        && this.message.length && this.name && this.name.length
    },
    sendEmail(event) {
      if (this.formIsValid()) {
        this.sending = true;
        emailjs.send('gmail', 'default', {
          name: this.name,
          email: this.email,
          message: this.message
        }).then( () => {
          this.sending = false;
          this.toast('Email sent!')
          this.name = this.message = this.email = null
          this.dirty = false;
        }).catch( () => {
          this.sending = false;
          this.toast('Uh oh! Something went wrong.')
        })
      } else {
        this.dirty = true;
        this.toast('All fields are required.')
      }
    },
    toast(text) {
      this.toastText = text,
      this.$refs.snackbar.open()
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
  justify-content: center;
  z-index: 1;
}

.card-panel {
  position: relative;
}

.spinner-container {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.2);
  z-index: 99999;
}

button {
  display: flex;
  align-items: center;
  margin-right: 0;
  margin-left: auto;
  
  i {
    padding-left: 20px;
  }
}

form {
  input, textarea, label {
    font-size: 20px;
  }
  
  .md-input {
    margin: 0;
    
    &:focus {
      border: none;
      box-shadow: none;
    }
  }
}

$zig-zag: #e91e63;
section::after {
  content: '';
  width: 100%;
  height: 200px;
  
  background: 
    linear-gradient(135deg, white 25%, transparent 25%) -100px 0,
    linear-gradient(225deg, white 25%, transparent 25%) -100px 0,
    linear-gradient(315deg, white 25%, transparent 25%),
    linear-gradient(45deg, white 25%, transparent 25%);
  background-size: 200px 200px;
  background-repeat: repeat round;
  background-color: $zig-zag;
  position: absolute;
  bottom: 0;
  z-index: 0;
}
</style>
