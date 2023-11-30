import { ProductItemType } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemModel = Pick<ProductItemType, "id" | "img" | "price"> & {
    quantity: number;
};
const initialState: ItemModel[] = [];
export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ItemModel>) {
            state.push(action.payload);
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state = state.filter((item) => item.id !== action.payload);
        },
        updateCart(state, action: PayloadAction<{ id: number; quantity: number }>) {
            const id = action.payload.id;
            state[id] = { ...state[id], quantity: action.payload.quantity };
        },
    },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
