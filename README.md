# Personal academic website

Static site for Professor Wuttipong Kumwilaisak, Department of Electronics and
Telecommunication Engineering, King Mongkut's University of Technology Thonburi.

Five pages, no build step, no framework. Open `index.html` in a browser to view it locally.

    index.html         home, research interests, selected work, recent recognition
    research.html      the four research threads, with a short funded projects summary
    projects.html      seventeen funded projects from 2005 to 2027, grouped by purpose
    publications.html  31 journal papers and 2 patents, searchable and filterable
    cv.html            education, appointments, honours, service and contact

    css/style.css      the whole design
    js/pubs.js         publication data, edit here to add a paper
    js/site.js         theme toggle, mobile menu, entrance animation
    assets/            portrait

## Adding a publication

Edit `js/pubs.js` and add an entry at the top of the `PUBS` array.

    {n:32, y:2026, t:"Title", a:"Authors", v:"Venue, volume, pages",
     doi:"10.1109/...", k:["learning","vision"]}

The `k` field controls the topic filter. Valid keys are listed in `AREAS` at the
bottom of the same file. Add `award:"Best Paper Award"` to mark a prize.

## Publishing

The site is served by GitHub Pages from the default branch. Nothing needs to be
built or compiled.

## Visitor counting

`js/site.js` ends with an analytics loader that is switched off. GitHub Pages keeps
no logs you can read, so counting visits needs a small external service.

To switch it on, register the site at `goatcounter.com`, then put the code you are
given into `ANALYTICS_CODE` in `js/site.js`. For `example.goatcounter.com` the code
is `example`. Until that constant holds a value, no script is loaded and nothing is
sent anywhere.

GoatCounter was chosen because it is free for a personal site, sets no cookies and
stores no personal data, so the page needs no consent banner for visitors in the
European Union. Google Analytics would need one.
