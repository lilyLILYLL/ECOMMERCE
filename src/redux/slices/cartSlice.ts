import { ProductItemType } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ItemModel = Pick<ProductItemType, "id" | "img" | "price" | "description"> & {
    quantity: number;
};
export type CartModel = {
    items: ItemModel[];
    totalPrice: number;
};

const initialState: CartModel = {
    items: [],
    totalPrice: 0,
};
export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ItemModel>) {
            // Check an item if already in the cart
            const productIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            // If product has not existed in the cart, add it to the cart
            if (productIndex !== -1) {
                state.items[productIndex].quantity += action.payload.quantity;
            } else {
                // Otherwise, add to new item in cart
                state.items.push(action.payload);
            }

            // update totalPrice
            state.totalPrice += action.payload.quantity * action.payload.price;
        },
        removeFromCart(state, action: PayloadAction<number>) {
            // Find ProductIndex
            const productIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );
            // update totalPrice
            state.totalPrice -=
                state.items[productIndex].price * state.items[productIndex].quantity;

            // update items list
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateItemQuantity(
            state,
            action: PayloadAction<{ id: number; quantity: number }>
        ) {
            const productIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            state.items[productIndex].quantity = action.payload.quantity;
            state.totalPrice = state.items
                .map((item) => item.price * item.quantity)
                .reduce((a, b) => a + b, 0);
        },
    },
});

export const { addToCart, removeFromCart, updateItemQuantity } = cartSlice.actions;
