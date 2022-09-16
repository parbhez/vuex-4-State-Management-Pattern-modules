export default {
    namespaced: true,
    state: {
        categoryList: ["Category 1", "Category 2", "Category 3"],
    },

    getters: {
        countTotalCategory(state) {
            return state.categoryList.length;
        },
    },

    mutations: {
        AddCategory(state, data) {
            state.categoryList.push(data);
        },
        RemoveCategory(state, index) {
            state.categoryList.splice(index, 1);
        },

        // RemoveCategoryWithoutUsingAction(state, index) {
        //     state.categoryList.splice(index, 1);
        // }
    },

    actions: {
        addCategory(contex, payloadData) {
            contex.commit("AddCategory", payloadData);
        },

        removeCategory(contex, index) {
            contex.commit("RemoveCategory", index);
        },

        checkAction() {
            alert("I am checking action without mutation");
        },
    },
};