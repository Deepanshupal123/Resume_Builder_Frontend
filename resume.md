# ResumeAI - Complete API Documentation
## For Frontend Team

**Base URL (Production):** `https://resume-builder-7ngc.onrender.com`
**Base URL (Local):** `http://localhost:5000`

---

## Authentication
- **Type:** Bearer Token
- **Header:** `Authorization: Bearer {{token}}`
- **Token stored in:** `{{token}}` (auto-saved from Login/Signup)

---

## API Endpoints

### 00 - HEALTH CHECK

#### Health Check
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/`
- **Auth:** None
- **Body:** None

---

## 01 - AUTH ENDPOINTS

#### Signup
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/auth/signup`
- **Auth:** None
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
- **Auto-saves:** token, userId

---

#### Login
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/auth/login`
- **Auth:** None
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Auto-saves:** token, userId

---

#### Google Login (POST)
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/auth/google`
- **Auth:** None
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "token": "GOOGLE_ID_TOKEN"
}
```

---

#### Google Login (GET)
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/auth/google?token=GOOGLE_ID_TOKEN`
- **Auth:** None
- **Body:** None

---

#### Forgot Password
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/auth/forgot-password`
- **Auth:** None
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "email": "john@example.com"
}
```

---

#### Reset Password
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/auth/reset-password`
- **Auth:** None
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "token": "RESET_TOKEN",
  "newPassword": "newpassword456"
}
```

---

## 02 - RESUME ENDPOINTS

#### Create Resume
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/resume/create`
- **Auth:** Bearer Token Required ✓
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "title": "Full Stack Developer",
  "template": "classic",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91-9876543210",
    "summary": "Full Stack Developer with 5 years experience",
    "experience": [
      {
        "company": "ABC Pvt Ltd",
        "position": "Software Engineer",
        "startDate": "2022-01-01",
        "endDate": "2025-01-01",
        "desc": "Worked on React and Node.js"
      }
    ],
    "education": [
      {
        "school": "XYZ University",
        "degree": "B.Tech",
        "field": "Computer Science",
        "startDate": "2018-01-01",
        "endDate": "2022-01-01"
      }
    ],
    "skills": ["React", "Node.js", "MongoDB", "JavaScript"],
    "projects": [
      {
        "name": "Ecommerce App",
        "desc": "Built ecommerce application"
      }
    ]
  }
}
```
- **Auto-saves:** resumeId

---

#### List Resumes
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/resume/list`
- **Auth:** Bearer Token Required ✓
- **Body:** None

---

#### Get Resume by ID
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/resume/{{resumeId}}`
- **Auth:** Bearer Token Required ✓
- **Body:** None

---

#### Update Resume
- **Method:** `PUT`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/resume/{{resumeId}}`
- **Auth:** Bearer Token Required ✓
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "title": "Senior Full Stack Developer",
  "template": "modern",
  "data": {
    "summary": "Updated summary"
  }
}
```

---

#### Delete Resume
- **Method:** `DELETE`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/resume/{{resumeId}}`
- **Auth:** Bearer Token Required ✓
- **Body:** None

---

#### Generate Resume (AI - no save)
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/resume/generate`
- **Auth:** None
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91-9876543210",
  "skills": "React, Node.js",
  "jobTitle": "Developer",
  "company": "ABC",
  "years": "3",
  "jobDesc": "Built apps",
  "college": "XYZ",
  "degree": "B.Tech",
  "gradYear": "2022"
}
```

---

## 03 - ANALYSIS ENDPOINTS

#### Get Resume Analysis
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/analysis/{{resumeId}}`
- **Auth:** Bearer Token Required ✓
- **Body:** None

---

#### Keyword Match
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/analysis/keywords`
- **Auth:** Bearer Token Required ✓
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "resumeId": "{{resumeId}}",
  "jobDescription": "Looking for React Node.js MongoDB developer"
}
```

---

## 04 - USER ENDPOINTS

#### Get Profile
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/user/profile`
- **Auth:** Bearer Token Required ✓
- **Body:** None

---

#### Change Password
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/user/change-password`
- **Auth:** Bearer Token Required ✓
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "currentPassword": "password123",
  "newPassword": "newpassword456"
}
```

---

## 05 - SUBSCRIPTION ENDPOINTS

#### Get Status
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/subscription/status`
- **Auth:** Bearer Token Required ✓
- **Body:** None

---

#### Upgrade Plan
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/subscription/upgrade`
- **Auth:** Bearer Token Required ✓
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "planType": "pro",
  "paymentMethod": "card"
}
```

---

## 06 - TEMPLATES ENDPOINTS

#### List All Templates
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/templates`
- **Auth:** None
- **Body:** None

---

#### Get Template (classic)
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/templates/classic`
- **Auth:** None
- **Body:** None

---

## 07 - EXPORT ENDPOINTS

#### Export PDF
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/export/pdf/{{resumeId}}`
- **Auth:** Bearer Token Required ✓
- **Body:** None

---

#### Export JSON
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/export/json/{{resumeId}}`
- **Auth:** Bearer Token Required ✓
- **Body:** None

---

## 08 - AI TOOLS ENDPOINTS

#### Cover Letter Generate
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/ai/generate`
- **Auth:** None
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "prompt": "Write a cover letter for React developer at Google"
}
```

---

#### ATS Check
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/ai/ats-check`
- **Auth:** None
- **Content-Type:** `multipart/form-data`
- **Body:**
```
resume: [FILE]
jobDescription: "React Node.js MongoDB developer"
```

---

#### JD Match
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/ai/jd-match`
- **Auth:** None
- **Content-Type:** `multipart/form-data`
- **Body:**
```
resume: [FILE]
jobDescription: "React Node.js MongoDB developer"
```

---

#### Resume Analysis (text)
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/ai/resume-analysis`
- **Auth:** None
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "resumeText": "John Doe\nSoftware Engineer\nSkills: React, Node.js, MongoDB"
}
```

---

## 09 - PAYMENT ENDPOINTS (Razorpay)

#### Create Order
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/payment/create-order`
- **Auth:** None
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "userId": "{{userId}}"
}
```

---

#### Verify Payment
- **Method:** `POST`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/payment/verify`
- **Auth:** None
- **Content-Type:** `application/json`
- **Body:**
```json
{
  "razorpay_order_id": "order_xxx",
  "razorpay_payment_id": "pay_xxx",
  "razorpay_signature": "sig_xxx",
  "userId": "{{userId}}"
}
```

---

#### Payment Status
- **Method:** `GET`
- **Endpoint:** `https://resume-builder-7ngc.onrender.com/api/payment/status/{{userId}}`
- **Auth:** None
- **Body:** None

---

## QUICK REFERENCE TABLE

| # | Endpoint | Method | Auth | Type |
|---|----------|--------|------|------|
| 1 | `/` | GET | No | Health Check |
| 2 | `/api/auth/signup` | POST | No | Signup |
| 3 | `/api/auth/login` | POST | No | Login |
| 4 | `/api/auth/google` | POST | No | Google Login |
| 5 | `/api/auth/google?token=` | GET | No | Google Login |
| 6 | `/api/auth/forgot-password` | POST | No | Forgot Password |
| 7 | `/api/auth/reset-password` | POST | No | Reset Password |
| 8 | `/api/resume/create` | POST | Yes | Create Resume |
| 9 | `/api/resume/list` | GET | Yes | List Resumes |
| 10 | `/api/resume/{id}` | GET | Yes | Get Resume |
| 11 | `/api/resume/{id}` | PUT | Yes | Update Resume |
| 12 | `/api/resume/{id}` | DELETE | Yes | Delete Resume |
| 13 | `/api/resume/generate` | POST | No | Generate Resume |
| 14 | `/api/analysis/{resumeId}` | GET | Yes | Get Analysis |
| 15 | `/api/analysis/keywords` | POST | Yes | Keyword Match |
| 16 | `/api/user/profile` | GET | Yes | Get Profile |
| 17 | `/api/user/change-password` | POST | Yes | Change Password |
| 18 | `/api/subscription/status` | GET | Yes | Get Status |
| 19 | `/api/subscription/upgrade` | POST | Yes | Upgrade Plan |
| 20 | `/api/templates` | GET | No | List Templates |
| 21 | `/api/templates/{name}` | GET | No | Get Template |
| 22 | `/api/export/pdf/{id}` | GET | Yes | Export PDF |
| 23 | `/api/export/json/{id}` | GET | Yes | Export JSON |
| 24 | `/api/ai/generate` | POST | No | AI Generate |
| 25 | `/api/ai/ats-check` | POST | No | ATS Check |
| 26 | `/api/ai/jd-match` | POST | No | JD Match |
| 27 | `/api/ai/resume-analysis` | POST | No | Resume Analysis |
| 28 | `/api/payment/create-order` | POST | No | Create Order |
| 29 | `/api/payment/verify` | POST | No | Verify Payment |
| 30 | `/api/payment/status/{userId}` | GET | No | Payment Status |

---

## Implementation Notes

### Bearer Token Usage
```
Headers: {
  "Authorization": "Bearer {{token}}"
}
```

### Variables to Store
- `{{baseUrl}}` - Base URL
- `{{token}}` - Auth token (from Login/Signup)
- `{{userId}}` - User ID (from Login/Signup)
- `{{resumeId}}` - Resume ID (from Create Resume)

### File Upload Endpoints
- `/api/ai/ats-check` - Form Data
- `/api/ai/jd-match` - Form Data

### Environment Setup
1. Import this in Postman
2. Set baseUrl to `https://resume-builder-7ngc.onrender.com`
3. Run Signup or Login first
4. Token auto-saves to {{token}}
5. Use other endpoints

---

**Total APIs: 29 endpoints**
**Last Updated: 2026**
