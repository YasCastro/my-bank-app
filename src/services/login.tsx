/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";

export const login = async (email: string): Promise<void> => {
  const { setIsLoggedIn } = useContext(AppContext)
  console.log(setIsLoggedIn)
  
  const data: any = await api;
  if (email !== data.email)
  {
    return alert('E-mail inválido!');
  }
  setIsLoggedIn(true)
  alert(`Bem vinda ${email}!`);
}