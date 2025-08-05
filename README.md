<p align="center">
  <img src="https://blog.jakelee.co.uk/assets/images/2024/octocats/trekkie.png" alt="Octocat" width="400" />
</p>
<h1 align="center"><i>Gitsplain</i></h1>

<p align="center">
  <a href="https://nodejs.org"><img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /></a>
  <a href="https://www.javascript.com"><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /></a>
  <a href="https://github.com"><img alt="GitHub API" src="https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://openai.com"><img alt="OpenAI" src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" /></a>
</p>

## Overview

A Node.js project for fetching GitHub repository files and automatically generating code documentation using AI. This tool demonstrates integration with GitHub's API (via Octokit) and OpenAI's API to parse code files and add intelligent documentation.

## Features

- **GitHub Integration**: Fetch files directly from GitHub repositories using Octokit
- **AI-Powered Documentation**: Generate code comments and documentation using OpenAI models
- **File Processing**: Download and save remote files locally for processing
- **Automated Code Commenting**: Parse TypeScript/JavaScript files and add comprehensive documentation

## Tech Stack

- **Node.js** - JavaScript runtime (ES modules)
- **Octokit** - GitHub API client
- **OpenAI API** - AI-powered documentation generation
- **dotenv** - Environment variable management

## Requirements

- Node.js 18.0 or higher

## Installation

1. Clone the repository:
```bash
git clone https://github.com/nostromos/gitsplain.git
cd gitsplain
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your API keys:
```env
GH_AUTH=your_github_token
OPENAI_AUTH=your_openai_api_key
```

## Usage

The project includes several utility functions:

- `pullTheRepo()` - Initialize Octokit and OpenAI clients
- `saveFile(url, destPath)` - Download files from GitHub raw URLs
- `loadFile(path)` - Read local files for processing
- `getPackageJSON()` - Fetch and parse package.json from remote repositories

### Example Usage

```javascript
// Fetch a file from GitHub
const url = "https://raw.githubusercontent.com/openai/openai-node/refs/heads/master/src/core/streaming.ts";
await saveFile(url, "./streaming.ts");

// Load and process with AI
const code = await loadFile("./streaming.ts");
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: `Add documentation to: ${code}` }]
});
```

## Project Structure

```
gitsplain/
├── index.js          # Main application file
├── streaming.ts      # Example processed TypeScript file with AI-generated docs
├── chatlog.json      # Chat/processing logs
├── package.json      # Project configuration
├── package-lock.json # Dependency lock file
├── image.png         # Project image
└── README.md         # Project documentation
```

## Development

Run the main script:
```bash
node index.js
```

## License

MIT - See [LICENSE](./LICENSE) for details

## Author

[Michael Monaghan](mailto:michael@monaghan.nyc)