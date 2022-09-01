export const selectCountriesInfo = (state) => ({
    status: state.counties.status,
    error: state.counties.error,
    qty: state.counties.list.length,
});

export const selectAllCountries = (state) => state.countries.list;
