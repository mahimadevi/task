import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TextBox {
  id: string;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
  fontFamily: string;
  fontColor: string;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  textAlign: "left" | "center" | "right"; // Add text alignment
}

interface TextState {
  textBoxes: TextBox[];
  selectedId: string | null;
  fontSize: number;
  fontFamily: string;
  fontColor: string;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  textAlign: "left" | "center" | "right"; // Add text alignment
}

const initialState: TextState = {
  textBoxes: [],
  selectedId: null,
  fontSize: 16,
  fontFamily: "Arial",
  fontColor: "#000000",
  isBold: false,
  isItalic: false,
  isUnderline: false,
  textAlign: "left", // Default text alignment
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    addTextBox: (state, action: PayloadAction<Omit<TextBox, "id">>) => {
      const id = `text-${Date.now()}`;
      state.textBoxes.push({
        id,
        ...action.payload,
        fontSize: state.fontSize,
        fontFamily: state.fontFamily,
        fontColor: state.fontColor,
        isBold: state.isBold,
        isItalic: state.isItalic,
        isUnderline: state.isUnderline,
        textAlign: state.textAlign,
      });
    },
    updateTextBox: (state, action: PayloadAction<TextBox>) => {
      const index = state.textBoxes.findIndex(
        (box) => box.id === action.payload.id
      );
      if (index !== -1) {
        state.textBoxes[index] = action.payload;
      }
    },
    deleteTextBox: (state, action: PayloadAction<string>) => {
      state.textBoxes = state.textBoxes.filter(
        (box) => box.id !== action.payload
      );
    },
    setSelectedId: (state, action: PayloadAction<string | null>) => {
      state.selectedId = action.payload;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
      if (state.selectedId) {
        const box = state.textBoxes.find((box) => box.id === state.selectedId);
        if (box) {
          box.fontSize = action.payload;
        }
      }
    },
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
      if (state.selectedId) {
        const box = state.textBoxes.find((box) => box.id === state.selectedId);
        if (box) {
          box.fontFamily = action.payload;
        }
      }
    },
    setFontColor: (state, action: PayloadAction<string>) => {
      state.fontColor = action.payload;
      if (state.selectedId) {
        const box = state.textBoxes.find((box) => box.id === state.selectedId);
        if (box) {
          box.fontColor = action.payload;
        }
      }
    },
    setBold: (state, action: PayloadAction<boolean>) => {
      state.isBold = action.payload;
      if (state.selectedId) {
        const box = state.textBoxes.find((box) => box.id === state.selectedId);
        if (box) {
          box.isBold = action.payload;
        }
      }
    },
    setItalic: (state, action: PayloadAction<boolean>) => {
      state.isItalic = action.payload;
      if (state.selectedId) {
        const box = state.textBoxes.find((box) => box.id === state.selectedId);
        if (box) {
          box.isItalic = action.payload;
        }
      }
    },
    setUnderline: (state, action: PayloadAction<boolean>) => {
      state.isUnderline = action.payload;
      if (state.selectedId) {
        const box = state.textBoxes.find((box) => box.id === state.selectedId);
        if (box) {
          box.isUnderline = action.payload;
        }
      }
    },
    setTextAlign: (
      state,
      action: PayloadAction<"left" | "center" | "right">
    ) => {
      state.textAlign = action.payload;
      if (state.selectedId) {
        const box = state.textBoxes.find((box) => box.id === state.selectedId);
        if (box) {
          box.textAlign = action.payload;
        }
      }
    },
  },
});

export const {
  addTextBox,
  updateTextBox,
  deleteTextBox,
  setSelectedId,
  setFontSize,
  setFontFamily,
  setFontColor,
  setBold,
  setItalic,
  setUnderline,
  setTextAlign,
} = textSlice.actions;

export default textSlice.reducer;
