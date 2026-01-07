# React Todo App

A modern todo application built with React, Vite, and Framer Motion featuring Apple-inspired design.

## Installation

### How to Install Node.js and npm

#### Windows

Recommended method:

1. Go to nodejs.org
2. Download LTS version
3. Install with default settings

Verify installation:
```bash
node -v
npm -v
```

Note: npm comes bundled with Node.js

#### macOS

**Option 1: Official installer**

1. Download LTS from nodejs.org
2. Install the .pkg file

Verify installation:
```bash
node -v
npm -v
```

**Option 2: Homebrew**

```bash
brew install node
```

#### Linux (Pop OS / Ubuntu / Debian)

Recommended: NodeSource

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify installation:
```bash
node -v
npm -v
```

Alternative method:
```bash
sudo apt install nodejs npm
```

## Running the Project

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

The application will be available at http://localhost:5173/

## Features

- Add, edit, and delete tasks
- Mark tasks as complete
- Live statistics (Total, Pending, Completed)
- Smooth animations with Framer Motion
- Apple-style dark theme design
- Responsive layout

## Technologies

- React 18
- Vite
- Framer Motion
- CSS3
