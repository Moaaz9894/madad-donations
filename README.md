# Madad Donations

Madad Donations is a web application developed to manage donation campaigns and donation records for Madad Charity.

The project uses **Firebase Hosting** and **Cloud Firestore** for hosting and data management.

## 🛠️ Technologies

* HTML
* CSS
* JavaScript
* Firebase Hosting
* Firebase Firestore
* Firebase Authentication

## 📂 Project Structure

```text
madad-donations/
├── public/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── ...
├── firebase.json
├── firestore.rules
├── .gitignore
└── README.md
```

## 🔥 Firebase Setup

This project uses Firebase for:

* Hosting
* Firestore Database
* Authentication

### 1. Create a Firebase Project

Create or select a Firebase project from the Firebase Console.

### 2. Enable Firestore

Create a **Cloud Firestore Database** in the Firebase project.

### 3. Deploy Firestore Rules

The project includes the Firestore security rules in:

```text
firestore.rules
```

Deploy the rules using:

```bash
firebase deploy --only firestore:rules
```

### 4. Firebase Configuration

If the application contains a Firebase configuration object such as:

```javascript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

make sure it points to the correct Firebase project.

> Firebase Web configuration values are normally placed in the frontend configuration. Do not commit private service-account credentials or private keys to GitHub.

## 🔐 Firestore Permissions

Firestore permissions are defined in:

```text
firestore.rules
```

The current rules provide:

### Campaigns

The `campaign` collection can be read publicly.

Only authorized administrators can create, update, or delete campaign documents.

### Donations

The `donations` collection is restricted to authorized administrators.

The current administrator emails are defined in `firestore.rules`.

If a new administrator needs access, update the administrator list in:

```text
firestore.rules
```

Then deploy the updated rules:

```bash
firebase deploy --only firestore:rules
```

## 🚀 Running the Project Locally

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

Use an account that has access to the Firebase project.

### 3. Select the Firebase Project

From the project directory:

```bash
firebase use <your-project-id>
```

If the project is not configured locally:

```bash
firebase init
```

Select:

* Hosting
* Firestore

When prompted for the public directory, use:

```text
public
```

### 4. Run the Project

For local Firebase hosting:

```bash
firebase serve
```

Or:

```bash
firebase emulators:start
```

## 🌐 Deployment

To deploy the website:

```bash
firebase deploy --only hosting
```

To deploy Firestore rules:

```bash
firebase deploy --only firestore:rules
```

To deploy everything:

```bash
firebase deploy
```

## 👨‍💻 Development Workflow

Before making changes:

```bash
git pull origin main
```

Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

After making changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## ⚠️ Important

Do not upload the following to GitHub:

* Firebase service-account JSON files
* Private keys
* Passwords
* Authentication secrets
* `.env` files containing private credentials

The `firestore.rules` file is intentionally included in the repository because it defines the database security rules.
