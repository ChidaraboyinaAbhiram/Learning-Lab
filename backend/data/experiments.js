// src/data/experiments.js

export const experiments = [

    // -------------------- EXPERIMENT 1 --------------------
        {
            exNo: 1,
            id: "lists-links-images",
            title: "Lists, Links and Images",
            objective: "Learn HTML lists, hyperlinks, and image tags.",
            theory: [
                "HTML lists can be ordered, unordered or definition based.",
                "The <a> tag creates hyperlinks using href and target attributes.",
                "The <img> tag displays images with src, width and height attributes.",
                "Nested lists can be created inside <ul> or <ol>.",
                "Definition lists (<dl>, <dt>, <dd>) are used for terms and descriptions."
            ],
            subExperiments: [
                {
                    subNo: "a",
                    title: "Ordered, Unordered, Nested and Definition Lists",
                    description:
                        "Write a HTML program to explain the working of ordered, unordered, nested and definition lists.",
                    code: `<!DOCTYPE html>
    <html>
    <head>
        <title>HTML Lists Example</title>
    </head>
    <body>
        <h2>Ordered List</h2>
        <ol>
            <li>Apple</li>
            <li>Banana</li>
            <li>Cherry</li>
        </ol>

        <h2>Unordered List</h2>
        <ul>
            <li>Notebook</li>
            <li>Pen</li>
            <li>Eraser</li>
        </ul>

        <h2>Nested List</h2>
        <ul>
            <li>Fruits
                <ol>
                    <li>Apple</li>
                    <li>Mango</li>
                </ol>
            </li>
            <li>Vegetables
                <ol>
                    <li>Carrot</li>
                    <li>Potato</li>
                </ol>
            </li>
        </ul>

        <h2>Definition List</h2>
        <dl>
            <dt>HTML</dt>
            <dd>HyperText Markup Language</dd>
            <dt>CSS</dt>
            <dd>Cascading Style Sheets</dd>
        </dl>
    </body>
    </html>`,
                    quiz: [
                        { question: "Which tag defines an ordered list?", options: ["<ul>", "<ol>", "<dl>", "<li>"], answer: 1 },
                        { question: "Which tag defines a list item?", options: ["<item>", "<li>", "<dt>", "<dd>"], answer: 1 },
                        { question: "Which tag defines an unordered list?", options: ["<ul>", "<ol>", "<li>", "<dl>"], answer: 0 },
                        { question: "Which tag defines a term in a definition list?", options: ["<li>", "<dt>", "<dd>", "<ul>"], answer: 1 },
                        { question: "Which tag defines a description in a definition list?", options: ["<dt>", "<dd>", "<ul>", "<li>"], answer: 1 }
                    ]
                },
                {
                    subNo: "b",
                    title: "Hyperlinks",
                    description:
                        "Write a HTML program to explain the working of hyperlinks using <a> tag and href, target attributes.",
                    code: `<!DOCTYPE html>
    <html>
    <head>
        <title>Hyperlink Example</title>
    </head>
    <body>
        <h2>Example of Links</h2>
        <a href="https://www.w3schools.com" target="_blank">Visit W3Schools</a><br>
        <a href="page2.html" target="_self">Open in Same Tab</a><br>
        <a href="page3.html" target="_parent">Open in Parent Frame</a><br>
        <a href="page4.html" target="_top">Open in Top Frame</a>
    </body>
    </html>`,
                    quiz: [
                        { question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<url>", "<href>"], answer: 1 },
                        { question: "Which attribute defines the destination of a link?", options: ["src", "href", "link", "target"], answer: 1 },
                        { question: "Which target value opens link in a new tab?", options: ["_self", "_blank", "_parent", "_top"], answer: 1 },
                        { question: "Which tag is used for linking between web pages?", options: ["<img>", "<a>", "<ul>", "<frame>"], answer: 1 },
                        { question: "Which attribute is required for hyperlink tag?", options: ["target", "href", "src", "alt"], answer: 1 }
                    ]
                },
                {
                    subNo: "c",
                    title: "Images",
                    description:
                        "Write a HTML program to display an image using <img> tag with attributes like src, alt, width and height.",
                    code: `<!DOCTYPE html>
    <html>
    <head>
        <title>Image Example</title>
    </head>
    <body>
        <h2>Example of Image Tag</h2>
        <img src="flower.jpg" alt="Beautiful Flower" width="300" height="200" />
    </body>
    </html>`,
                    quiz: [
                        { question: "Which tag displays images in HTML?", options: ["<image>", "<pic>", "<img>", "<src>"], answer: 2 },
                        { question: "Which attribute specifies the image path?", options: ["alt", "src", "href", "path"], answer: 1 },
                        { question: "What does the alt attribute specify?", options: ["Alignment", "Alternative text", "File type", "Size"], answer: 1 },
                        { question: "Which attributes define image dimensions?", options: ["width and height", "size and scale", "w and h", "length and breadth"], answer: 0 },
                        { question: "What happens if the image path is incorrect?", options: ["Shows error", "Shows alt text", "Crashes page", "Shows nothing"], answer: 1 }
                    ]
                }
            ]
        },

        // -------------------- EXPERIMENT 2 --------------------
        {
            exNo: 2,
            id: "tables-forms-frames",
            title: "Tables, Forms and Frames",
            objective: "Understand how to create and format tables, design forms, and use frames in HTML.",
            theory: [
                "Tables are created using <table>, <tr>, <th>, and <td> tags.",
                "Forms collect user input using <input>, <select>, and <textarea> tags.",
                "Frames divide a web page into multiple sections.",
                "Attributes like rowspan and colspan modify table structure.",
                "The <noframes> tag provides fallback content for non-frame browsers."
            ],
            subExperiments: [
                {
                    subNo: "a",
                    title: "Tables",
                    description:
                        "Write a HTML program to create a table displaying student details with rowspan and colspan attributes.",
                    code: `<!DOCTYPE html>
    <html>
    <head>
        <title>HTML Table Example</title>
    </head>
    <body>
        <h2>Student Details Table</h2>
        <table border="1">
            <tr>
                <th rowspan="2">Name</th>
                <th colspan="2">Marks</th>
            </tr>
            <tr>
                <th>Maths</th>
                <th>Science</th>
            </tr>
            <tr>
                <td>Abhi</td>
                <td>90</td>
                <td>85</td>
            </tr>
            <tr>
                <td>Ram</td>
                <td>80</td>
                <td>75</td>
            </tr>
        </table>
    </body>
    </html>`,
                    quiz: [
                        { question: "Which tag defines a table row?", options: ["<th>", "<tr>", "<td>", "<caption>"], answer: 1 },
                        { question: "Which attribute merges rows?", options: ["colspan", "rowspan", "merge", "span"], answer: 1 },
                        { question: "Which tag creates header cells?", options: ["<th>", "<td>", "<caption>", "<tr>"], answer: 0 },
                        { question: "What is the default border value in HTML table?", options: ["1", "0", "2", "None"], answer: 1 },
                        { question: "Which tag defines a table caption?", options: ["<head>", "<title>", "<caption>", "<summary>"], answer: 2 }
                    ]
                },
                {
                    subNo: "b",
                    title: "Forms",
                    description:
                        "Write a HTML program to design a registration form using various input types.",
                    code: `<!DOCTYPE html>
    <html>
    <head>
        <title>Registration Form</title>
    </head>
    <body>
        <h2>Registration Form</h2>
        <form>
            Name: <input type="text" name="name"><br>
            Email: <input type="email" name="email"><br>
            Password: <input type="password" name="pwd"><br>
            Gender: 
                <input type="radio" name="g" value="M">Male
                <input type="radio" name="g" value="F">Female<br>
            Hobbies: 
                <input type="checkbox" value="Reading">Reading
                <input type="checkbox" value="Sports">Sports<br>
            <input type="submit" value="Register">
        </form>
    </body>
    </html>`,
                    quiz: [
                        { question: "Which tag defines a form?", options: ["<input>", "<form>", "<table>", "<label>"], answer: 1 },
                        { question: "Which input type is used for passwords?", options: ["text", "password", "email", "radio"], answer: 1 },
                        { question: "Which attribute groups radio buttons?", options: ["type", "value", "name", "id"], answer: 2 },
                        { question: "Which tag creates a checkbox?", options: ["<input>", "<checkbox>", "<radio>", "<select>"], answer: 0 },
                        { question: "Which tag is used to submit form data?", options: ["<button>", "<input type='submit'>", "<send>", "<form>"], answer: 1 }
                    ]
                },
                {
                    subNo: "c",
                    title: "Frames",
                    description:
                        "Write a HTML program using frameset tag to divide a webpage into multiple sections.",
                    code: `<!DOCTYPE html>
    <html>
    <head>
        <title>Frameset Example</title>
    </head>
    <frameset rows="30%,70%">
        <frame src="top.html">
        <frame src="bottom.html">
    </frameset>
    <noframes>
        <body>Your browser does not support frames.</body>
    </noframes>
    </html>`,
                    quiz: [
                        { question: "Which tag divides a page into sections?", options: ["<div>", "<frameset>", "<table>", "<section>"], answer: 1 },
                        { question: "Which tag defines an individual frame?", options: ["<frame>", "<iframe>", "<section>", "<set>"], answer: 0 },
                        { question: "Which tag gives fallback for frames?", options: ["<noframes>", "<default>", "<backup>", "<extra>"], answer: 0 },
                        { question: "What attribute defines row height in frameset?", options: ["height", "rows", "cols", "split"], answer: 1 },
                        { question: "Frameset tag is replaced by which tag in HTML5?", options: ["<iframe>", "<section>", "<div>", "<layout>"], answer: 0 }
                    ]
                }
            ]
        },

        // -------------------- EXPERIMENT 3 --------------------
        {
            exNo: 3,
            id: "semantic-audio-video-css",
            title: "Semantic Tags, Audio, Video and CSS Styles",
            objective:
                "Learn semantic HTML tags, embedding multimedia, and CSS styles.",
            theory: [
                "Semantic tags add meaning and structure to web content.",
                "Multimedia tags <audio> and <video> embed sound and video files.",
                "CSS defines page styling through inline, internal, or external methods.",
                "Header, nav, main, section and footer structure a page semantically.",
                "CSS selectors target elements to apply styles."
            ],
            subExperiments: [
                {
                    subNo: "a",
                    title: "Semantic Tags and Internal CSS",
                    description:
                        "Write a HTML program using semantic tags and internal CSS for page layout.",
                    code: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Semantic Tags Example</title>
        <style>
            header, footer { background-color: #333; color: white; text-align: center; padding: 10px; }
            nav a { color: white; margin: 5px; text-decoration: none; }
            article { background: #f2f2f2; padding: 10px; }
        </style>
    </head>
    <body>
        <header><h1>My Web Page</h1></header>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <main>
            <article>
                <h2>About Semantic Tags</h2>
                <p>Semantic elements clearly describe their meaning to both browser and developer.</p>
            </article>
        </main>
        <footer>&copy; 2024 My Website</footer>
    </body>
    </html>`,
                    quiz: [
                        { question: "Which tag defines the navigation links?", options: ["<menu>", "<nav>", "<aside>", "<header>"], answer: 1 },
                        { question: "Which tag represents main content?", options: ["<section>", "<main>", "<article>", "<footer>"], answer: 1 },
                        { question: "Which tag is for page header?", options: ["<top>", "<header>", "<head>", "<section>"], answer: 1 },
                        { question: "Which CSS method is inside <style> tag?", options: ["Internal", "Inline", "External", "None"], answer: 0 },
                        { question: "Which semantic tag defines footer?", options: ["<bottom>", "<footer>", "<section>", "<end>"], answer: 1 }
                    ]
                },
                {
                    subNo: "b",
                    title: "Audio and Video Embedding",
                    description:
                        "Write a HTML program to embed audio and video using <audio> and <video> tags.",
                    code: `<!DOCTYPE html>
    <html>
    <head>
        <title>Audio and Video Example</title>
    </head>
    <body>
        <h2>Audio Example</h2>
        <audio controls>
            <source src="song.mp3" type="audio/mpeg">
        </audio>

        <h2>Video Example</h2>
        <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
        </video>
    </body>
    </html>`,
                    quiz: [
                        { question: "Which tag is used to embed sound?", options: ["<music>", "<sound>", "<audio>", "<mp3>"], answer: 2 },
                        { question: "Which tag is used to embed video?", options: ["<media>", "<movie>", "<video>", "<clip>"], answer: 2 },
                        { question: "Which attribute adds playback controls?", options: ["controls", "autoplay", "src", "display"], answer: 0 },
                        { question: "Which attribute defines the video file path?", options: ["src", "href", "alt", "target"], answer: 0 },
                        { question: "What is the correct audio MIME type?", options: ["audio/mpeg", "video/mp4", "audio/mp3", "text/html"], answer: 0 }
                    ]
                }
            ]
        },

    // -------------------- EXPERIMENT 4 --------------------
    {
        exNo: 4,
        id: "css-selectors",
        title: "CSS Selector Types",
        objective:
            "Learn and apply different CSS selector types including simple, combinator, pseudo-class, pseudo-element, and attribute selectors.",
        theory: [
            "Simple selectors target elements by tag, id, class, or universally.",
            "Combinator selectors define relationships between elements.",
            "Pseudo-classes apply styles based on state (like :hover, :focus).",
            "Pseudo-elements style specific parts (::first-line, ::after).",
            "Attribute selectors style elements using attribute values."
        ],
        subExperiments: [
            {
                subNo: "a",
                title: "CSS Selector Forms",
                description:
                    "Write a HTML program to demonstrate all types of CSS selectors including simple, combinator, pseudo-class, pseudo-element and attribute selectors.",
                code: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CSS Selector Forms</title>
        <style>
            h1 { color: blue; }                 /* Element selector */
            #unique { font-weight: bold; }      /* ID selector */
            .highlight { background-color: yellow; } /* Class selector */
            * { margin: 0; padding: 0; }        /* Universal selector */

            div p { color: green; }             /* Descendant */
            div > p { border: 1px solid black; }/* Child */
            h1 + p { color: red; }              /* Adjacent sibling */
            h2 ~ p { font-style: italic; }      /* General sibling */

            a:hover { text-decoration: underline; } /* Pseudo-class */
            input:focus { border: 2px solid blue; } /* Pseudo-class */
            p::first-line { font-size: 1.3em; }     /* Pseudo-element */
            p::after { content: " (end)"; color: gray; }

            input[type="password"] { background: #eee; } /* Attribute selector */
        </style>
    </head>
    <body>
        <h1>Selector Examples</h1>
        <p id="unique">This paragraph uses an ID selector.</p>
        <p class="highlight">This paragraph uses a class selector.</p>
        <div>
            <p>Paragraph inside div (descendant selector).</p>
        </div>
        <h2>Sibling Example</h2>
        <p>Paragraph affected by general sibling selector.</p>
        <a href="#">Hover this link</a><br><br>
        <input type="text" placeholder="Focus me"><br>
        <input type="password" placeholder="Password input">
    </body>
    </html>`,
                quiz: [
                    { question: "Which selector targets an element by ID?", options: [".", "#", "*", "&"], answer: 1 },
                    { question: "Which pseudo-class is used when an element is hovered?", options: [":focus", ":hover", ":active", ":visited"], answer: 1 },
                    { question: "What does * selector target?", options: ["All elements", "Only divs", "Body only", "None"], answer: 0 },
                    { question: "Which selector targets paragraph inside a div?", options: ["div>p", "div p", "p div", "p>div"], answer: 1 },
                    { question: "Which attribute selector styles password fields?", options: ["input[type='password']", "input.id", "input#pass", ".password"], answer: 0 }
                ]
            }
        ]
    },

    // -------------------- EXPERIMENT 5 --------------------
    {
        exNo: 5,
        id: "css-colors-boxmodel",
        title: "CSS Colors and Box Model",
        objective:
            "Understand color notations and demonstrate the CSS box model including margin, border, padding, and content areas.",
        theory: [
            "CSS supports colors in HEX, RGB, RGBA, HSL and named formats.",
            "Box model defines how content, padding, border, and margin create space.",
            "Margins create space outside borders; padding creates space inside.",
            "Borders surround the padding and content.",
            "Box-sizing property changes width/height calculations."
        ],
        subExperiments: [
            {
                subNo: "a",
                title: "CSS Color References",
                description:
                    "Write a HTML program to demonstrate different CSS color formats like hex, rgb, rgba, hsl and variables.",
                code: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CSS Color References</title>
        <style>
            :root { --myColor: #ff5733; }
            .hex { background: #3498db; padding: 10px; margin: 5px; color: white; }
            .rgb { background: rgb(255, 0, 0); padding: 10px; margin: 5px; }
            .rgba { background: rgba(0, 255, 0, 0.5); padding: 10px; margin: 5px; }
            .hsl { background: hsl(240, 100%, 50%); padding: 10px; margin: 5px; color: white; }
            .var { background: var(--myColor); padding: 10px; margin: 5px; color: white; }
        </style>
    </head>
    <body>
        <h2>CSS Color References</h2>
        <div class="hex">Hex Color</div>
        <div class="rgb">RGB Color</div>
        <div class="rgba">RGBA Color</div>
        <div class="hsl">HSL Color</div>
        <div class="var">CSS Variable Color</div>
    </body>
    </html>`,
                quiz: [
                    { question: "Which color format supports transparency?", options: ["rgb", "rgba", "hex", "hsl"], answer: 1 },
                    { question: "What prefix is used for CSS variables?", options: ["$", "--", "@", "var"], answer: 1 },
                    { question: "hsl() stands for?", options: ["Hue Saturation Lightness", "High Saturation Light", "Hue Sharp Light", "High Shade Level"], answer: 0 },
                    { question: "Which is the correct RGB for pure red?", options: ["rgb(0,0,255)", "rgb(255,0,0)", "rgb(0,255,0)", "rgb(255,255,0)"], answer: 1 },
                    { question: "Which function retrieves a CSS variable value?", options: ["getVar()", "var()", "css()", "use()"], answer: 1 }
                ]
            },
            {
                subNo: "b",
                title: "CSS Box Model",
                description:
                    "Write a HTML program to illustrate content, padding, border and margin using CSS box model.",
                code: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CSS Box Model</title>
        <style>
            .box {
                background: lightblue;
                width: 200px;
                padding: 20px;
                border: 5px solid blue;
                margin: 15px;
            }
        </style>
    </head>
    <body>
        <h1>Box Model Example</h1>
        <div class="box">
            Content inside the box with padding, border and margin.
        </div>
    </body>
    </html>`,
                quiz: [
                    { question: "Which property adds space inside border?", options: ["margin", "padding", "border", "gap"], answer: 1 },
                    { question: "Which property adds space outside border?", options: ["border", "padding", "margin", "outline"], answer: 2 },
                    { question: "Which surrounds the content and padding?", options: ["border", "margin", "outline", "none"], answer: 0 },
                    { question: "What does box-sizing: border-box include?", options: ["margin only", "padding and border", "content only", "none"], answer: 1 },
                    { question: "Default box-sizing value is?", options: ["border-box", "content-box", "margin-box", "none"], answer: 1 }
                ]
            }
        ]
    },
// -------------------- EXPERIMENT 6 --------------------
    {
        exNo: 6,
        id: "javascript-basics",
        title: "JavaScript Basics",
        objective: "To understand how to embed JavaScript and handle basic input/output operations.",
        theory: [
            "JavaScript can be embedded internally using <script> tags, externally via <script src='...'>, or inline within HTML attributes.",
            "Output can be displayed using alert(), console.log(), document.write(), or by manipulating the DOM with innerHTML.",
            "User input can be captured using prompt(), confirm(), or HTML form elements.",
            "The DOM (Document Object Model) allows JavaScript to interact with and modify HTML elements."
        ],
        subExperiments: [
            {
                subNo: "a",
                title: "Internal and External JavaScript",
                description: "Write a program to embed internal and external JavaScript in a web page.",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript Embedding</title>
    <!-- Internal JavaScript -->
    <script>
        function showAlert() {
            alert("This is an internal JavaScript alert!");
        }
    </script>
    <!-- External JavaScript -->
    <script src="script.js"></script>
</head>
<body>
    <h1>JavaScript Embedding Methods</h1>
    <!-- Inline JavaScript -->
    <button onclick="alert('This is an inline JavaScript alert!')">Click for Inline Alert</button>
    <button onclick="showAlert()">Click for Internal JS Alert</button>
    <button onclick="externalFunction()">Click for External JS Alert</button>
</body>
</html>`,
                quiz: [
                    { question: "How do you include an external JavaScript file named 'script.js'?", options: ["<script href='script.js'>", "<script name='script.js'>", "<script src='script.js'>", "<javascript src='script.js'>"], answer: 2 },
                    { question: "Where is internal JavaScript placed?", options: ["Inside a <style> tag", "Inside a <script> tag", "Inside a <js> tag", "Inside a <link> tag"], answer: 1 },
                    { question: "What is the correct syntax for an inline JavaScript event?", options: ["<button event='click: alert()'>", "<button onclick='alert()'>", "<button script='alert()'>", "<button>alert()</button>"], answer: 1 },
                    { question: "Which attribute is used for external scripts?", options: ["href", "src", "link", "rel"], answer: 1 },
                    { question: "Can the <script> tag be placed in the <body> section?", options: ["Yes", "No", "Only in <head>", "Only for inline JS"], answer: 0 }
                ]
            },
            {
                subNo: "b",
                title: "Displaying Output",
                description: "Write a program to explain the different ways for displaying output in JavaScript.",
                code: `<!DOCTYPE html>
<html>
<body>
    <h2>JavaScript Output Methods</h2>
    <p id="output"></p>
    <script>
        // 1. Using innerHTML
        document.getElementById("output").innerHTML = "Output using innerHTML.";

        // 2. Using document.write()
        document.write("Output using document.write().");

        // 3. Using alert()
        alert("This is an alert box!");

        // 4. Using console.log()
        console.log("This is console output.");
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which method displays a pop-up dialog box?", options: ["window.print()", "console.log()", "alert()", "document.write()"], answer: 2 },
                    { question: "Which method is used to write content into an HTML element?", options: ["innerHTML", "writeHTML()", "element.write()", "console.log()"], answer: 0 },
                    { question: "Which method is best for debugging purposes?", options: ["alert()", "document.write()", "innerHTML", "console.log()"], answer: 3 },
                    { question: "What happens if you use document.write() after the page has loaded?", options: ["It appends content", "It throws an error", "It overwrites the entire document", "It does nothing"], answer: 2 },
                    { question: "Which object does the 'log' method belong to?", options: ["window", "document", "console", "element"], answer: 2 }
                ]
            },
            {
                subNo: "c",
                title: "Taking Input",
                description: "Write a program to explain the different ways for taking input in JavaScript.",
                code: `<!DOCTYPE html>
<html>
<body>
    <h1>JavaScript Input Methods</h1>
    <input type="text" id="htmlInput" placeholder="Type here">
    <button onclick="showInput()">Submit</button>
    <p id="output"></p>
    <script>
        // 1. Using prompt()
        let name = prompt("Please enter your name:", "Harry Potter");
        if (name != null) {
            document.getElementById("output").innerHTML = "Hello " + name + "!";
        }

        // 2. Using confirm()
        if (confirm("Press a button!")) {
            console.log("You pressed OK!");
        } else {
            console.log("You pressed Cancel!");
        }

        // 3. Using HTML input field
        function showInput() {
            let userInput = document.getElementById("htmlInput").value;
            alert("You entered: " + userInput);
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which method displays a dialog box with a text input field?", options: ["alert()", "confirm()", "prompt()", "input()"], answer: 2 },
                    { question: "Which method returns a boolean value (true/false)?", options: ["prompt()", "confirm()", "alert()", "getValue()"], answer: 1 },
                    { question: "How do you get the value from a text input with id 'myInput'?", options: ["document.getElementById('myInput').value", "document.getValue('myInput')", "myInput.innerHTML", "prompt('myInput')"], answer: 0 },
                    { question: "What does prompt() return if the user clicks 'Cancel'?", options: ["An empty string", "undefined", "null", "false"], answer: 2 },
                    { question: "Which method is best for getting a simple 'Yes' or 'No' from the user?", options: ["prompt()", "alert()", "confirm()", "input()"], answer: 2 }
                ]
            },
            {
                subNo: "d",
                title: "Voter Eligibility Checker",
                description: "Create a webpage which uses a prompt dialogue box to ask a voter for his name and age and determines if they can vote.",
                code: `<!DOCTYPE html>
<html>
<head>
    <title>Voter Eligibility</title>
</head>
<body>
    <h1>Voter Eligibility Check</h1>
    <button onclick="checkEligibility()">Check Eligibility</button>
    <div id="result"></div>
    <script>
        function checkEligibility() {
            let name = prompt("Please enter your name:");
            let age = prompt("Please enter your age:");
            let resultDiv = document.getElementById("result");

            if (age >= 18) {
                resultDiv.innerHTML = "Hello " + name + ", you are eligible to vote.";
            } else {
                resultDiv.innerHTML = "Sorry " + name + ", you are not eligible to vote yet.";
            }
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "What is the minimum voting age used in the script?", options: ["16", "18", "21", "20"], answer: 1 },
                    { question: "Which function is called when the button is clicked?", options: ["checkVoter()", "checkEligibility()", "promptUser()", "getAge()"], answer: 1 },
                    { question: "What data type should the 'age' variable be for comparison?", options: ["String", "Boolean", "Number", "Object"], answer: 2 },
                    { question: "Which operator is used to check for eligibility?", options: [">=", "==", "<=", "="], answer: 0 },
                    { question: "Where is the final result displayed?", options: ["In an alert box", "In the console", "In a div with id 'result'", "In a prompt box"], answer: 2 }
                ]
            }
        ]
    },

    // -------------------- EXPERIMENT 7 --------------------
    {
        exNo: 7,
        id: "javascript-objects",
        title: "JavaScript Objects",
        objective: "To learn and use the properties and methods of built-in JavaScript objects like Document, Window, Array, Math, String, Date, and RegExp.",
        theory: [
            "The 'document' object represents the entire HTML document and is used for DOM manipulation.",
            "The 'window' object represents the browser's window and provides methods like alert() and open().",
            "The 'Array' object provides methods for list manipulation like push(), pop(), and sort().",
            "The 'Math' object contains properties and methods for mathematical constants and functions.",
            "The 'String' object provides methods for text manipulation like toUpperCase() and substring().",
            "The 'Date' object is used to work with dates and times.",
            "The 'RegExp' object is used for pattern matching with regular expressions."
        ],
        subExperiments: [
            {
                subNo: "a",
                title: "Document Object",
                description: "Write a program using document object properties and methods to manipulate HTML content.",
                code: `<!DOCTYPE html>
<html>
<body>
    <h1 id="title">Welcome!</h1>
    <p>This is a paragraph.</p>
    <button onclick="changeContent()">Change Content</button>
    <script>
        function changeContent() {
            document.getElementById("title").innerHTML = "Content Changed!";
            document.body.style.backgroundColor = "lightblue";
            document.title = "Page Updated";
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which method is used to select an element by its ID?", options: ["getElement()", "selectById()", "getElementById()", "queryId()"], answer: 2 },
                    { question: "Which property changes the background color of the page?", options: ["document.backgroundColor", "document.body.style.backgroundColor", "window.bgColor", "body.color"], answer: 1 },
                    { question: "What does 'document.title' control?", options: ["The main <h1> tag", "The text in the browser tab", "The first <p> tag", "The document's filename"], answer: 1 },
                    { question: "Which property is used to change the HTML content of an element?", options: ["textContent", "value", "innerHTML", "content"], answer: 2 },
                    { question: "The 'document' object is part of which larger object?", options: ["console", "window", "navigator", "screen"], answer: 1 }
                ]
            },
            {
                subNo: "b",
                title: "Window Object",
                description: "Write a program using window object properties and methods.",
                code: `<!DOCTYPE html>
<html>
<body>
    <button onclick="showInfo()">Show Window Info</button>
    <button onclick="openWindow()">Open New Window</button>
    <script>
        function showInfo() {
            let info = "Inner Width: " + window.innerWidth + "px\\n";
            info += "Current URL: " + window.location.href;
            alert(info);
        }
        function openWindow() {
            window.open("https://www.google.com", "_blank", "width=600,height=400");
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which method opens a new browser window?", options: ["window.new()", "window.open()", "window.create()", "window.load()"], answer: 1 },
                    { question: "Which property holds the URL of the current page?", options: ["window.url", "window.href", "window.location.href", "window.path"], answer: 2 },
                    { question: "Which method is a shorthand for window.alert()?", options: ["print()", "log()", "alert()", "message()"], answer: 2 },
                    { question: "What does 'window.innerWidth' return?", options: ["The width of the screen", "The width of the browser viewport", "The width of the HTML body", "The width of the browser window including toolbars"], answer: 1 },
                    { question: "Is the 'window' object the global object in a browser?", options: ["Yes", "No", "Only in strict mode", "Only for variables"], answer: 0 }
                ]
            },
            {
                subNo: "c",
                title: "Array Object",
                description: "Write a program using array object properties and methods.",
                code: `<!DOCTYPE html>
<html>
<body>
    <p id="output"></p>
    <script>
        let fruits = ["Apple", "Banana", "Cherry"];
        fruits.push("Date"); // Add an element
        fruits.pop(); // Remove the last element
        fruits.sort(); // Sort the array
        document.getElementById("output").innerHTML = "Fruits: " + fruits.join(", ");
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which method adds a new element to the end of an array?", options: ["add()", "push()", "append()", "insert()"], answer: 1 },
                    { question: "Which method removes the last element from an array?", options: ["pop()", "removeLast()", "delete()", "shift()"], answer: 0 },
                    { question: "Which property returns the number of elements in an array?", options: ["size", "count", "length", "elements"], answer: 2 },
                    { question: "Which method sorts the elements of an array?", options: ["order()", "arrange()", "sort()", "organize()"], answer: 2 },
                    { question: "Which method joins all array elements into a string?", options: ["concat()", "toString()", "join()", "combine()"], answer: 2 }
                ]
            },
            {
                subNo: "d",
                title: "Math Object",
                description: "Write a program using Math object properties and methods.",
                code: `<!DOCTYPE html>
<html>
<body>
    <p id="output"></p>
    <script>
        let output = "PI: " + Math.PI + "<br>";
        output += "Random number: " + Math.random() + "<br>";
        output += "Square root of 16: " + Math.sqrt(16) + "<br>";
        output += "Round 4.7: " + Math.round(4.7);
        document.getElementById("output").innerHTML = output;
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which method returns a random number between 0 and 1?", options: ["Math.rand()", "Math.random()", "Math.rnd()", "Math.number()"], answer: 1 },
                    { question: "Which method finds the square root of a number?", options: ["Math.sq()", "Math.root()", "Math.sqrt()", "Math.squareRoot()"], answer: 2 },
                    { question: "Which property represents the value of PI?", options: ["Math.PI", "Math.pi", "Math.pie", "Math.p"], answer: 0 },
                    { question: "Which method rounds a number to the nearest integer?", options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.trunc()"], answer: 2 },
                    { question: "Which method returns the largest of zero or more numbers?", options: ["Math.max()", "Math.largest()", "Math.ceil()", "Math.abs()"], answer: 0 }
                ]
            },
            {
                subNo: "e",
                title: "String Object",
                description: "Write a program using string object properties and methods.",
                code: `<!DOCTYPE html>
<html>
<body>
    <p id="output"></p>
    <script>
        let text = "Hello World!";
        let output = "Length: " + text.length + "<br>";
        output += "Uppercase: " + text.toUpperCase() + "<br>";
        output += "Substring: " + text.substring(6, 11);
        document.getElementById("output").innerHTML = output;
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which property returns the length of a string?", options: ["size", "count", "length", "chars"], answer: 2 },
                    { question: "Which method converts a string to uppercase?", options: ["toUpperCase()", "upper()", "toUpper()", "uppercase()"], answer: 0 },
                    { question: "Which method extracts a part of a string?", options: ["slice()", "substr()", "substring()", "All of the above"], answer: 3 },
                    { question: "Which method finds the position of a specified value in a string?", options: ["position()", "indexOf()", "search()", "find()"], answer: 1 },
                    { question: "Which method replaces a specified value with another value in a string?", options: ["replace()", "change()", "modify()", "switch()"], answer: 0 }
                ]
            },
            {
                subNo: "f",
                title: "RegExp Object",
                description: "Write a program using RegExp object properties and methods to validate an email.",
                code: `<!DOCTYPE html>
<html>
<body>
    <button onclick="validateEmail()">Validate Email</button>
    <script>
        function validateEmail() {
            let email = "test@example.com";
            let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/;
            let result = pattern.test(email);
            alert("Is the email valid? " + result);
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which method tests for a match in a string and returns true or false?", options: ["exec()", "match()", "test()", "search()"], answer: 2 },
                    { question: "What does the 'g' flag in a regular expression stand for?", options: ["Global match", "Group match", "General match", "Greedy match"], answer: 0 },
                    { question: "What does the 'i' flag in a regular expression stand for?", options: ["Ignore case", "Initial match", "Include case", "Inverse match"], answer: 0 },
                    { question: "Which method executes a search for a match in a string and returns an array of information?", options: ["test()", "exec()", "match()", "search()"], answer: 1 },
                    { question: "How do you create a RegExp object in JavaScript?", options: ["new RegExp()", "/pattern/", "Both A and B", "None of the above"], answer: 2 }
                ]
            },
            {
                subNo: "g",
                title: "Date Object",
                description: "Write a program using Date object properties and methods.",
                code: `<!DOCTYPE html>
<html>
<body>
    <p id="output"></p>
    <script>
        const d = new Date();
        let output = "Full Date: " + d.toDateString() + "<br>";
        output += "Current Hour: " + d.getHours();
        document.getElementById("output").innerHTML = output;
    </script>
</body>
</html>`,
                quiz: [
                    { question: "How do you create a new Date object?", options: ["new Date()", "Date.now()", "Date()", "createDate()"], answer: 0 },
                    { question: "Which method returns the day of the month (1-31)?", options: ["getDay()", "getDate()", "getMonth()", "getFullYear()"], answer: 1 },
                    { question: "Which method returns the year as a four-digit number?", options: ["getYear()", "getFullYear()", "getYearCode()", "getUTCYear()"], answer: 1 },
                    { question: "Which method returns the day of the week (0-6)?", options: ["getWeekDay()", "getDate()", "getDay()", "getWeek()"], answer: 2 },
                    { question: "Which method sets the year for a specified date?", options: ["setYear()", "setFullYear()", "updateYear()", "changeYear()"], answer: 1 }
                ]
            },
            {
                subNo: "h",
                title: "User-Defined Object",
                description: "Write a program to explain user-defined objects using constructors, properties, and methods.",
                code: `<!DOCTYPE html>
<html>
<body>
    <p id="output"></p>
    <script>
        // Constructor function
        function Person(first, last, age) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.fullName = function() {
                return this.firstName + " " + this.lastName;
            };
        }

        const myFriend = new Person("John", "Doe", 25);
        document.getElementById("output").innerHTML = "My friend is " + myFriend.fullName() + ".";
    </script>
</body>
</html>`,
                quiz: [
                    { question: "What is a constructor in JavaScript?", options: ["A special function for creating and initializing objects", "A method to destroy objects", "A variable type", "A CSS property"], answer: 0 },
                    { question: "Which keyword is used to create an instance of an object?", options: ["create", "new", "instance", "object"], answer: 1 },
                    { question: "What does the 'this' keyword refer to inside a constructor?", options: ["The global window object", "The function itself", "The new object being created", "The parent object"], answer: 2 },
                    { question: "How do you add a property to an object?", options: ["object.property = value", "object.addProperty()", "setProperty(object, value)", "All of the above"], answer: 0 },
                    { question: "What is a method in the context of an object?", options: ["A property that is a function", "A special type of variable", "A link to another object", "A CSS class"], answer: 0 }
                ]
            }
        ]
    },

    // -------------------- EXPERIMENT 8 --------------------
    {
        exNo: 8,
        id: "javascript-control-flow",
        title: "JavaScript Control Flow & Loops",
        objective: "To understand and implement control flow statements (if, switch) and looping constructs (for, while, do-while, for-in, for-of).",
        theory: [
            "Conditional statements like 'if-else' and 'switch' execute code based on specific conditions.",
            "'for', 'while', and 'do-while' loops are used to execute a block of code repeatedly.",
            "The 'for-in' loop iterates over the properties of an object.",
            "The 'for-of' loop iterates over the values of an iterable object like an Array or String.",
            "These constructs are fundamental for creating logic and algorithms in programs."
        ],
        subExperiments: [
            {
                subNo: "a",
                title: "Find Larger Number",
                description: "Write a program that takes three integers and displays the largest one.",
                code: `<!DOCTYPE html>
<html>
<body>
    <button onclick="findLarger()">Find Larger Number</button>
    <script>
        function findLarger() {
            let num1 = parseInt(prompt("Enter first number:"));
            let num2 = parseInt(prompt("Enter second number:"));
            let num3 = parseInt(prompt("Enter third number:"));
            let largest;

            if (num1 >= num2 && num1 >= num3) {
                largest = num1;
            } else if (num2 >= num1 && num2 >= num3) {
                largest = num2;
            } else {
                largest = num3;
            }
            alert("The largest number is " + largest);
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which statement is used for conditional logic?", options: ["for", "while", "if-else", "switch"], answer: 2 },
                    { question: "What does parseInt() do?", options: ["Converts a string to a floating-point number", "Converts a string to an integer", "Checks if a value is a number", "Returns the decimal part of a number"], answer: 1 },
                    { question: "Which function can be used as a simpler way to find the max of three numbers?", options: ["Math.max()", "Math.large()", "Math.ceil()", "Math.top()"], answer: 0 },
                    { question: "What does the '&&' operator mean?", options: ["OR", "NOT", "AND", "XOR"], answer: 2 },
                    { question: "What happens if the inputs are equal?", options: ["It shows an error", "It correctly identifies one of them as the largest", "It asks for input again", "The script crashes"], answer: 1 }
                ]
            },
            {
                subNo: "b",
                title: "Display Weekdays with Switch",
                description: "Write a program to display weekdays using a switch case.",
                code: `<!DOCTYPE html>
<html>
<body>
    <button onclick="showDay()">Show Weekday</button>
    <script>
        function showDay() {
            let dayNum = parseInt(prompt("Enter a number (1-7):"));
            let dayName;
            switch (dayNum) {
                case 1: dayName = "Sunday"; break;
                case 2: dayName = "Monday"; break;
                case 3: dayName = "Tuesday"; break;
                case 4: dayName = "Wednesday"; break;
                case 5: dayName = "Thursday"; break;
                case 6: dayName = "Friday"; break;
                case 7: dayName = "Saturday"; break;
                default: dayName = "Invalid day";
            }
            alert(dayName);
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "What is the purpose of the 'break' statement in a switch?", options: ["To end the function", "To skip the current case", "To exit the switch block", "To cause an error"], answer: 2 },
                    { question: "What does the 'default' case do?", options: ["It runs first", "It runs if no other case matches", "It is mandatory", "It runs for every case"], answer: 1 },
                    { question: "A switch statement is a simpler alternative to what?", options: ["A for loop", "A long series of if-else if statements", "A while loop", "A function call"], answer: 1 },
                    { question: "What value will be alerted if the input is 9?", options: ["Sunday", "Saturday", "Invalid day", "An error"], answer: 2 },
                    { question: "Can a switch statement work with strings?", options: ["Yes", "No", "Only in some browsers", "Only with numbers"], answer: 0 }
                ]
            },
            {
                subNo: "c",
                title: "Loops: For, While, Do-While",
                description: "Write a program to print numbers from 1 to 10 using for, while, and do-while loops.",
                code: `<!DOCTYPE html>
<html>
<body>
    <script>
        // For loop
        console.log("For loop:");
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }

        // While loop
        console.log("While loop:");
        let j = 1;
        while (j <= 10) {
            console.log(j);
            j++;
        }

        // Do-while loop
        console.log("Do-while loop:");
        let k = 1;
        do {
            console.log(k);
            k++;
        } while (k <= 10);
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "for-in"], answer: 2 },
                    { question: "What are the three parts of a 'for' loop header?", options: ["condition, increment, body", "initialization, condition, final-expression", "variable, condition, update", "start, stop, step"], answer: 1 },
                    { question: "What could cause an infinite loop in a 'while' statement?", options: ["Forgetting the incrementer (e.g., j++)", "A condition that is always false", "Using a 'break' statement", "Initializing the variable to 0"], answer: 0 },
                    { question: "Which loop is best when the number of iterations is known beforehand?", options: ["while", "do-while", "for", "All are equal"], answer: 2 },
                    { question: "In a 'for' loop, when is the condition checked?", options: ["Before each iteration", "After each iteration", "Only once at the start", "Only once at the end"], answer: 0 }
                ]
            },
            {
                subNo: "d",
                title: "Loops: For-in, For-of",
                description: "Write a program to print data in an object and array using for-in and for-of loops.",
                code: `<!DOCTYPE html>
<html>
<body>
    <script>
        const person = { name: "John", age: 30, city: "New York" };
        const colors = ["Red", "Green", "Blue"];

        // For-in loop (for object keys)
        console.log("For-in on object:");
        for (let key in person) {
            console.log(key + ": " + person[key]);
        }

        // For-of loop (for array values)
        console.log("For-of on array:");
        for (let value of colors) {
            console.log(value);
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which loop is primarily used for iterating over the properties (keys) of an object?", options: ["for", "for-of", "while", "for-in"], answer: 3 },
                    { question: "Which loop is used for iterating over the values of an iterable (like an array)?", options: ["for-in", "for-of", "while", "do-while"], answer: 1 },
                    { question: "What does a 'for-in' loop iterate over in an array?", options: ["The values", "The indices (as strings)", "The elements directly", "It doesn't work on arrays"], answer: 1 },
                    { question: "Can you use 'for-of' on a plain object?", options: ["Yes, it iterates keys", "Yes, it iterates values", "No, objects are not directly iterable", "Only if it has a 'length' property"], answer: 2 },
                    { question: "Which loop is generally recommended for iterating over arrays?", options: ["for-in", "for-of", "while", "A standard for loop"], answer: 1 }
                ]
            },
            {
                subNo: "e",
                title: "Armstrong Number Checker",
                description: "Develop a program to determine whether a given number is an Armstrong number.",
                code: `<!DOCTYPE html>
<html>
<body>
    <script>
        const num = prompt("Enter a number:");
        const numStr = num.toString();
        const numDigits = numStr.length;
        let sum = 0;

        for (let digit of numStr) {
            sum += Math.pow(parseInt(digit), numDigits);
        }

        if (sum == num) {
            alert(num + " is an Armstrong number.");
        } else {
            alert(num + " is NOT an Armstrong number.");
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "What is an Armstrong number?", options: ["A number equal to the sum of its digits", "A number that reads the same forwards and backwards", "A number equal to the sum of its digits raised to the power of the number of digits", "A prime number"], answer: 2 },
                    { question: "What does 'num.toString()' do?", options: ["Checks if num is a string", "Converts the number to a string", "Returns the type of num", "Prints the number"], answer: 1 },
                    { question: "What is 'Math.pow(3, 2)'?", options: ["5", "6", "9", "1.5"], answer: 2 },
                    { question: "Why is the number of digits calculated?", options: ["It's the exponent for the power calculation", "To check if the number is too long", "It's not used", "To divide the number"], answer: 0 },
                    { question: "Is 153 an Armstrong number?", options: ["Yes", "No", "Only in base 8", "It's a prime number"], answer: 0 }
                ]
            },
            {
                subNo: "f",
                title: "Currency Denomination",
                description: "Write a program to display the denomination of an amount in terms of 100s, 50s, 20s, etc.",
                code: `<!DOCTYPE html>
<html>
<body>
    <script>
        let amount = parseInt(prompt("Enter Amount (Rs):"));
        const denominations = [100, 50, 20, 10, 5, 2, 1];
        let result = "Denomination Breakdown:\\n";

        for (let denom of denominations) {
            if (amount >= denom) {
                let count = Math.floor(amount / denom);
                amount %= denom; // Get the remainder
                result += count + " - Rs." + denom + "'s\\n";
            }
        }
        alert(result);
    </script>
</body>
</html>`,
                quiz: [
                    { question: "What does 'Math.floor(163 / 100)' return?", options: ["1.63", "2", "1", "163"], answer: 2 },
                    { question: "What does the modulus operator '%' do?", options: ["Performs division", "Returns the remainder of a division", "Performs multiplication", "Converts to percentage"], answer: 1 },
                    { question: "If amount is 163, what is its value after the first iteration (denom=100)?", options: ["163", "63", "1.63", "100"], answer: 1 },
                    { question: "Why is the denominations array sorted from largest to smallest?", options: ["It's a requirement for arrays", "To ensure the maximum number of higher value notes are used first", "It doesn't matter", "For faster processing"], answer: 1 },
                    { question: "What would be the result for an amount of 88?", options: ["1-50, 1-20, 1-10, 1-5, 1-2, 1-1", "1-50, 1-20, 1-10, 1-5, 1-1", "1-50, 1-20, 1-10, 3-1", "1-50, 1-20, 1-10, 1-5, 1-2, 1-1"], answer: 0 }
                ]
            }
        ]
    },

    // -------------------- EXPERIMENT 9 --------------------
    {
        exNo: 9,
        id: "javascript-functions-validation",
        title: "JS Functions and Form Validation",
        objective: "To design and use functions for common calculations and to perform client-side form validation using regular expressions.",
        theory: [
            "Functions are reusable blocks of code that perform a specific task.",
            "Form validation is the process of ensuring that user input is clean, correct, and useful.",
            "Client-side validation provides instant feedback to the user without a server round-trip.",
            "Regular Expressions (RegExp) are powerful patterns used to match character combinations in strings, ideal for validation.",
            "Event listeners (e.g., onsubmit, oninput) trigger JavaScript functions in response to user actions."
        ],
        subExperiments: [
            {
                subNo: "a",
                title: "Number Properties (Auto-Calculate)",
                description: "Design a page that automatically calculates Factorial, Fibonacci, Primes, and Palindrome status as the user types a number.",
                code: `<!DOCTYPE html>
<html>
<head>
    <title>Auto-Calculate</title>
</head>
<body>
    <label>Enter a number: <input type="number" id="num" oninput="calculateAll()"></label>
    <div id="factorialResult"></div>
    <div id="fibonacciResult"></div>
    <div id="primeResult"></div>
    <div id="palindromeResult"></div>
    <script>
        function calculateAll() {
            // Functions for factorial, fibonacci, prime, palindrome would go here
            let num = document.getElementById('num').value;
            document.getElementById('factorialResult').innerHTML = "Factorial of " + num + " is ...";
            document.getElementById('palindromeResult').innerHTML = num + " is a palindrome? ...";
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which event triggers the calculation in this example?", options: ["onclick", "onchange", "oninput", "onsubmit"], answer: 2 },
                    { question: "What is the factorial of 5?", options: ["15", "120", "25", "10"], answer: 1 },
                    { question: "Which of these numbers is a palindrome?", options: ["123", "121", "1232", "3211"], answer: 1 },
                    { question: "What is a prime number?", options: ["A number divisible by 2", "A number greater than 1 with only two divisors: 1 and itself", "Any odd number", "A number that is not a fraction"], answer: 1 },
                    { question: "The Fibonacci sequence starts with 0, 1. What is the next number?", options: ["1", "2", "0", "3"], answer: 0 }
                ]
            },
            {
                subNo: "b",
                title: "Number Properties (Buttons)",
                description: "Design a page with a text box and four buttons (Factorial, Fibonacci, Prime, Palindrome) to call appropriate functions.",
                code: `<!DOCTYPE html>
<html>
<body>
    <label>Enter a number: <input type="number" id="num"></label><br>
    <button onclick="calculateFactorial()">Factorial</button>
    <button onclick="generateFibonacci()">Fibonacci</button>
    <div id="result"></div>
    <script>
        function calculateFactorial() {
            let num = document.getElementById('num').value;
            // factorial logic...
            document.getElementById('result').innerHTML = "Factorial is ...";
        }
        function generateFibonacci() {
            // fibonacci logic...
            document.getElementById('result').innerHTML = "Fibonacci is ...";
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "Which event is used to trigger the functions in this example?", options: ["oninput", "onclick", "onchange", "onsubmit"], answer: 1 },
                    { question: "How are the different results displayed?", options: ["In separate divs", "In the same div, overwriting the previous result", "In alert boxes", "In the console"], answer: 1 },
                    { question: "A function in JavaScript is defined with which keyword?", options: ["function", "def", "fun", "method"], answer: 0 },
                    { question: "To get the input value, which property is used?", options: [".innerHTML", ".text", ".value", ".content"], answer: 2 },
                    { question: "Is it better to have one large function or multiple smaller functions?", options: ["One large function is more efficient", "Multiple smaller functions are better for readability and reuse", "It makes no difference", "Depends on the browser"], answer: 1 }
                ]
            },
            {
                subNo: "c",
                title: "Registration Form Validation",
                description: "Write a program to validate Name, Mobile, and E-mail fields in a registration page using regular expressions.",
                code: `<!DOCTYPE html>
<html>
<body>
    <form id="registrationForm" onsubmit="return validateForm()">
        Name: <input type="text" id="name"><br>
        Mobile: <input type="text" id="mobile"><br>
        Email: <input type="text" id="email"><br>
        <input type="submit">
    </form>
    <script>
        function validateForm() {
            let name = document.getElementById("name").value;
            let mobile = document.getElementById("mobile").value;
            let namePattern = /^[a-zA-Z][a-zA-Z0-9]{5,}$/;
            let mobilePattern = /^[0-9]{10}$/;
            if (!namePattern.test(name)) {
                alert("Invalid name format.");
                return false;
            }
            if (!mobilePattern.test(mobile)) {
                alert("Invalid mobile number.");
                return false;
            }
            return true;
        }
    </script>
</body>
</html>`,
                quiz: [
                    { question: "What does the regex /^[0-9]{10}$/ check for?", options: ["At least 10 digits", "Exactly 10 letters", "Exactly 10 digits", "10 or more characters"], answer: 2 },
                    { question: "In regex, what does '^' signify at the beginning of a pattern?", options: ["End of string", "Any character", "Start of string", "Negation"], answer: 2 },
                    { question: "In regex, what does '$' signify at the end of a pattern?", options: ["Start of string", "A dollar amount", "End of string", "Optional character"], answer: 2 },
                    { question: "Which method is used to check if a string matches a regex pattern?", options: [".match()", ".check()", ".validate()", ".test()"], answer: 3 },
                ]
            }
        ]
    }
];

export default experiments;
