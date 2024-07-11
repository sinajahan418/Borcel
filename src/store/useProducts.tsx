import { create } from "zustand";

export const useProduct = create((set)=>({
  oneProduct :[],
  setOneProduct : (oneProduct : any)=> set({oneProduct})
}))