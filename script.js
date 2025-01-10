let users = [];
let auctionItems = [];

function addUser() {
    const username = document.getElementById('username').value;
    if (username) {
        users.push(username);
        alert('User added: ' + username);
        document.getElementById('username').value = '';
    } else {
        alert('Please enter a username.');
    }
}

function placeBid() {
    const item = document.getElementById('item').value;
    const bid = document.getElementById('bid').value;
    if (item && bid) {
        auctionItems.push({ item, bid });
        updateAuctionList();
        document.getElementById('bid').value = '';
    } else {
        alert('Please select an item and enter a bid amount.');
    }
}

function updateAuctionList() {
    const auctionList = document.getElementById('auction-list');
    auctionList.innerHTML = '';
    auctionItems.forEach((auctionItem, index) => {
        const div = document.createElement('div');
        div.className = 'auction-item';
        div.innerHTML = `Item: ${auctionItem.item}, Bid: $${auctionItem.bid}`;
        auctionList.appendChild(div);
    });
}

function showWinner() {
    if (auctionItems.length > 0) {
        const highestBid = auctionItems.reduce((max, item) => item.bid > max.bid ? item : max, auctionItems[0]);
        document.getElementById('winner-name').innerText = `Item: ${highestBid.item}, Bid: $${highestBid.bid}`;
        document.getElementById('winner').style.display = 'block';
    } else {
        alert('No bids placed.');
    }
}

// Start the countdown
showWinnerCountdown();

function updateItemImage() {
    const item = document.getElementById('item').value;
    const itemImage = document.getElementById('item-image');
    itemImage.src = `images/${item}.jpg`;
    itemImage.alt = item.charAt(0).toUpperCase() + item.slice(1);
}
