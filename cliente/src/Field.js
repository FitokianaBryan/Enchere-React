import React from "react";
export  function Field({value,children,onChange})
{
    return(
           <div className="mb-3">
                   <label htmlFor="nombre" className="form-label">{children}</label>
                   <input type="text" className="form-control"  onChange={onChange} value={value}></input>
           </div>
    );
}