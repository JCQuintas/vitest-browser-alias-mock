// @ts-expect-error
import { addHours } from "date-fns/addHours";
// @ts-expect-error
import { parse } from "date-fns/parse";

function DateFnsV3() {
  return (
    <div data-testid="test">
      {addHours(
        parse("2021-01-01 00:00:00", "yyyy-MM-dd HH:mm:ss", new Date()),
        1,
      ).toISOString()}
    </div>
  );
}

export default DateFnsV3;
