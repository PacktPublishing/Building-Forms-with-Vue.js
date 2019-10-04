<template>
  <div id="app" class="container py-4">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>First Name:</label>
            <input v-model="form.firstName" type="text" class="form-control">
          </div>

          <div class="form-group">
            <label>Last Name:</label>
            <input v-model="form.lastName" type="text" class="form-control">
          </div>

          <div class="form-group">
            <label>Email:</label>
            <input v-model="form.email" type="email" class="form-control">
          </div>

          <div class="form-group">
            <button 
              :disabled="!formIsValid"
              type="submit" 
              class="btn btn-primary"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  },
  computed: {
    formIsValid() {
      return this.form.firstName.length > 0 && this.form.lastName.length > 0 && this.form.email.length > 0;
    }
  },
  methods: {
    onSubmit() {
      if (!this.formIsValid) return;

      axios.get('', { params: this.form }).then(response => {
        console.log('Form has been posted', response);
      }).catch(err => {
        console.log('An error ocurred', err);
      });
    }
  }
}
</script>