#!/usr/bin/env node
const { program } = require("commander");
const { scanProject } = require("../src/index");

program 
    .version("1.0.0")
    .description("🌱 Code Gardener - Unused Code Detector")
    .option("-d, --dry-run","Preview unused code without deleting")
    .parse(process.argv);

const options = program.opts();
scanProject(options); 