import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody,MDBIcon  } from 'mdbreact';

class MainScreen  extends React.Component{
constructor(props){
  super(props);
  this.state={
   
  }
}

render(){
  return (

    <MDBContainer>
      <MDBRow>
        <MDBCol ms="12" className="mt-3 mt-b mb-3">
          <MDBCard>
            <MDBCardBody>
              <form>
              <p className="h4 text-center py-4">Duty Manager Check list</p>
              
                <section>
                <div>
                
                <h5 className="grey-text">Food Duty Manager</h5>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"solid lightgray 1px"}}>
                <p className="h6 text-center ">Present Lunch Time</p>
                    <div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline1" name="inline" />
                        <label class="custom-control-label" for="defaultInline1">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline2" name="inline" />
                        <label class="custom-control-label" for="defaultInline2">No</label>
                    </div>
                    </div>
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"solid lightgray 1px"}}>
                <p className="h6 text-center ">Present Evening</p>
                    <div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline3" name="inline2" />
                        <label class="custom-control-label" for="defaultInline3">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline4" name="inline2" />
                        <label class="custom-control-label" for="defaultInline4">No</label>
                    </div>
                    </div>
                </div>
                </div>
                <hr style={{width:"80%", backgroundColor:"lightblue"}} />
                <br />
                </section>
                   
                <section>
                <div>
                
                <h5 className="grey-text">Food Duty Manager</h5>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"solid lightgray 1px"}}>
                <p className="h6 text-center ">Present Lunch Time</p>
                    <div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline5" name="inline3" />
                        <label class="custom-control-label" for="defaultInline5">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline6" name="inline3" />
                        <label class="custom-control-label" for="defaultInline6">No</label>
                    </div>
                    </div>
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"solid lightgray 1px"}}>
                <p className="h6 text-center ">Present Evening</p>
                    <div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline7" name="inline4" />
                        <label class="custom-control-label" for="defaultInline7">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline8" name="inline4" />
                        <label class="custom-control-label" for="defaultInline8">No</label>
                    </div>
                    </div>
                </div>
                </div>
                <hr style={{width:"80%", backgroundColor:"lightblue"}} />
                <br />
                </section>
                <section>
                <div>
                
                <h5 className="grey-text">Non Food Semi Duty Manager</h5>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"solid lightgray 1px"}}>
                <p className="h6 text-center ">Present Evening</p>
                    <div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline9"  name="inline5"/>
                        <label class="custom-control-label" for="defaultInline9">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline10" name="inline5" />
                        <label class="custom-control-label" for="defaultInline10">No</label>
                    </div>
                    </div>
                </div>
                <hr />
               
                </div>
                <hr style={{width:"80%", backgroundColor:"lightblue"}} />
                
                </section>
                <section>
                <div>
                
                <h5 className="grey-text">Non Food Duty Manager</h5>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"solid lightgray 1px"}}>
                <p className="h6 text-center ">Present Evening</p>
                    <div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline11" name="inline6" />
                        <label class="custom-control-label" for="defaultInline11">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline12" name="inline6" />
                        <label class="custom-control-label" for="defaultInline12">No</label>
                    </div>
                    </div>
                </div>
                <hr />
                
                </div>
                <hr style={{ backgroundColor:"red"}} />
                </section>
                <p className="h4 text-center red-text py-4">Cleaning Remarks Noon</p>

                <section>
                <div>
                
                <h5 className="grey-text">Food Duty Manager</h5>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"solid lightgray 1px"}}>
                <p className="h6 text-center ">Present Lunch Time</p>
                    <div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline13" name="inline7" />
                        <label class="custom-control-label" for="defaultInline13">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline14" name="inline7" />
                        <label class="custom-control-label" for="defaultInline14">No</label>
                    </div>
                    </div>
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <p className="h6 text-center ">Present Evening</p>
                    <div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline16" name="inline8" />
                        <label class="custom-control-label" for="defaultInline16">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline17" name="inline8" />
                        <label class="custom-control-label" for="defaultInline17">No</label>
                    </div>
                    </div>
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <p className="h6 text-center ">Present Evening</p>
                    <div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline18" name="inline9" />
                        <label class="custom-control-label" for="defaultInline18">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline19" name="inline9" />
                        <label class="custom-control-label" for="defaultInline19">No</label>
                    </div>
                    </div>
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <p className="h6 text-center ">Present Evening</p>
                    <div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline20" name="inline10" />
                        <label class="custom-control-label" for="defaultInline20">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline21" name="inline10" />
                        <label class="custom-control-label" for="defaultInline21">No</label>
                    </div>
                    </div>
                </div>
                <hr />
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <p className="h6 text-center ">Present Evening</p>
                    
                    <input type="number" style={{width:"20%",border:"none",borderBottom:"solid blue", background:"none"}} />
                    
                </div>
                </div>
                </section>
                
                
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-blue" type="submit">
                    Save Data
                    <MDBIcon far icon="save" className="ml-2"/>
                  </MDBBtn>
                  <MDBBtn className="btn btn-outline-blue" type="submit">
                    Send Mail
                    <MDBIcon far icon="paper-plane" className="ml-2"/>
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  );
};
}
export default MainScreen;