import type { ReactNode } from "react"
import useAuth from "../zustand/authSlice"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute( {children} :{children : ReactNode}) {
    const user = useAuth(s=>s.cuurentUser)
    const isPending = useAuth(s=>s.isPendingCurrentUser)
    if(!isPending && !user){
        return <Navigate to={'/?status=noAuth'} />
    }
  return (
    <div>
      {children}
    </div>
  )
}
