# Create HTML App

`create-html-webapp` is a simple Node.js CLI tool to scaffold a basic HTML app structure.

## Features

- Creates a project directory with the specified name.
- Generates `css`, `js`, and `index.html` files.
- Includes a basic `README.md` file.

## Installation

To use the package without installing globally, use:

```sh
npx create-html-webapp <app-name>
```

To install the package globally, use:

```sh
npm install -g create-html-webapp
```

## Usage

To create a new HTML app, run:

```sh
create-html-webapp <app-name>
```

Replace `<app-name>` with the desired name of your application.

### Example

```sh
create-html-webapp my-html-app
```

This will generate the following structure:

```html
my-app/
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
```
