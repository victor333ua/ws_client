import { connectToServer } from "./connectToServer";

const element = document.createElement('div');
document.body.appendChild(element);

(async () => {
    const ws = await connectToServer();
    ws.onopen = (event) =>  element.innerHTML = `<h3>connected</>`; 
    ws.onmessage = (event) => {
        element.innerHTML = `<h3>${event.data}</>`; 
    }
})();

