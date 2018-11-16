const Web3 = require('web3');
const web3 = new Web3('ws://localhost:4445/websocket');

const subscribe = () => {

    // Trying to subscribe
    const subscription = web3.eth.subscribe(
        'newBlockHeaders',
        (err, blockHeader, sub, existingReceipt) => {
    
            if (err) {
    
                console.log('Error:', err.message);
                return;
            }
    
            console.log('blockHeader:', blockHeader);
            
            subscription.unsubscribe(() => {
                
                console.log('Successfully unsubscribed!');
                web3.currentProvider.connection.close();
            });
        });
}

// Listen for all availbale events
web3.currentProvider.on('error', evt => console.log('Provider error:', evt));
web3.currentProvider.on('end', evt => console.log('Connection end', evt));
web3.currentProvider.on('close', evt => console.log('Connection closed:', evt));

if (web3.currentProvider.connection.readyState !== web3.currentProvider.connection.CONNECTED) {

    web3.currentProvider.on('connect', subscribe);
} else {

    subscribe();
}
