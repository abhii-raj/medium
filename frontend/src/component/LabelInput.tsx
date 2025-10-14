import type { ChangeEvent} from "react";

// import React from 'react'
interface LabelType{
    label : String;
    placeholder : string;
    onChange : (e : ChangeEvent<HTMLInputElement>) => void;  
    type ?: string;

}
const LabelInput = ({label , placeholder , onChange , type} : LabelType) => {
  return <div className="max-w-sm pb-4">

  <label  className="block text-sm font-medium mb-2 ">{label}</label>
  <input  onChange={onChange} type={ type || "text"} id="input-label" className="py-2.5 sm:py-3 px-4 block border  w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder={placeholder} />
</div>

    
  
}

export default LabelInput