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
  methods: {
    onSubmit() {
      console.log('Submit clicked');
    }
  }
}
</script>
