import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        message: 'Hello everyone with Vuex!',
    },
    mutations: {
        setMessage(state, newMessage) {
            state.message = newMessage;
        }
    }
});