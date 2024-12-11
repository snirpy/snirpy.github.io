function createCourseCard(course) {
    return `
        <div class="course-card">
            <div class="course-number">Cours ${course.number}</div>
            <h3 class="course-title">${course.title}</h3>
            <div class="course-links">
                <a href="${course.pdfLink}" class="course-link pdf-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    PDF du cours
                </a>
                <a href="${course.codeLink}" class="course-link code-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                    </svg>
                    Code source
                </a>
            </div>
        </div>
    `;
}

function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = coursesData.map(course => createCourseCard(course)).join('');
}

document.addEventListener('DOMContentLoaded', renderCourses);