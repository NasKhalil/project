import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';


class BeforePdf extends React.Component {
  
  render(){
  return (
    <MDBContainer >
      <MDBRow>
        <MDBCol ms="12" className="mt-3">
          <MDBCard >
            <MDBCardBody >
            <p className="h6 "><u>Majid Al Futaim</u></p>
                <p className="h4 text-center py-4"><u>Digital Duty Report</u></p>
                
                <div className="grey-text">
                  
                  </div>
                <br />
                
                <br />
                <div className="text-center d-flex flex-column align-items-center">
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Store Duty Manager: </p>
                    <p className="h6 "></p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Date: </p>
                    <p className="h6 ">29/01/2020</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Name of Food Duty Manager Lunch Time: </p>
                    <p className="h6 ">Ammar</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Present of Food Duty Manager Lunch Time: </p>
                    <p className="h6 ">Yes</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Present of Food Duty Manager Evening Time: </p>
                    <p className="h6 ">Yes</p>
                    </div>
                </div>
                <hr className="w-75" />

                <div className="text-center d-flex flex-column align-items-center">
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Name of Non Food Duty Manager: </p>
                    <p className="h6 "></p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Present of Food Duty Manager Lunch Time: </p>
                    <p className="h6 ">Yes</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Present of Food Duty Manager Evening Time: </p>
                    <p className="h6 ">Yes</p>
                    </div>
                </div>
                <hr className="w-75" />
                <div className="text-center d-flex flex-column align-items-center">
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Name Of Food Semi Duty Manager: </p>
                    <p className="h6 ">Yes</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Present of Non Food Semi Duty Manager Evening: </p>
                    <p className="h6 ">Yes</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Present of Non Food Semi Duty Manager: </p>
                    <p className="h6 ">Yes</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Present of Non Food Semi Duty Manager Evening: </p>
                    <p className="h6 ">Yes</p>
                    </div>
                </div>
                <hr className="w-75" />
                <div className="text-center d-flex flex-column align-items-center">
                    <div className="text-center  py-2 mt-1 w-75 ">
                    <p className="h6 text-center">Cleaning Remarks At Noon </p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">CeckOut Area: </p>
                    <p className="h6 ">Yes</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Food Area</p>
                    <p className="h6 ">Yes</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Non Food Area </p>
                    <p className="h6 ">Yes</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Presence Of Cleaning Supervisor </p>
                    <p className="h6 ">Yes</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-75 ">
                    <p className="h6 ">Present of Food Duty Manager Evening Time: </p>
                    <p className="h6 ">1</p>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <img className="mt-3 w-75" src={require('../Photo/photos.jpg')} />
                    <img className="mt-3 w-75" src={require('../Photo/photos.jpg')} />
                </div>
                <div className="text-center d-flex flex-column align-items-center mt-5">
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-50 ">
                    <p className="h6 ">Remarks: </p>
                    <p className="h6 ">Yes</p>
                    </div>
                    <div className="text-center d-flex justify-content-between py-2 mt-1 w-50 ">
                    <p className="h6 ">Customer Problem:</p>
                    <p className="h6 ">Yes</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="text-center py-2 mt-1 w-50">
                    <p className="h6"><u>Store GM:</u></p>
                    </div>
                    <div className="text-center py-2 mt-1 w-50">
                    <p className="h6"><u>HC Manager:</u></p>
                    </div>
                </div>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    
  );
};
}

export default BeforePdf;
