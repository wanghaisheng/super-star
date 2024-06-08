(async () => {
const timer = (t) => new Promise((res) => setTimeout(res, t));
for (let a = 1; a < 1000; a++) {
    const status = await fetch('https://git.new/gitroom');
    console.log('waiting', status.status);
    await timer(10000);
}
})();