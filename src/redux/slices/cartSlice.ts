import { ProductItemType } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ItemModel = Pick<ProductItemType, "id" | "img" | "price" | "description"> & {
    quantity: number;
};
const initialState: ItemModel[] = [];
export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ItemModel>) {
            // Check an item if already in the cart
            const productIndex = state.findIndex((item) => item.id === action.payload.id);

            // If product has not existed in the cart, add it to the cart
            if (productIndex !== -1) {
                state[productIndex].quantity += action.payload.quantity;
                return;
            }
            // Otherwise, add to new item in cart
            state.push(action.payload);
        },
        removeFromCart(state, action: PayloadAction<number>) {
            return state.filter((item) => item.id !== action.payload);
        },
        updateItemQuantity(
            state,
            action: PayloadAction<{ id: number; quantity: number }>
        ) {
            const productIndex = state.findIndex((item) => item.id === action.payload.id);
            state[productIndex].quantity = action.payload.quantity;
        },
    },
});

export const { addToCart, removeFromCart, updateItemQuantity } = cartSlice.actions;
