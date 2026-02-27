const violators = [
    { name: "ami", count: 1, reason: "汙辱管理員和成員" },
    { name: "58貓貓", count: 1, reason: "加入違規者" },
    { name: "芊茵", count: 1, reason: "加入兩位違規者" }
    // 你可以在這裡測試增加 count: 3 看看變紅色的效果
];

const screen = document.getElementById('monitor-screen');

violators.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const isCritical = user.count >= 3;
    const btnClass = isCritical ? 'btn-danger' : 'btn-safe';
    const statusText = isCritical ? 'Critical Level' : 'Warning Level';

    card.innerHTML = `
        <div class="user-info">
            <div class="name">ID: ${user.name}</div>
            <div class="record">違規事項: ${user.reason}</div>
            <div class="record">累積次數: ${user.count}</div>
        </div>
        <button class="btn ${btnClass}">${statusText}</button>
    `;
    screen.appendChild(card);
});