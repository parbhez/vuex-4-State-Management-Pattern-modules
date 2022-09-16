<template>
  <div>
    <div class="container mt-5">
      <div class="col-md-12">
        <div class="row">
          
          <CategoryComponent></CategoryComponent>

          <PostComponent></PostComponent>

         

        </div>
      </div>
    </div>
  </div>
</template>

<script>

// Locally Register post and category componet

import CategoryComponent from './components/Category-Component.vue'
import PostComponent from './components/Post-Component.vue'


export default {
  components: {
    CategoryComponent,
    PostComponent
  }

}
</script>

<style scoped></style>
