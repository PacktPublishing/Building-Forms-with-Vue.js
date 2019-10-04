<template>
  <div id="app" class="container py-4">
    <TheHeader />
    
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="onSubmit">
          <BaseInput 
            label="First Name:"
            :value="$store.state.user.firstName"
            @input="updateUser('firstName', $event)"
            :validator="$v.form.firstName"
          />

          <BaseInput  
            label="Last Name:"
            :value="$store.state.user.lastName"
            @input="updateUser('lastName', $event)"
            :validator="$v.form.lastName"
          />

          <BaseInput 
            label="Email:" 
            :value="$store.state.user.email"
            @input="updateUser('email', $event)"
            :validator="$v.form.email"
            type="email" 
          />

          <BaseInput 
            label="The URL of your favorite Vue-made website"
            :value="$store.state.user.website"
            @input="updateUser('website', $event)"
            :validator="$v.form.website"
          />

          <BaseInput 
            label="Telephone"
            type="text" 
            :value="$store.state.user.telephone"
            @input="updateUser('telephone', $event)"
            :validator="$v.form.telephone"
            :mask="'(###)###-####'"
          />

          <BaseSelect 
            label="What do you love most about Vue?" 
            :options="loveOptions"
            :value="$store.state.user.love"
            @input="updateUser('love', $event)"
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
import { mapState } from 'vuex';
import { url, alpha, email, required } from 'vuelidate/lib/validators';

import BaseInput from '@/components/BaseInput';
import BaseSelect from '@/components/BaseSelect';
import TheHeader from '@/components/TheHeader';

export default {
  name: 'app',
  components: { BaseInput, BaseSelect, TheHeader },
  data() {
    return {
      loveOptions: [
        { label: 'Fun to use', value: 'fun' },
        { label: 'Friendly learning curve', value: 'curve' },
        { label: 'Amazing documentation', value: 'docs' },
        { label: 'Fantastic community', value: 'community' }
      ]
    }
  },
  computed: {
    ...mapState({form: 'user'}),
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
    },
    updateUser(property, value) {
      this.$store.dispatch('updateUserData', {
        property,
        value
      });
      
      this.$v.form[property].$touch();
    }
  },
  created() {
    this.$store.dispatch('getLoggedInUser');
  }
}
</script>
