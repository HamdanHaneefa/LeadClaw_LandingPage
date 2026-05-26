# Quick Setup Instructions

## What I've Done

I've set up your "Book Demo" form to save submissions directly to your Google Spreadsheet. Here's what was added:

### Files Created:
1. **`src/app/api/submit-demo/route.ts`** - API endpoint that handles form submissions
2. **`google-sheets-script.js`** - Script to deploy to Google Sheets
3. **`GOOGLE-SHEETS-SETUP.md`** - Detailed setup instructions
4. **`.env.local.example`** - Example environment file

### Files Modified:
1. **`src/app/page.tsx`** - Updated form submission to use the API
2. **`src/app/globals.css`** - Added modal and form styles

## What You Need to Do

### Quick Start (5 minutes):

1. **Open your Google Sheet** (the one in your screenshot)

2. **Go to Extensions > Apps Script**

3. **Copy the code** from `google-sheets-script.js` and paste it in the Apps Script editor

4. **Deploy it**:
   - Click Deploy > New deployment
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone
   - Click Deploy and authorize

5. **Copy the Web App URL** you receive

6. **Create `.env.local`** file in your project root:
   ```
   NEXT_PUBLIC_GOOGLE_SHEETS_URL=paste_your_url_here
   ```

7. **Restart your dev server**:
   ```bash
   npm run dev
   ```

8. **Test it!** Click "Book Demo" on your website and submit the form

## That's It!

Your form submissions will now automatically appear in your Google Sheet with:
- Timestamp
- Name
- Email
- Phone
- Message

For detailed instructions, see **GOOGLE-SHEETS-SETUP.md**
