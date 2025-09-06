//   ///////// ASSIGNMENT_1///////////////////////////


//   let ctr = 0;
// function callback(){
//     const el = document.querySelectorAll("h4")[0].innerHTML = ctr
//     // el.innerHTML = ctr;
//     // console.log(ctr);
//     ctr = ctr + 1;
    
// }

// setInterval(callback, 1000);


const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.parse();


////  Every promise is a thenable 

/// Every thenable is not a promise