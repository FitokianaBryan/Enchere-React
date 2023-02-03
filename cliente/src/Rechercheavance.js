import {Field} from './Field';
export function Rechercheavance(){
    return(
         <div className="col-md-4">
                         <div className="container py-5 shadow-lg border-1">
                                <div className="Listuser">
              <div className='col-md-3'>
                     <Field onChange={"test"} value={""}  >test1</Field>
              </div>
              <div className='col-md-3'>
                     <Field onChange={"test"} value={""} >test2</Field>
              </div>
                  <div className='col-md-3'>
                     <Field onChange={"test"} value={""} >test3</Field>
                      </div>
                        <div className='col-md-3'>
                           <Field onChange={"test"} value={""} >test3</Field>
                             </div>
                            </div>        
                          </div>    
                      </div>
    );
}