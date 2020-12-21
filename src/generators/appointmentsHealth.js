import casual from "casual";
import { resolver } from "../helper/resolver-bash.js";

const type = ["NORMAL", "EMERGENCIA"];
const dateFormat = "YYYY-MM-DD";
const hourFormat = "HH:mm";
const unit = [
  "UBS JABAQUARA",
  "SESFAMI MORRO DO SAO BENTO",
  "SESFAMI AREIA BRANCA",
  "POLICLINICA BOM RETIRO",
];

casual.define("appointmentsHealth", function () {
  return {
    id: casual.uuid,
    type: casual.random_element(type),
    appointmentDate: casual.date(dateFormat),
    appointmentHour: casual.date(hourFormat),
    unit: casual.random_element(unit),
    missed: casual.coin_flip,
    canceled: casual.coin_flip,
  };
});

resolver(10, casual._appointmentsHealth);
