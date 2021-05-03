const form2 = formData => {
  return `<!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>Simple Transactional Email</title>
            <style>
            /* -------------------------------------
                INLINED WITH htmlemail.io/inline
            ------------------------------------- */
            /* -------------------------------------
                RESPONSIVE AND MOBILE FRIENDLY STYLES
            ------------------------------------- */
            @media only screen and (max-width: 620px) {
              table[class=body] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
              }
              table[class=body] p,
                    table[class=body] ul,
                    table[class=body] ol,
                    table[class=body] td,
                    table[class=body] span,
                    table[class=body] a {
                font-size: 16px !important;
              }
              table[class=body] .wrapper,
                    table[class=body] .article {
                padding: 10px !important;
              }
              table[class=body] .content {
                padding: 0 !important;
              }
              table[class=body] .container {
                padding: 0 !important;
                width: 100% !important;
              }
              table[class=body] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
              }
              table[class=body] .btn table {
                width: 100% !important;
              }
              table[class=body] .btn a {
                width: 100% !important;
              }
              table[class=body] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
              }
            }
        
            /* -------------------------------------
                PRESERVE THESE STYLES IN THE HEAD
            ------------------------------------- */
            @media all {
              .ExternalClass {
                width: 100%;
              }
              .ExternalClass,
                    .ExternalClass p,
                    .ExternalClass span,
                    .ExternalClass font,
                    .ExternalClass td,
                    .ExternalClass div {
                line-height: 100%;
              }
              .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
              }
              #MessageViewBody a {
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                line-height: inherit;
              }
          
            }
            </style>
          </head>
          <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
            <table border="0" cellpadding="0" cellspacing="" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
              <tr>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
                <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
                  <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
        
                    <!-- START CENTERED WHITE CONTAINER -->
                    <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
        
                      <!-- START MAIN CONTENT AREA -->
                      <tr>
                        <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                          <table border="" cellpadding="" cellspacing="" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                            <tr>
                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                                <h2 style="font-family: sans-serif;  margin: 0; Margin-bottom: 15px;">Specter Finance</h2>
                                
                                <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                                  <tbody>
                                    <tr>
                                      <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
                                        <table border="1" cellpadding="5" cellspacing="1" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                                          <tbody>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Broker Name </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.brokerName
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Broker Phone </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.brokerPhone
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Broker Email </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.brokerEmail
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Client 1 Name </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.client1Name
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Client 1 Phone </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.client1Phone
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Client 1 Email </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.client1Email
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Client 2 Name </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.client2Name
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Client 2 Name </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.client2Phone
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Client 2 Name </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.client2Email
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Your Objective </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.yourObjective
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Challenge Right Now </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.challengeRightNow
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Protect your credit score; don't enquire about, or apply for any credit facility without first speaking with your broker. </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.requiredAction1
                                                  ? "Yes"
                                                  : "NO"
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Improve your credit score; approach the relevant provider about removing defaults. </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.requiredAction2
                                                  ? "Yes"
                                                  : "NO"
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Stay on top of bills; make payments on all existing debts by the due date. </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.requiredAction3
                                                  ? "Yes"
                                                  : "NO"
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Boots your savings; put a little money aside each week (and don't touch it!). </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.requiredAction4
                                                  ? "Yes"
                                                  : "NO"
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Reduce your expenses; compare utility and insurance providers for lower fees, and cut back on discretionary spending. </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.requiredAction5
                                                  ? "Yes"
                                                  : "NO"
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Increase your income; if you have opportunity to earn more through additional hours or commissions, go for it. </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.requiredAction6
                                                  ? "Yes"
                                                  : "NO"
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Wait it out; to meet the minimum employment tenure, it's simply a matter of time.</td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.requiredAction7
                                                  ? "Yes"
                                                  : "NO"
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Complete your business tax return. </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.requiredAction8
                                                  ? "Yes"
                                                  : "NO"
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> Complete your individual tax return. </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.requiredAction9
                                                  ? "Yes"
                                                  : "No"
                                              } </td>
                                            </tr>
                                            <tr>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> other </td>
                                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;  text-align: center;"> ${
                                                formData.other
                                              } </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
        
                    <!-- END MAIN CONTENT AREA -->
                    </table>
        
        
                  <!-- END CENTERED WHITE CONTAINER -->
                  </div>
                </td>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
              </tr>
            </table>
          </body>
        </html>`;
};
module.exports = form2;
