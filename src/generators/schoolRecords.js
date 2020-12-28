import casual from "casual";
import { resolver } from "../helper/resolver-bash.js";

const school = [
  "UME PORCHAT DE ASSIS",
  "UME LOBO VIANA",
  "UME MARIA HELENA ROXO",
  "UME EDMEA LADEVIG",
];
const course = ["EJA"];
const year = ["5º", "6º", "7º", "9º"];
const lastYear = ["5º", "6º", "7º", "9º"];
const lastCourse = [
  "ENSINO FUNDAMENTAL EJA - SÉRIES ESPECIAIS (SUPLETIVO 5º A 8º)",
];

casual.define("schoolRecords", function () {
  return {
    id: casual.uuid,
    canRead: casual.coin_flip,
    isMunicipalSchool: casual.coin_flip,
    school: casual.random_element(school),
    course: casual.random_element(course),
    year: casual.random_element(year),
    lastYear: casual.random_element(lastYear),
    lastCourse: casual.random_element(lastCourse),
  };
});

resolver(1, casual._schoolRecords);
