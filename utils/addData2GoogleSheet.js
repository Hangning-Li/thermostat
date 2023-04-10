const { google } = require('googleapis');

export async function addData2GoogleSheet(data) {
  try {
    // Authorize with Google
    const auth = new google.auth.GoogleAuth({
      keyFile: 'path/to/credentials.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const authClient = await auth.getClient();
    const sheets = google.sheets({
      version: 'v4',
      auth: authClient
    });

    // Set the spreadsheet ID and range
    const spreadsheetId = '1xWPl2yj06fAG22O6Q3b2XwkTUEyIy5w4bsA30SX4Tuc';
    const range = 'Sheet1!A1';

    // Define the value to add
    const value = data;

    // Create the update request
    const request = {
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [
          [value]
        ]
      }
    };

    // Update the spreadsheet
    const response = await sheets.spreadsheets.values.update(request);
    console.log(`${response.data.updatedCells} cells updated.`);
  } catch (error) {
    console.error(`Error updating spreadsheet: ${error}`);
  }
}
