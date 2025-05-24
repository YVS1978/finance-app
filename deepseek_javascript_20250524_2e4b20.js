let balance = 0;
let transactions = [];

function updateBalance() {
    document.getElementById('balance').textContent = balance + ' ₽';
}

function addTransaction(type) {
    const amount = parseFloat(prompt('Введите сумму:'));
    if (isNaN(amount)) return;

    const category = prompt('Введите категорию:');
    if (!category) return;

    const transaction = {
        type,
        amount: type === 'income' ? amount : -amount,
        category,
        date: new Date().toLocaleString()
    };

    transactions.push(transaction);
    balance += transaction.amount;
    updateBalance();
    updateHistory();
}

function updateHistory() {
    const list = document.getElementById('transactions');
    list.innerHTML = '';

    transactions.forEach(t => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${t.category}</span>
            <span style="color: ${t.type === 'income' ? 'green' : 'red'}">
                ${t.type === 'income' ? '+' : ''}${t.amount} ₽
            </span>
        `;
        list.appendChild(li);
    });
}

// Инициализация
updateBalance();