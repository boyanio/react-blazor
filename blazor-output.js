const { promisify } = require('util');
const fs = require('fs');
const rimraf = require('rimraf');
const { ncp } = require('ncp');

const fsAsync = ['exists', 'mkdir']
  .reduce((value, func) => Object.assign(value, { [func]: promisify(fs[func]) }), {});
const rimrafAsync = promisify(rimraf);
const ncpAsync = promisify(ncp);

const run = async (buildConfiguration) => {
  const buildDir = `${__dirname}/build/apps/blazor`;

  if (await fsAsync.exists(buildDir)) {
    await rimrafAsync(buildDir);
  }

  await fsAsync.mkdir(buildDir, { recursive: true });

  const publishDir = `${__dirname}/src/blazor/bin/${buildConfiguration}/net5.0/publish/wwwroot`;
  await ncpAsync(`${publishDir}/_framework`, `${buildDir}/_framework`);
};


const buildConfiguration = process.argv.length > 2 ? process.argv[2] : 'Release';
run(buildConfiguration);