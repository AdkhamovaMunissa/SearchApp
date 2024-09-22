import { google } from 'googleapis';
import keys from './credentials.json';

const client = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

const sheets = google.sheets({ version: 'v4', auth: client });

export default {
  async appendDataToSheet(spreadsheetId, range, values) {
    try {
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: range,
        valueInputOption: 'RAW',
        resource: { values: [values] },
      });

      console.log('Data successfully appended to the sheet.');
      return response.data;
    } catch (error) {
      console.error('Error appending data:', error);
      return null;
    }
  }
};