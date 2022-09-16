export default {
    namespaced: true,
    state: {
        postList: ["Post 1", "Post 2", "Post 3"],
    },

    getters: {
        countTotalPost(state) {
            return state.postList.length;
        },
    },

    mutations: {
        AddPost(state, data) {
            state.postList.push(data);
        },
        RemovePost(state, index) {
            state.postList.splice(index, 1);
        },

        // RemovePostWithoutUsingAction(state, index) {
        //     state.postList.splice(index, 1);
        // }
    },

    actions: {
        addPost(contex, payloadData) {
            contex.commit("AddPost", payloadData);
        },

        removePost(contex, index) {
            contex.commit("RemovePost", index);
        },

        checkAction() {
            alert("I am checking action without mutation");
        },
    },
};