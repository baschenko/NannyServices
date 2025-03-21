export const selectLoading = state => state.nannies.isLoading;

export const selectFilter = state => state.filters.value;

export const selectAllNannies = state => state.nannies.items;

export const selectNannie = state => state.nannies.nannie;

export const selectTotal = state => state.nannies.total;

export const selectPerPage = state => state.nannies.perPage;

export const selectPage = state => state.nannies.page;

export const selectFavoriteItems = state => state.nannies.favoriteItem;
