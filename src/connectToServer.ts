export const connectToServer = (): Promise<WebSocket> => {
    const ws = new WebSocket('ws://localhost:4000/ws');
    ws.onerror = (event) => console.log(event);
    ws.onopen = () => { 
        console.log('connected');
    }; 
    return new Promise(resolve => {
        const timer = setInterval(() => {
            if (ws.readyState === 1) {
                resolve(ws);
                clearInterval(timer);
            }
        }, 10);
    })
}