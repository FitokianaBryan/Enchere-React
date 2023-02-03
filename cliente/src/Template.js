import React,{useState} from "react";
import { UserIndividual } from './UserIndividual';
import {  ListEnchere } from './ListEnchere';
import { EditUser } from './EditUser';
import { User } from './User';

export function Tabs({children}){
    const childrenArray=React.Children.toArray(children)
    console.log(React.Children.toArray(children))
    //console.log("key: "+childrenArray[0].key)
    //changer l' etat
    const [current,setcurrent]=useState(childrenArray[0].key)
    //cloner l'element
    const newchildren=childrenArray.map(child=>{
        return React.cloneElement(child,{selected:child.key===current})
    }   
    )
    return <div>
        { childrenArray.map(child=>(
           <li className="nav-item">
           <a className="nav-link" href="#" key={child.key} onClick={()=>setcurrent(child.key)} >{child.props.title}</a>
         </li>
        ))
        }
        <section>{newchildren}</section>
    </div>;
}
export function Tab({children,selected}){
    return <div hidden={!selected}>
        {children}
    </div>;
}
export function Application({children}){
   const listchild=React.Children.toArray(children)
   const [indice,setindice]=useState(listchild[0].key)
   const template=listchild.map(child=>{
        return React.cloneElement(child,{trues:child.key===indice})
   })
return <div className="App">
   <nav className="navbar navbar-expand-lg bg-dark">
<div className="container-fluid">
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    { listchild.map(child=>(
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={function(){setindice(child.key)}}>{child.props.title}</a>
       </li>
    ))
    }
      </ul>
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> 
        </div> 
       </div>
     </nav>
       {template}
  </div>
}
export function App1({children,trues}){
    return <div hidden={!trues}>
          {children}
    </div>;
}