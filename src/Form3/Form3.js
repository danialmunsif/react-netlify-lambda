import React from "react";
import ReactDOMServer from "react-dom/server";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import htmlDocx from "html-docx-js/dist/html-docx";
import SignatureCanvas from "react-signature-canvas";
import axios from "axios";
import { toast } from "react-toastify";

import "../Form1/form1.css";
import LogoImg from "../images/spector-finance.png";
import LogoImg2 from "../images/spector-finance-3.png";
import PhoneImg from "../images/phone2.png";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  borrowingEntity: Yup.string(),
  borrowingId: Yup.number()
    .typeError("Borrowing Id should be a number")
    .required("Borrowing Id is required"),
  guarantorName: Yup.string(),
  grossLoanAmount: Yup.number()
    .required("gross Loan Amount is required")
    .typeError("Gross Loan Amount should be a number"),
  facilityType: Yup.string(),
  facilityPurpose: Yup.string(),
  facilityTerm: Yup.string(),
  weeklyRepayment: Yup.number()
    .typeError("Weekly Payment should be a number")
    .required("Weekly Payment is required"),
  date: Yup.date(),
  name: Yup.string(),
});

const paymentDetailsTxt = {
  color: "#5B6475",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "23px",
  marginRight: 10,
};

const paymentDetailsParaTxt = {
  color: "#767F91",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "23px",
  marginLeft: 10,
};

const regardsTxtHeadingTxt = {
  color: "#767F91",
  fontWeight: 600,
  fontSize: "16px",
  marginTop: 15,
};

const regardsTxtSubHeadingTxt = {
  color: "#5B6475",
  fontWeight: 600,
  fontSize: "16px",
  marginTop: 0,
};

const fromCompanyNoTxt = {
  color: "#767F91",
  fontWeight: 500,
  fontSize: "14px",
  marginTop: 0,
};

class Form3 extends React.Component {
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
      borrowingEntity: "",
      borrowingId: "",
      guarantorName: "",
      grossLoanAmount: "",
      facilityType: "",
      facilityPurpose: "",
      facilityTerm: "",
      weeklyRepayment: "",
      date: "",
      name: "",
      signature: "",
      signatureBaseImg: "",
      formValues: {
        borrowingEntity: "",
        borrowingId: "",
        guarantorName: "",
        grossLoanAmount: "",
        facilityType: "",
        facilityPurpose: "",
        facilityTerm: "",
        weeklyRepayment: "",
        date: "",
        name: "",
        signature: "",
        signatureBaseImg: "",
      },
    };
  }

  addClients = () => {
    this.setState({ isSecondClientAdd: true });
  };

  addValues = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formData = () => (
    <div className='mCont'>
      <div className='upper-logo-heading-cont'>
        <div>
          <img src={LogoImg2} id='logo-img' alt='' />
        </div>
        <h2>UNSECURED FINANCE OFFER B</h2>
      </div>
      <div className='form-cont'>
        <div className='form-sub-cont'>
          <div style={{ marginBottom: 20 }} className='header-para-cont'>
            <h4>Congratulations!</h4>
            <p>
              Specter Finance Group Pty Ltd is pleased to proceed with your
              application on the offered terms below. Please note this is not an
              unconditional offer of finance, A final approval may be subject to
              further due diligence and consideration upon required supporting
              documents.
            </p>
          </div>
          <h4>Finance Particulars</h4>
          <div className='form-input-cont'>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.borrowingEntity}
                name='borrowingEntity'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Borrowing Entity</span>
            </label>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.borrowingId}
                name='borrowingId'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Borrowing Id</span>
            </label>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.guarantorName}
                name='guarantorName'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Guarantor Name</span>
            </label>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.grossLoanAmount}
                name='grossLoanAmount'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Gross Loan Amount</span>
            </label>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.facilityType}
                name='facilityType'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Facility Type</span>
            </label>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.facilityPurpose}
                name='facilityPurpose'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Facility Purpose</span>
            </label>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.facilityTerm}
                name='facilityTerm'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Facility Term</span>
            </label>
            <label className='pure-material-textfield-outlined'>
              <input
                value={this.state.weeklyRepayment}
                name='weeklyRepayment'
                onChange={this.addValues}
                placeholder=' '
              />
              <span>Weekly Repayment</span>
            </label>
          </div>
        </div>
        <div className='header-para-cont'>
          <h4 style={{ marginTop: "20px" }}>To Proceed</h4>
          <p>
            In order to proceed with your Facility, please pay the Application
            Fee of $990 Inc GST to Specter Finance Pty Ltd. I understand this
            fee is solely for processing your application and is non-refundable.
          </p>
        </div>
        <div className='header-para-cont form-sub-cont'>
          <h4 style={{ marginTop: "20px" }}>Payment Details</h4>
          <p id='payment-details-note' style={{ marginTop: 10 }}>
            EFT Payment, Please use <span>OSKO</span> for accelerated
            settlement. Payment can be made VIA EFT.
          </p>
          <div id='payment-details-opt-cont'>
            <div>
              <p id='payment-details-note'>Bank Name</p>
              <p id='payment-details-note'>:-</p>
              <p>Police Credit Union of South Australia</p>
            </div>
            <div>
              <p id='payment-details-note'>Account Name</p>
              <p id='payment-details-note'>:-</p>
              <p>Specter Finance Group Pty Ltd</p>
            </div>
            <div>
              <p id='payment-details-note'>Account Number</p>
              <p id='payment-details-note'>:-</p>
              <p>5258072</p>
            </div>
            <div>
              <p id='payment-details-note'>BSB</p>
              <p id='payment-details-note'>:-</p>
              <p>805 005</p>
            </div>
            <div>
              <p id='payment-details-note'>Reference</p>
              <p id='payment-details-note'>:-</p>
              <p>Please use your full name as a reference</p>
            </div>
          </div>
        </div>
        <div className='header-para-cont form-sub-cont'>
          <h4 style={{ marginTop: "20px" }}>EFT Authority</h4>
          <div id='payment-details-opt-cont'>
            <div>
              <p id='payment-details-note'>To</p>
              <p id='payment-details-note'>:-</p>
              <p>
                Specter Finance Group Pty Ltd ACN 624 381586
                <br /> Suite 11 36-48 Barndioota rd Salisbury Plain 5109
              </p>
            </div>
          </div>
        </div>
        <div
          className='header-para-cont form-sub-cont'
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <label
            style={{ width: "49%" }}
            className='pure-material-textfield-outlined'
          >
            <input
              value={this.state.date}
              name='facilityTerm'
              onChange={this.addValues}
              placeholder=' '
            />
            <span>Date</span>
          </label>
          <label
            style={{ width: "49%" }}
            className='pure-material-textfield-outlined'
          >
            <input
              value={this.state.name}
              name='brokerageFee'
              onChange={this.addValues}
              placeholder=' '
            />
            <span>Name</span>
          </label>
          <label
            style={{ width: "49%" }}
            style={{ marginBottom: 10 }}
            className='pure-material-textfield-outlined'
          >
            <img src={this.state.signatureBaseImg} />
            <span>
              <h1>Signature</h1>
            </span>
          </label>
        </div>
        <div className='regards-txt'>
          <h4>From,</h4>
          <h4 style={{ color: "#5B6475", marginTop: 15 }}>
            Stealth Corporation Pty Ltd
          </h4>
          <p className='from-company-no-txt'>ABN 85 614 803 539</p>
        </div>
      </div>
    </div>
  );
  // sendEmail = () => {
  //   console.log("this.state", this.state);
  //   // create an api to send this state data to server.
  //   // send axios request to that api end point
  //   //
  //   debugger;
  // };

  exportPdf = () => {
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
        htmlToPDF.save("specter-finance-unsecured.pdf");
      },
    });
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
  };

  wordFormData = () => {
    return (
      <div className='mCont'>
        <div className='upper-logo-heading-cont'>
          <table>
            <tbody>
              <tr>
                <td className='doc-logo-img'>
                  <img src={LogoImg2} id='logo-img' alt='image' />
                </td>
                <td>
                  <h2>UNSECURED FINANCE OFFER B</h2>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='form-cont'>
          <div className='form-sub-cont'>
            <div className='header-para-cont'>
              <h4 style={{ marginTop: "20px" }}>Congratulations!</h4>
              <p>
                Specter Finance Group Pty Ltd is pleased to proceed with your
                application on the offered terms below. Please note this is not
                an unconditional offer of finance, A final approval may be
                subject to further due diligence and consideration upon required
                supporting documents.
              </p>
            </div>
            <h4>Finance Particulars</h4>
            <div className='form-input-cont'>
              <table>
                <tbody>
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
                      {this.state.borrowingEntity}
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
                      {this.state.borrowingId}
                    </td>
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
                      {this.state.guarantorName}
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
                      {this.state.grossLoanAmount}
                    </td>
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
                      {this.state.facilityType}
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
                      {this.state.facilityPurpose}
                    </td>
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
                      {this.state.facilityTerm}
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
                      {this.state.weeklyRepayment}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='header-para-cont'>
              <h4 style={{ marginTop: "20px" }}>To Proceed</h4>
              <p>
                In order to proceed with your Facility, please pay the
                Application Fee of $990 Inc GST to Specter Finance Pty Ltd. I
                understand this fee is solely for processing your application
                and is non-refundable.
              </p>
            </div>

            <div className='header-para-cont form-sub-cont'>
              <h4 style={{ marginTop: "20px" }}>Payment Details</h4>
              <table>
                <tbody>
                  <tr>
                    <td style={paymentDetailsTxt}>
                      EFT Payment, Please use{" "}
                      <span style={{ color: "#FF7A00" }}>OSKO</span> for
                      accelerated settlement. Payment can be made VIA EFT.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style={{ marginTop: 10 }}>
                <tbody>
                  <tr>
                    <td style={paymentDetailsTxt}>Bank Name</td>
                    <td style={paymentDetailsTxt}>:-</td>
                    <td style={paymentDetailsParaTxt}>
                      Police Credit Union of South Australia
                    </td>
                  </tr>
                  <tr>
                    <td style={paymentDetailsTxt}>Account Name</td>
                    <td style={paymentDetailsTxt}>:-</td>
                    <td style={paymentDetailsParaTxt}>
                      Specter Finance Group Pty Ltd
                    </td>
                  </tr>
                  <tr>
                    <td style={paymentDetailsTxt}>Account Number</td>
                    <td style={paymentDetailsTxt}>:-</td>
                    <td style={paymentDetailsParaTxt}>5258072</td>
                  </tr>
                  <tr>
                    <td style={paymentDetailsTxt}>BSB</td>
                    <td style={paymentDetailsTxt}>:-</td>
                    <td style={paymentDetailsParaTxt}>805005</td>
                  </tr>
                  <tr>
                    <td style={paymentDetailsTxt}>Reference</td>
                    <td style={paymentDetailsTxt}>:-</td>
                    <td style={paymentDetailsParaTxt}>
                      Please use your full name as a reference
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='header-para-cont form-sub-cont'>
              <h4 style={{ marginTop: "10px" }}>EFT Authority</h4>
              <table>
                <tbody>
                  <tr>
                    <td style={paymentDetailsTxt}>To</td>
                    <td style={paymentDetailsTxt}>:-</td>
                    <td style={paymentDetailsParaTxt}>
                      Specter Finance Group Pty Ltd ACN 624 381586 Suite 11
                      36-48 Barndioota rd Salisbury Plain 5109
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <table style={{ marginTop: "15px" }}>
              <tbody>
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
                    {this.state.date}
                  </td>
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
                    {this.state.name}
                  </td>
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
                  ></td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td style={regardsTxtHeadingTxt}>From,</td>
                </tr>
                <tr>
                  <td style={regardsTxtSubHeadingTxt}>
                    Stealth Corporation Pty Ltd
                  </td>
                </tr>
                <tr>
                  <td style={fromCompanyNoTxt}>ABN 85 614 803 539</td>
                </tr>
                <tr>
                  <td>
                    <img src={this.state.signatureBaseImg} />
                    <h1>Signature</h1>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  exportWord = () => {
    debugger;
    const juice = require("juice");
    var html = ReactDOMServer.renderToStaticMarkup(this.wordFormData());
    let css =
      "*{margin:0;padding:0;font-family:'Calibri', sans-serif}@font-face{font-family:'Sebastian Bobby';src:url(../SebastianBobby.woff) format('woff'),url(../SebastianBobby.woff2) format('woff2');font-weight:400;font-style:normal}body{background-image:url(../images/background.png);height:100%;width:100%;padding:4% 0;background-position:center center;background-repeat:no-repeat;display:flex;justify-content:center;align-items:center}#pdf-generate-cont{display:none}.pure-material-textfield-outlined{--pure-material-safari-helper1:rgb(var(--pure-material-primary-rgb, 30, 150, 243));position:relative;display:inline-block;padding-top:5px;font-size:14px;font-weight:600;line-height:1.5;overflow:hidden;width:49%;margin:10px 0 0 0}.pure-material-textfield-outlined>input,.pure-material-textfield-outlined>textarea{box-sizing:border-box;margin:0;border:solid 1px;border-color:#767f91;border-top-color:transparent;border-radius:4px;padding:13px 13px 13px;width:100%;height:inherit;color:#0a2534;font-weight:600;background-color:transparent;box-shadow:none;font-family:inherit;font-size:inherit;line-height:inherit;caret-color:#767f91;transition:border .2s,box-shadow .2s}.pure-material-textfield-outlined>input+span,.pure-material-textfield-outlined>textarea+span{position:absolute;top:0;left:0;display:flex;border-color:#767f91;width:100%;max-height:100%;color:#767f91;font-size:75%;line-height:15px;cursor:text;transition:color .2s,font-size .2s,line-height .2s}.pure-material-textfield-outlined>input+span::after,.pure-material-textfield-outlined>input+span::before,.pure-material-textfield-outlined>textarea+span::after,.pure-material-textfield-outlined>textarea+span::before{content:'';display:block;box-sizing:border-box;margin-top:6px;border-top:solid 1px;border-top-color:#767f91;min-width:10px;height:8px;pointer-events:none;box-shadow:inset 0 1px transparent;transition:border-color .2s,box-shadow .2s}.pure-material-textfield-outlined>input+span::before,.pure-material-textfield-outlined>textarea+span::before{margin-right:4px;border-left:solid 1px transparent;border-radius:4px 0}.pure-material-textfield-outlined>input+span::after,.pure-material-textfield-outlined>textarea+span::after{flex-grow:1;margin-left:4px;border-right:solid 1px transparent;border-radius:0 4px}.pure-material-textfield-outlined:hover>input,.pure-material-textfield-outlined:hover>textarea{border-color:#767f91;border-top-color:transparent}.pure-material-textfield-outlined:hover>input+span::after,.pure-material-textfield-outlined:hover>input+span::before,.pure-material-textfield-outlined:hover>textarea+span::after,.pure-material-textfield-outlined:hover>textarea+span::before{border-top-color:#767f91}.pure-material-textfield-outlined:hover>input:not(:focus):placeholder-shown,.pure-material-textfield-outlined:hover>textarea:not(:focus):placeholder-shown{border-color:#767f91}.pure-material-textfield-outlined>input:not(:focus):placeholder-shown,.pure-material-textfield-outlined>textarea:not(:focus):placeholder-shown{border-top-color:#767f91}.pure-material-textfield-outlined>input:not(:focus):placeholder-shown+span,.pure-material-textfield-outlined>textarea:not(:focus):placeholder-shown+span{font-size:inherit;line-height:60px}.pure-material-textfield-outlined>input:not(:focus):placeholder-shown+span::after,.pure-material-textfield-outlined>input:not(:focus):placeholder-shown+span::before,.pure-material-textfield-outlined>textarea:not(:focus):placeholder-shown+span::after,.pure-material-textfield-outlined>textarea:not(:focus):placeholder-shown+span::before{border-top-color:transparent}.pure-material-textfield-outlined>input:focus,.pure-material-textfield-outlined>textarea:focus{border-color:#0a2534;border-top-color:transparent;box-shadow:inset 1px 0 var(--pure-material-safari-helper1),inset -1px 0 var(--pure-material-safari-helper1),inset 0 -1px var(--pure-material-safari-helper1);outline:0}.pure-material-textfield-outlined>input:focus+span,.pure-material-textfield-outlined>textarea:focus+span{color:#0a2534}.pure-material-textfield-outlined>input:focus+span::after,.pure-material-textfield-outlined>input:focus+span::before,.pure-material-textfield-outlined>textarea:focus+span::after,.pure-material-textfield-outlined>textarea:focus+span::before{border-top-color:#0a2534!important;box-shadow:inset 0 1px var(--pure-material-safari-helper1)}.pure-material-textfield-outlined>input:disabled,.pure-material-textfield-outlined>input:disabled+span,.pure-material-textfield-outlined>textarea:disabled,.pure-material-textfield-outlined>textarea:disabled+span{border-color:#767f91!important;border-top-color:transparent!important;color:rgba(var(--pure-material-onsurface-rgb,0,0,0),.38);pointer-events:none}.pure-material-textfield-outlined>input:disabled+span::after,.pure-material-textfield-outlined>input:disabled+span::before,.pure-material-textfield-outlined>textarea:disabled+span::after,.pure-material-textfield-outlined>textarea:disabled+span::before{border-top-color:#767f91!important}.pure-material-textfield-outlined>input:disabled:placeholder-shown,.pure-material-textfield-outlined>input:disabled:placeholder-shown+span,.pure-material-textfield-outlined>textarea:disabled:placeholder-shown,.pure-material-textfield-outlined>textarea:disabled:placeholder-shown+span{border-top-color:#767f91!important}.pure-material-textfield-outlined>input:disabled:placeholder-shown+span::after,.pure-material-textfield-outlined>input:disabled:placeholder-shown+span::before,.pure-material-textfield-outlined>textarea:disabled:placeholder-shown+span::after,.pure-material-textfield-outlined>textarea:disabled:placeholder-shown+span::before{border-top-color:transparent!important}@media not all and (min-resolution:.001dpcm){@supports (-webkit-appearance:none){.pure-material-textfield-outlined>input,.pure-material-textfield-outlined>input+span,.pure-material-textfield-outlined>input+span::after,.pure-material-textfield-outlined>input+span::before,.pure-material-textfield-outlined>textarea,.pure-material-textfield-outlined>textarea+span,.pure-material-textfield-outlined>textarea+span::after,.pure-material-textfield-outlined>textarea+span::before{transition-duration:.1s}}}.mCont{padding:25px;padding-left:55px;width:1024px;min-width:300px}#main-cont{width:55vw;min-width:320px}.upper-logo-heading-cont{display:flex;align-items:center}.upper-logo-heading-cont div{width:80px;background:rgba(255,255,255,.3);box-shadow:0 3px 16px #bbbBBB33;border-radius:10px;padding:15px;display:flex;align-items:center;justify-content:center}.upper-logo-heading-cont img{width:100%}.upper-logo-heading-cont h2{color:#000;font-weight:700;font-size:30px;margin-left:10%}.form-cont{background:rgba(255,255,255,.2);box-shadow:0 3px 16px #bbbBBB33;border-radius:10px;padding:25px;margin:20px 0;overflow:auto}.form-cont::-webkit-scrollbar{display:none}.form-cont h4{color:#0a2534;font-weight:700;font-size:18px}.form-sub-cont{border-bottom:.1px solid rgba(46,48,57,.2);padding-bottom:25px}.form-input-cont{display:flex;justify-content:space-between;flex-wrap:wrap}.textarea-field{width:100%;height:100px}.header-para-cont p{color:#767f91;font-weight:500;font-size:14px;margin:10px 0 0 0;line-height:23px}.header-para-cont div{display:flex;align-items:center;justify-content:space-between;margin-top:10px}.header-para-cont div span{display:flex;align-items:center}.header-para-cont div span h6{color:#0a2534;font-weight:600;font-size:13px}.header-para-cont div input{color:#0a2534;background:0 0;height:15px;width:15px}.header-para-cont div p{margin:0 0 0 10px}.regards-txt h4{margin:20px 0 0 0;color:#767f91;font-size:16px;font-weight:600}.regards-txt h2{font-family:'Sebastian Bobby';font-weight:500;color:#0a2534;font-size:60px;margin-left:20px;margin-top:5px}.form-lower-sec-cont{display:flex;justify-content:space-between;align-items:center}.form-lower-sec-cont div{display:flex;align-items:center}.form-lower-sec-cont div p{font-weight:500;color:#485163;font-size:12px}.form-lower-sec-cont div a{font-weight:500;color:#485163;font-size:12px;margin:0 15px 0 5px}.form-lower-sec-cont div span{background:rgba(255,255,255,.2);box-shadow:0 3px 16px #bbbBBB33;display:flex;justify-content:center;align-items:center;padding:10px;border-radius:40px}.form-lower-sec-cont div img{height:25px;width:25px}#cancel-btn{background-color:transparent;color:#0a1534;border:1px solid #a5ddea;padding:10px 30px;border-radius:30px;display:flex;justify-content:center;align-items:center;cursor:pointer;font-weight:600;font-size:14px;box-shadow:0 5px 10px rgba(0,0,0,.1)}#addClient-btn,#export-btn,#exportWord-btn{background-color:#a5ddea;color:#0a1534;padding:11px 30px;border-radius:30px;display:flex;justify-content:center;align-items:center;cursor:pointer;font-weight:600;font-size:14px;margin-left:15px;border:none;box-shadow:0 5px 10px rgba(0,0,0,.1)}#cancel-btn,#export-btn:focus{outline:0}#cancel-btn,#export-btn:focus{outline:0}.added-client{display:flex;align-items:center;justify-content:space-between}.added-client h6{color:#0a2534;font-weight:600;font-size:15px;margin-top:20px}.added-client p{color:#8c69ff;font-size:13px;margin-top:20px;font-weight:500;cursor:pointer}#logo-img{height: 50px !important; width: 80px !important} #payment-details-opt-cont{display: flex;flex-direction: column; justify-content: flex-start;align-items: flex-start;}";

    let htmlContent =
      '<!DOCTYPE html><html><head lang="en"><style>' +
      css +
      "</style>" +
      '<meta charset="UTF-8"><title>Report</title></head><body>' +
      html +
      "</body></html>";

    var html2 = juice.inlineContent(htmlContent, css);
    let docx = htmlDocx.asBlob(html2);
    saveAs(docx, "specter-finance-unsecured.docx");
  };

  uploadSignature = e => {
    this.setState({
      signature: URL.createObjectURL(e.target.files[0]),
    });

    setTimeout(() => {
      // Create canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = document.getElementById("signature-img");
      // Set width and height
      canvas.width = img.width;
      canvas.height = img.height;
      // Draw the image
      ctx.drawImage(img, 0, 0);
      let dataUrl = canvas.toDataURL();
      console.log(dataUrl);
      this.setState({ signatureBaseImg: dataUrl });
    });
  };

  render() {
    const { formValues } = this.state;

    const onSubmit = (data, actions) => {
      console.log("DATA ==>", data);
      debugger;
      axios
        .post("/.netlify/functions/thirdForm", data)
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
          actions.setSubmitting(false);
          console.error("error", error);
          toast.error("An Error occurred. Please contact admin", {
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
      <div className='form3-cont' id='main-cont'>
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
            console.log("ERRORS ==>", errors);
            console.log("VALUES ==>", values);
            const clear = () => {
              this.sigPad.clear();
              setFieldValue("signatureBaseImg", "", true);
              setFieldTouched("signatureBaseImg", true, true);
            };
            return (
              <>
                <div className='upper-logo-heading-cont'>
                  <div>
                    <img src={LogoImg} id='logo-img' alt='' />
                  </div>
                  <h2>UNSECURED FINANCE OFFER B</h2>
                </div>
                <div className='form-cont'>
                  <div className='form-sub-cont'>
                    <div
                      style={{ marginBottom: 20 }}
                      className='header-para-cont'
                    >
                      <h4>Congratulations!</h4>
                      <p>
                        Specter Finance Group Pty Ltd is pleased to proceed with
                        your application on the offered terms below. Please note
                        this is not an unconditional offer of finance, A final
                        approval may be subject to further due diligence and
                        consideration upon required supporting documents.
                      </p>
                    </div>
                    <h4>Finance Particulars</h4>
                    <div className='form-input-cont'>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.borrowingEntity}
                          // style={this.state.brokerNameEmpty ? { borderColor: 'red', } : null}
                          name='borrowingEntity'
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
                          Borrowing Entity
                        </span>
                        {errors.borrowingEntity && touched.borrowingEntity && (
                          <p className='text-danger font-10'>
                            {errors.borrowingEntity}
                          </p>
                        )}
                      </label>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.borrowingId}
                          // style={this.state.brokerPhoneEmpty ? { borderColor: 'red', } : null}
                          name='borrowingId'
                          onBlur={handleBlur}
                          onChange={event => {
                            handleChange(event);
                            this.addValues(event);
                          }}
                          // onFocus={() => this.setState({ brokerPhoneEmpty: false })}
                          placeholder=' '
                        />
                        <span
                        //  style={this.state.brokerPhoneEmpty ? { color: 'red' } : null}
                        >
                          {/* {this.state.brokerPhoneEmpty ? 'field is required*' : 'Phone Number'} */}
                          Borrowing Id
                        </span>
                        {errors.borrowingId && touched.borrowingId && (
                          <p className='text-danger font-10'>
                            {errors.borrowingId}
                          </p>
                        )}
                      </label>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.guarantorName}
                          // style={this.state.brokerEmailEmpty ? { borderColor: 'red', } : null}
                          name='guarantorName'
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
                          Guarantor Name
                        </span>
                        {errors.guarantorName && touched.guarantorName && (
                          <p className='text-danger font-10'>
                            {errors.guarantorName}
                          </p>
                        )}
                      </label>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.grossLoanAmount}
                          // style={this.state.brokerEmailEmpty ? { borderColor: 'red', } : null}
                          name='grossLoanAmount'
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
                          Gross Loan Amount
                        </span>
                        {errors.grossLoanAmount && touched.grossLoanAmount && (
                          <p className='text-danger font-10'>
                            {errors.grossLoanAmount}
                          </p>
                        )}
                      </label>

                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.facilityType}
                          // style={this.state.brokerNameEmpty ? { borderColor: 'red', } : null}
                          name='facilityType'
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
                          Facility Type
                        </span>
                        {errors.facilityType && touched.facilityType && (
                          <p className='text-danger font-10'>
                            {errors.facilityType}
                          </p>
                        )}
                      </label>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.facilityPurpose}
                          // style={this.state.brokerPhoneEmpty ? { borderColor: 'red', } : null}
                          name='facilityPurpose'
                          onBlur={handleBlur}
                          onChange={event => {
                            handleChange(event);
                            this.addValues(event);
                          }}
                          // onFocus={() => this.setState({ brokerPhoneEmpty: false })}
                          placeholder=' '
                        />
                        <span
                        //  style={this.state.brokerPhoneEmpty ? { color: 'red' } : null}
                        >
                          {/* {this.state.brokerPhoneEmpty ? 'field is required*' : 'Phone Number'} */}
                          Facility Purpose
                        </span>
                        {errors.facilityPurpose && touched.facilityPurpose && (
                          <p className='text-danger font-10'>
                            {errors.facilityPurpose}
                          </p>
                        )}
                      </label>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.facilityTerm}
                          // style={this.state.brokerEmailEmpty ? { borderColor: 'red', } : null}
                          name='facilityTerm'
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
                          Facility Term
                        </span>
                        {errors.facilityTerm && touched.facilityTerm && (
                          <p className='text-danger font-10'>
                            {errors.facilityTerm}
                          </p>
                        )}
                      </label>
                      <label className='pure-material-textfield-outlined'>
                        <input
                          value={values.weeklyRepayment}
                          // style={this.state.brokerEmailEmpty ? { borderColor: 'red', } : null}
                          name='weeklyRepayment'
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
                          Weekly Repayment
                        </span>
                        {errors.weeklyRepayment && touched.weeklyRepayment && (
                          <p className='text-danger font-10'>
                            {errors.weeklyRepayment}
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className='header-para-cont new-form-header-para-cont'>
                    <h4 style={{ marginTop: "20px" }}>To Proceed</h4>
                    <p>
                      In order to proceed with your Facility, please pay the
                      Application Fee of $990 Inc GST to Specter Finance Pty
                      Ltd. I understand this fee is solely for processing your
                      application and is non-refundable.
                    </p>
                  </div>
                  <div className='header-para-cont form-sub-cont'>
                    <h4 style={{ marginTop: "20px" }}>Payment Details</h4>
                    <p id='payment-details-note' style={{ marginTop: 10 }}>
                      EFT Payment, Please use <span>OSKO</span> for accelerated
                      settlement. Payment can be made VIA EFT.
                    </p>
                    <div id='payment-details-opt-cont'>
                      <div>
                        <p id='payment-details-note'>Bank Name</p>
                        <p id='payment-details-note'>:-</p>
                        <p>Police Credit Union of South Australia</p>
                      </div>
                      <div>
                        <p id='payment-details-note'>Account Name</p>
                        <p id='payment-details-note'>:-</p>
                        <p>Specter Finance Group Pty Ltd</p>
                      </div>
                      <div>
                        <p id='payment-details-note'>Account Number</p>
                        <p id='payment-details-note'>:-</p>
                        <p>5258072</p>
                      </div>
                      <div>
                        <p id='payment-details-note'>BSB</p>
                        <p id='payment-details-note'>:-</p>
                        <p>805 005</p>
                      </div>
                      <div>
                        <p id='payment-details-note'>Reference</p>
                        <p id='payment-details-note'>:-</p>
                        <p>Please use your full name as a reference</p>
                      </div>
                    </div>
                  </div>
                  <div className='header-para-cont form-sub-cont'>
                    <h4 style={{ marginTop: "20px" }}>EFT Authority</h4>
                    <div id='payment-details-opt-cont'>
                      <div>
                        <p id='payment-details-note'>To</p>
                        <p id='payment-details-note'>:-</p>
                        <p>
                          Specter Finance Group Pty Ltd ACN 624 381586
                          <br /> Suite 11 36-48 Barndioota rd Salisbury Plain
                          5109
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='header-para-cont form-sub-cont'
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      flexWrap: "wrap",
                    }}
                  >
                    <label className='pure-material-textfield-outlined'>
                      <input
                        value={values.date}
                        style={{ width: "100%" }}
                        type='date'
                        // style={this.state.brokerEmailEmpty ? { borderColor: 'red', } : null}
                        name='date'
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
                        Date
                      </span>
                      {errors.date && touched.date && (
                        <p className='text-danger font-10'>{errors.date}</p>
                      )}
                    </label>
                    <label className='pure-material-textfield-outlined'>
                      <input
                        value={values.name}
                        style={{ width: "100%" }}
                        // style={this.state.brokerEmailEmpty ? { borderColor: 'red', } : null}
                        name='name'
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
                        Name
                      </span>
                      {errors.name && touched.name && (
                        <p className='text-danger font-10'>{errors.name}</p>
                      )}
                    </label>
                    <label className='pure-material-textfield-outlined text-center'>
                      <h4>Signature</h4>
                    </label>
                    <div className='signature-container bg-white'>
                      <SignatureCanvas
                        penColor='black'
                        canvasProps={{
                          width: 500,
                          height: 200,
                          className: "sigCanvas",
                        }}
                        ref={ref => {
                          this.sigPad = ref;
                        }}
                        onEnd={event => {
                          const base64Image = this.sigPad
                            .getTrimmedCanvas()
                            .toDataURL("image/png");
                          //TODO: check for empty signature.
                          setFieldValue("signatureBaseImg", base64Image, true);
                          setFieldTouched("signatureBaseImg", true, true);
                          this.setState({
                            signatureBaseImg: base64Image,
                          });
                        }}
                      />
                    </div>
                    <label className='signature-btns'>
                      {errors.signatureBaseImg && touched.signatureBaseImg && (
                        <p className='text-danger font-10'>
                          {errors.signatureBaseImg}
                        </p>
                      )}
                    </label>
                    <label className='signature-btns'>
                      <button
                        style={{ backgroundColor: "#FF7A00" }}
                        onClick={clear}
                        id='cancel-btn'
                      >
                        Redo
                      </button>
                    </label>
                  </div>
                  <div className='regards-txt'>
                    <h4>From,</h4>
                    <h4 style={{ color: "#5B6475", marginTop: 15 }}>
                      Stealth Corporation Pty Ltd
                    </h4>
                    <p className='from-company-no-txt'>ABN 85 614 803 539</p>
                  </div>
                </div>
                <div className='form-lower-sec-cont'>
                  <div>
                    <p>Any Questions?</p>
                    <a href='#'>Call Us Now</a>
                    <span>
                      <img src={PhoneImg} alt='' />
                    </span>
                  </div>
                  <div>
                    <button
                      id='cancel-btn'
                      disabled={isSubmitting}
                      onClick={() => {
                        debugger;
                        handleSubmit();
                      }}
                      style={{ backgroundColor: "#FF7A00" }}
                    >
                      {isSubmitting ? "Sending Email...!" : "Send Email"}
                    </button>
                    <button
                      onClick={this.exportPdf}
                      id='export-btn'
                      style={{ backgroundColor: "#FF7A00" }}
                    >
                      Export As PDF
                    </button>
                    <button
                      onClick={this.exportWord}
                      style={{ backgroundColor: "#FF7A00" }}
                      id='exportWord-btn'
                    >
                      Export As Word
                    </button>
                  </div>
                </div>
              </>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default Form3;
