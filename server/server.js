const express = require('express');
const app = express()
const { google } = require("googleapis");

app.post("/add_data", async (req, res) => {
    try {
        // Authorize with Google
        const auth = new google.auth.GoogleAuth({
            keyFile: '',
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

    res.send("Successfully submitted! Thank you!");
});

app.listen(8080, (req, res) => console.log("running on 8080"));