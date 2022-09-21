<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Vuex modules (category module) using in vue js 3</h3>
      </div>

      <div class="card-body">
        <h1>Total Category : {{ totalCategory }}</h1>
        <input
          type="text"
          v-model="category"
          placeholder="Enter input"
          class="form-control"
        /><br />
        <button class="btn btn-success btn-sm" @click="addCategory(category)">
          Add Category
        </button>
      </div>

      <div class="card-header">
        <h4>Category List Show</h4>
      </div>

      <div class="card-body">
        <ul>
          <li v-for="(category, index) in showCategory" :key="index">
            {{ category }}
            <button
              class="btn btn-danger btn-sm"
              @click="removeCategory(index)"
            >
              Remove
            </button>
          </li>
        </ul>

        <button @click="checkAction">Check Action</button>
        <br />
        <br />
        <br />

        <div>
          <label for="">Multi Select </label>
          <multi-select 
          v-model="value" :options="options" :multiple="true" :custom-label="nameWithLang" placeholder="Please Select one" label="name" track-by="name"

          
          
          ></multi-select>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      category: "",
      value: null,
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    };
  },

  computed: {
    // showCategory(){
    //   return this.$store.state.category.categoryList;
    // },

    ...mapState({
      showCategory: (state) => state.category.categoryList,
    }),

    //without use namespace
    // totalCategory(){
    //   return this.$store.getters.countTotalCategory
    // },

    // use namespace
    // totalCategory(){
    //   return this.$store.getters['category/countTotalCategory']
    // }

    ...mapGetters("category", {
      totalCategory: "countTotalCategory",
    }),
  },

  methods: {
    //===========================@@Namespaced:false start @@================
    //when namespaced: false then
    // addCategory(){
    //  return this.$store.dispatch('addCategory',this.category);
    // },

    //when namespaced: false then
    // removeCategory(index){
    //   return this.$store.dispatch('removeCategory',index);
    // },
    //===========================@@Namespaced:false end @@================

    //===========================@@Namespaced:true start @@================
    //when namespaced:true then
    // addCategory(){
    //  return this.$store.dispatch('category/addCategory',this.category);
    // },

    //when namespaced: true then
    // removeCategory(index){
    //   return this.$store.dispatch('category/removeCategory',index);
    // },

    //without using action
    //action using na kora cara o mutations e kaj kora jay.
    //tobe best practice action use kora
    // removeCategory(index){
    //   return this.$store.commit('RemoveCategoryWithoutUsingAction',index);
    // },

    // checkAction(){
    //   return this.$store.dispatch('category/checkAction');
    // }

    ...mapActions("category", {
      removeCategory: "removeCategory",
      addCategory: "addCategory",
      checkAction: "checkAction",
    }),

    //===========================@@Namespaced:true end @@================
  },
};
</script>

<style scoped></style>
