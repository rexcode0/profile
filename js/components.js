/**
 * Component Rendering Functions
 * These functions generate HTML for each section from the data files
 */

// Render Skill Cards
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid || typeof skillsData === 'undefined') return;

    grid.innerHTML = skillsData.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
            <div class="skill-tags">
                ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Render Featured Project Cards (for homepage)
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid || typeof projectsData === 'undefined') return;

    // Filter to only featured projects
    const featuredProjects = projectsData.filter(p => p.featured);

    grid.innerHTML = featuredProjects.map(project => `
        <div class="project-card">
            <div class="project-image">
                ${project.image
            ? `<img src="${project.image}" alt="${project.title}">`
            : `<span class="project-placeholder-icon">🚀</span>`}
            </div>
            <div class="project-content">
                ${project.achievement ? `<span class="project-badge">${project.achievement}</span>` : ''}
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.liveUrl
            ? `<a href="${project.liveUrl}" target="_blank" class="project-link">Live Demo →</a>`
            : ''}
                    ${project.repoUrl
            ? `<a href="${project.repoUrl}" target="_blank" class="project-link">View Code →</a>`
            : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Render All Project Cards (for projects page)
function renderAllProjects() {
    const grid = document.getElementById('allProjectsGrid');
    if (!grid || typeof projectsData === 'undefined') return;

    grid.innerHTML = projectsData.map(project => `
        <div class="project-card project-card-detailed">
            <div class="project-image">
                ${project.image
            ? `<img src="${project.image}" alt="${project.title}">`
            : `<span class="project-placeholder-icon">🚀</span>`}
            </div>
            <div class="project-content">
                ${project.achievement ? `<span class="project-badge">${project.achievement}</span>` : ''}
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.liveUrl
            ? `<a href="${project.liveUrl}" target="_blank" class="project-link">Live Demo →</a>`
            : ''}
                    ${project.repoUrl
            ? `<a href="${project.repoUrl}" target="_blank" class="project-link">View Code →</a>`
            : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Render Timeline Achievements
function renderAchievements() {
    const timeline = document.getElementById('achievementsTimeline');
    if (!timeline || typeof achievementsData === 'undefined') return;

    timeline.innerHTML = achievementsData.map(achievement => `
        <div class="timeline-item">
            <div class="timeline-content">
                <div class="timeline-icon">${achievement.icon}</div>
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
                ${achievement.date ? `<span class="timeline-date">${achievement.date}</span>` : ''}
            </div>
        </div>
    `).join('');

    // Initialize timeline scroll observer
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
                // Add staggered delay for each item
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
