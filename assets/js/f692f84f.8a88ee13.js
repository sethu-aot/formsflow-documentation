"use strict";(self.webpackChunkwebsite_1=self.webpackChunkwebsite_1||[]).push([[406],{5623:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(4848),t=n(8453);const l={sidebar_position:1},r="Installation of Formsflow.ai on Linux",o={id:"linux",title:"Installation of Formsflow.ai on Linux",description:"Prerequisites",source:"@site/docs/linux.md",sourceDirName:".",slug:"/linux",permalink:"/formsflow-documentation/linux",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation of Formsflow.ai on windows",permalink:"/formsflow-documentation/windows"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Download the GitHub Repository",id:"step-1-download-the-github-repository",level:2},{value:"Step 2: Extract the downloaded .zip file",id:"step-2-extract-the-downloaded-zip-file",level:2},{value:"Step 3: Install using install.bash file",id:"step-3-install-using-installbash-file",level:2},{value:"Step 4: Mail-Configuration",id:"step-4-mail-configuration",level:2},{value:"Verifying the Installation status",id:"verifying-the-installation-status",level:2},{value:"Uninstall Formsflow",id:"uninstall-formsflow",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"installation-of-formsflowai-on-linux",children:"Installation of Formsflow.ai on Linux"})}),"\n",(0,i.jsx)(s.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.docker.com/desktop/install/linux/",children:"Docker"})," needs to be installed andd running"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"step-1-download-the-github-repository",children:"Step 1: Download the GitHub Repository"}),"\n",(0,i.jsxs)(s.p,{children:["In this initial step, download the ",(0,i.jsx)(s.strong,{children:"Forms Flow AI Deployment"})," GitHub repository by simply clicking ",(0,i.jsx)(s.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-deployment/archive/refs/heads/main.zip",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Here"})})})]}),"\n",(0,i.jsx)(s.p,{children:"A zip file will be downloaded."}),"\n",(0,i.jsx)(s.h2,{id:"step-2-extract-the-downloaded-zip-file",children:"Step 2: Extract the downloaded .zip file"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"extracted folder preview",src:n(2600).A+"",width:"1856",height:"1007"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:["Now double click and open the exctracted folder and go to the ",(0,i.jsx)(s.code,{children:"scripts"})," directory:"]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"scripts dir preview",src:n(4382).A+"",width:"1856",height:"1007"})}),"\n",(0,i.jsxs)(s.p,{children:["There you can see  ",(0,i.jsx)(s.strong,{children:"install.bash"})," file:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"install file preview",src:n(8250).A+"",width:"1856",height:"1007"})}),"\n",(0,i.jsxs)(s.p,{children:["Now right click anywhere in the file manager  and click ",(0,i.jsx)(s.strong,{children:"open in terminal"}),":"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:".bat file preview",src:n(63).A+"",width:"1856",height:"1007"})}),"\n",(0,i.jsxs)(s.p,{children:["Now type ",(0,i.jsx)(s.code,{children:"sudo su"})," in the terminal to gain elevated privilages whcih is required for the installation procedure:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"sudo permissions",src:n(7148).A+"",width:"1856",height:"1007"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["You can type ",(0,i.jsx)(s.code,{children:"ls"})," to see the ",(0,i.jsx)(s.strong,{children:"install.sh"})," file there"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"step-3-install-using-installbash-file",children:"Step 3: Install using install.bash file"}),"\n",(0,i.jsxs)(s.p,{children:["Type ",(0,i.jsx)(s.code,{children:"./install.sh"})," to start the installation:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["It may ask for ",(0,i.jsx)(s.strong,{children:"Do you want to continue"})," because it may not tested in the Docker version you have. Just enter ",(0,i.jsx)(s.strong,{children:"'y'"})," and proceed with the installation."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"installation start",src:n(1093).A+"",width:"1856",height:"1007"})}),"\n",(0,i.jsx)(s.p,{children:"a) The installation starts with the following question:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Redash analytics prompt",src:n(237).A+"",width:"1856",height:"1007"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["If you need Redash Analytics Engine in the installation, provide ",(0,i.jsx)(s.strong,{children:"\u2018y\u2019"})," as the answer, or else answer ",(0,i.jsx)(s.strong,{children:"\u2018n\u2019"}),". (To know more about Redash Analytics Engine, please visit ",(0,i.jsx)(s.a,{href:"https://redash.io/help/",children:"Redash"})," )."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["b) Verify the IP address is valid or incorrect after that. If true, provide ",(0,i.jsx)(s.strong,{children:"\u2018y\u2019"})," as the answer, or else answer ",(0,i.jsx)(s.strong,{children:"\u2018n\u2019"}),":"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"IP Address prompt",src:n(2923).A+"",width:"1856",height:"1007"})}),"\n",(0,i.jsxs)(s.p,{children:["c) Now it will ask to install ",(0,i.jsx)(s.strong,{children:"formsflow data analysis"})," api in the installation. Chose ",(0,i.jsx)(s.strong,{children:"'y'"})," or ",(0,i.jsx)(s.strong,{children:"'n'"})," according to your preference:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"formsflow data analysis api prompt",src:n(2838).A+"",width:"1856",height:"1007"})}),"\n",(0,i.jsxs)(s.p,{children:["d) Once the installation is complete, the command prompt displays the ",(0,i.jsx)(s.strong,{children:"formsflow.ai is successfully installed"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"step-4-mail-configuration",children:"Step 4: Mail-Configuration"}),"\n",(0,i.jsxs)(s.p,{children:["For the ",(0,i.jsx)(s.strong,{children:"email-configuration"}),", follow the steps below:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"configuration folder",src:n(8730).A+"",width:"1616",height:"1049"})}),"\n",(0,i.jsxs)(s.p,{children:["Create a folder inside the configuration folder(Inside docker-compose directory) named ",(0,i.jsx)(s.strong,{children:"bpm-mail-config"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"mail configuration file",src:n(1064).A+"",width:"1616",height:"1049"})}),"\n",(0,i.jsxs)(s.p,{children:["Create a file name ",(0,i.jsx)(s.strong,{children:"mail.config.properties"})," inside the ",(0,i.jsx)(s.strong,{children:"bpm-mail-config"})," folder that just created and copy the below contents and update the values as needed:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"# Send mails via SMTP. The given settings are for Gmail \r\nmail.transport.protocol=smtp\r\n\r\nmail.smtp.host=smtp.gmail.com\r\nmail.smtp.port=465\r\nmail.smtp.auth=true\r\nmail.smtp.ssl.enable=true\r\nmail.smtp.socketFactory.port=465\r\nmail.smtp.socketFactory.class=javax.net.ssl.SSLSocketFactory\r\n\r\n# Poll mails via IMAPS.\r\nmail.store.protocol=imaps\r\nmail.imaps.host=imap.gmail.com\r\nmail.imaps.port=993\r\nmail.imaps.timeout=10000\r\n\r\nmail.sender=donotreply\r\nmail.sender.alias=DoNotReply\r\n\r\nmail.attachment.download=true\r\nmail.attachment.path=attachments\r\n\r\n# Credentials\r\nmail.user=CHANGEME@gmail.com\r\nmail.password=CHANGEME\r\n\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Now run the container to verify the changes."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"verifying-the-installation-status",children:"Verifying the Installation status"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"The following applications will be started and can be accessed in your browser."}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Srl No"}),(0,i.jsx)(s.th,{children:"Service Name"}),(0,i.jsx)(s.th,{children:"Usage"}),(0,i.jsx)(s.th,{children:"Access"}),(0,i.jsx)(s.th,{children:"Default credentials (userName / Password)"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Keycloak"})}),(0,i.jsx)(s.td,{children:"Authentication"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"http://localhost:8080"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"admin/changeme"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"2"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"forms-flow-forms"})}),(0,i.jsx)(s.td,{children:"form.io form building. This must be started earlier for resource role id's creation"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"http://localhost:3001"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"admin@example.com/changeme"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"3"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"forms-flow-analytics"})}),(0,i.jsx)(s.td,{children:"Redash analytics server, This must be started earlier for redash key creation"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"http://localhost:7001"})}),(0,i.jsxs)(s.td,{children:["Use the credentials used for registration / ",(0,i.jsx)(s.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-deployment/blob/main/docs/forms-flow-ai-properties.md",children:"Default user credentials"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"4"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"forms-flow-web"})}),(0,i.jsx)(s.td,{children:"formsflow Landing web app"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"http://localhost:3000"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-deployment/blob/main/docs/forms-flow-ai-properties.md",children:"Default user credentials"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"5"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"forms-flow-api"})}),(0,i.jsx)(s.td,{children:"API services"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"http://localhost:5001"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Authorization tocken from keycloak role based user credentials"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"6"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"forms-flow-bpm"})}),(0,i.jsx)(s.td,{children:"Camunda integration"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"http://localhost:8000/camunda"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai-deployment/blob/main/docs/forms-flow-ai-properties.md",children:"Default user credentials"})})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"uninstall-formsflow",children:"Uninstall Formsflow"}),"\n",(0,i.jsx)(s.p,{children:"To uninstall formsflow installed through quick installation, follow the steps:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Go to the folder you exctracted earlier and go to the ",(0,i.jsx)(s.code,{children:"scripts"})," directory","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["There you can see ",(0,i.jsx)(s.strong,{children:"uninstall.bash"})," file"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Now right click anywhere in the file manager  and click ",(0,i.jsx)(s.strong,{children:"open in terminal"}),":"]}),"\n",(0,i.jsxs)(s.li,{children:["Type ",(0,i.jsx)(s.code,{children:"chmod +x uninstall.bash"})," to give executable permission to the file","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["If you type ",(0,i.jsx)(s.code,{children:"ls"})," you can see the uninstall.bash in green color means it has now executable permission"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Now just type ",(0,i.jsx)(s.code,{children:"./uninstall.bash"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["It will prompt you ",(0,i.jsx)(s.strong,{children:"to uninstall formsflow.ai installation"})," click ",(0,i.jsx)(s.strong,{children:"'y'"})," and proceed with the installation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"uninstall formsflow",src:n(7174).A+"",width:"1333",height:"478"})}),"\n",(0,i.jsxs)(s.p,{children:["If you face any issues while installing ,please connect with ",(0,i.jsx)(s.a,{href:"https://github.com/AOT-Technologies/forms-flow-ai/issues",children:"us"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},237:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/analytics-prompt-8ff61a1bead3d74f2f65639cc355d8f0.png"},8730:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/config-dir-ac3b362f01edc79ab08ddb745e1735d9.png"},1064:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/config-550b6b29f7cfdbd30b7c780b900f398c.png"},2600:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/extracted-74727f8cbaac9fe6e31d908eaf61a145.png"},2838:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/formsflow-analytics-api-prompt-a7f0d40e14995c85ea58f89aab2fa5a0.png"},8250:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/install-file-02b4d8ba798e38471f7cc5817cda0226.png"},1093:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/installation-start-f74624a332a9aa5fbb2975d7bab6879d.png"},2923:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/ip-address-prompt-d18c1150959dfc908f1eaf2fc6b5af93.png"},63:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/open-in-terminal-8ba6dabc52f0cd136cf2cc6e0a776f4a.png"},4382:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/scripts-dir-aa2127e1ffe230ed1b16076d206a72ee.png"},7148:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/sudo-su-0bdebc89c42227b172c1f8ce088a784a.png"},7174:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/uninstall-9e5b4e0530c69f86f6a0b028906c909a.png"},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var i=n(6540);const t={},l=i.createContext(t);function r(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);