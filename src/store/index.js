import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestModules from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestModules,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
