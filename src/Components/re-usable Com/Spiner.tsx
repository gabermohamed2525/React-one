import { TbLoader3 } from "react-icons/tb";

export default function Spiner() {
  return (
    <div className="flex items-center justify-center gap-3">
        <TbLoader3 className=" animate-spin"/>
      Loading...
    </div>
  )
}
