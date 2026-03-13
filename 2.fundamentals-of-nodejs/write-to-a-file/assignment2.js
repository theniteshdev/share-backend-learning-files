import fs from "node:fs/promises";

// generating file

async function updateTime() {
    const now = new Date()
    let timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    }).padStart(2, "0");

    await fs.writeFile("./time.txt",
        `Time: ${timeString}`
    );
    setTimeout(updateTime, 1000);
}
updateTime();