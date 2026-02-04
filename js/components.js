/**
 * Component Rendering Functions
 * Uses SVG icons instead of emojis for professional look
 */

// SVG Icon Map
const iconMap = {
    // Skills icons
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"></polyline><polyline points="8,6 2,12 8,18"></polyline></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    terminal: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,17 10,11 4,5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,

    // Achievement icons
    trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>`,
    award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>`,
    certificate: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"></rect><path d="M8 10h8"></path><path d="M8 14h4"></path><circle cx="17" cy="18" r="3"></circle><path d="M17 21v-3"></path></svg>`,
    graduation: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,

    // Contact icons
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`
};

// Get icon HTML
function getIcon(iconName) {
    return iconMap[iconName] || iconName;
}

// Render Skill Cards
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid || typeof skillsData === 'undefined') return;

    grid.innerHTML = skillsData.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${getIcon(skill.icon)}</div>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
            <div class="skill-tags">
                ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Generate project card HTML (shared helper)
function createProjectCardHTML(project, extraClass = '') {
    return `
        <div class="project-card${extraClass ? ' ' + extraClass : ''}">
            <div class="project-image">
                ${project.image
            ? `<img src="${project.image}" alt="${project.title}">`
            : `<span class="project-placeholder-icon">${getIcon('code')}</span>`}
            </div>
            <div class="project-content">
                ${project.achievement ? `<span class="project-badge">${project.achievement}</span>` : ''}
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link">Live Demo</a>` : ''}
                    ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" class="project-link">View Code</a>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Render Featured Project Cards (for homepage)
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid || typeof projectsData === 'undefined') return;

    const featuredProjects = projectsData.filter(p => p.featured);
    grid.innerHTML = featuredProjects.map(p => createProjectCardHTML(p)).join('');
}

// Render All Project Cards (for projects page)
function renderAllProjects() {
    const grid = document.getElementById('allProjectsGrid');
    if (!grid || typeof projectsData === 'undefined') return;

    grid.innerHTML = projectsData.map(p => createProjectCardHTML(p, 'project-card-detailed')).join('');
}

// Render Timeline Achievements
function renderAchievements() {
    const timeline = document.getElementById('achievementsTimeline');
    if (!timeline || typeof achievementsData === 'undefined') return;

    timeline.innerHTML = achievementsData.map(achievement => `
        <div class="timeline-item">
            <div class="timeline-content">
                <div class="timeline-icon">${getIcon(achievement.icon)}</div>
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
                ${achievement.date ? `<span class="timeline-date">${achievement.date}</span>` : ''}
            </div>
        </div>
    `).join('');

    initTimelineAnimations();
}

// Initialize Timeline Scroll Animations
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineItems.length === 0) return;

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// Initialize all components
function initComponents() {
    renderSkills();
    renderProjects();
    renderAllProjects();
    renderAchievements();
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', initComponents);
