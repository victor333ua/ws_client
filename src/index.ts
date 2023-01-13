import { connectToServer } from "./connectToServer";
import { generateMessages } from "./messages";

(async () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.innerHTML = `<span>connecting</span>`;
    
    const ws = await connectToServer();
    element.innerHTML = `<h3>connected</h3>` 

    ws.onmessage = (event) => {
        element.innerHTML = `<h3>${event.data}</h3>`; 
    }

    const gen = generateMessages();
    for await (let mes of gen) {
        ws.send(mes);
    }
})();

