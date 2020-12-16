import casual from "casual";
import { resolver } from "../helper/resolver-bash.js";

const cpf = "###########";
const rg = "#########";
const format = "YYYY-MM-DD";
const genre = ["M", "F"];
const maritalStatus = ["CASADO(A)", "SOLTEIRO(A)", "SEPARADO(A)", "VIUVO(A)"];
const educationLevel = [
  "eEM_EducationLevel",
  "FUNDAMENTAL",
  "ENSINO_MEDIO",
  "ENSINO_SUPERIOR",
];
const ethnicity = ["NAO_INFORMADA", "BRANCA", "PRETA", "INDIGENA"];

casual.define("people", function () {
  return {
    id: casual.uuid,
    name: casual.full_name.toUpperCase(),
    socialName: casual.full_name.toUpperCase(),
    cpf: casual.numerify(cpf),
    rg: casual.numerify(rg),
    birthDate: casual.date(format),
    genre: casual.random_element(genre),
    maritalStatus: casual.random_element(maritalStatus),
    educationLevel: casual.random_element(educationLevel),
    ethnicity: casual.random_element(ethnicity),
  };
});

resolver(10, casual._people);
