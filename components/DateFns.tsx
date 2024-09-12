import { addHours, parse } from "date-fns";

function DateFns() {
  return (
    <div data-testid="test">
      {addHours(
        parse("2021-01-01 00:00:00", "yyyy-MM-dd HH:mm:ss", new Date()),
        1,
      ).toISOString()}
    </div>
  );
}

export default DateFns;
