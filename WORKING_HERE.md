# Working on the site from this machine

This is a clone of `github.com/kumwilai/Myweb`, the source of the published page at
`kumwilai.github.io/Myweb`. The same repository is also cloned on the laptop, so the
rule is to pull before editing and push when done, or the two copies will diverge.

    git pull            before you start
    git push            when you are finished

Publishing is automatic. GitHub Pages rebuilds within a minute or two of a push to
`main`, so there is no build step and nothing to upload by hand.

## Looking at a change before pushing

There is no framework and no compilation. Open `index.html` in a browser directly,
or serve the folder if you want the paths to behave exactly as they do live.

    python3 -m http.server 8000     then open http://localhost:8000

## Where things are

    index.html         home, research interests, selected work, recognition
    research.html      the four research threads and a funded projects summary
    projects.html      the seventeen funded projects, grouped by purpose
    publications.html  the journal papers and patents, searchable
    cv.html            education, appointments, honours, service, contact
    js/pubs.js         the publication data, shared by every page
    js/site.js         theme toggle, navigation, and the visitor counter
    css/style.css      all of the styling

## The publication list is data, not markup

Adding a paper to `js/pubs.js` is enough. The publications page lists it, and the
selected work on the home page picks it up automatically if it qualifies, which
means an IEEE Transactions paper, the Expert Systems with Applications paper, or
anything with at least twenty five citations.

The `c` field is the citation count from Google Scholar, read on 10 September 2026.
It is only present for papers the profile lists in its top results. Leave it absent
rather than writing zero for a paper you do not have a number for, because zero is
a claim and absent is not.

## The visitor counter is off

`js/site.js` ends with a loader that does nothing while `ANALYTICS_CODE` is empty.
Register at `goatcounter.com`, then put the code you are given into that constant.
Nothing is loaded and nothing is sent anywhere until you do.
