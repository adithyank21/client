

import{createContext,useState} from 'react';
const commentContext=createContext();
export function ComponentProvider({children}){
    const [comment,setcomment] =useState("")
  return(
   <commentContext.Provider value={{comment,setcomment}}>{children}</commentContext.Provider>
  )
}
export default commentContext;