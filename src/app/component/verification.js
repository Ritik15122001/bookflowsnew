"use client"
import { useRef, useState } from "react";
import BooingConfirm from "./bookingconfirm";
const Verification = () => {
    const [showAppointment, setShowAppointment] = useState(false);

    const [CurrentComp , setCurrentComp] = useState(true);
    const handleBookAppointmentClick = () => {
        setShowAppointment(true);
        setCurrentComp(false)
      };
      const inputRef = useRef();
      const input1Ref = useRef();
      const input2Ref = useRef();
      const input3Ref = useRef();
      const input4Ref = useRef();
      
      const handleOnChange = (currentInputRef, nextInputRef, prevInputRef, e) => {
        const value = e.target.value;
      
        if (e.key === "Backspace") {
          if (value === "") {
            currentInputRef.current.blur();
            prevInputRef && prevInputRef.current && prevInputRef.current.focus();
          }
        } else if (value !== "") {
          currentInputRef.current.blur();
          nextInputRef && nextInputRef.current && nextInputRef.current.focus();
        }
      };
    return ( 
        <>
         {CurrentComp && (
        <div className="please_enter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="verify_wrap">
                <div className="verify_left  slideInLeft second">
                  <h3>Please Enter Verification Code</h3>
                  <div className="veri_box">
                    <div className="form-group">
                      <input ref={inputRef} type="email" onChange={(e) => handleOnChange(inputRef, input1Ref,null, e)}  onKeyDown={(e) => handleOnChange(inputRef, input1Ref, null, e)} className="form-control" id="email" />{" "}
                    </div>
                  </div>
                  <div className="veri_box">
                    <div className="form-group">
                      <input ref={input1Ref}  type="email" onChange={(e) => handleOnChange(input1Ref, input2Ref, inputRef, e)}  onKeyDown={(e) => handleOnChange(input1Ref, input2Ref, inputRef, e)} className="form-control" id="email" />{" "}
                    </div>
                  </div>
                  <div className="veri_box">
                    <div className="form-group">
                      <input ref={input2Ref} type="email"    onInput={(e) => handleOnChange(input2Ref, input3Ref, input1Ref, e)}  onKeyDown={(e) => handleOnChange(input2Ref, input3Ref, input1Ref, e)} className="form-control" id="email" />{" "}
                    </div>
                  </div>
                  <div className="veri_box">
                    <div className="form-group">
                      <input ref={input3Ref} type="email"   onInput={(e) => handleOnChange(input3Ref, null, input2Ref, e)}    onKeyDown={(e) => handleOnChange(input3Ref, null, input2Ref, e)} className="form-control" id="email" />{" "}
                    </div>
                  </div>
                  <div className="clearfix" />
                  <button className="btn btn_new2 margin2" onClick={handleBookAppointmentClick}>Submit</button>
                </div>
                <div className="verify_right  slideInRight first">
                  <img
                    src="images/verify_right.jpg"
                    className="img-responsive center-block"
                    alt=""
                  />
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
      </div>
         )}
          {showAppointment && <BooingConfirm />} 
      </>
     );
}
 
export default Verification;