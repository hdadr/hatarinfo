const countries = [
  { name: "Magyarország", code: "hu", neighbours: ["rs", "ro", "ua", "sl", "sk", "at", "hr"] },
  { name: "Szerbia", code: "rs", neighbours: ["hu", "ro", "hr"] },
  { name: "Románia", code: "ro", neighbours: ["rs", "ua", "hu"] },
  { name: "Ukrajna", code: "ua", neighbours: ["ro", "sk", "hu"] },
  { name: "Slovénia", code: "sl", neighbours: ["hu", "at", "hr"] },
  { name: "Szlovákia", code: "sk", neighbours: ["at", "hu", "ua"] },
  { name: "Ausztria", code: "at", neighbours: ["sl", "sk", "hu"] },
  { name: "Horvátország", code: "hr", neighbours: ["rs", "sl"] },
];

export const initialState = {
  countries,
  selectedCountries: {
    from: countries[0],
    to: countries[1],
  },
};