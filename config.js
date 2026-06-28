// ─────────────────────────────────────────────────────────────────────────────
// Sama Veda Learning App — Configuration
// Update this file when deploying for a new group.
// All three apps (index.html, admin.html, drive-admin.html) read from here.
// ─────────────────────────────────────────────────────────────────────────────

const APP_CONFIG = {

  // ── GOOGLE CLOUD ───────────────────────────────────────────────────────────
  // OAuth Client ID from Google Cloud Console
  // APIs & Services → Credentials → OAuth 2.0 Client ID
  CLIENT_ID: '730888202622-b4ttnasrooktvq7gm7rcng6l1tu0gfcu.apps.googleusercontent.com',

  // ── APP IDENTITY ───────────────────────────────────────────────────────────
  // Name shown in the header of all three apps
  APP_NAME: 'Sama Veda',

  // Shared Google account for learners who prefer not to use personal accounts.
  // Set to '' to disable shared account / student mode entirely.
  SHARED_LEARNER_ACCOUNT: 'sama.learner@gmail.com',

  // ── GOOGLE DRIVE FOLDER IDs ────────────────────────────────────────────────
  // Get folder IDs from the folder URL in Google Drive:
  // https://drive.google.com/drive/folders/THIS_IS_THE_FOLDER_ID

  // Parent folder containing Learning/ and Final/ subfolders with audio files
  COLLECTIONS_FOLDER_ID: '1Kt12pfzlHTFR5i9O_tI8rOQy-D9-8_LD',

  // Parent folder containing per-collection document subfolders (PDFs, texts etc.)
  // Set to '' to disable the Documents tab entirely
  DOCS_FOLDER_ID: '1UnNpCweEYMj73ANg32E54iDoQzdTPBzF',

  // Parent folder containing class subfolders (each with a class sheet inside)
  CLASSES_FOLDER_ID: '1joiInIm802VoenMRQwcbN2osPrG_37xu',

  // ── GOOGLE SHEETS ──────────────────────────────────────────────────────────
  // Get Sheet ID from the spreadsheet URL:
  // https://docs.google.com/spreadsheets/d/THIS_IS_THE_SHEET_ID/edit

  // Master spreadsheet containing Collections, Tracks, and Students tabs
  MASTER_SHEET_ID: '1sEDcKrc3AEZ8DMJ9HEfi82wRMts2BshFqKzvTw6eB3A',

  // ── AUDIO VERSION LABELS ───────────────────────────────────────────────────
  // Labels for the two audio versions shown in the learner app toggle.
  // These must match the subfolder names inside COLLECTIONS_FOLDER_ID.
  // Change if your group uses different folder names (e.g. 'Beginner'/'Advanced')
  VERSION_LEARNING: 'Learning',
  VERSION_FINAL:    'Final',

  // ── VERSION TOGGLE LABELS (UI display) ────────────────────────────────────
  // What the toggle buttons say in the learner app
  VERSION_LEARNING_LABEL: '🎓 Learning mode',
  VERSION_FINAL_LABEL:    '✓ Final version',

};
