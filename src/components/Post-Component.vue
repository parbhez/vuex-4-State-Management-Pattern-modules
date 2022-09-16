<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Vuex modules (post module) using in vue js 3</h3>
      </div>

      <div class="card-body">
        <h1>Total Post : {{ totalPost }}</h1>
        <input
          type="text"
          v-model="post"
          placeholder="Enter input"
          class="form-control"
        /><br />
        <button class="btn btn-success btn-sm" @click="addPost(post)">
          Add Post
        </button>
      </div>

      <div class="card-header">
        <h4>Post List Show</h4>
      </div>

      <div class="card-body">
        <ul>
          <li v-for="(post, index) in showPost" :key="index">
            {{ post }}
            <button class="btn btn-danger btn-sm" @click="removePost(index)">
              Remove
            </button>
          </li>
        </ul>

        <button @click="checkAction">Check Action</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      post: "",
    };
  },

  computed: {
    // showPost(){
    //   return this.$store.state.post.postList;
    // },

    ...mapState({
      showPost: (state) => state.post.postList,
    }),

    //without use namespace
    // totalPost(){
    //   return this.$store.getters.countTotalPost
    // },

    // use namespace
    // totalPost(){
    //   return this.$store.getters['post/countTotalPost']
    // }

    ...mapGetters("post", {
      totalPost: "countTotalPost",
    }),
  },

  methods: {
    //===========================@@Namespaced:false start @@================
    //when namespaced: false then
    // addPost(){
    //  return this.$store.dispatch('addPost',this.post);
    // },

    //when namespaced: false then
    // removePost(index){
    //   return this.$store.dispatch('removePost',index);
    // },
    //===========================@@Namespaced:false end @@================

    //===========================@@Namespaced:true start @@================
    //when namespaced:true then
    // addPost(){
    //  return this.$store.dispatch('post/addPost',this.post);
    // },

    //when namespaced: true then
    // removePost(index){
    //   return this.$store.dispatch('post/removePost',index);
    // },

    //without using action
    //action using na kora cara o mutations e kaj kora jay.
    //tobe best practice action use kora
    // removePost(index){
    //   return this.$store.commit('RemovePostWithoutUsingAction',index);
    // },

    // checkAction(){
    //   return this.$store.dispatch('post/checkAction');
    // }

    ...mapActions("post", {
      removePost: "removePost",
      addPost: "addPost",
      checkAction: "checkAction",
    }),

    //===========================@@Namespaced:true end @@================
  },
};
</script>

<style scoped></style>
