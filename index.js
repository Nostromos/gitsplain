import OpenAI from 'openai';
import { Octokit, App } from "octokit";
import 'dotenv/config';
import { writeFile as fsWriteFile, readFile as fsReadFile } from 'node:fs/promises';

const PATH = "";

export async function pullTheRepo() {
  try {
    const ok = await OctokitInit()
    const openai = await OpenAIInit()
  } catch (err) {
    console.error(err)
    return err;
  }
}

async function OctokitInit() {
  const ok = new Octokit({ auth: process.env.GH_AUTH })

  return ok;
}

async function OpenAIInit() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_AUTH
  })

  // const response = await openai.responses.create({
  //   model: 'gpt-4o',
  //   instructions: 'You are a documentation generator tool for SaaS companies. I will send you a link and you must parse it and return with documentation generated.',
  //   input: "https://raw.githubusercontent.com/openai/openai-node/refs/heads/master/src/core/streaming.ts"
  // })
  // console.log(response.output_text)
  return openai;
}

async function saveFile(url, destPath) {
  url = "https://raw.githubusercontent.com/openai/openai-node/refs/heads/master/src/core/streaming.ts";
  const response = await fetch(url, { timeout: 10_000 })

  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  const text = await response.text()
  await fsWriteFile("./streaming.ts", text);
}

async function loadFile(path) {
  const CODE = await fsReadFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return;
    }
    // return data
  })
  return CODE
}

async function getPackageJSON() {
  const url = "https://raw.githubusercontent.com/Nostromos/dotProject/refs/heads/main/package.json"

  const response = await fetch(url, { timeout: 10_000 });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  console.log(response)
  const text = await response.text()
  console.log(text);
}

getPackageJSON()

// pullTheRepo();
// const URL = "https://raw.githubusercontent.com/openai/openai-node/refs/heads/master/src/core/streaming.ts"
// const DPATH = "./streaming.ts";
// saveFile(URL, DPATH);
// const CODE = await loadFile(DPATH)

// const openai = await OpenAIInit()

// const RESPONSE = await openai.responses.create({
//   model: "o3-mini",
//   instructions: "You're a tool for b2b saas companies to add documentation to their code. Please only return the commented code and no commentary beyond the comments themselves.",
//   input: CODE
// })
// // const parsed = JSON.parse(RESPONSE.output[1].content[0].text)
// // const stringified = JSON.stringify(RESPONSE.output[1].content[0])
// await fsWriteFile("./streaming.ts", RESPONSE.output[1].content[0].text, "utf8")

// console.log(RESPONSE.output)