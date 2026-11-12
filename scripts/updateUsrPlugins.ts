import { execSync } from "node:child_process";

const sources = [
    { from: "Accentaro/gameSessionSpoofer/gameSessionSpoofer", to: "src/userplugins/gameSessionSpoofer" },
    { from: "LostMorality/cordmuffin/custom-creations/gameTimeSpoof", to: "src/userplugins/gameTimeSpoof" },
    { from: "LostMorality/cordmuffin/custom-creations/streamTimeFarmer", to: "src/userplugins/streamTimeFarmer" },
    { from: "LostMorality/cordmuffin/custom-creations/profileImages", to: "src/userplugins/profileImages" },
    { from: "LostMorality/cordmuffin/custom-creations/badgeTierViewer", to: "src/userplugins/badgeTierViewer" },

];

for (const { from, to } of sources) {
    console.log(`Updating ${to} <- ${from}`);
    execSync(`degit ${from} ${to} --force`, { stdio: "inherit" });
}
