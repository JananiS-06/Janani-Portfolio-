# S. Janani – Portfolio

Open `index.html` in any browser. No installation needed (internet is used for fonts and icons).

## Files
- `data.js`   – ALL your content (name, education, skills, certificates, projects, contact). Edit this.
- `style.css` – colors and design. Change theme colors in the `:root` block at the top.
- `script.js` – builds the page from data.js. Rarely needs changes.
- `index.html`– page structure.

## Where to put your files
| What | Folder | Then set in data.js |
|---|---|---|
| Profile photo | `assets/images/` | `profile.photo` |
| Resume (PDF) | `assets/resume/` | `profile.resume` |
| Certificate images | `assets/certificates/` | each item's `image` |
| Project screenshots | `assets/projects/` | each project's `image` |

Missing images show a pretty placeholder automatically.

## Add a certificate / project
Copy one `{ ... }` block inside `certifications` or `projects` in `data.js`, paste it below with a comma, change the text and image name. Done.

## Contact details
Fill `email`, `phone`, `linkedin`, `github` in `data.js` (`contact`). Empty ones show a placeholder.
