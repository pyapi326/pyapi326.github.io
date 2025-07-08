document.addEventListener('DOMContentLoaded', function() {
    // 初始语言设置
    let currentLang = 'zh';
    
    // 文本翻译映射
    const translations = {
        zh: {
            title: 'pyapi326的网站官网',
            github: '访问GitHub',
            projects: '我的项目'
        },
        en: {
            title: 'pyapi326 Official Website',
            github: 'Visit GitHub',
            projects: 'My Projects'
        }
    };
    
    // 获取DOM元素
    const titleElement = document.getElementById('title');
    const githubLink = document.getElementById('github-link');
    const projectsContainer = document.getElementById('projects-container');
    
    // 加载项目数据
    function loadProjects() {
        // 嵌入项目数据 (替代JSON文件加载)
        const projects = [
            {
                "name": "zipapi",
                "url": "https://pyapi326.github.io/zipapi/"
            }
        ];

        // 清空容器
        projectsContainer.innerHTML = `<h2>${translations[currentLang].projects}</h2>`;
        
        // 添加项目
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-item';
            projectElement.textContent = project.name;
            projectElement.onclick = function() {
                window.location.href = project.url;
            };
            projectsContainer.appendChild(projectElement);
        });
    }
    
    // 切换语言
    function changeLanguage(lang) {
        currentLang = lang;
        titleElement.textContent = translations[lang].title;
        githubLink.textContent = translations[lang].github;
        loadProjects(); // 刷新项目列表标题
    }
    
    // 绑定按钮事件
    document.getElementById('chinese-btn').addEventListener('click', () => changeLanguage('zh'));
    document.getElementById('english-btn').addEventListener('click', () => changeLanguage('en'));
    
    // 初始化页面
    loadProjects();
});