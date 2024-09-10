//  toggle visibility

function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    }
}

// Event listeners for buttons
const Personal_Button = document.getElementById('toggle_personal_info');
const Education_Button = document.getElementById('toggle_education');
const Skills_Button = document.getElementById('toggle_skills');
const Work_ExperienceButton = document.getElementById('toggle_work_experience');

Personal_Button?.addEventListener('click', () => toggleSection('personal-info'));
Education_Button?.addEventListener('click', () => toggleSection('education'));
Skills_Button?.addEventListener('click', () => toggleSection('skills'));
Work_ExperienceButton?.addEventListener('click', () => toggleSection('work-experience'));