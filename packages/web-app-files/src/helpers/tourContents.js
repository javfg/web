function $gettext(msg) {
  return msg
}

// TODO: use $gettext so this can be translated, figure out what to do with html.
export default {
  "tourName": "What's new?",
  "useModalOverview": true,
  "tooltip": "See new features",
  "autostart": {
    "timeout": 3000,
    "location": "files-spaces-personal-home"
  },
  "defaultStepOptions": {
    "cancelIcon": {
      "enabled": true
    },
    "classes": "new-features",
    "scrollTo": { "behavior": "smooth", "block": "center" }
  },
  "steps": [
    {
      "title": "Welcome the new CERNBox!",
      "text": "Discover the new features and try them yourself",
      "learnMoreLink": "https://new-cernbox-guide.docs.cern.ch"
    },
    {
      "title": "1.  Universal URLs",
      "text": "<div><p>CERNBox, which uses the EOS storage system under the hood, now exposes its full namespace. This means most of our access methods (excluding the mobile clients) have a consistent and more intuitive view.\r\n        <\/p><p><span class=\"guide-highlight\">https:\/\/new.cernbox.cern.ch\/files\/spaces\/personal\/home<b>\/eos\/user\/&lt;letter&gt;\/&lt;username&gt;<\/b><\/span><\/p>\r\n        <p>Now it's possible to just copy your URL and share it directly with someone else. If that person has permissions, he\/she will be able to open it.\r\n        <\/p><\/div>",
      "learnMoreLink": "https://new-cernbox-guide.docs.cern.ch/access/#universal-urls"
    },
    {
      "title": "2.  Single File Sharing",
      "text": "<div><p>Now, it's possible to share not only folders but also single files in both read and write modes!\r\n        <\/p><img class=\"guide-img\" src=\"https:\/\/new-cernbox-guide.docs.cern.ch\/assets\/screenshots\/sharing.png\"><\/img><\/div>",
      "learnMoreLink": "https://new-cernbox-guide.docs.cern.ch/sharing/#internal-shares"
    },
    {
      "title": "3. Improved App Ecosystem",
      "text": "<div><p>The new CERNBox has diverse application\/file extensions integrations: Microsoft Office 365, Collabora, CodiMD, Draw.io, text editor, PDF viewer, IFC viewer, Jupyter viewer, Root viewer, SWAN, Media viewer.\r\n        <\/p><img class=\"guide-img\" src=\"https:\/\/new-cernbox-guide.docs.cern.ch\/assets\/screenshots\/apps-context.png\"><\/img><\/div>",
      "learnMoreLink": "https://new-cernbox-guide.docs.cern.ch/apps/"
    },
    {
      "title": "4. Improved Projects Integration",
      "text": "<div><p>Now it's also possible to see and recover files of projects by right clicking on a project and then on \"Open trahsbin\"\r\n        <\/p><img class=\"guide-img\" src=\"https:\/\/new-cernbox-guide.docs.cern.ch\/assets\/screenshots\/projects-trashbin.png\"><\/img><\/div>",
      "learnMoreLink": "https://new-cernbox-guide.docs.cern.ch/projects/"
    },
    {
      "title": "5. Lightweight accounts",
      "text": "<div><p>The new CERNBox uses the new CERN SSO and it now allows signing in with other accounts, like social or lightweight.\r\n        <\/p><p>Unlike the normal CERN accounts, these do not have storage associated with them. They can, however, collaborate on shared resources or on Projects.<\/p><img class=\"guide-img\" src=\"https:\/\/new-cernbox-guide.docs.cern.ch\/assets\/screenshots\/lightweight.png\"><\/img><\/div>",
      "learnMoreLink": "https://new-cernbox-guide.docs.cern.ch/access/#accounts-supported"
    },
    {
      "title": "Coming soon",
      "text": "<div><p>Other features will be coming in the coming months:<\/p>\r\n        <oc-list><li>Integrations with other services (i.e Indico)<\/li>\r\n        <li>Improved search<\/li>\r\n        <li>Auditing and reporting\/notifications<\/li>\r\n        <li>Backup restore UI<\/li><\/oc-list>\r\n        <p> Stay tuned!<\/p><\/div>",
    }
  ]
}
