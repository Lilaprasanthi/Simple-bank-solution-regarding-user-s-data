let accounts = [];

function showSection(section) {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content

    switch (section) {
        case "createAccount":
            content.innerHTML = `
                <h2>Create Account</h2>
                <label>Account Number:</label>
                <input type="number" id="createAccNumber" placeholder="Enter Account Number">
                <label>Account Holder Name:</label>
                <input type="text" id="createAccName" placeholder="Enter Account Holder Name">
                <button onclick="createAccount()">Submit</button>
            `;
            break;

        case "deposit":
            content.innerHTML = `
                <h2>Deposit Money</h2>
                <label>Account Number:</label>
                <input type="number" id="depositAccNumber" placeholder="Enter Account Number">
                <label>Amount:</label>
                <input type="number" id="depositAmount" placeholder="Enter Amount">
                <button onclick="deposit()">Submit</button>
            `;
            break;

        case "withdraw":
            content.innerHTML = `
                <h2>Withdraw Money</h2>
                <label>Account Number:</label>
                <input type="number" id="withdrawAccNumber" placeholder="Enter Account Number">
                <label>Amount:</label>
                <input type="number" id="withdrawAmount" placeholder="Enter Amount">
                <button onclick="withdraw()">Submit</button>
            `;
            break;

        case "viewBalance":
            content.innerHTML = `
                <h2>View Balance</h2>
                <label>Account Number:</label>
                <input type="number" id="viewAccNumber" placeholder="Enter Account Number">
                <button onclick="viewBalance()">Submit</button>
            `;
            break;

        case "transfer":
            content.innerHTML = `
                <h2>Transfer Money</h2>
                <label>Sender Account Number:</label>
                <input type="number" id="senderAccNumber" placeholder="Enter Sender Account Number">
                <label>Recipient Account Number:</label>
                <input type="number" id="recipientAccNumber" placeholder="Enter Recipient Account Number">
                <label>Amount:</label>
                <input type="number" id="transferAmount" placeholder="Enter Amount">
                <button onclick="transfer()">Submit</button>
            `;
            break;

        case "deleteAccount":
            content.innerHTML = `
                <h2>Delete Account</h2>
                <label>Account Number:</label>
                <input type="number" id="deleteAccNumber" placeholder="Enter Account Number">
                <button onclick="deleteAccount()">Submit</button>
            `;
            break;

        case "activeUsers":
            content.innerHTML = `
                <h2>Number of Active Users</h2>
                <p>Active Users: ${accounts.length}</p>
            `;
            break;

        default:
            content.innerHTML = `<p>Select an option from the menu.</p>`;
            break;
    }
}

function createAccount() {
    const accNumber = document.getElementById("createAccNumber").value;
    const accHolderName = document.getElementById("createAccName").value;

    if (accNumber && accHolderName) {
        accounts.push({ accountNumber: accNumber, accountHolderName: accHolderName, balance: 0 });
        alert("Account created successfully!");
    } else {
        alert("Please fill in all fields.");
    }
}

function deposit() {
    const accNumber = document.getElementById("depositAccNumber").value;
    const amount = parseFloat(document.getElementById("depositAmount").value);

    const account = accounts.find(acc => acc.accountNumber === accNumber);
    if (account && amount > 0) {
        account.balance += amount;
        alert(`Deposited ${amount} successfully!`);
    } else {
        alert("Invalid account number or amount.");
    }
}

function withdraw() {
    const accNumber = document.getElementById("withdrawAccNumber").value;
    const amount = parseFloat(document.getElementById("withdrawAmount").value);

    const account = accounts.find(acc => acc.accountNumber === accNumber);
    if (account && amount > 0) {
        if (account.balance >= amount) {
            account.balance -= amount;
            alert(`Withdrew ${amount} successfully!`);
        } else {
            alert("Insufficient balance.");
        }
    } else {
        alert("Invalid account number or amount.");
    }
}

function viewBalance() {
    const accNumber = document.getElementById("viewAccNumber").value;

    const account = accounts.find(acc => acc.accountNumber === accNumber);
    if (account) {
        alert(`Account Holder: ${account.accountHolderName}\nBalance: ${account.balance}`);
    } else {
        alert("Account not found.");
    }
}

function transfer() {
    const senderAccNumber = document.getElementById("senderAccNumber").value;
    const recipientAccNumber = document.getElementById("recipientAccNumber").value;
    const amount = parseFloat(document.getElementById("transferAmount").value);

    const senderAccount = accounts.find(acc => acc.accountNumber === senderAccNumber);
    const recipientAccount = accounts.find(acc => acc.accountNumber === recipientAccNumber);

    if (senderAccount && recipientAccount && amount > 0) {
        if (senderAccount.balance >= amount) {
            senderAccount.balance -= amount;
            recipientAccount.balance += amount;
            alert(`Transferred ${amount} successfully!`);
        } else {
            alert("Insufficient balance in sender's account.");
        }
    } else {
        alert("Invalid account numbers or amount.");
    }
}

function deleteAccount() {
    const accNumber = document.getElementById("deleteAccNumber").value;

    const index = accounts.findIndex(acc => acc.accountNumber === accNumber);
    if (index !== -1) {
        accounts.splice(index, 1);
        alert("Account deleted successfully!");
    } else {
        alert("Account not found.");
    }
}
