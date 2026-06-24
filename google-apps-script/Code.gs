// Reference copy of the "Chess Academy Bookings" Apps Script web app.
// The live script lives in Google's Apps Script editor (Extensions > Apps Script
// from the spreadsheet) - paste this in over the existing doPost, then
// Deploy > Manage deployments > Edit > Version: New, to publish the change.
//
// Only change from the original (used by the other/"SckoolChess" site): the sheet
// the row gets appended to is now chosen by an explicit `sheet` parameter instead of
// whatever sheet happened to be "active" in the UI. No param sent (the old site's
// existing requests) still defaults to Sheet1, so that site's behavior is unchanged.
// Rohini Chess Academy's forms send `sheet: 'Sheet2'` explicitly.

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheetName = e.parameter['sheet'] || 'Sheet1';
    const sheet = ss.getSheetByName(sheetName) || ss.getActiveSheet();

    // Read all submitted fields
    const params = e.parameter;

    const timestamp   = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const name        = params['name']           || '';
    const email       = params['email']          || '';
    const phone       = params['phone']          || '';
    const location    = params['location']       || '';
    const date        = params['date']           || '';
    const time        = params['time']           || '';
    const message     = params['message']        || time || '';
    const formType    = params['type']           || '';
    const formName    = params['Form Name']      || '';
    const sourcePage  = params['source_page']    || '';
    const sourceSection = params['source_section'] || '';

    // Build a human-readable source label:
    // e.g. "Partner Page Hero Banner → /contact-us"
    const sourceLabel = sourceSection
      ? (sourcePage ? `${sourceSection} → ${sourcePage}` : sourceSection)
      : (sourcePage || 'Direct');

    // Append a new row to the sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      phone,
      location || date,    // Location column (reused for school name in collab form)
      date,                // Date column
      time || message,     // Time/Message column
      message,             // Message column
      formName || formType,
      sourceLabel          // Source Page column
    ]);

    // --- Send Email Notification to the Client / Site Owner ---
    const clientEmail = "Sckoolchess@gmail.com";
    const subject = `New Lead Submission (${formName || formType || 'General Form'}) - ${name}`;

    let htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 25px; border-radius: 12px; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #E8750A; padding-bottom: 15px;">
          <h2 style="color: #E8750A; margin: 0; font-size: 24px;">SckoolChess Lead Notification</h2>
          <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">A new form has been submitted on your website.</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tbody>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 38%; color: #334155;">Form Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${formName || formType || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Lead Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 16px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Email Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Phone Number:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
            </tr>`;

    if (location) {
      htmlBody += `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Location / School:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${location}</td>
            </tr>`;
    }

    if (date) {
      htmlBody += `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Preferred Date / Role:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${date}</td>
            </tr>`;
    }

    if (time) {
      htmlBody += `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Preferred Time Slot:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${time}</td>
            </tr>`;
    }

    if (message) {
      htmlBody += `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Message / Details:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0f172a; white-space: pre-wrap;">${message}</td>
            </tr>`;
    }

    htmlBody += `
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Referred From (Redirected):</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155; font-weight: 500;">${sourceSection || 'Direct Traffic / No Referral'}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Filled On Page:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155; font-weight: 500;">${sourcePage || 'Unknown Page'}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Full Referral Label:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155; font-style: italic;">${sourceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #334155;">Submitted At:</td>
              <td style="padding: 10px; color: #0f172a;">${timestamp}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">This email was automatically generated and sent from the SckoolChess Google Sheets Apps Script.</p>
        </div>
      </div>
    `;

    // Send email to client, and optionally add spreadsheet owner if different
    let recipients = [clientEmail];
    try {
      const ownerEmail = SpreadsheetApp.getActiveSpreadsheet().getOwner().getEmail();
      if (ownerEmail && ownerEmail.toLowerCase() !== clientEmail.toLowerCase()) {
        recipients.push(ownerEmail);
      }
    } catch (err) {
      // Ignore owner extraction error if spreadsheet has restricted access
    }

    MailApp.sendEmail({
      to: recipients.join(','),
      subject: subject,
      htmlBody: htmlBody
    });

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
