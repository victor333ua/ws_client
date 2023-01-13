export async function* generateMessages() {
    const messages = [
        "let's start",
        "mes 1",
        "mes 2",
        "mes 3",
        "end"
    ];
    for (let mes of messages) {
        await new Promise(resolve => setTimeout(resolve, 5000)); 
        yield mes;   
    }
}