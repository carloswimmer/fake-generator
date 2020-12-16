import casual from "casual";
import { resolver } from "../helper/resolver-bash.js";

const unit = ["SECRAS-SB", "SECRAS-ZOI", "SECRAS-NC", "SECRAS-RC"];
const format = "YYYY-MM-DD";

casual.define("appointmentsRis", function () {
  return {
    id: casual.uuid,
    unit: casual.random_element(unit),
    appointmentDate: casual.date(format),
    description: casual.short_description,
    appointmentContent: casual.text,
  };
});

resolver(10, casual._appointmentsRis);
