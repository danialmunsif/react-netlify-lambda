import React from "react";
import ReactDOMServer from "react-dom/server";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import htmlDocx from "html-docx-js/dist/html-docx";
import axios from "axios";
import "./form1.css";
import LogoImg from "../images/scribble-logo.png";
import LogoImg2 from "../images/scribble-logo-3.png";
import PhoneImg from "../images/phone.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  brokerName: Yup.string(),
  brokerPhone: Yup.number().typeError("Broker Phone should be a number"),
  brokerEmail: Yup.string()
    .email("Broker Email is not valid")
    .required("Broker Email is required"),
  client1Name: Yup.string(),
  client1Phone: Yup.number().typeError("Client Phone should be a number"),
  client1Email: Yup.string()
    .email("Client 1 email is not valid")
    .required("Client 1 Email is required"),
  yourObjective: Yup.string(),
  challengeRightNow: Yup.string(),
  other: Yup.string(),
});

class Form1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSecondClientAdd: false,
      requiredAction1: false,
      requiredAction2: false,
      requiredAction3: false,
      requiredAction4: false,
      requiredAction5: false,
      requiredAction6: false,
      requiredAction7: false,
      requiredAction8: false,
      requiredAction9: false,
      brokerNameEmpty: false,
      brokerPhoneEmpty: false,
      brokerEmailEmpty: false,
      client1NameEmpty: false,
      client1PhoneEmpty: false,
      client1EmailEmpty: false,
      brokerName: "",
      brokerPhone: "",
      brokerEmail: "",
      client1Name: "",
      client1Phone: "",
      client1Email: "",
      client2Name: "",
      client2Phone: "",
      client2Email: "",
      yourObjective: "",
      challengeRightNow: "",
      other: "",
      formValues: {
        isSecondClientAdd: false,
        requiredAction1: false,
        requiredAction2: false,
        requiredAction3: false,
        requiredAction4: false,
        requiredAction5: false,
        requiredAction6: false,
        requiredAction7: false,
        requiredAction8: false,
        requiredAction9: false,
        brokerNameEmpty: false,
        brokerPhoneEmpty: false,
        brokerEmailEmpty: false,
        client1NameEmpty: false,
        client1PhoneEmpty: false,
        client1EmailEmpty: false,
        brokerName: "",
        brokerPhone: "",
        brokerEmail: "",
        client1Name: "",
        client1Phone: "",
        client1Email: "",
        client2Name: "",
        client2Phone: "",
        client2Email: "",
        yourObjective: "",
        challengeRightNow: "",
        other: "",
      },
    };
  }

  addClients = () => {
    this.setState({ isSecondClientAdd: true });
  };

  addValues = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  pdfData = () => {
    return (
      <div className='pdf-data-main-cont'>
        <img src={LogoImg} />
        <div className='pdf-data-broker-cont'>
          <h4>Broker Details:-</h4>
          <table>
            <tr>
              <th>Broker Name</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>Divyansh Sharma</td>
              <td>674785848</td>
              <td>fjhfd@fgkg.bp</td>
            </tr>
          </table>
        </div>
        <div className='pdf-data-broker-cont'>
          <h4>Client Details:-</h4>
          <table>
            <tr>
              {this.state.isSecondClientAdd && <th>Client No.</th>}
              <th>Broker Name</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
            <tr>
              {this.state.isSecondClientAdd && (
                <td style={{ fontWeight: "bold" }}>01.</td>
              )}
              <td>Divyansh Sharma</td>
              <td>674785848</td>
              <td>fjhfd@fgkg.bp</td>
            </tr>
            {this.state.isSecondClientAdd && (
              <tr>
                <td style={{ fontWeight: "bold" }}>02.</td>
                <td>Divyansh Sharma</td>
                <td>674785848</td>
                <td>fjhfd@fgkg.bp</td>
              </tr>
            )}
          </table>
        </div>
        <div style={{ marginTop: "15px" }} className='pdf-data-broker-cont'>
          <h4>Your Objective:-</h4>
          <p>{this.state.yourObjective}</p>
        </div>
        <div className='pdf-data-broker-cont'>
          <h4>The Challenge Right Now:-</h4>
          <p>{this.state.challengeRightNow}</p>
        </div>
        <div className='pdf-data-broker-cont'>
          <h4>Required Actions:-</h4>
          {this.state.requiredAction1 && (
            <span>
              <p>01.</p>
              <p>
                As we've discussed, the following plan outlines the steps you
                can take now to improve your
              </p>
            </span>
          )}
          {this.state.requiredAction2 && (
            <span>
              <p>02.</p>
              <p>
                As we've discussed, the following plan outlines the steps you
                can take now to improve your
              </p>
            </span>
          )}
          {this.state.requiredAction3 && (
            <span>
              <p>03.</p>
              <p>
                As we've discussed, the following plan outlines the steps you
                can take now to improve your
              </p>
            </span>
          )}
          {this.state.requiredAction4 && (
            <span>
              <p>04.</p>
              <p>
                As we've discussed, the following plan outlines the steps you
                can take now to improve your
              </p>
            </span>
          )}
          {this.state.requiredAction5 && (
            <span>
              <p>05.</p>
              <p>
                As we've discussed, the following plan outlines the steps you
                can take now to improve your
              </p>
            </span>
          )}
          {this.state.requiredAction6 && (
            <span>
              <p>06.</p>
              <p>
                As we've discussed, the following plan outlines the steps you
                can take now to improve your
              </p>
            </span>
          )}
          {this.state.requiredAction7 && (
            <span>
              <p>07.</p>
              <p>
                As we've discussed, the following plan outlines the steps you
                can take now to improve your
              </p>
            </span>
          )}
        </div>
      </div>
    );
  };

  formData = () => (
    <div className='mCont'>
      <div className='upper-logo-heading-cont'>
        <div>
          <img src={LogoImg} id='logo-img' alt='' />
        </div>
        <h2>Your Lending Plan</h2>
      </div>
      <div className='form-cont'>
        <div className='form-sub-cont'>
          <h4>Broker Details</h4>
          <div className='form-input-cont'>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.brokerName}
                name='brokerName'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Broker Name</span>
            </label>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.brokerPhone}
                name='brokerName'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Phone Number</span>
            </label>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.brokerEmail}
                name='brokerName'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Email</span>
            </label>
          </div>
        </div>
        <div className='form-sub-cont'>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ marginTop: "20px" }}>Client Details</h4>
          </div>
          {this.state.isSecondClientAdd && (
            <div className='added-client'>
              <h6>Client1</h6>
            </div>
          )}
          <div className='form-input-cont' style={{ margin: 0 }}>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.client1Name}
                name='client1Name'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Client Name</span>
            </label>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.client1Phone}
                name='client1Name'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Phone Number</span>
            </label>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.client1Email}
                name='client1Name'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Email</span>
            </label>
          </div>
        </div>
        {this.state.isSecondClientAdd && (
          <div className='form-sub-cont'>
            <div className='added-client'>
              <h6>Client2</h6>
            </div>
            <div className='form-input-cont' style={{ margin: 0 }}>
              <label className='pure-material-textfield-outlined'>
                <input
                  value={this.state.client2Name}
                  name='client1Name'
                  onChange={this.addValues}
                  placeholder=' '
                />
                <span>Client Name</span>
              </label>
              <label className='pure-material-textfield-outlined'>
                <input
                  value={this.state.client2Phone}
                  name='client1Name'
                  onChange={this.addValues}
                  placeholder=' '
                />
                <span>Phone Number</span>
              </label>
              <label className='pure-material-textfield-outlined'>
                <input
                  value={this.state.client2Email}
                  name='client1Name'
                  onChange={this.addValues}
                  placeholder=' '
                />
                <span>Email</span>
              </label>
            </div>
          </div>
        )}
        <div className=''>
          <h4 style={{ marginTop: "20px" }}>Your Objective</h4>
          <div className='form-input-cont' style={{ margin: 0 }}>
            <label className='pure-material-textfield-outlined textarea-field'>
              <input
                value={this.state.yourObjective}
                name='yourObjective'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Client's financial objective</span>
            </label>
          </div>
        </div>
        <div className='form-sub-cont'>
          <h4 style={{ marginTop: "20px" }}>The Challenge Right Now</h4>
          <div className='form-input-cont' style={{ margin: 0 }}>
            <label className='pure-material-textfield-outlined textarea-field'>
              <input
                value={this.state.challengeRightNow}
                name='yourObjective'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Reason client is unable to obtain finance</span>
            </label>
          </div>
        </div>
        <div className='header-para-cont'>
          <h4 style={{ marginTop: "20px" }}>
            Let's Help You Get To Where You Want To Be
          </h4>
          <p>
            As we've discussed, the following plan outlines the steps you can
            take now to improve your chances securing a loan in a few months'
            time. Please keep in mind that a final loan decision is ultimately
            up to your chosen lender, and lending policies are always changing.
            For this reason, we are unable to guarantee your success at any
            time. However, we can support you in improving your current
            position.
          </p>
        </div>
        <div className='header-para-cont form-sub-cont'>
          <h4 style={{ marginTop: "20px" }}>Required Actions</h4>
          {this.state.requiredAction1 && (
            <div>
              <span>
                <h6>01.</h6>
                <p>
                  Protect your credit score; don't enquire about, or apply for
                  any credit facility without first speaking with your broker.
                </p>
              </span>
            </div>
          )}
          {this.state.requiredAction2 && (
            <div>
              <span>
                <h6>02.</h6>
                <p>
                  Improve your credit score; approach the relevant provider
                  about removing defaults.
                </p>
              </span>
            </div>
          )}
          {this.state.requiredAction3 && (
            <div>
              <span>
                <h6>03.</h6>
                <p>
                  Stay on top of bills; make payments on all existing debts by
                  the due date.
                </p>
              </span>
            </div>
          )}
          {this.state.requiredAction4 && (
            <div>
              <span>
                <h6>04.</h6>
                <p>
                  Boots your savings; put a little money aside each week (and
                  don't touch it!).
                </p>
              </span>
            </div>
          )}
          {this.state.requiredAction5 && (
            <div>
              <span>
                <h6>05.</h6>
                <p>
                  Reduce your expenses; compare utility and insurance providers
                  for lower fees, and cut back on discretionary spending.
                </p>
              </span>
            </div>
          )}
          {this.state.requiredAction6 && (
            <div>
              <span>
                <h6>06.</h6>
                <p>
                  Increase your income; if you have opportunity to earn more
                  through additional hours or commissions, go for it.
                </p>
              </span>
            </div>
          )}
          {this.state.requiredAction7 && (
            <div>
              <span>
                <h6>07.</h6>
                <p>
                  Wait it out; to meet the minimum employment tenure, it's
                  simply a matter of time.
                </p>
              </span>
            </div>
          )}
          {this.state.requiredAction8 && (
            <div>
              <span>
                <h6>08.</h6>
                <p>Complete your business tax return.</p>
              </span>
            </div>
          )}
          {this.state.requiredAction9 && (
            <div>
              <span>
                <h6>09.</h6>
                <p>Complete your individual tax return.</p>
              </span>
            </div>
          )}
          <span style={{ display: "flex", alignItems: "center" }}>
            <h6 style={{ color: "#0A2534", fontWeight: 600, fontSize: "13px" }}>
              10.
            </h6>
            <label
              style={{ marginLeft: "10px" }}
              className='pure-material-textfield-outlined'
            >
              <input
                style={{ width: "100%", height: "100%" }}
                value={this.state.other}
                name='other'
                onChange={this.addValues}
                placeholder=' '
              />
              <span style={{ width: "100%" }}>Other</span>
            </label>
          </span>
        </div>
      </div>
      <div className='header-para-cont'>
        <h4 style={{ marginTop: "20px" }}>Checking In</h4>
        <p>
          A member of our team will check you in with you over the coming weeks
          to see how you're tracking with the above plan. This is your chance to
          ask questions, celebrate your wins or (because life happens) reset!
          Let's keep you on track to succeed. Anything else we can do to support
          you? Let me know! Otherwise, I look forward to helping you achieve
          your goals in a few months' time.
        </p>
      </div>
      <div className='regards-txt'>
        <h4>Regards,</h4>
        <h2>Kate</h2>
      </div>
    </div>
  );

  // wordFormData = () => (

  //     <div style={{padding: '20px', width: '1024px', maxWidth: '300px'}}>
  //         <div className="upper-logo-heading-cont">
  //             <div>
  //                 <img src={LogoImg} id="logo-img" alt="" />
  //             </div>
  //             <h2>Your Lending Plan</h2>
  //         </div>
  //         <div className="form-cont">
  //             <div className="form-sub-cont">
  //                 <h4>Broker Details</h4>
  //                 <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
  //                     <label style={{position: 'relative', display: 'inline-block', paddingTop: '5px', fontSize: '14px', fontWeight: '500'}}>
  //                         <input value={this.state.brokerName} name='brokerName' onChange={this.addValues} placeholder=' ' />
  //                         <span>Broker Name</span>
  //                     </label>
  //                     <label style={{position: 'relative', display: 'inline-block', paddingTop: '5px', fontSize: '14px', fontWeight: '500'}}>
  //                         <input value={this.state.brokerPhone} name='brokerName' onChange={this.addValues} placeholder=' ' />
  //                         <span>Phone Number</span>
  //                     </label>
  //                     <label style={{position: 'relative', display: 'inline-block', paddingTop: '5px', fontSize: '14px', fontWeight: '500'}}>
  //                         <input value={this.state.brokerEmail} name='brokerName' onChange={this.addValues} placeholder=' ' />
  //                         <span>Email</span>
  //                     </label>
  //                 </div>
  //             </div>
  //             <div className="form-sub-cont">
  //                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  //                     <h4 style={{ marginTop: '20px' }}>Client Details</h4>
  //                 </div>
  //                 {this.state.isSecondClientAdd &&
  //                     <div className='added-client'>
  //                         <h6>Client1</h6>
  //                     </div>
  //                 }
  //                 <div className="form-input-cont" style={{ margin: 0 }}>
  //                     <label className="pure-material-textfield-outlined">
  //                         <input value={this.state.client1Name} name='client1Name' onChange={this.addValues} placeholder=" " />
  //                         <span>Client Name</span>
  //                     </label>
  //                     <label className="pure-material-textfield-outlined">
  //                         <input value={this.state.client1Phone} name='client1Name' onChange={this.addValues} placeholder=" " />
  //                         <span>Phone Number</span>
  //                     </label>
  //                     <label className="pure-material-textfield-outlined">
  //                         <input value={this.state.client1Email} name='client1Name' onChange={this.addValues} placeholder=" " />
  //                         <span>Email</span>
  //                     </label>
  //                 </div>
  //             </div>
  //             {this.state.isSecondClientAdd &&
  //                 <div className="form-sub-cont">
  //                     <div className='added-client'>
  //                         <h6>Client2</h6>
  //                     </div>
  //                     <div className="form-input-cont" style={{ margin: 0 }}>
  //                         <label className="pure-material-textfield-outlined">
  //                             <input value={this.state.client2Name} name='client1Name' onChange={this.addValues} placeholder=" " />
  //                             <span>Client Name</span>
  //                         </label>
  //                         <label className="pure-material-textfield-outlined">
  //                             <input value={this.state.client2Phone} name='client1Name' onChange={this.addValues} placeholder=" " />
  //                             <span>Phone Number</span>
  //                         </label>
  //                         <label className="pure-material-textfield-outlined">
  //                             <input value={this.state.client2Email} name='client1Name' onChange={this.addValues} placeholder=" " />
  //                             <span>Email</span>
  //                         </label>
  //                     </div>
  //                 </div>
  //             }
  //             <div className="">
  //                 <h4 style={{ marginTop: '20px' }}>Your Objective</h4>
  //                 <div className="form-input-cont" style={{ margin: 0 }}>
  //                     <label className="pure-material-textfield-outlined textarea-field">
  //                         <input value={this.state.yourObjective} name='yourObjective' onChange={this.addValues} placeholder=" " />
  //                         <span>Client's financial objective</span>
  //                     </label>
  //                 </div>
  //             </div>
  //             <div className="form-sub-cont">
  //                 <h4 style={{ marginTop: '20px' }}>The Challenge Right Now</h4>
  //                 <div className="form-input-cont" style={{ margin: 0 }}>
  //                     <label className="pure-material-textfield-outlined textarea-field">
  //                         <input value={this.state.challengeRightNow} name='yourObjective' onChange={this.addValues} placeholder=" " />
  //                         <span>Reason client is unable to obtain finance</span>
  //                     </label>
  //                 </div>
  //             </div>
  //             <div className="header-para-cont">
  //                 <h4 style={{ marginTop: '20px' }}>Let's Help You Get To Where You Want To Be</h4>
  //                 <p>
  //                     As we've discussed, the following plan outlines the steps you can take now to improve your chances securing
  //                     a loan in a few months' time. Please keep in mind that a final loan decision is ultimately up to your chosen
  //                     lender, and lending policies are always changing. For this reason, we are unable to guarantee your success
  //                     at any time. However, we can support you in improving your current position.
  //                 </p>
  //             </div>
  //             <div className="header-para-cont form-sub-cont">
  //                 <h4 style={{ marginTop: '20px' }}>Required Actions</h4>
  //                 {
  //                     this.state.requiredAction1 &&
  //                     <div>
  //                         <span>
  //                             <h6>01.</h6>
  //                             <p>Protect your credit score; don't enquire about, or apply for any credit facility without first speaking with your broker.</p>
  //                         </span>

  //                     </div>
  //                 }
  //                 {
  //                     this.state.requiredAction2 &&
  //                     <div>
  //                         <span>
  //                             <h6>02.</h6>
  //                             <p>Improve your credit score; approach the relevant provider about removing defaults.</p>
  //                         </span>
  //                     </div>

  //                 }
  //                 {
  //                     this.state.requiredAction3 &&
  //                     <div>
  //                         <span>
  //                             <h6>03.</h6>
  //                             <p>Stay on top of bills; make payments on all existing debts by the due date.</p>
  //                         </span>

  //                     </div>
  //                 }
  //                 {
  //                     this.state.requiredAction4 &&
  //                     <div>
  //                         <span>
  //                             <h6>04.</h6>
  //                             <p>Boots your savings; put a little money aside each week (and don't touch it!).</p>
  //                         </span>

  //                     </div>
  //                 }
  //                 {
  //                     this.state.requiredAction5 &&
  //                     <div>
  //                         <span>
  //                             <h6>05.</h6>
  //                             <p>Reduce your expenses; compare utility and insurance providers for lower fees, and cut back on discretionary spending</p>
  //                         </span>
  //                     </div>
  //                 }
  //                 {
  //                     this.state.requiredAction6 &&
  //                     <div>
  //                         <span>
  //                             <h6>06.</h6>
  //                             <p>Increase your income; if you have opportunity to earn more through additional hours or commissions, go for it</p>
  //                         </span>
  //                     </div>
  //                 }
  //                 {
  //                     this.state.requiredAction7 &&
  //                     <div>
  //                         <span>
  //                             <h6>07.</h6>
  //                             <p>Wait it out; to meet the minimum employment tenure, it's simply a matter of time</p>
  //                         </span>
  //                     </div>
  //                 }
  //                 {
  //                     this.state.requiredAction8 &&
  //                     <div>
  //                         <span>
  //                             <h6>08.</h6>
  //                             <p>Complete your business tax return</p>
  //                         </span>
  //                     </div>
  //                 }
  //                 {
  //                     this.state.requiredAction9 &&
  //                     <div>
  //                         <span>
  //                             <h6>09.</h6>
  //                             <p>Complete your individual tax return</p>
  //                         </span>
  //                     </div>
  //                 }
  //             </div>
  //         </div>
  //         <div className="header-para-cont">
  //             <h4 style={{ marginTop: '20px' }}>Checking In</h4>
  //             <p>
  //                 A member of our team will check you in with you over the coming weeks to see how you're tracking with the above plan.
  //                 This is your chance to ask questions, celebrate your wins or (because life happens) reset! Let's keep you on track
  //                 to succeed. Anything else we can do to support you? Let me know! Otherwise, I look forward to helping you achieve your
  //                 goals in a few months' time.
  //             </p>
  //         </div>
  //         <div className="regards-txt">
  //             <h4>Regards,</h4>
  //             <h2>Kate</h2>
  //         </div>
  //     </div>
  // )

  docFileData = () => (
    <div className='pdf-data-main-cont'>
      <img
        src={
          "https://res.cloudinary.com/dmsxwwfb5/image/upload/v1580916756/buy-me-min.png"
        }
      />
      <div className='pdf-data-broker-cont'>
        <h4>Broker Details:-</h4>
        <table>
          <tr>
            <th>Broker Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>{this.state.brokerName}</td>
            <td>{this.state.brokerPhone}</td>
            <td>{this.state.brokerEmail}</td>
          </tr>
        </table>
      </div>
      <div className='pdf-data-broker-cont'>
        <h4>Client Details:-</h4>
        <table>
          <tr>
            {this.state.isSecondClientAdd && <th>Client No.</th>}
            <th>Client Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
          <tr>
            {this.state.isSecondClientAdd && (
              <td style={{ fontWeight: "bold" }}>01.</td>
            )}
            <td>{this.state.client1Name}</td>
            <td>{this.state.client1Phone}</td>
            <td>{this.state.client1Email}</td>
          </tr>
          {this.state.isSecondClientAdd && (
            <tr>
              <td style={{ fontWeight: "bold" }}>02.</td>
              <td>{this.state.client2Name}</td>
              <td>{this.state.client2Phone}</td>
              <td>{this.state.client2Email}</td>
            </tr>
          )}
        </table>
      </div>
      <div style={{ marginTop: "15px" }} className='pdf-data-broker-cont'>
        <h4>Your Objective:-</h4>
        <p>{this.state.yourObjective}</p>
      </div>
      <div className='pdf-data-broker-cont'>
        <h4>The Challenge Right Now:-</h4>
        <p>{this.state.challengeRightNow}</p>
      </div>
      <div className='pdf-data-broker-cont'>
        <h4>Required Actions:-</h4>
        {this.state.requiredAction1 && (
          <div>
            <span>
              <h6>01.</h6>
              <p>
                Protect your credit score; don't enquire about, or apply for any
                credit facility without first speaking with your broker.
              </p>
            </span>
          </div>
        )}
        {this.state.requiredAction2 && (
          <div>
            <span>
              <h6>02.</h6>
              <p>
                Improve your credit score; approach the relevant provider about
                removing defaults.
              </p>
            </span>
          </div>
        )}
        {this.state.requiredAction3 && (
          <div>
            <span>
              <h6>03.</h6>
              <p>
                Stay on top of bills; make payments on all existing debts by the
                due date.
              </p>
            </span>
          </div>
        )}
        {this.state.requiredAction4 && (
          <div>
            <span>
              <h6>04.</h6>
              <p>
                Boots your savings; put a little money aside each week (and
                don't touch it!).
              </p>
            </span>
          </div>
        )}
        {this.state.requiredAction5 && (
          <div>
            <span>
              <h6>05.</h6>
              <p>
                Reduce your expenses; compare utility and insurance providers
                for lower fees, and cut back on discretionary spending
              </p>
            </span>
          </div>
        )}
        {this.state.requiredAction6 && (
          <div>
            <span>
              <h6>06.</h6>
              <p>
                Increase your income; if you have opportunity to earn more
                through additional hours or commissions, go for it
              </p>
            </span>
          </div>
        )}
        {this.state.requiredAction7 && (
          <div>
            <span>
              <h6>07.</h6>
              <p>
                Wait it out; to meet the minimum employment tenure, it's simply
                a matter of time
              </p>
            </span>
          </div>
        )}
        {this.state.requiredAction8 && (
          <div>
            <span>
              <h6>08.</h6>
              <p>Complete your business tax return</p>
            </span>
          </div>
        )}
        {this.state.requiredAction9 && (
          <div>
            <span>
              <h6>09.</h6>
              <p>Complete your individual tax return</p>
            </span>
          </div>
        )}
      </div>
    </div>
  );

  // exportWord = (filename = 'doc-file') => {
  //     // const doc = new Document();
  //     // doc.addSection({
  //     //     properties: {},
  //     //     children: [
  //     //         new Paragraph({
  //     //             children: [
  //     //                 new TextRun("Hello World"),
  //     //                 new TextRun({
  //     //                     text: "Foo Bar",
  //     //                     bold: true,
  //     //                 }),
  //     //                 new TextRun({
  //     //                     text: "\tGithub is the best",
  //     //                     bold: true,
  //     //                 }),
  //     //             ],
  //     //         }),
  //     //     ],
  //     // });
  //     // Packer.toBuffer(doc).then((buffer) => {
  //     //     fs.writeFileSync("My Document.docx", buffer);
  //     // });

  //     var HtmlHead = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  //     var EndHtml = "</body></html>";
  //     //complete html

  //     var html = HtmlHead + ReactDOMServer.renderToStaticMarkup(this.wordFormData()) + EndHtml;
  //     // var html = HtmlHead + document.querySelector(".pdf-data-main-cont").innerHTML + EndHtml;
  //     //specify the type
  //     var blob = new Blob(['\ufeff', html], {
  //         type: 'application/msword'
  //     });
  //     // Specify link url
  //     var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
  //     // Specify file name
  //     filename = filename ? filename + '.doc' : 'document.doc';
  //     // Create download link element
  //     var downloadLink = document.createElement("a");
  //     document.body.appendChild(downloadLink);
  //     if (navigator.msSaveOrOpenBlob) {
  //         navigator.msSaveOrOpenBlob(blob, filename);
  //     } else {
  //         // Create a link to the file
  //         downloadLink.href = url;
  //         // Setting the file name
  //         downloadLink.download = filename;
  //         //triggering the function
  //         downloadLink.click();
  //     }

  //     document.body.removeChild(downloadLink);

  // }

  exportPdf = () => {
    // if (!this.state.brokerName) {
    //     this.setState({ brokerNameEmpty: true })
    // } else if (!this.state.brokerPhone) {
    //     this.setState({ brokerPhoneEmpty: true })
    // } else if (!this.state.brokerEmailEmpty) {
    //     this.setState({ brokerEmailEmpty: true })
    // } else if (!this.state.client1Name) {
    //     this.setState({ client1NameEmpty: true })
    // } else if (!this.state.client1Phone) {
    //     this.setState({ client1PhoneEmpty: true })
    // } else if (!this.state.client1Email) {
    //     this.setState({ client1EmailEmpty: true })
    // } else {
    //const   htmlToPDF = new jsPDF({putOnlyUsedFonts: true,orientation: "landscape",  unit: "px", format: "a4", });
    var htmlContent = ReactDOMServer.renderToStaticMarkup(this.render());
    const htmlToPDF = new jsPDF({
      putOnlyUsedFonts: true,
      orientation: "landscape",
      unit: "px",
      format: [1012, 1192],
    });
    htmlToPDF.html(ReactDOMServer.renderToStaticMarkup(this.formData()), {
      callback: function (htmlToPDF) {
        htmlToPDF.save("scribble-finance.pdf");
      },
    });
    // }

    // html2canvas(ReactDOMServer.renderToStaticMarkup(this.formData()), { height: 1000 })
    //     .then((canvas) => {
    //         document.body.appendChild(canvas);
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF();
    //         pdf.addImage(imgData, 'PNG', 0, 0);
    //         pdf.save("download.pdf");

    //     });
  };

  renderEmailError = () => {
    if (
      (!this.state.brokerEmail && this.state.brokerEmailEmpty) ||
      (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.state.brokerEmail
      ) === false &&
        this.state.brokerEmailEmpty &&
        this.state.brokerEmailEmpty)
    ) {
      return "field is required with correct email";
    } else {
      return "Email";
    }
    //  else if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.brokerEmail) === false && this.state.brokerEmailEmpty) {
    //     return 'invalid email address';
    // }

    // if (!this.state.client1Email && this.state.client1Email) {
    //     return 'field is required';
    // } else if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.brokerEmail) === false && this.state.brokerEmailEmpty) {
    //     return 'invalid email address';
    // } else {
    //     return 'Email';
    // }
  };

  wordFormData = () => {
    return (
      <div className='mCont'>
        <div className='upper-logo-heading-cont'>
          {/* <div>
                        <img src={dataUrl} id="logo-img" alt="image" />
                    </div>
                    <h2>Your Lending Plan</h2> */}
          <table>
            <tbody>
              <tr>
                <td className='doc-logo-img'>
                  <img src={LogoImg2} id='logo-img' alt='image' />
                </td>
                <td>
                  <h2>Your Lending Plan</h2>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='form-cont'>
          <div className='form-sub-cont'>
            <h4>Broker Details</h4>
            <div className='form-input-cont'>
              <table>
                <tbody>
                  <tr>
                    <td colspan='3'></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        boxSizing: "border-box",
                        border: "solid 1px",
                        borderColor: "#767F91",
                        borderRadius: "4px",
                        padding: "13px",
                        width: "400px",
                        height: "20px",
                        color: "#0A2534",
                        fontWeight: 600,
                      }}
                    >
                      {this.state.brokerName}
                    </td>
                    <td></td>
                    <td
                      style={{
                        boxSizing: "border-box",
                        border: "solid 1px",
                        borderColor: "#767F91",
                        borderRadius: "4px",
                        padding: "13px",
                        width: "400px",
                        height: "20px",
                        color: "#0A2534",
                        fontWeight: 600,
                      }}
                    >
                      {this.state.brokerPhone}
                    </td>
                  </tr>
                  <tr>
                    <td colspan='3'></td>
                  </tr>
                  <tr>
                    <td colspan='3'></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        boxSizing: "border-box",
                        border: "solid 1px",
                        borderColor: "#767F91",
                        borderRadius: "4px",
                        padding: "13px",
                        width: "400px",
                        height: "20px",
                        color: "#0A2534",
                        fontWeight: 600,
                      }}
                    >
                      {this.state.brokerEmail}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='form-sub-cont'>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ marginTop: "20px" }}>Client Details</h4>
            </div>
            {this.state.isSecondClientAdd && (
              <div className='added-client'>
                <h6>Client1</h6>
              </div>
            )}
            <div className='form-input-cont' style={{ margin: 0 }}>
              <table>
                <tbody>
                  <tr>
                    <td colspan='3'></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        boxSizing: "border-box",
                        border: "solid 1px",
                        borderColor: "#767F91",
                        borderRadius: "4px",
                        padding: "13px",
                        width: "400px",
                        height: "20px",
                        color: "#0A2534",
                        fontWeight: 600,
                      }}
                    >
                      {this.state.client1Name}
                    </td>
                    <td></td>
                    <td
                      style={{
                        boxSizing: "border-box",
                        border: "solid 1px",
                        borderColor: "#767F91",
                        borderRadius: "4px",
                        padding: "13px",
                        width: "400px",
                        height: "20px",
                        color: "#0A2534",
                        fontWeight: 600,
                      }}
                    >
                      {this.state.client1Phone}
                    </td>
                  </tr>
                  <tr>
                    <td colspan='3'></td>
                  </tr>
                  <tr>
                    <td colspan='3'></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        boxSizing: "border-box",
                        border: "solid 1px",
                        borderColor: "#767F91",
                        borderRadius: "4px",
                        padding: "13px",
                        width: "400px",
                        height: "20px",
                        color: "#0A2534",
                        fontWeight: 600,
                      }}
                    >
                      {this.state.client1Email}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {this.state.isSecondClientAdd && (
            <div className='form-sub-cont'>
              <div className='added-client'>
                <h6>Client2</h6>
              </div>
              <div className='form-input-cont' style={{ margin: 0 }}>
                <table>
                  <tbody>
                    <tr>
                      <td colspan='3'></td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          boxSizing: "border-box",
                          border: "solid 1px",
                          borderColor: "#767F91",
                          borderRadius: "4px",
                          padding: "13px",
                          width: "400px",
                          height: "20px",
                          color: "#0A2534",
                          fontWeight: 600,
                        }}
                      >
                        {this.state.client2Name}
                      </td>
                      <td></td>
                      <td
                        style={{
                          boxSizing: "border-box",
                          border: "solid 1px",
                          borderColor: "#767F91",
                          borderRadius: "4px",
                          padding: "13px",
                          width: "400px",
                          height: "20px",
                          color: "#0A2534",
                          fontWeight: 600,
                        }}
                      >
                        {this.state.client2Phone}
                      </td>
                    </tr>
                    <tr>
                      <td colspan='3'></td>
                    </tr>
                    <tr>
                      <td colspan='3'></td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          boxSizing: "border-box",
                          border: "solid 1px",
                          borderColor: "#767F91",
                          borderRadius: "4px",
                          padding: "13px",
                          width: "400px",
                          height: "20px",
                          color: "#0A2534",
                          fontWeight: 600,
                        }}
                      >
                        {this.state.client2Email}
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <div className='form-sub-cont'>
            <h4 style={{ marginTop: "20px" }}>Your Objective</h4>
            <div className='form-input-cont' style={{ margin: 0 }}>
              <div
                style={{
                  boxSizing: "border-box",
                  border: "solid 1px",
                  borderColor: "#767F91",
                  borderRadius: "4px",
                  padding: "13px",
                  width: "400px",
                  height: "50px",
                  color: "#0A2534",
                  fontWeight: 600,
                }}
              >
                {this.state.yourObjective}
              </div>
            </div>
          </div>
          <div className='form-sub-cont'>
            <h4 style={{ marginTop: "20px" }}>The Challenge Right Now</h4>
            <div className='form-input-cont' style={{ margin: 0 }}>
              <div
                style={{
                  boxSizing: "border-box",
                  border: "solid 1px",
                  borderColor: "#767F91",
                  borderRadius: "4px",
                  padding: "13px",
                  width: "400px",
                  height: "50px",
                  color: "#0A2534",
                  fontWeight: 600,
                }}
              >
                {this.state.challengeRightNow}
              </div>
            </div>
          </div>
          <div className='header-para-cont'>
            <h4 style={{ marginTop: "20px" }}>
              Let's Help You Get To Where You Want To Be
            </h4>
            <p>
              As we've discussed, the following plan outlines the steps you can
              take now to improve your chances securing a loan in a few months'
              time. Please keep in mind that a final loan decision is ultimately
              up to your chosen lender, and lending policies are always
              changing. For this reason, we are unable to guarantee your success
              at any time. However, we can support you in improving your current
              position.
            </p>
          </div>
          <div className='header-para-cont form-sub-cont'>
            <h4 style={{ marginTop: "20px" }}>Required Actions</h4>
            {this.state.requiredAction1 && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h5>01.</h5>
                      </td>
                      <td>
                        Protect your credit score; don't enquire about, or apply
                        for any credit facility without first speaking with your
                        broker.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {this.state.requiredAction2 && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h5>02.</h5>
                      </td>
                      <td>
                        Improve your credit score; approach the relevant
                        provider about removing defaults.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {this.state.requiredAction3 && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h5>03.</h5>
                      </td>
                      <td>
                        Stay on top of bills; make payments on all existing
                        debts by the due date.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {this.state.requiredAction4 && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h5>04.</h5>
                      </td>
                      <td>
                        Boots your savings; put a little money aside each week
                        (and don't touch it!).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {this.state.requiredAction5 && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h5>05.</h5>
                      </td>
                      <td>
                        Reduce your expenses; compare utility and insurance
                        providers for lower fees, and cut back on discretionary
                        spending.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {this.state.requiredAction6 && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h5>06.</h5>
                      </td>
                      <td>
                        Increase your income; if you have opportunity to earn
                        more through additional hours or commissions, go for it.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {this.state.requiredAction7 && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h5>07.</h5>
                      </td>
                      <td>
                        Wait it out; to meet the minimum employment tenure, it's
                        simply a matter of time.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {this.state.requiredAction8 && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h5>08.</h5>
                      </td>
                      <td>Complete your business tax return.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {this.state.requiredAction9 && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h5>09.</h5>
                      </td>
                      <td>Complete your individual tax return.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {this.state.other && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h5>10.</h5>
                      </td>
                      <td>{this.state.other}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className='header-para-cont'>
            <h4 style={{ marginTop: "20px" }}>Checking In</h4>
            <p>
              A member of our team will check you in with you over the coming
              weeks to see how you're tracking with the above plan. This is your
              chance to ask questions, celebrate your wins or (because life
              happens) reset! Let's keep you on track to succeed. Anything else
              we can do to support you? Let me know! Otherwise, I look forward
              to helping you achieve your goals in a few months' time.
            </p>
          </div>
          <div className='regards-txt'>
            <h4>Regards,</h4>
            <h3>Kate</h3>
          </div>
        </div>
      </div>
    );
  };

  exportWord = () => {
    const juice = require("juice");
    var html = ReactDOMServer.renderToStaticMarkup(this.wordFormData());
    let css =
      "*{margin:0;padding:0;font-family:'Calibri', sans-serif}@font-face{font-family:'Sebastian Bobby';src:url(../SebastianBobby.woff) format('woff'),url(../SebastianBobby.woff2) format('woff2');font-weight:400;font-style:normal}body{background-image:url(../images/background.png);height:100%;width:100%;padding:4% 0;background-position:center center;background-repeat:no-repeat;display:flex;justify-content:center;align-items:center}#pdf-generate-cont{display:none}.pure-material-textfield-outlined{--pure-material-safari-helper1:rgb(var(--pure-material-primary-rgb, 30, 150, 243));position:relative;display:inline-block;padding-top:5px;font-size:14px;font-weight:600;line-height:1.5;overflow:hidden;width:49%;margin:10px 0 0 0}.pure-material-textfield-outlined>input,.pure-material-textfield-outlined>textarea{box-sizing:border-box;margin:0;border:solid 1px;border-color:#767f91;border-top-color:transparent;border-radius:4px;padding:13px 13px 13px;width:100%;height:inherit;color:#0a2534;font-weight:600;background-color:transparent;box-shadow:none;font-family:inherit;font-size:inherit;line-height:inherit;caret-color:#767f91;transition:border .2s,box-shadow .2s}.pure-material-textfield-outlined>input+span,.pure-material-textfield-outlined>textarea+span{position:absolute;top:0;left:0;display:flex;border-color:#767f91;width:100%;max-height:100%;color:#767f91;font-size:75%;line-height:15px;cursor:text;transition:color .2s,font-size .2s,line-height .2s}.pure-material-textfield-outlined>input+span::after,.pure-material-textfield-outlined>input+span::before,.pure-material-textfield-outlined>textarea+span::after,.pure-material-textfield-outlined>textarea+span::before{content:'';display:block;box-sizing:border-box;margin-top:6px;border-top:solid 1px;border-top-color:#767f91;min-width:10px;height:8px;pointer-events:none;box-shadow:inset 0 1px transparent;transition:border-color .2s,box-shadow .2s}.pure-material-textfield-outlined>input+span::before,.pure-material-textfield-outlined>textarea+span::before{margin-right:4px;border-left:solid 1px transparent;border-radius:4px 0}.pure-material-textfield-outlined>input+span::after,.pure-material-textfield-outlined>textarea+span::after{flex-grow:1;margin-left:4px;border-right:solid 1px transparent;border-radius:0 4px}.pure-material-textfield-outlined:hover>input,.pure-material-textfield-outlined:hover>textarea{border-color:#767f91;border-top-color:transparent}.pure-material-textfield-outlined:hover>input+span::after,.pure-material-textfield-outlined:hover>input+span::before,.pure-material-textfield-outlined:hover>textarea+span::after,.pure-material-textfield-outlined:hover>textarea+span::before{border-top-color:#767f91}.pure-material-textfield-outlined:hover>input:not(:focus):placeholder-shown,.pure-material-textfield-outlined:hover>textarea:not(:focus):placeholder-shown{border-color:#767f91}.pure-material-textfield-outlined>input:not(:focus):placeholder-shown,.pure-material-textfield-outlined>textarea:not(:focus):placeholder-shown{border-top-color:#767f91}.pure-material-textfield-outlined>input:not(:focus):placeholder-shown+span,.pure-material-textfield-outlined>textarea:not(:focus):placeholder-shown+span{font-size:inherit;line-height:60px}.pure-material-textfield-outlined>input:not(:focus):placeholder-shown+span::after,.pure-material-textfield-outlined>input:not(:focus):placeholder-shown+span::before,.pure-material-textfield-outlined>textarea:not(:focus):placeholder-shown+span::after,.pure-material-textfield-outlined>textarea:not(:focus):placeholder-shown+span::before{border-top-color:transparent}.pure-material-textfield-outlined>input:focus,.pure-material-textfield-outlined>textarea:focus{border-color:#0a2534;border-top-color:transparent;box-shadow:inset 1px 0 var(--pure-material-safari-helper1),inset -1px 0 var(--pure-material-safari-helper1),inset 0 -1px var(--pure-material-safari-helper1);outline:0}.pure-material-textfield-outlined>input:focus+span,.pure-material-textfield-outlined>textarea:focus+span{color:#0a2534}.pure-material-textfield-outlined>input:focus+span::after,.pure-material-textfield-outlined>input:focus+span::before,.pure-material-textfield-outlined>textarea:focus+span::after,.pure-material-textfield-outlined>textarea:focus+span::before{border-top-color:#0a2534!important;box-shadow:inset 0 1px var(--pure-material-safari-helper1)}.pure-material-textfield-outlined>input:disabled,.pure-material-textfield-outlined>input:disabled+span,.pure-material-textfield-outlined>textarea:disabled,.pure-material-textfield-outlined>textarea:disabled+span{border-color:#767f91!important;border-top-color:transparent!important;color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38);pointer-events:none}.pure-material-textfield-outlined>input:disabled+span::after,.pure-material-textfield-outlined>input:disabled+span::before,.pure-material-textfield-outlined>textarea:disabled+span::after,.pure-material-textfield-outlined>textarea:disabled+span::before{border-top-color:#767f91!important}.pure-material-textfield-outlined>input:disabled:placeholder-shown,.pure-material-textfield-outlined>input:disabled:placeholder-shown+span,.pure-material-textfield-outlined>textarea:disabled:placeholder-shown,.pure-material-textfield-outlined>textarea:disabled:placeholder-shown+span{border-top-color:#767f91!important}.pure-material-textfield-outlined>input:disabled:placeholder-shown+span::after,.pure-material-textfield-outlined>input:disabled:placeholder-shown+span::before,.pure-material-textfield-outlined>textarea:disabled:placeholder-shown+span::after,.pure-material-textfield-outlined>textarea:disabled:placeholder-shown+span::before{border-top-color:transparent!important}@media not all and (min-resolution:.001dpcm){@supports (-webkit-appearance:none){.pure-material-textfield-outlined>input,.pure-material-textfield-outlined>input+span,.pure-material-textfield-outlined>input+span::after,.pure-material-textfield-outlined>input+span::before,.pure-material-textfield-outlined>textarea,.pure-material-textfield-outlined>textarea+span,.pure-material-textfield-outlined>textarea+span::after,.pure-material-textfield-outlined>textarea+span::before{transition-duration:.1s}}}.mCont{padding:25px;padding-left:55px;width:1024px;min-width:300px}#main-cont{width:55vw;min-width:320px}.upper-logo-heading-cont{display:flex;align-items:center}.upper-logo-heading-cont div{width:80px;background:rgba(255,255,255,.3);box-shadow:0 3px 16px #bbbBBB33;border-radius:10px;padding:15px;display:flex;align-items:center;justify-content:center}.upper-logo-heading-cont img{width:80px, height: 30px}.upper-logo-heading-cont h2{color:#000;font-weight:700;font-size:30px;margin-left:10%}.form-cont{background:rgba(255,255,255,.2);box-shadow:0 3px 16px #bbbBBB33;border-radius:10px;padding:25px;margin:20px 0;overflow:auto}.form-cont::-webkit-scrollbar{display:none}.form-cont h4{color:#0a2534;font-weight:700;font-size:18px}.form-sub-cont{border-bottom:.1px solid rgba(46,48,57,.2);padding-bottom:25px}.form-input-cont{display:flex;justify-content:space-between;flex-wrap:wrap}.textarea-field{width:100%;height:100px}.header-para-cont p{color:#767f91;font-weight:500;font-size:14px;margin:10px 0 0 0;line-height:23px}.header-para-cont div{display:flex;align-items:center;justify-content:space-between;margin-top:10px}.header-para-cont div span{display:flex;align-items:center}.header-para-cont div span h6{color:#0a2534;font-weight:600;font-size:13px}.header-para-cont div input{color:#0a2534;background:0 0;height:15px;width:15px}.header-para-cont div p{margin:0 0 0 10px}.regards-txt h4{margin:20px 0 0 0;color:#767f91;font-size:16px;font-weight:600}.regards-txt h2{font-family:'Sebastian Bobby';font-weight:500;color:#0a2534;font-size:60px;margin-left:20px;margin-top:5px}.form-lower-sec-cont{display:flex;justify-content:space-between;align-items:center}.form-lower-sec-cont div{display:flex;align-items:center}.form-lower-sec-cont div p{font-weight:500;color:#485163;font-size:12px}.form-lower-sec-cont div a{font-weight:500;color:#485163;font-size:12px;margin:0 15px 0 5px}.form-lower-sec-cont div span{background:rgba(255,255,255,.2);box-shadow:0 3px 16px #bbbBBB33;display:flex;justify-content:center;align-items:center;padding:10px;border-radius:40px}.form-lower-sec-cont div img{height:25px;width:25px}#cancel-btn{background-color:transparent;color:#0a1534;border:1px solid #a5ddea;padding:10px 30px;border-radius:30px;display:flex;justify-content:center;align-items:center;cursor:pointer;font-weight:600;font-size:14px;box-shadow:0 5px 10px rgba(0,0,0,.1)}#addClient-btn,#export-btn,#exportWord-btn{background-color:#a5ddea;color:#0a1534;padding:11px 30px;border-radius:30px;display:flex;justify-content:center;align-items:center;cursor:pointer;font-weight:600;font-size:14px;margin-left:15px;border:none;box-shadow:0 5px 10px rgba(0,0,0,.1)}#cancel-btn,#export-btn:focus{outline:0}#cancel-btn,#export-btn:focus{outline:0}.added-client{display:flex;align-items:center;justify-content:space-between}.added-client h6{color:#0a2534;font-weight:600;font-size:15px;margin-top:20px}.added-client p{color:#8c69ff;font-size:13px;margin-top:20px;font-weight:500;cursor:pointer}#logo-img{height: 50px !important; width: 80px !important}";

    let htmlContent =
      '<!DOCTYPE html><html><head lang="en"><style>' +
      css +
      "</style>" +
      '<meta charset="UTF-8"><title>Report</title></head><body>' +
      html +
      "</body></html>";

    var html2 = juice.inlineContent(htmlContent, css);
    let docx = htmlDocx.asBlob(html2);
    saveAs(docx, "scribble-finance-report.docx");
  };

  render() {
    const {
      isSecondClientAdd,
      requiredAction1,
      requiredAction2,
      requiredAction3,
      requiredAction4,
      requiredAction5,
      requiredAction6,
      requiredAction7,
      requiredAction8,
      requiredAction9,
      brokerName,
      brokerPhone,
      brokerEmail,
      client1Name,
      client1Phone,
      client1Email,
      client2Name,
      client2Phone,
      client2Email,
      yourObjective,
      challengeRightNow,
      other,
      formValues,
    } = this.state;

    const onSubmit = (data, actions) => {
      console.log("DATA ==>", data);
      debugger;
      axios
        .post("/.netlify/functions/firstForm", data)
        .then(result => {
          actions.setSubmitting(false);
          console.log("RESULT 2", result);
          toast.success("Email has been sent successfully.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch(error => {
          let msg = "An Error occurred. Please contact admin";
          if (error?.response?.data?.error?.response) {
            msg = error.response.data.error.response;
          }

          actions.setSubmitting(false);
          toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    };

    return (
      <div id='main-cont'>
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldTouched,
            setFieldValue,
            isValid,
          }) => {
            return (
              <>
                <div className='upper-logo-heading-cont'>
                  <div>
                    <img src={LogoImg} id='logo-img' alt='' />
                  </div>
                  <h2>Your Lending Plan</h2>
                </div>
                <div className='form-cont'>
                  <div className='form-sub-cont'>
                    <h4>Broker Details</h4>
                    <div
                      className='form-input-cont'
                      style={{ marginTop: "15px" }}
                    >
                      <label className='pure-material-textfield-outlined'>
                        <p>
                          {errors.brokerName && touched.brokerName && (
                            <p>{errors.brokerName}</p>
                          )}
                        </p>
                        <input
                          value={values.brokerName}
                          // style={this.state.brokerNameEmpty ? { borderColor: 'red', } : null}
                          name='brokerName'
                          onBlur={handleBlur}
                          onChange={event => {
                            handleChange(event);
                            this.addValues(event);
                          }}
                          // onFocus={() => this.setState({ brokerNameEmpty: false })}
                          placeholder=' '
                        />

                        <span
                        // style={this.state.brokerNameEmpty ? { color: 'red' } : null}
                        >
                          {/* {this.state.brokerNameEmpty ? 'field is required*' : 'Broker Name'} */}
                          Broker Name
                        </span>
                      </label>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.brokerPhone}
                          // style={this.state.brokerPhoneEmpty ? { borderColor: 'red', } : null}
                          name='brokerPhone'
                          onBlur={handleBlur}
                          onChange={event => {
                            handleChange(event);
                            this.addValues(event);
                          }}
                          // onFocus={() => this.setState({ brokerPhoneEmpty: false })}
                          placeholder=' '
                        />
                        <span>Phone Number</span>
                        {errors.brokerPhone && touched.brokerPhone && (
                          <p className='text-danger font-10'>
                            {errors.brokerPhone}
                          </p>
                        )}
                      </label>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.brokerEmail}
                          // style={this.state.brokerEmailEmpty ? { borderColor: 'red', } : null}
                          name='brokerEmail'
                          onBlur={handleBlur}
                          onChange={event => {
                            handleChange(event);
                            this.addValues(event);
                          }}
                          // onFocus={() => this.setState({ brokerEmailEmpty: false })}
                          placeholder=' '
                        />
                        <span
                        // style={this.state.brokerEmailEmpty ? { color: 'red' } : null}
                        >
                          {/* {this.state.brokerEmailEmpty ? 'field is required*' : 'Email'} */}
                          Email
                        </span>
                        {errors.brokerEmail && touched.brokerEmail && (
                          <p className='text-danger font-10'>
                            {errors.brokerEmail}
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className='form-sub-cont'>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4 style={{ marginTop: "20px" }}>Client Details</h4>
                      <button
                        onClick={this.addClients}
                        style={{ marginTop: "20px", marginLeft: 0 }}
                        id='addClient-btn'
                      >
                        Add Client
                      </button>
                    </div>
                    {this.state.isSecondClientAdd && (
                      <div className='added-client'>
                        <h6>Client1</h6>
                        <p
                          onClick={() => {
                            this.setState({ isSecondClientAdd: false });
                          }}
                        >
                          Remove This Client
                        </p>
                      </div>
                    )}
                    <div className='form-input-cont' style={{ margin: 0 }}>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.client1Name}
                          // style={this.state.client1NameEmpty ? { borderColor: 'red', } : null}
                          name='client1Name'
                          onBlur={handleBlur}
                          onChange={event => {
                            handleChange(event);
                            this.addValues(event);
                          }}
                          // onFocus={() => this.setState({ client1NameEmpty: false })}
                          placeholder=' '
                        />
                        <span>Client Name</span>
                        {errors.client1Name && touched.client1Name && (
                          <p className='text-danger font-10'>
                            {errors.client1Name}
                          </p>
                        )}
                      </label>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.client1Phone}
                          // style={this.state.client1PhoneEmpty ? { borderColor: 'red', } : null}
                          name='client1Phone'
                          onBlur={handleBlur}
                          onChange={event => {
                            handleChange(event);
                            this.addValues(event);
                          }}
                          // onFocus={() => this.setState({ client1PhoneEmpty: false })}
                          placeholder=' '
                        />
                        <span
                        // style={this.state.client1PhoneEmpty ? { color: 'red' } : null}
                        >
                          {/* {this.state.client1PhoneEmpty ? 'field is required*' : 'Phone Number'} */}
                          Phone Number
                        </span>
                        {errors.client1Phone && touched.client1Phone && (
                          <p className='text-danger font-10'>
                            {errors.client1Phone}
                          </p>
                        )}
                      </label>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.client1Email}
                          // style={this.state.client1EmailEmpty ? { borderColor: 'red', } : null}
                          name='client1Email'
                          onBlur={handleBlur}
                          onChange={event => {
                            handleChange(event);
                            this.addValues(event);
                          }}
                          // onFocus={() => this.setState({ client1EmailEmpty: false })}
                          placeholder=' '
                        />
                        <span
                        // style={this.state.client1EmailEmpty ? { color: 'red' } : null}
                        >
                          {/* {this.state.client1EmailEmpty ? 'field is required*' : 'Email'} */}
                          Email
                        </span>
                        {errors.client1Email && touched.client1Email && (
                          <p className='text-danger font-10'>
                            {errors.client1Email}
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                  {this.state.isSecondClientAdd && (
                    <div className='form-sub-cont'>
                      <div className='added-client'>
                        <h6>Client2</h6>
                        <p
                          onClick={() => {
                            this.setState({ isSecondClientAdd: false });
                          }}
                        >
                          Remove This Client
                        </p>
                      </div>
                      <div className='form-input-cont' style={{ margin: 0 }}>
                        <label className='pure-material-textfield-outlined'>
                          <input
                            value={values.client2Name}
                            name='client2Name'
                            onBlur={handleBlur}
                            onChange={event => {
                              handleChange(event);
                              this.addValues(event);
                            }}
                            placeholder=' '
                          />
                          <span>Client Name</span>
                        </label>
                        <label className='pure-material-textfield-outlined'>
                          <input
                            value={values.client2Phone}
                            name='client2Phone'
                            onBlur={handleBlur}
                            onChange={event => {
                              handleChange(event);
                              this.addValues(event);
                            }}
                            placeholder=' '
                          />
                          <span>Phone Number</span>
                        </label>
                        <label className='pure-material-textfield-outlined'>
                          <input
                            value={values.client2Email}
                            name='client2Email'
                            onBlur={handleBlur}
                            onChange={event => {
                              handleChange(event);
                              this.addValues(event);
                            }}
                            placeholder=' '
                          />
                          <span>Email</span>
                        </label>
                      </div>
                    </div>
                  )}
                  <div className=''>
                    <h4 style={{ marginTop: "20px" }}>Your Objective</h4>
                    <div className='form-input-cont' style={{ margin: 0 }}>
                      <label className='pure-material-textfield-outlined textarea-field'>
                        <input
                          value={values.yourObjective}
                          name='yourObjective'
                          onBlur={handleBlur}
                          onChange={event => {
                            handleChange(event);
                            this.addValues(event);
                          }}
                          placeholder=' '
                        />
                        <span>Client's financial objective</span>
                      </label>
                    </div>
                  </div>
                  <div className='form-sub-cont'>
                    <h4 style={{ marginTop: "20px" }}>
                      The Challenge Right Now
                    </h4>
                    <div className='form-input-cont' style={{ margin: 0 }}>
                      <label className='pure-material-textfield-outlined textarea-field'>
                        <input
                          value={values.challengeRightNow}
                          name='challengeRightNow'
                          onBlur={handleBlur}
                          onChange={event => {
                            handleChange(event);
                            this.addValues(event);
                          }}
                          placeholder=' '
                        />
                        <span>Reason client is unable to obtain finance</span>
                      </label>
                    </div>
                  </div>
                  <div className='header-para-cont'>
                    <h4 style={{ marginTop: "20px" }}>
                      Let's Help You Get To Where You Want To Be
                    </h4>
                    <p>
                      As we've discussed, the following plan outlines the steps
                      you can take now to improve your chances securing a loan
                      in a few months' time. Please keep in mind that a final
                      loan decision is ultimately up to your chosen lender, and
                      lending policies are always changing. For this reason, we
                      are unable to guarantee your success at any time. However,
                      we can support you in improving your current position.
                    </p>
                  </div>
                  <div className='header-para-cont form-sub-cont'>
                    <h4 style={{ marginTop: "20px" }}>Required Actions</h4>
                    <div>
                      <span>
                        <h6>01.</h6>
                        <p>
                          Protect your credit score; don't enquire about, or
                          apply for any credit facility without first speaking
                          with your broker.
                        </p>
                      </span>
                      <input
                        name='requiredAction1'
                        checked={requiredAction1}
                        onChange={event => {
                          handleChange(event);
                          //ya
                          // setFieldValue("requiredAction1", event.target.value, true)
                          this.setState({ requiredAction1: !requiredAction1 });
                        }}
                        type='checkbox'
                      />
                    </div>
                    <div>
                      <span>
                        <h6>02.</h6>
                        <p>
                          Improve your credit score; approach the relevant
                          provider about removing defaults.
                        </p>
                      </span>
                      <input
                        name='requiredAction2'
                        checked={requiredAction2}
                        onChange={event => {
                          handleChange(event);
                          //ya
                          // setFieldValue("requiredAction1", event.target.value, true)
                          this.setState({ requiredAction2: !requiredAction2 });
                        }}
                        type='checkbox'
                      />
                    </div>
                    <div>
                      <span>
                        <h6>03.</h6>
                        <p>
                          Stay on top of bills; make payments on all existing
                          debts by the due date.
                        </p>
                      </span>
                      <input
                        name='requiredAction3'
                        checked={requiredAction3}
                        onChange={event => {
                          handleChange(event);
                          //ya
                          // setFieldValue("requiredAction1", event.target.value, true)
                          this.setState({ requiredAction3: !requiredAction3 });
                        }}
                        type='checkbox'
                      />
                    </div>
                    <div>
                      <span>
                        <h6>04.</h6>
                        <p>
                          Boots your savings; put a little money aside each week
                          (and don't touch it!).
                        </p>
                      </span>
                      <input
                        name='requiredAction4'
                        checked={requiredAction4}
                        onChange={event => {
                          handleChange(event);
                          //ya
                          // setFieldValue("requiredAction1", event.target.value, true)
                          this.setState({ requiredAction4: !requiredAction4 });
                        }}
                        type='checkbox'
                      />
                    </div>
                    <div>
                      <span>
                        <h6>05.</h6>
                        <p>
                          Reduce your expenses; compare utility and insurance
                          providers for lower fees, and cut back on
                          discretionary spending.
                        </p>
                      </span>
                      <input
                        name='requiredAction5'
                        checked={requiredAction5}
                        onChange={event => {
                          handleChange(event);
                          //ya
                          // setFieldValue("requiredAction1", event.target.value, true)
                          this.setState({ requiredAction5: !requiredAction5 });
                        }}
                        type='checkbox'
                      />
                    </div>
                    <div>
                      <span>
                        <h6>06.</h6>
                        <p>
                          Increase your income; if you have opportunity to earn
                          more through additional hours or commissions, go for
                          it.
                        </p>
                      </span>
                      <input
                        name='requiredAction6'
                        checked={requiredAction6}
                        onChange={event => {
                          handleChange(event);
                          //ya
                          // setFieldValue("requiredAction1", event.target.value, true)
                          this.setState({ requiredAction6: !requiredAction6 });
                        }}
                        type='checkbox'
                      />
                    </div>
                    <div>
                      <span>
                        <h6>07.</h6>
                        <p>
                          Wait it out; to meet the minimum employment tenure,
                          it's simply a matter of time.
                        </p>
                      </span>
                      <input
                        name='requiredAction7'
                        checked={requiredAction7}
                        onChange={event => {
                          handleChange(event);
                          //ya
                          // setFieldValue("requiredAction1", event.target.value, true)
                          this.setState({ requiredAction7: !requiredAction7 });
                        }}
                        type='checkbox'
                      />
                    </div>
                    <div>
                      <span>
                        <h6>08.</h6>
                        <p>Complete your business tax return.</p>
                      </span>
                      <input
                        name='requiredAction8'
                        checked={requiredAction8}
                        onChange={event => {
                          handleChange(event);
                          //ya
                          // setFieldValue("requiredAction1", event.target.value, true)
                          this.setState({ requiredAction8: !requiredAction8 });
                        }}
                        type='checkbox'
                      />
                    </div>
                    <div>
                      <span>
                        <h6>09.</h6>
                        <p>Complete your individual tax return.</p>
                      </span>
                      <input
                        name='requiredAction9'
                        checked={requiredAction9}
                        onChange={event => {
                          handleChange(event);
                          //ya
                          // setFieldValue("requiredAction1", event.target.value, true)
                          this.setState({ requiredAction9: !requiredAction9 });
                        }}
                        type='checkbox'
                      />
                    </div>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <h6>10.</h6>
                      <label
                        style={{ marginLeft: "10px" }}
                        className='pure-material-textfield-outlined'
                      >
                        <input
                          style={{ width: "100%", height: "100%" }}
                          value={values.other}
                          name='other'
                          onBlur={handleBlur}
                          onChange={event => {
                            handleChange(event);
                            this.addValues(event);
                          }}
                          placeholder=' '
                        />
                        <span style={{ width: "100%" }}>Other</span>
                      </label>
                    </span>
                  </div>
                  <div className='header-para-cont'>
                    <h4 style={{ marginTop: "20px" }}>Checking In</h4>
                    <p>
                      A member of our team will check you in with you over the
                      coming weeks to see how you're tracking with the above
                      plan. This is your chance to ask questions, celebrate your
                      wins or (because life happens) reset! Let's keep you on
                      track to succeed. Anything else we can do to support you?
                      Let me know! Otherwise, I look forward to helping you
                      achieve your goals in a few months' time.
                    </p>
                  </div>
                  <div className='regards-txt'>
                    <h4>Regards,</h4>
                    <h2>Kate</h2>
                  </div>
                </div>
                <div className='form-lower-sec-cont mb-10 justify-content-center'>
                  <div>
                    <p>Any Questions?</p>
                    <a href='#'>Call Us Now</a>
                    <span>
                      <img src={PhoneImg} alt='' />
                    </span>
                  </div>
                </div>
                <div className='form-lower-sec-cont justify-content-center'>
                  <div className='btn-container'>
                    <button
                      id='cancel-btn'
                      disabled={isSubmitting}
                      onClick={() => {
                        debugger;
                        handleSubmit();
                      }}
                      id='exportWord-btn'
                    >
                      {isSubmitting ? "Sending Email...!" : "Send Email"}
                    </button>
                    <button onClick={this.exportPdf} id='export-btn'>
                      Export As PDF
                    </button>
                    <button onClick={this.exportWord} id='exportWord-btn'>
                      Export As Word
                    </button>
                  </div>
                </div>
                {/* {this.docFileData()} */}
              </>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default Form1;
