<template>
  <div id="app" class="container py-4">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="onSubmit">
          <BaseInput 
            label="First Name:" 
            v-model="form.firstName" 
          />

          <BaseInput 
            label="Last Name:" 
            v-model="form.lastName" 
          />

          <BaseInput 
            label="Email:" 
            v-model="form.email" 
            type="email" 
          />

          <BaseSelect 
            label="What do you love most about Vue?" 
            :options="loveOptions"
            v-model="form.love"
          />

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
        love: 'fun'
      },
      loveOptions: [
        { label: 'Fun to use', value: 'fun' },
        { label: 'Friendly learning curve', value: 'curve' },
        { label: 'Amazing documentation', value: 'docs' },
        { label: 'Fantastic community', value: 'community' }
      ]
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

      axios.post('http://localhost:3000/dolphins', { params: this.form }).then(response => {
        console.log('Form has been posted', response);
      }).catch(err => {
        console.log('An error ocurred', err);
      });
    }
  }
}
</script>
