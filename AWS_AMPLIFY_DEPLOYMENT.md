# AWS Amplify Deployment Guide

Complete guide to deploy Climate Dashboard frontend to AWS Amplify.

## Prerequisites

- AWS Account
- GitHub repository (already created: rajeswaran140/climate-dashboard)
- Backend deployed on Linode (get the URL first)

## Step-by-Step Deployment

### 1. Sign in to AWS Amplify

1. Go to: https://console.aws.amazon.com/amplify/
2. Sign in with your AWS credentials
3. Click **"New app"** → **"Host web app"**

### 2. Connect GitHub Repository

1. Select **GitHub** as the source
2. Authorize AWS Amplify to access your GitHub account
3. Select repository: **rajeswaran140/climate-dashboard**
4. Select branch: **master**
5. Click **Next**

### 3. Configure Build Settings

The build settings should auto-detect from `amplify.yml`. Verify it shows:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

Click **Next**

### 4. Add Environment Variables

**CRITICAL**: Add these environment variables:

| Variable Name | Value |
|--------------|-------|
| `NEXT_PUBLIC_API_URL` | `https://your-linode-backend.com/api` |

**How to add:**
1. Expand **"Advanced settings"**
2. Under **"Environment variables"**, click **"Add environment variable"**
3. Add the variable name and value
4. Click **Save**

### 5. Review and Deploy

1. Review all settings
2. Click **"Save and deploy"**
3. Wait 3-5 minutes for the build to complete

### 6. Access Your Deployed App

After deployment:
- AWS will provide a URL like: `https://master.xxxxxx.amplifyapp.com`
- You can add a custom domain later

---

## Post-Deployment

### Update Django Backend CORS

Once you have your Amplify URL, update Django backend:

1. SSH into your Linode server
2. Edit `.env` file:
   ```bash
   CORS_ALLOWED_ORIGINS=https://master.xxxxxx.amplifyapp.com
   ```
3. Restart Django: `sudo systemctl restart climate-api`

### Set Up Custom Domain (Optional)

1. In AWS Amplify console, go to **"Domain management"**
2. Click **"Add domain"**
3. Enter your domain (e.g., `climate.raj.it.com`)
4. Follow AWS instructions to update DNS records
5. AWS will handle SSL certificates automatically

---

## Environment Variables Reference

### Development
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Production (AWS Amplify)
```
NEXT_PUBLIC_API_URL=https://your-linode-backend.com/api
```

---

## Troubleshooting

### Build Fails
- Check build logs in AWS Amplify console
- Verify `package.json` has all dependencies
- Check Node.js version compatibility

### API Connection Fails
- Verify `NEXT_PUBLIC_API_URL` is correct
- Check CORS settings in Django backend
- Ensure backend is accessible from internet

### 404 Errors
- Check that `amplify.yml` is in repository root
- Verify build artifacts are in `.next` directory

---

## Continuous Deployment

AWS Amplify automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Update frontend"
git push origin master
```

Amplify will detect the push and rebuild automatically!

---

## Monitoring

- **Build history**: AWS Amplify console → App → Build history
- **Access logs**: CloudWatch (if enabled)
- **Performance**: AWS Amplify console → Monitoring

---

## Cost Estimate

AWS Amplify Free Tier:
- Build & deploy minutes: 1000 minutes/month FREE
- Hosting: 15GB served/month FREE
- Usually FREE for small projects!

---

## Security Best Practices

1. **HTTPS Only**: AWS Amplify enforces HTTPS automatically
2. **Environment Variables**: Never commit API URLs to Git
3. **CORS**: Restrict to your Amplify domain only
4. **API Keys**: Use environment variables for all sensitive data

---

## Next Steps

1. Deploy backend to Linode first
2. Get backend URL
3. Deploy frontend to AWS Amplify with correct API URL
4. Test the integration
5. Set up custom domain (optional)

---

**Deployment Checklist:**
- [ ] Backend deployed on Linode
- [ ] Backend URL obtained
- [ ] Environment variable added in AWS Amplify
- [ ] Frontend deployed successfully
- [ ] API connection tested
- [ ] CORS configured in Django backend
- [ ] Custom domain configured (optional)

---

**Support:**
- AWS Amplify Docs: https://docs.amplify.aws/
- AWS Free Tier: https://aws.amazon.com/free/
