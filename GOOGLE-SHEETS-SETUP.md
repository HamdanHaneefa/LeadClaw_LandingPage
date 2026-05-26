# Google Sheets Integration Setup Guide

This guide will help you connect your "Book Demo" form to your Google Spreadsheet.

## Step-by-Step Instructions

### 1. Prepare Your Google Sheet

Your spreadsheet should have these columns in Row 1:
- Column A: **Timestamp**
- Column B: **Name**
- Column C: **Email**
- Column D: **Phone**
- Column E: **Message**

(The script will automatically add these headers if they don't exist)

### 2. Open Apps Script Editor

1. Open your Google Sheet
2. Click on **Extensions** in the menu
3. Click **Apps Script**
4. A new tab will open with the Apps Script editor

### 3. Add the Script

1. Delete any existing code in the editor
2. Open the file `google-sheets-script.js` from your project
3. Copy ALL the code from that file
4. Paste it into the Apps Script editor
5. Click the **Save** icon (💾) or press `Ctrl+S` / `Cmd+S`
6. Give your project a name (e.g., "Lead Claw Form Handler")

### 4. Deploy as Web App

1. Click **Deploy** button (top right)
2. Select **New deployment**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **Web app**
5. Fill in the deployment settings:
   - **Description**: "Lead Claw Demo Form Submission"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
6. Click **Deploy**

### 5. Authorize the App

1. You'll see an "Authorization required" dialog
2. Click **Authorize access**
3. Choose your Google account
4. Click **Advanced** (if you see a warning)
5. Click **Go to [Your Project Name] (unsafe)**
6. Click **Allow**

### 6. Copy the Web App URL

1. After authorization, you'll see a "Deployment" dialog
2. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/XXXXX/exec`)
3. Click **Done**

### 7. Add URL to Your Project

1. In your project root, create a file named `.env.local`
2. Add this line (replace with your actual URL):
   ```
   NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
   ```
3. Save the file

### 8. Restart Your Development Server

```bash
# Stop your current server (Ctrl+C)
# Then restart it
npm run dev
```

## Testing

1. Open your website
2. Click the "Book Demo" button
3. Fill out the form
4. Click "Submit Request"
5. Check your Google Sheet - a new row should appear with the form data!

## Troubleshooting

### Form shows "Failed to submit"
- Check that your `.env.local` file exists and has the correct URL
- Make sure you restarted the development server after adding the URL
- Verify the Google Apps Script is deployed as "Anyone" can access

### No data appears in the sheet
- Open the Apps Script editor
- Click **Executions** (left sidebar)
- Check for any error messages
- Make sure the sheet is not protected or locked

### "Authorization required" keeps appearing
- Make sure you clicked "Allow" during authorization
- Try deploying again and re-authorizing

## Security Note

The Web App URL is public but only accepts POST requests with specific data format. However, for production use, consider:
- Adding rate limiting
- Implementing CAPTCHA
- Using server-side validation
- Storing sensitive data in a more secure database

## Need Help?

If you encounter issues:
1. Check the Apps Script execution logs
2. Verify your `.env.local` file is not committed to git (it's in .gitignore)
3. Make sure the spreadsheet is accessible to your Google account
