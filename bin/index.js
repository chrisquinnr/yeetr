#!/usr/bin/env node

const program = require('commander')

const list = require('../lib/list')
const serve = require('../lib/serve')
inquirer.registerPrompt('autocomplete', require('./index'))

/*******************************************/

// Print coffee drinks menu
// $ coffee-shop list
// $ coffee-shop ls
program
  .command('list <dir>') // sub-command name
  .alias('ls') // alternative sub-command is `al`
  .description('List files') // command description

  // function to execute when command is uses
  .action((dir) => {
    list(dir)
  })

// Order a coffee
// $ coffee-shop order
// $ coffee-shop o
program
  .command('serve <dir>') // sub-command name
  .alias('s') // alternative sub-command is `o`
  .description('Serve a fille') // command description

  // function to execute when command is uses
  .action((dir) => {
    serve(list(dir))
  })

// allow commander to parse `process.argv`
program.parse(process.argv)

// #!/usr/bin/env node
// const program = require('commander');
// const ver = require('../lib/ver');

// program
//   .command('go <dir>')
//   .alias('g')
//   .description('Serve a file.')
//   .action(dir => {
//     const chalk = require('chalk');
//     const log = console.log;

//     // Combine styled and normal strings
//     log(chalk.blue('Hello') + ' World' + chalk.red('!'));

//     const fs = require('fs')

//     const files = fs.readdirSync(dir)

//     for (const file of files) {
//       console.log(file)
//     }
//     // // Compose multiple styles using the chainable API
//     // log(chalk.blue.bgRed.bold('Hello world!'));

//     // // Pass in multiple arguments
//     // log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

//     // // Nest styles
//     // log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

//     // // Nest styles of the same type even (color, underline, background)
//     // log(chalk.green(
//     //   'I am a green line ' +
//     //   chalk.blue.underline.bold('with a blue substring') +
//     //   ' that becomes green again!'
//     // ));
//   })

// program.parse(process.argv)
