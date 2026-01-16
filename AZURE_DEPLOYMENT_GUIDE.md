# Azure App Service Deployment Configuration

## ✅ Current Setup (Correct)

### package.json
```json
"start": "next start"
```
✅ Uses standard Next.js production server

### GitHub Actions Workflow
```yaml
- name: Install dependencies
  run: npm install

- name: Build Next.js app
  run: npm run build
```
✅ Builds the app in CI before deployment

---

## 🔧 Required Azure Portal Configuration

### Step 1: Access Your App Service

1. Go to: https://portal.azure.com
2. Search for: **"mzhub"** (your App Service name)
3. Click on the App Service resource

### Step 2: Configure Application Settings

Navigate to: **Configuration** → **Application settings**

Add/verify these settings:

```
SCM_DO_BUILD_DURING_DEPLOYMENT = false
WEBSITE_NODE_DEFAULT_VERSION = 20-lts
WEBSITES_PORT = 8080
NODE_ENV = production
PORT = 8080

# Your existing environment variables:
COSMOS_DB_CONNECTION_STRING = <your-connection-string>
SMTP_HOST = smtp.sendgrid.net
SMTP_PORT = 587
SMTP_USER = apikey
SMTP_PASSWORD = <your-sendgrid-api-key>
ADMIN_EMAIL = doshipriyanshu3@gmail.com
```

**CRITICAL:** `SCM_DO_BUILD_DURING_DEPLOYMENT = false` prevents Azure from trying to rebuild, which causes permission errors.

Click **"Save"** after adding these.

### Step 3: Configure General Settings

Navigate to: **Configuration** → **General settings**

Set:
- **Stack**: Node 20 LTS
- **Startup Command**: `npm start`
- **Always On**: On (if available on your plan)

Click **"Save"**.

### Step 4: Restart the App

1. Go to **Overview**
2. Click **"Restart"** button
3. Wait 2-3 minutes

---

## 🔍 Verify Deployment

### Check Logs
1. Go to **Log stream** (left sidebar)
2. Look for:
   ```
   > next start
   ▲ Next.js 14.2.33
   - Local: http://localhost:8080
   - Environment: production
   ```

### Test Site
1. Open: `https://mzhub-bybfdpd2hhdaffdj.centralindia-01.azurewebsites.net`
2. Site should load correctly
3. Test contact form at `/contact`

---

## 🚨 Troubleshooting

### If site shows "Application Error":
- Check Log stream for errors
- Verify `SCM_DO_BUILD_DURING_DEPLOYMENT = false` is set
- Verify startup command is `npm start`
- Check that GitHub Actions build completed successfully

### If deployment hangs:
- Ensure `SCM_DO_BUILD_DURING_DEPLOYMENT = false`
- This prevents Azure from trying to rebuild during deployment

### If "EACCES" permission errors:
- Azure is trying to write to read-only filesystem
- Set `SCM_DO_BUILD_DURING_DEPLOYMENT = false`
- Build must happen in GitHub Actions, not Azure

---

## 📊 Deployment Flow

```
GitHub Push
    ↓
GitHub Actions runs:
  - npm install
  - npm run build (creates .next folder)
  - Deploy to Azure
    ↓
Azure receives:
  - Source code
  - Built .next folder
  - node_modules
    ↓
Azure runs:
  - npm start (NO build, NO install)
    ↓
Next.js starts in production mode
    ↓
✅ Site is live
```

---

## ✅ Final Checklist

- [ ] package.json has `"start": "next start"`
- [ ] GitHub Actions builds app before deploy
- [ ] Azure has `SCM_DO_BUILD_DURING_DEPLOYMENT = false`
- [ ] Azure startup command is `npm start`
- [ ] All environment variables are set in Azure
- [ ] App Service restarted after configuration
- [ ] Site loads without errors
- [ ] Contact form works (database + emails)
