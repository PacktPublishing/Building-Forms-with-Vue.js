<template>
  <div class="row">
    <div class="col-12 text-right">
      <p v-if="$store.state.user">
        Welcome back, {{ $store.state.user.firstName }}!
      </p>
    </div>
  </div>
</template>
