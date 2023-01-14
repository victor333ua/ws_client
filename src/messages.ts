export async function* generateMessages() {
    const delays = [ 1000, 2000, 3000, 4000 ];
    for (let [ind, delay] of delays.entries()) {
        yield `next message for ${delay} ms`;   
        await new Promise(resolve => setTimeout(resolve, delay)); 
    }
    yield 'end loop';
}