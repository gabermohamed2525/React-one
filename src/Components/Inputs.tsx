import {IconButton, InputAdornment, TextField} from"@mui/material"
import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";


type Tinputs={
    type: string,
    label: string,
    name:string ,
    error?: boolean,
    helperText ?: string,
    multiline?: boolean;
    rows?: number;
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     register : any
    
}
export default function Inputs( {type , label , name  , register, error , helperText ,  multiline, rows,
}: Tinputs) {
  const [isVisiable , setIsVisiable] = useState(false)
  return (
    <div className="w-150">
      <TextField id="outlined-basic"
      {...register(name)}
       label={label}
       type={type === "password" ? (isVisiable ? "text" : "password") : type}
       name={name}
       fullWidth
       multiline={multiline}
        rows={rows}
       helperText ={helperText}
       error={error}
       slotProps={
  type === "password"
    ? {
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton  onClick={()=>setIsVisiable(prev =>!prev)}>
                {!isVisiable ? <MdRemoveRedEye /> :  <RiEyeCloseLine />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }
    : undefined
}

       variant="outlined" />
       

    </div>
  )
}
