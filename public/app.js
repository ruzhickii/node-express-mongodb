document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('usd-USD', {
        currency: 'usd',
        style: 'currency'
    }).format(node.textContent);
});

