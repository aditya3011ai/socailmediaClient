import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "./../../utils/axiosClient";
import { TOAST_SUCCESS } from "../../App";

export const getMyInfo = createAsyncThunk("getMyInfo", async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(setLoading(true));
    const response = await axiosClient.get("/user/getMyInfo");
    return response.result;
  } catch (error) {
    return Promise.reject(error);
  } finally {
    thunkAPI.dispatch(setLoading(false));
  }
});

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.put("/user", body);
      thunkAPI.dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: "Profile Updated",
        })
      );
      return response.result;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);
export const deleteUser = createAsyncThunk("user/deleteUser", async () => {
  try {
    await axiosClient.delete("/user/deleteUser");
  } catch (error) {
    Promise.reject(error.message);
  }
});

const appConfigSlice = createSlice({
  name: "appConfigSlice",
  initialState: {
    isLoading: false,
    myProfile: {},
    toastData: {},
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    showToast: (state, action) => {
      state.toastData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyInfo.fulfilled, (state, action) => {
        state.myProfile = action.payload.user;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.myProfile = action.payload.user;
      });
  },
});

export default appConfigSlice.reducer;
export const { setLoading, showToast } = appConfigSlice.actions;
