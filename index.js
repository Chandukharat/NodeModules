const fs = require('fs')
const yargs = require('yargs')

yargs.command({
    command : 'add',
    describe : 'add a new file',
    handler : function(argv){
        fs.writeFileSync('chandu.txt',`my name is  ${argv.name}`)
    }
})

yargs.parse();

const data= fs.readFileSync('chandu.txt','utf8')

console.log(data);

fs.appendFileSync('chandu.txt','i am updating my info')
