import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store/store";
import { actionsStatus } from "../../enums/actionsStatus";
import { itemsList, getItems } from "./ItemsApi";
import thunk from "redux-thunk";
// const baseUrl = "https://fakestoreapi.com/products/category/jewelery";

export interface itemsSliceState {
  value: itemsList[];
  status: actionsStatus.idle | actionsStatus.failed | actionsStatus.loading;
}

const initialState: itemsSliceState = {
  value: [],
  status: actionsStatus.idle,
};

const fetchAllItems = createAsyncThunk("items/fetchAllItems", async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    ).then((r) => r.json());
    return response;
  } catch (e) {
    console.log("error");
  }
});

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllItems.pending, (state) => {
        state.status = actionsStatus.loading;
        state.value = [];
      })
      .addCase(fetchAllItems.fulfilled, (state, action) => {
        state.status = actionsStatus.idle;
        state.value = action.payload;
      })
      .addCase(fetchAllItems.rejected, (state) => {
        state.status = actionsStatus.failed;
        state.value = [];
      });
  },
});

// actions
export const actions = {
  ...itemsSlice.actions,
  fetchAllItems,
};

// selectors
export const seletors = {
  selectItems: (state: RootState): itemsList[] => state.items.value,
  selectStatus: (state: RootState): actionsStatus => state.items.status,
};

export default itemsSlice.reducer;
