let fs = require('fs');
let program = require('commander');

function list (val) {
  return val.split(',')
}
program
    .option("-p, <items>","config list" ,list)
    .parse(process.argv);
console.log(program,'program')
replaceEnv([
      "./docs/.vuepress/config/config.json",
    ],
    {
      "serverUri": program._optionValues.p[0],
      "GoogleAnalyticsId": program._optionValues.p[1],
      "releaseTime": program._optionValues.p[2],
    }
);


function replaceEnv(files, params) {
  files.forEach(function(file,index){
    let result = fs.readFileSync(file).toString();
    for (let key in params) {
      let r = "\\${"+key+"}";
      result = result.replace(new RegExp(r,"g"), params[key]);
    }
    fs.writeFileSync(file, result)
  });
}
