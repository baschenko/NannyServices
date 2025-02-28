import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchNannies, getNannieInfo } from './operations.js';

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState: {
    items: [],
    favoriteItem: [],
    total: 0,
    page: 1,
    perPage: 4,
    nannie: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearItems(state) {
      state.items = [];
      state.total = 0;
      state.page = 1;
    },

    setPage(state) {
      state.page = state.page + 1;
    },

    addToFavorite(state, { payload }) {
      state.favoriteItem = [...state.favoriteItem, payload];
    },

    deleteFromFavorite(state, { payload }) {
      state.favoriteItem = state.favoriteItem.filter(
        favorite => favorite.id !== payload
      );
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchNannies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...payload.items];
        state.total = payload.total;
      })

      .addCase(getNannieInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.nannie = payload;
      })

      .addMatcher(
        isAnyOf(fetchNannies.pending, getNannieInfo.pending),
        state => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(fetchNannies.rejected, getNannieInfo.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { clearItems, setPage, addToFavorite, deleteFromFavorite } =
  nanniesSlice.actions;
export default nanniesSlice.reducer;
