import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TranslationState {
  language: string;
  translations: {
    [key: string]: {
      en: string;
      es: string;
    };
  };
}

const initialState: TranslationState = {
  language: "es",
  translations: {},
};

const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setTranslations: (
      state,
      action: PayloadAction<{ [key: string]: { en: string; es: string } }>
    ) => {
      state.translations = action.payload;
    },
  },
});

export const { setLanguage, setTranslations } = translationSlice.actions;

export const store = configureStore({
  reducer: {
    translations: translationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
