export const connectToServer = (): Promise<WebSocket> => {
    const ws = new WebSocket('ws://localhost:4000/ws');
    return new Promise(resolve => {
        const timer = setInterval(() => {
            if (ws.readyState === 1) {
                resolve(ws);
                clearInterval(timer);
            }
        }, 10);
    })
}