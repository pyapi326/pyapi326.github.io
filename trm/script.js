// 下载功能
document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'ui.zip';
    link.download = 'ui.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// 语言切换功能
const langBtn = document.getElementById('langBtn');
const elements = {
    title: document.getElementById('title'),
    downloadBtn: document.getElementById('downloadBtn')
};

langBtn.addEventListener('click', function() {
    if (langBtn.textContent === '切换到英文') {
        // 切换为英文
        elements.title.textContent = 'Time Region Modifier';
        elements.downloadBtn.textContent = 'Download Code';
        langBtn.textContent = 'Switch to Chinese';
    } else {
        // 切换为中文
        elements.title.textContent = '时间地区修改器';
        elements.downloadBtn.textContent = '下载代码';
        langBtn.textContent = '切换到英文';
    }
});