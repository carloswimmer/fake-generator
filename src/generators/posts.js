import casual from "casual";
import { resolver } from "../helper/resolver-bash.js";

const userId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

casual.define("posts", function () {
  return {
    id: casual.integer(1, 100),
    title: casual.short_description,
    body: casual.text,
    userId: casual.random_element(userId),
  };
});

resolver(100, casual._posts);
