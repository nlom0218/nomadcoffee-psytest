import { makeVar } from "@apollo/client";

export const darkModeVar = makeVar(localStorage.getItem("dark"))
export const scoreVar = makeVar(0)