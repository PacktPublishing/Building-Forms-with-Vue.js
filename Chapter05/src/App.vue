<template>
  <div id="app" class="container py-4">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="onSubmit">
          <BaseInput 
            label="First Name:" 
            v-model="$v.form.firstName.$model" 
            :validator="$v.form.firstName"
          />

          <BaseInput 
            label="Last Name:" 
            v-model="$v.form.lastName.$model" 
            :validator="$v.form.lastName"
          />

          <BaseInput 
            label="Email:" 
            v-model="$v.form.email.$model" 
            :validator="$v.form.email"
            type="email" 
          />

          <BaseInput 
            label="The URL of your favorite Vue-made website"
            v-model="$v.form.website.$model"
            :validator="$v.form.website"
          />

          <BaseInput 
            label="Telephone"
            type="text" 
            v-model="$v.form.telephone.$model"
            :validator="$v.form.telephone"
            :mask="'(###)###-####'"
          />

          <BaseSelect 
            label="What do you love most about Vue?" 
            :options="loveOptions"
            v-model="$v.form.love.$model"
            :validator="$v.form.love"
          />

          <div class="form-group">
            <button 
              :disabled="$v.$error" 
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
import { url, alpha, email, required } from 'vuelidate/lib/validators';

import BaseInput from '@/components/BaseInput';
import BaseSelect from '@/components/BaseSelect';

export default {
  name: 'app',
  components: { BaseInput, BaseSelect },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        love: 'fun',
        telephone: '',
        website: ''
      },
      loveOptions: [
        { label: 'Fun to use', value: 'fun' },
        { label: 'Friendly learning curve', value: 'curve' },
        { label: 'Amazing documentation', value: 'docs' },
        { label: 'Fantastic community', value: 'community' }
      ]
    }
  },
  validations: {
    form: {
      firstName: { alpha, required },
      lastName: { alpha },
      email: { email, required },
      telephone: {
        validPhone: phone => phone.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) !== null
      },
      website: { url },
      love: { required }
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) return;

      axios.post('http://localhost:3000/dolphins', { params: this.form }).then(response => {
        console.log('Form has been posted', response);
      }).catch(err => {
        console.log('An error ocurred', err);
      });
    }
  }
}
</script>
