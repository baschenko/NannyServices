import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

// GET @ /nannies
export const fetchNannies = createAsyncThunk(
  'nannies/fetchAll',
  async ({ page, perPage, filter }, thunkAPI) => {
    try {
      const res = await axios.get(
        `/nannies?page=${page}&limit=${perPage}${filter && `&${filter}`}`
      );
      return res.data;
    } catch (error) {
      error.status === 404 && toast.error('Not found, try changing filter');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET @ /nannies/:nannieId
export const getNannieInfo = createAsyncThunk(
  'nannies/getNannieInfo',
  async (nannieId, thunkAPI) => {
    try {
      const res = await axios.get(`/nannies/${nannieId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
