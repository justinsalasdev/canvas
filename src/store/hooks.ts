import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useSetter = () => useDispatch<AppDispatch>();
export const useGetter: TypedUseSelectorHook<RootState> = useSelector;
