#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const prompts = require('prompts');

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error('Usage: npm create-html-webapp <app-name>');
  process.exit(1);
}

const appName = args[0];
const appPath = path.join(process.cwd(), appName);

const questions = [
  {
    type: 'select',
    name: 'iconPack',
    message: 'Which icon pack would you like to use?',
    choices: [
      { title: 'None', value: 'none' },
      { title: 'Remixicon', value: 'remixicon' },
      { title: 'Material Icons', value: 'material-icons' },
      { title: 'Font Awesome', value: 'font-awesome' },
      { title: 'Bootstrap Icons', value: 'bootstrap-icons' },
      { title: 'Ionicons', value: 'ion-icons' }
    ],
    initial: 0
  },
  {
    type: 'select',
    name: 'cssFramework',
    message: 'Which CSS framework would you like to use?',
    choices: [
      { title: 'None', value: 'none' },
      { title: 'Bootstrap', value: 'bootstrap' },
      { title: 'Bulma', value: 'bulma' },
      { title: 'Tailwind', value: 'tailwind' },
      { title: 'Foundation', value: 'foundation' }
    ],
    initial: 0
  }
];
  
  let iconIntegration = '';
  let iconFramWorkCss = '';
  let iconAutoSetup = '';
  let iconCustomization = '';
  let iconPackName = '';
function getIconPackCDN(iconPack) {
  let cdnLink = '';
  
  

  switch (iconPack) {
    case 'remixicon':
      cdnLink = '<link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />';
      iconPackName = iconPack;
      iconIntegration = '<i class="ri-remixicon-line"></i>';
      iconFramWorkCss = '<i class="ri-css3-fill"></i>';
      iconAutoSetup = '<i class="ri-magic-line"></i>';
      iconCustomization = '<i class="ri-tools-line"></i>';
      break;
    case 'material-icons':
      cdnLink = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <style>
      .material-symbols-outlined {
        font-variation-settings:
        'FILL' 1, /* 0 for outlined and 1 for filled style */
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
      }
      </style>`;
      iconPackName = iconPack;
      iconIntegration = '<span class="material-symbols-outlined">layers</span>';
      iconFramWorkCss = '<span class="material-symbols-outlined">css</span>';
      iconAutoSetup = '<span class="material-symbols-outlined">automation</span>';
      iconCustomization = '<span class="material-symbols-outlined">handyman</span>';
      break;
    case 'font-awesome':
      cdnLink = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">';
      iconPackName = iconPack;
      iconIntegration = '<i class="fa-solid fa-font-awesome"></i>';
      iconFramWorkCss = '<i class="fa-brands fa-css3-alt"></i>';
      iconAutoSetup = '<i class="fa-solid fa-wand-magic-sparkles"></i>';
      iconCustomization = '<i class="fa-solid fa-screwdriver-wrench"></i>';
      break;
    case 'bootstrap-icons':
      cdnLink = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" integrity="sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd" crossorigin="anonymous"/>';
      iconPackName = iconPack;
      iconIntegration = '<i class="bi bi-bootstrap"></i>';
      iconFramWorkCss = '<i class="bi bi-filetype-css"></i>';
      iconAutoSetup = '<i class="bi bi-magic"></i>';
      iconCustomization = '<i class="bi bi-tools"></i>';
      break;
    case 'ion-icons':
      cdnLink = '<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>\n<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.js"></script>';
      iconPackName = iconPack;
      iconIntegration = '<ion-icon name="logo-ionic"></ion-icon>';
      iconFramWorkCss = '<ion-icon name="logo-css3"></ion-icon>';
      iconAutoSetup = '<ion-icon name="color-wand-outline"></ion-icon>';
      iconCustomization = '<ion-icon name="construct-outline"></ion-icon>';
      break;
    default:
      break;
  }

  return { cdnLink, iconIntegration, iconFramWorkCss, iconAutoSetup, iconCustomization, iconPackName };
}

function getCSSFrameworkCDN(cssFramework) {
  let cdnLink = '';
  let frameworkHTML = '';
  switch (cssFramework) {
    case 'bootstrap':
      cdnLink = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />';
      frameworkHTML = `
      <div class="container py-4">
        <h1 class="text-center mb-4">Starter Template</h1>
        <h3 class="text-center mb-4">for your ${appName} App with Bootstrap and ${iconPackName}</h3>

        <div class="row">
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                    ${iconIntegration}
                        <h3 class="card-title">Icon Pack Integration</h3>
                        <p class="card-text">Users can choose from multiple popular icon packs (Remixicon, Material Icons, Font Awesome, Bootstrap Icons, Ion Icons) to easily add scalable icons to their web app</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                    ${iconFramWorkCss}
                        <h3 class="card-title">CSS Framework Selection</h3>
                        <p class="card-text">Users can select a CSS framework (Bootstrap, Bulma, Tailwind CSS, Foundation) to rapidly style their web app with pre-defined, responsive CSS classes</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                    ${iconAutoSetup}
                        <h3 class="card-title">Automated Project Setup</h3>
                        <p class="card-text">Automatically sets up a well-structured project directory with essential files like index.html, CSS, JavaScript, and assets directories, providing a ready-to-use template for further development</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                    ${iconCustomization}
                        <h3 class="card-title">Customization and Extendability</h3>
                        <p class="card-text">Easily customizable and extendable; users can modify the generated files and structure according to their specific project requirements, ensuring flexibility in development</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
      break;
    case 'bulma':
      cdnLink = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.1/css/bulma.min.css" />';
      frameworkHTML = `
      <div class="section">
        <h1 class="title has-text-centered">Starter Template</h1>
        <h3 class="subtitle has-text-centered">for your ${appName} App with Bulma and ${iconPackName}</h3>

        <div class="columns is-multiline">
            <div class="column is-6-tablet is-3-desktop">
                <div class="box">
                ${iconIntegration}
                    <h3 class="title is-4">Icon Pack Integration</h3>
                    <p>Users can choose from multiple popular icon packs (Remixicon, Material Icons, Font Awesome, Bootstrap Icons, Ion Icons) to easily add scalable icons to their web app</p>
                </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
                <div class="box">
                ${iconFramWorkCss}
                    <h3 class="title is-4">CSS Framework Selection</h3>
                    <p>Users can select a CSS framework (Bootstrap, Bulma, Tailwind CSS, Foundation) to rapidly style their web app with pre-defined, responsive CSS classes</p>
                </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
                <div class="box">
                ${iconAutoSetup}
                    <h3 class="title is-4">Automated Project Setup</h3>
                    <p>Automatically sets up a well-structured project directory with essential files like index.html, CSS, JavaScript, and assets directories, providing a ready-to-use template for further development</p>
                </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
                <div class="box">
                ${iconCustomization}
                    <h3 class="title is-4">Customization and Extendability</h3>
                    <p>Easily customizable and extendable; users can modify the generated files and structure according to their specific project requirements, ensuring flexibility in development</p>
                </div>
            </div>
        </div>
    </div>
`;
      break;
    case 'tailwind':
      cdnLink = '<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />';
      frameworkHTML = `
      <div class="p-4">
        <h1 class="text-center text-3xl mb-4">Starter Template</h1>
        <h3 class="text-center text-xl mb-8">for your ${appName} App with Tailwind and ${iconPackName}</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="service p-6 border border-gray-300 rounded-lg shadow-md bg-white">
            ${iconIntegration}
                <h3 class="text-lg font-semibold mb-2">Icon Pack Integration</h3>
                <p>Users can choose from multiple popular icon packs (Remixicon, Material Icons, Font Awesome, Bootstrap Icons, Ion Icons) to easily add scalable icons to their web app</p>
            </div>
            <div class="service p-6 border border-gray-300 rounded-lg shadow-md bg-white">
            ${iconFramWorkCss}
                <h3 class="text-lg font-semibold mb-2">CSS Framework Selection</h3>
                <p>Users can select a CSS framework (Bootstrap, Bulma, Tailwind CSS, Foundation) to rapidly style their web app with pre-defined, responsive CSS classes</p>
            </div>
            <div class="service p-6 border border-gray-300 rounded-lg shadow-md bg-white">
            ${iconAutoSetup}
                <h3 class="text-lg font-semibold mb-2">Automated Project Setup</h3>
                <p>Automatically sets up a well-structured project directory with essential files like index.html, CSS, JavaScript, and assets directories, providing a ready-to-use template for further development</p>
            </div>
            <div class="service p-6 border border-gray-300 rounded-lg shadow-md bg-white">
            ${iconCustomization}
                <h3 class="text-lg font-semibold mb-2">Customization and Extendability</h3>
                <p>Easily customizable and extendable; users can modify the generated files and structure according to their specific project requirements, ensuring flexibility in development</p>
            </div>
        </div>
    </div>
`;
      break;
    case 'foundation':
      cdnLink = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.7.4/css/foundation.min.css">';
      frameworkHTML = `
      <div class="grid-container">
        <h1 class="text-center">Starter Template</h1>
        <h3 class="text-center">for your ${appName} App with Foundation and ${iconPackName}</h3>

        <div class="grid-x grid-padding-x small-up-1 medium-up-2 large-up-4">
            <div class="cell">
                <div class="callout">
                ${iconIntegration}
                    <h3>Icon Pack Integration</h3>
                    <p>Users can choose from multiple popular icon packs (Remixicon, Material Icons, Font Awesome, Bootstrap Icons, Ion Icons) to easily add scalable icons to their web app</p>
                </div>
            </div>
            <div class="cell">
                <div class="callout">
                ${iconFramWorkCss}
                    <h3>CSS Framework Selection</h3>
                    <p>Users can select a CSS framework (Bootstrap, Bulma, Tailwind CSS, Foundation) to rapidly style their web app with pre-defined, responsive CSS classes</p>
                </div>
            </div>
            <div class="cell">
                <div class="callout">
                ${iconCustomization}
                    <h3>Automated Project Setup</h3>
                    <p>Automatically sets up a well-structured project directory with essential files like index.html, CSS, JavaScript, and assets directories, providing a ready-to-use template for further development</p>
                </div>
            </div>
            <div class="cell">
                <div class="callout">
                ${iconAutoSetup}
                    <h3>Customization and Extendability</h3>
                    <p>Easily customizable and extendable; users can modify the generated files and structure according to their specific project requirements, ensuring flexibility in development</p>
                </div>
            </div>
        </div>
    </div>
      `;
      break;
    default:
      frameworkHTML = `
      <div style="padding: 1rem;">
        <h1 style="text-align: center;">Starter Template</h1>
        <h3 style="text-align: center;">for your ${appName} App</h3>

        <div class="services" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; justify-content: center;">
            <div class="service" style="text-align: left; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); background-color: white;">
                <h3>Icon Pack Integration</h3>
                <p>Users can choose from multiple popular icon packs (Remixicon, Material Icons, Font Awesome, Bootstrap Icons, Ion Icons) to easily add scalable icons to their web app</p>
            </div>
            <div class="service" style="text-align: left; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); background-color: white;">
                <h3>CSS Framework Selection</h3>
                <p>Users can select a CSS framework (Bootstrap, Bulma, Tailwind CSS, Foundation) to rapidly style their web app with pre-defined, responsive CSS classes</p>
            </div>
            <div class="service" style="text-align: left; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); background-color: white;">
                <h3>Automated Project Setup</h3>
                <p>Automatically sets up a well-structured project directory with essential files like index.html, CSS, JavaScript, and assets directories, providing a ready-to-use template for further development</p>
            </div>
            <div class="service" style="text-align: left; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); background-color: white;">
                <h3>Customization and Extendability</h3>
                <p>Easily customizable and extendable; users can modify the generated files and structure according to their specific project requirements, ensuring flexibility in development</p>
            </div>
        </div>
    </div>
`;
      break;
  }

  return { cdnLink, frameworkHTML };
}

(async () => {
  const answers = await prompts(questions);
  const { cdnLink: iconCDNLink } = getIconPackCDN(answers.iconPack);
  const { cdnLink: cssCDNLink, frameworkHTML } = getCSSFrameworkCDN(answers.cssFramework);

  // Ensure main directory
  fs.ensureDirSync(appPath);

  // Create CSS directory and files
  const cssDir = path.join(appPath, 'css');
  fs.ensureDirSync(cssDir);
  fs.writeFileSync(path.join(cssDir, 'style.css'), `/* Styles for ${appName} */`);
  fs.writeFileSync(path.join(cssDir, 'index.css'), `/* Styles for ${appName} */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 16px;
    scroll-behavior: smooth;
}
body {
    font-family: inherit;
}
input,
button,
textarea {
    border: none;
    outline: none;
    font-family: inherit;
}
button {
    cursor: pointer;
}
textarea {
    resize: vertical;
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
    color: inherit;
}
img {
    max-width: 100%;
    height: auto;
}
img,
svg {
    vertical-align: middle;
}
.container {
    max-width: 1320px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}
/*XXL Devices*/
@media (min-width: 1600px) {
    html {
        font-size: 18px;
    }
}
/*XL Devices*/
@media (max-width: 1399.98px) {
    .container {
        max-width: 1140px;
    }
}
/*Lg Devices*/
@media (max-width: 1199.98px) {
    .container {
        max-width: 960px;
    }
}
/*Md Devices*/
@media (max-width: 991.98px) {
    .container {
        max-width: 720px;
    }
}
/*Sm Devices*/
@media (max-width: 767.98px) {
    html {
        font-size: 15px;
    }
    .container {
        max-width: 540px;
    }
}
/*Xs Devices*/
@media (max-width: 575.98px) {
    html {
        font-size: 14px;
    }
    .container {
        width: 100%;
    }
}
`);

  // Create assets directory and file
  const assetsDir = path.join(appPath, 'assets');
  fs.ensureDirSync(assetsDir);
  fs.writeFileSync(path.join(assetsDir, 'fav.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18.1778L16.6192 16.9222L17.2434 10.1444H9.02648L8.82219 7.88889H17.4477L17.6747 5.67778H6.32535L6.96091 12.3556H14.7806L14.5195 15.2222L12 15.8889L9.48045 15.2222L9.32156 13.3778H7.0517L7.38083 16.9222L12 18.1778ZM3 2H21L19.377 20L12 22L4.62295 20L3 2Z"></path></svg>`);

  // Create JS directory and file
  const jsDir = path.join(appPath, 'js');
  fs.ensureDirSync(jsDir);
  fs.writeFileSync(path.join(jsDir, 'script.js'), `console.log("${appName}");`);

  // Create .gitignore
  fs.writeFileSync(path.join(appPath, '.gitignore'), '');

  // Create index.html
  fs.writeFileSync(path.join(appPath, 'index.html'), `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <meta name="description" content="${appName} description" />
  <title>${appName}</title>
  <link rel="stylesheet" href="css/index.css"/>
  <link rel="stylesheet" href="css/style.css"/>
  ${iconCDNLink}
  ${cssCDNLink}
  <link rel="shortcut icon" type="image/x-icon" href="assets/fav.svg">
  <link rel="manifest" href="manifest.json"/>
</head>
<body>
  <header id="header">
  </header>
  <main>
    <section id="hero">
      ${frameworkHTML}
    </section>
  </main>
  <footer>
  </footer>
  <script src="js/script.js"></script>
</body>
</html>`);

  // Create manifest.json
  fs.writeFileSync(path.join(appPath, 'manifest.json'), `
{ 
  "name": "${appName}", 
  "short_name": "${appName}", 
  "display": "standalone", 
  "background_color": "#ffffff", 
  "theme_color": "#aaaaaa",
  "version": "1.0.0", 
  "scope": "/",
  "start_url": "/", 
  "icons": [ 
    { 
      "src": "assets/fav.svg", 
      "sizes": "36x36", 
      "type": "image/png",
      "purpose": "maskable any"
    }, 
    { 
      "src": "assets/fav.svg", 
      "sizes": "512x512", 
      "type": "image/png",
      "purpose": "maskable any"
    } ]
}
`);

  // Create README.md
  fs.writeFileSync(path.join(appPath, 'README.md'), `# ${appName}

This is a simple HTML app.

## Structure

\`\`\`
${appName}/
├── css/
│   └── style.css
│   └── index.css
├── js/
│   └── script.js
├── assets/
│   └── fav.svg
├── index.html
├── manifest.json
├── .gitignore
└── README.md
\`\`\`

## Usage

Open \`index.html\` in your web browser to view the app.
`);

  console.log(`\n\nSuccessfully created \x1b[35m${appName}\x1b[0m at \x1b[33m${appPath}\x1b[0m\nTo Get more info Visit: \x1b[36mhttps://www.npmjs.com/package/create-html-webapp\x1b[0m`);
})();
