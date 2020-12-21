# fake-generator

Project to generate sample data to work on frontend projects before API is ready.

## Usage

- Create in `generators` a JS file especifying into `casual.define`:

  - first argument - name of function to be resolved.
  - callback - the keys and the `casual` type of data.

- In `resolver`:
  - number of registers of your sample data.
  - `casual._` + name of the function to be resolved

```javascript
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
```

## Casual Generators

See all the possibilities of generator types in [Casual README.md](https://github.com/boo1ean/casual) .

## Running the Generator

```bash
npm run generator --file=nameOfMyFile.js
```
