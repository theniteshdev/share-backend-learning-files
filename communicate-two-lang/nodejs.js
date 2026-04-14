import { spawn } from 'node:child_process'

const cpp = spawn("./programme");
cpp.stdin.write("I_am_nodejs");
cpp.stdin.end();

cpp.stdout.on("data", (chnk) => {
    console.log(`Cpp output:: ${chnk.toString()}`)
});

cpp.on("close", (code) => {
    console.log(`File closed with code ${code}`)
})
