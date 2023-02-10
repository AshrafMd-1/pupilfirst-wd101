/*
 * The function should return the names of those entries whose date is the current date. The names should be separated by a comma.
 *
 * For example, here's an array of three entries and assume the date now is 2022-04-01.
 *
 * [{ name: "Harry" , date: "2022-04-01T02:53:42+05:30" }, { name: "Hermione" , date: "2023-02-05T02:53:42+05:30" }, { name: "Ron" , date: "2023-02-05T03:53:42+05:30" }]
 *
 * The function should return: ``` Harry,Ron ```. Please note that the names are separated by a comma without space.
 */

function todaysEntries(entries) {
  // Complete the function
  let digits = (date) => {
    if (Number(date) < 10) {
      return "0" + String(date);
    } else {
      return String(date);
    }
  };
  let today = new Date();
  let date = `${today.getFullYear()}-${digits(today.getMonth() + 1)}-${digits(
    today.getDate()
  )}`;

  let filtered = entries.filter((entry) => entry.date.includes(date));
  let names = filtered.map((item) => item.name);
  return names.join(",");
}

module.exports = todaysEntries;
