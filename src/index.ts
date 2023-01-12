import { connectToServer } from "./connectToServer";

(async () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.innerHTML = `<span>connecting</span>`;
    
    const ws = await connectToServer();
    element.innerHTML = `<h3>connected</h3>` 

    ws.onmessage = (event) => {
        element.innerHTML = `<h3>${event.data}</h3>`; 
    }
})();

