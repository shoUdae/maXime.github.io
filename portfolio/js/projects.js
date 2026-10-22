/* Add a project by adding an object here. cat: shopify | wordpress | fullstack | other.
   Set url/repo only to verified public links. confirm:true = details still to be verified (see README). */
var PROJECTS=[
{id:"hqt",name:"HighQualityTransfers",cat:"shopify",desc:"Shopify theme development and custom product experiences for an apparel and transfer printing store.",
 work:["Customized product pages so size, price, quantity and the top Add to Cart button are hidden for specific products while the upload and Add to Cart flow stays intact.","Worked on DTF, UV DTF and sublimation gang sheet product behavior.","Resolved merge conflicts in product templates involving app blocks.","Developed on a staging branch synced with GitHub."],
 tech:["Shopify","Liquid","JavaScript","CSS","Git"],url:"https://highqualitytransfers.com/"},
{id:"usmara",name:"Usmara",cat:"shopify",desc:"Shopify theme customization with separate staging and production workflows.",
 work:["Pulled the theme with Shopify CLI.","Connected development branches to a draft theme and production to the live theme.","Tested changes before they reached the live storefront."],tech:["Shopify","Liquid","Shopify CLI","Git"]},
{id:"hr",name:"HR Portal / PeopleRefer",cat:"fullstack",desc:"Full-stack recruitment portal with an admin dashboard and a public candidate job portal.",
 work:["Role-based admin and candidate workflows with JWT authentication.","Job creation, editing, archiving and deletion; resume uploads with Multer.","Google reCAPTCHA v2 with server-side verification, plus unit and end-to-end tests.","Separate frontend and backend repositories, deployed with Coolify.","Email verification and application tracking are still to be verified before being listed as complete."],
 tech:["React","Vite","Tailwind CSS","Node.js","Express","MongoDB","JWT"],confirm:true},
{id:"api",name:"Doctor–Patient REST API",cat:"fullstack",desc:"Backend API project for doctor and patient workflows, built with Spring Boot.",work:["Specific endpoints and features to be documented from the source code."],tech:["Java","Spring Boot","REST"],confirm:true},
{id:"wp",name:"Agile Digital Edge Blog",cat:"wordpress",desc:"WordPress blog and technical content publishing with formatted long-form articles.",
 work:["Formatted technical articles with clear heading hierarchy, lists and images.","Worked with custom blog templates, child themes and local development."],tech:["WordPress","PHP","HTML","CSS"],url:"https://blog.agiledigitaledge.com/"},
{id:"ds",name:"2020 Driving School",cat:"wordpress",desc:"WordPress website with an online driving course built on LearnDash.",work:["Worked on course workflow requirements such as locking quizzes until lessons are complete and completion email notifications.","Which requirements shipped is still to be verified."],tech:["WordPress","LearnDash"],confirm:true},
{id:"cz",name:"CompressionZ",cat:"other",desc:"E-commerce website development and customization.",work:["Details to be added."],tech:[],confirm:true},
{id:"cdl",name:"2020 CDL Driving",cat:"other",desc:"Website development and customization.",work:["Details to be added."],tech:[],confirm:true},
{id:"dr",name:"Dr. Restivo",cat:"other",desc:"Website development and customization.",work:["Details to be added."],tech:[],confirm:true},
{id:"cor",name:"Corvantis",cat:"other",desc:"Website development and customization.",work:["Details to be added."],tech:[],confirm:true},
{id:"aur",name:"Aurele",cat:"other",desc:"E-commerce website development and customization.",work:["Details to be added."],tech:[],confirm:true},
{id:"demo",name:"Demo Technologies",cat:"other",desc:"Website development and customization.",work:["Details to be added."],tech:[],confirm:true},
{id:"gv",name:"Global Ventage",cat:"other",desc:"Website development and customization.",work:["Details to be added."],tech:[],confirm:true},
{id:"mm",name:"M&M Bakery",cat:"other",desc:"Website development and customization.",work:["Details to be added."],tech:[],confirm:true},
{id:"bot",name:"AI Discord Bot",cat:"other",desc:"Personal project: a Python Discord bot with AI features, built on Replit.",work:["Commands and AI integration details to be documented."],tech:["Python","AI integration","Replit"],confirm:true},
{id:"music",name:"Music Website",cat:"other",desc:"Web development project with visual content and search functionality.",work:["Stack and features to be documented."],tech:["Web development"],confirm:true}
];
var SKILLS={"E-commerce and CMS":["Shopify","Liquid","Shopify CLI","Admin API","GraphQL","WordPress","Elementor","LearnDash","EComposer"],
"Frontend":["HTML5","CSS3","JavaScript","React","Vue.js","Next.js","Tailwind CSS","Responsive design"],
"Backend":["Node.js","Express.js","Java","Spring Boot","Python","REST APIs"],
"Databases and data":["MongoDB","Mongoose","MySQL","PostgreSQL","SQL","Pandas","NumPy"],
"Security, testing, integrations":["JWT","Google reCAPTCHA v2","Server-side verification","API testing","Automated tests","SMTP email","File uploads"],
"Tools and deployment":["Git","GitHub","Linux","Coolify","Replit","Cursor","FileZilla"]};
