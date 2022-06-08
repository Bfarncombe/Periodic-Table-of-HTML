const elements = {
  "first-column": [
    {
      "class-type": "basic-html",
      abbr: "dt",
      tag: "<!DOCTYPE>",
      def: "Defines the document type",
    },
    {
      "class-type": "basic-html",
      abbr: "hl",
      tag: "<html>",
      def: "Defines the root of an HTML document",
    },
    {
      "class-type": "basic-html",
      abbr: "ttl",
      tag: "<title>",
      def: "Defines a title for the document",
    },
    {
      "class-type": "basic-html",
      abbr: "by",
      tag: "<body>",
      def: "Defines the document's body",
    },
    {
      "class-type": "basic-html",
      abbr: "hh",
      tag: "<h1> to <h6>",
      def: "Defines HTML headings",
    },
    {
      "class-type": "basic-html",
      abbr: "p",
      tag: "<p>",
      def: "Defines a paragraph",
    },
    {
      "class-type": "basic-html",
      abbr: "br",
      tag: "<br>",
      def: "Defines a single line break",
    },
    ,
  ],
  "second-column": [
    {
      "class-type": "basic-html",
      abbr: "hr",
      tag: "<hr>",
      def: "Defines a thematic change in the content",
    },
    {
      "class-type": "basic-html",
      abbr: "cm",
      tag: "<!--...-->",
      def: "Defines a comment",
    },
    {
      "class-type": "formatting",
      abbr: "ar",
      tag: "<abbr>",
      def: "Defines an abbreviation or an acronym",
    },
    {
      "class-type": "formatting",
      abbr: "as",
      tag: "<address>",
      def: "Defines contact information for the author/owner of a document",
    },
    {
      "class-type": "formatting",
      abbr: "b",
      tag: "<b>",
      def: "Defines bold text",
    },
    {
      "class-type": "formatting",
      abbr: "bi",
      tag: "<bdi>",
      def: "Isolates a part of text that might be formatted in a different direction from other text outside it",
    },
  ],
  "middle-column": [
    {
      "class-type": "formatting",
      abbr: "bo",
      tag: "<bdo>",
      def: "Overrides the current text direction",
    },
    {
      "class-type": "formatting",
      abbr: "bq",
      tag: "<blockquote>",
      def: "Defines a section that is quoted from another source",
    },
    {
      "class-type": "formatting",
      abbr: "ct",
      tag: "<cite>",
      def: "Defines the title of a work",
    },
    {
      "class-type": "formatting",
      abbr: "cd",
      tag: "<code>",
      def: "Defines a piece of computer code",
    },
    {
      "class-type": "formatting",
      abbr: "de",
      tag: "<del>",
      def: "Defines text that has been deleted from a document",
    },
    {
      "class-type": "formatting",
      abbr: "dn",
      tag: "<dfn>",
      def: "Specifies a term that is going to be defined within the content",
    },
    {
      "class-type": "formatting",
      abbr: "em",
      tag: "<em>",
      def: "Defines emphasized text",
    },
    {
      "class-type": "formatting",
      abbr: "i",
      tag: "<i>",
      def: "Defines a part of text in an alternate voice or mood",
    },
    {
      "class-type": "formatting",
      abbr: "mk",
      tag: "<mark>",
      def: "Defines marked/highlighted text",
    },
    {
      "class-type": "formatting",
      abbr: "mr",
      tag: "<meter>",
      def: "Defines a scalar measurement within a known range (a gauge)",
    },
    {
      "class-type": "formatting",
      abbr: "pre",
      tag: "<pre>",
      def: "Defines preformatted text",
    },
    {
      "class-type": "formatting",
      abbr: "ps",
      tag: "<progress>",
      def: "Represents the progress of a task",
    },
    {
      "class-type": "formatting",
      abbr: "rt",
      tag: "<rt>",
      def: "Defines an explanation/pronunciation of characters (for East Asian typography)",
    },
    {
      "class-type": "formatting",
      abbr: "ry",
      tag: "<ruby>",
      def: "Defines a ruby annotation (for East Asian typography)",
    },
    {
      "class-type": "formatting",
      abbr: "s",
      tag: "<s>",
      def: "Defines text that is no longer correct",
    },
    {
      "class-type": "formatting",
      abbr: "sp",
      tag: "<samp>",
      def: "Defines sample output from a computer program",
    },
    {
      "class-type": "formatting",
      abbr: "sub",
      tag: "<sub>",
      def: "Defines subscripted text",
    },
    {
      "class-type": "formatting",
      abbr: "sup",
      tag: "<sup>",
      def: "Defines superscripted text",
    },
    {
      "class-type": "formatting",
      abbr: "tm",
      tag: "<time>",
      def: "Defines a specific time (or datetime)",
    },
    {
      "class-type": "formatting",
      abbr: "u",
      tag: "<u>",
      def: "Defines some text that is unarticulated and styled differently from normal text",
    },
    {
      "class-type": "forms-and-input",
      abbr: "fm",
      tag: "<form>",
      def: "Defines an HTML form for user input",
    },
    {
      "class-type": "forms-and-input",
      abbr: "it",
      tag: "<input>",
      def: "Defines an input control",
    },
    {
      "class-type": "forms-and-input",
      abbr: "ta",
      tag: "<textarea>",
      def: "Defines a multiline input control (text area)",
    },
    {
      "class-type": "forms-and-input",
      abbr: "bn",
      tag: "<button>",
      def: "Defines a clickable button",
    },
    {
      "class-type": "forms-and-input",
      abbr: "on",
      tag: "<option>",
      def: "Defines an option in a drop-down list",
    },
    {
      "class-type": "forms-and-input",
      abbr: "lbl",
      tag: "<label>",
      def: "Defines a label for an <input> element",
    },
    {
      "class-type": "forms-and-input",
      abbr: "fs",
      tag: "<fieldset>",
      def: "Groups related elements in a form",
    },
    {
      "class-type": "forms-and-input",
      abbr: "ld",
      tag: "<legend>",
      def: "Defines a caption for a <fieldset> element",
    },
    {
      "class-type": "forms-and-input",
      abbr: "ot",
      tag: "<output>",
      def: "Defines the result of a calculation",
    },
    {
      "class-type": "frames",
      abbr: "if",
      tag: "<iframe>",
      def: "Defines an inline frame",
    },
    {
      "class-type": "images",
      abbr: "ig",
      tag: "<img>",
      def: "Defines an image",
    },
    {
      "class-type": "images",
      abbr: "mp",
      tag: "<map>",
      def: "Defines an image map",
    },
    {
      "class-type": "images",
      abbr: "fgc",
      tag: "<figcaption>",
      def: "Defines a caption for a <figure> element",
    },
    {
      "class-type": "images",
      abbr: "fg",
      tag: "<figure>",
      def: "Specifies self-contained content",
    },
    {
      "class-type": "images",
      abbr: "pr",
      tag: "<picture>",
      def: "Defines a container for multiple image resources",
    },
    {
      "class-type": "audio-video",
      abbr: "ao",
      tag: "<audio>",
      def: "Defines embedded sound content",
    },
    {
      "class-type": "audio-video",
      abbr: "vd",
      tag: "<video>",
      def: "Defines embedded video content",
    },
    {
      "class-type": "links",
      abbr: "a",
      tag: "<a>",
      def: "Defines a hyperlink",
    },
    {
      "class-type": "links",
      abbr: "lk",
      tag: "<link>",
      def: "Defines the relationship between a document and an external resource (most used to link to style sheets)",
    },
    {
      "class-type": "links",
      abbr: "nv",
      tag: "<nav>",
      def: "Defines navigation links",
    },
  ],
  "third-column": [
    {
      "class-type": "lists",
      abbr: "li",
      tag: "<li>",
      def: "Defines a list item",
    },
    {
      "class-type": "lists",
      abbr: "dl",
      tag: "<dl>",
      def: "Defines a description list",
    },
    {
      "class-type": "lists",
      abbr: "dt",
      tag: "<dt>",
      def: "Defines a term/name in a description list",
    },
    {
      "class-type": "lists",
      abbr: "dl",
      tag: "<dl>",
      def: "Defines a description list",
    },
    {
      "class-type": "lists",
      abbr: "mu",
      tag: "<menu>",
      def: "Defines an unordered list of items each of which represents a link or other command that the user can activate",
    },
    {
      "class-type": "lists",
      abbr: "mm",
      tag: "<menuitem>",
      def: "Defines a command allowing a user the ability to invoke through a popup menu",
    },
    {
      "class-type": "tables",
      abbr: "tl",
      tag: "<table>",
      def: "Defines a table",
    },
    {
      "class-type": "tables",
      abbr: "cn",
      tag: "<caption>",
      def: "Defines a table caption",
    },
    {
      "class-type": "tables",
      abbr: "th",
      tag: "<th>",
      def: "Defines a header cell in a table",
    },
    {
      "class-type": "tables",
      abbr: "tr",
      tag: "<tr>",
      def: "Defines a row in a table",
    },
    {
      "class-type": "tables",
      abbr: "td",
      tag: "<td>",
      def: "Defines a cell in a table",
    },
    {
      "class-type": "tables",
      abbr: "thd",
      tag: "<thead>",
      def: "Groups the header content in a table",
    },
    {
      "class-type": "tables",
      abbr: "tbd",
      tag: "<tbody>",
      def: "Groups the body content in a table",
    },
    {
      "class-type": "tables",
      abbr: "tf",
      tag: "<tfoot>",
      def: "Groups the footer content in a table",
    },
    {
      "class-type": "tables",
      abbr: "cl",
      tag: "<col>",
      def: "Specifies column properties for each column within a <colgroup> element ",
    },
    {
      "class-type": "tables",
      abbr: "cg",
      tag: "<colgroup>",
      def: "Specifies a group of one or more columns in a table for formatting",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "sl",
      tag: "<style>",
      def: "Defines style information for a document",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "dv",
      tag: "<div>",
      def: "Defines a section in a document",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "spn",
      tag: "<span>",
      def: "Defines a section in a document",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "hdr",
      tag: "<header>",
      def: "Defines a header for a document or section",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "ft",
      tag: "<footer>",
      def: "Defines a footer for a document or section",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "mn",
      tag: "<main>",
      def: "Specifies the main content of a document",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "sn",
      tag: "<section>",
      def: "Defines a section in a document",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "ae",
      tag: "<article>",
      def: "Defines an article",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "ad",
      tag: "<aside>",
      def: "Defines content aside from the page content",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "ds",
      tag: "<details>",
      def: "Defines additional details that the user can view or hide",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "dg",
      tag: "<dialog>",
      def: "Defines a dialog box or window",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "sr",
      tag: "<summary>",
      def: "Defines a visible heading for a <details> element",
    },
    {
      "class-type": "styles-and-semantics",
      abbr: "da",
      tag: "<data>",
      def: "Adds a machine-readable translation of a given content",
    },
    {
      "class-type": "meta-info",
      abbr: "hd",
      tag: "<head>",
      def: "Contains metadata/information for the document",
    },
  ],
  "last-column": [
    {
      "class-type": "meta-info",
      abbr: "mt",
      tag: "<meta>",
      def: "Defines metadata about an HTML document",
    },
    {
      "class-type": "meta-info",
      abbr: "be",
      tag: "<base>",
      def: "Specifies the base URL/target for all relative URLs in a document",
    },
    {
      "class-type": "programming",
      abbr: "spt",
      tag: "<script>",
      def: "Defines a client-side script",
    },
    {
      "class-type": "programming",
      abbr: "nst",
      tag: "<noscript>",
      def: "Defines an alternate content for users that do not support client-side scripts",
    },
    {
      "class-type": "programming",
      abbr: "ed",
      tag: "<embed>",
      def: "Defines a container for an external application",
    },
    {
      "class-type": "programming",
      abbr: "ot",
      tag: "<object>",
      def: "Defines a container for an external application",
    },
    {
      "class-type": "programming",
      abbr: "pm",
      tag: "<param>",
      def: "Defines a parameter for an object",
    },
  ],
  "footer-elements": [
    {
      "class-type": "formatting",
      abbr: "is",
      tag: "<ins>",
      def: "Defines a text that has been inserted into a document",
    },
    {
      "class-type": "formatting",
      abbr: "kbd",
      tag: "<kbd>",
      def: "Defines keyboard input",
    },
    {
      "class-type": "formatting",
      abbr: "q",
      tag: "<q>",
      def: "Defines a short quotation",
    },
    {
      "class-type": "formatting",
      abbr: "rp",
      tag: "<rp>",
      def: "Defines what to show in browsers that do not support ruby annotations",
    },
    {
      "class-type": "formatting",
      abbr: "sm",
      tag: "<small>",
      def: "Defines smaller text",
    },
    {
      "class-type": "formatting",
      abbr: "sg",
      tag: "<strong>",
      def: "Defines important text",
    },
    {
      "class-type": "formatting",
      abbr: "vr",
      tag: "<var>",
      def: "Defines a variable",
    },
    {
      "class-type": "formatting",
      abbr: "wr",
      tag: "<wbr>",
      def: "Defines a possible line-break",
    },
    {
      "class-type": "forms-and-input",
      abbr: "st",
      tag: "<select>",
      def: "Defines a drop-down list",
    },
    {
      "class-type": "forms-and-input",
      abbr: "op",
      tag: "<optgroup>",
      def: "Defines a group of related options in a drop-down list",
    },
    {
      "class-type": "forms-and-input",
      abbr: "ds",
      tag: "<datalist>",
      def: "Specifies a list of pre-defined options for input controls",
    },
    {
      "class-type": "forms-and-input",
      abbr: "kn",
      tag: "<keygen>",
      def: "Facilitates the generation of key material, and submission of the public key as part of an HTML form",
    },
    {
      "class-type": "images",
      abbr: "aa",
      tag: "<area>",
      def: "Defines an area inside an image map",
    },
    {
      "class-type": "images",
      abbr: "cs",
      tag: "<canvas>",
      def: "Used to draw graphics, on the fly, via scripting (usually JavaScript)",
    },
    {
      "class-type": "audio-video",
      abbr: "sc",
      tag: "<source>",
      def: "Defines multiple media resources for media elements (<video> and <audio>)",
    },
    {
      "class-type": "audio-video",
      abbr: "tk",
      tag: "<track>",
      def: "Defines text tracks for media elements (<video> and <audio>)",
    },
    {
      "class-type": "lists",
      abbr: "ul",
      tag: "<ul>",
      def: "Defines an unordered list",
    },
    {
      "class-type": "lists",
      abbr: "ol",
      tag: "<ol>",
      def: "Defines an ordered list",
    },
  ],
};