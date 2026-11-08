MED STUDY BIBLE — how to put it online (one time)

Option A · Netlify (no coding)
 1. Go to app.netlify.com and sign up free.
 2. Sites → "Deploy manually" → drag this whole "studybible" folder in.
 3. Open the link on your phone:
    iPhone (Safari): Share → Add to Home Screen
    Android (Chrome): ⋮ → Install app
 Updates: drag the new folder onto the SAME site's "Deploys" tab. Same link, app updates itself.

Option B · GitHub Pages (Claude can update it for you)
 Connect GitHub in Claude, then ask Claude to publish "studybible" to GitHub Pages.

To add a new atlas: put the .html in a system folder, add an entry to library.json,
add the file to FILES in sw.js, and change VERSION in sw.js.
