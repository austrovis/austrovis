# Google Sheets Integration Setup

This guide will help you connect the registration form to a Google Sheet in your shared drive.

## Step 1: Create a Google Sheet

1. Go to your Google Shared Drive
2. Create a new Google Sheet named "AustroVis Registrations" (or any name you prefer)
3. Add the following headers in the first row:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Talk Title`
   - D1: `Description`
   - E1: `Expectations`
   - F1: `Event ID`
   - G1: `Event Title`
   - H1: `Event Date`

## Step 2: Create a Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Append a new row with the data
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || '',
      data.talkTitle || '',
      data.description || '',
      data.expectations || 'N/A',
      data.eventId || '',
      data.eventTitle || '',
      data.eventDate || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (💾 icon) and give your project a name (e.g., "AustroVis Registration Handler")

## Step 3: Deploy the Apps Script as a Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "AustroVis Registration API"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. Review and authorize the permissions when prompted
6. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/...`)

## Step 4: Configure Your Next.js App

1. Open the `.env.local` file in your project root
2. Replace `your_script_url_here` with the Web app URL you copied:
   ```
   GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```
3. Save the file
4. Restart your development server:
   ```bash
   npm run dev
   ```

## Step 5: Test the Integration

1. Go to `http://localhost:3000/register`
2. Fill out and submit the form
3. Check your Google Sheet - you should see a new row with the form data!

## For Production (GitHub Pages)

Since GitHub Pages only serves static files, you'll need to add the environment variable to your build:

### Option A: Use GitHub Actions Secrets

1. Go to your repository on GitHub
2. Click **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Name: `GOOGLE_SHEETS_SCRIPT_URL`
5. Value: Your Apps Script Web App URL
6. Update `.github/workflows/deploy.yml` to include the environment variable:

```yaml
- name: Build with Next.js
  run: npm run build
  env:
    NODE_ENV: production
    GOOGLE_SHEETS_SCRIPT_URL: ${{ secrets.GOOGLE_SHEETS_SCRIPT_URL }}
```

### Option B: Make it public in the code (less secure)

Alternatively, since the Apps Script URL is already somewhat obfuscated and protected, you could hardcode it in the API route, but this is less secure.

## Troubleshooting

### Forms not submitting?
- Check browser console for errors
- Verify the Apps Script deployment URL is correct
- Make sure the Apps Script is deployed with "Anyone" access

### Data not appearing in Sheet?
- Check if the Apps Script is bound to the correct sheet
- Look at the Apps Script execution logs: **Apps Script Editor** > **Executions**
- Verify the sheet headers match exactly (including case)

### CORS errors?
- Make sure the Apps Script is deployed as a web app with "Anyone" access
- The Apps Script handles CORS automatically when deployed as a web app

## Security Notes

- The Apps Script URL is hard to guess but not truly secret
- For production, consider adding validation in the Apps Script
- You can add rate limiting in the Apps Script if needed
- The spreadsheet permissions control who can view the data
