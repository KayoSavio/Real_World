import { createStore } from "vuex";
import users from "./modules/users";
import articles from "./modules/articles";

export default createStore({
  modules: {
    users,
    articles,
  },
});
