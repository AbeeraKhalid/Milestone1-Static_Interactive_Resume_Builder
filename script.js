//  toggle visibility
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        }
        else {
            section.style.display = 'none';
        }
    }
}
// Event listeners for buttons
var Personal_Button = document.getElementById('toggle_personal_info');
var Education_Button = document.getElementById('toggle_education');
var Skills_Button = document.getElementById('toggle_skills');
var Work_ExperienceButton = document.getElementById('toggle_work_experience');
Personal_Button === null || Personal_Button === void 0 ? void 0 : Personal_Button.addEventListener('click', function () { return toggleSection('personal-info'); });
Education_Button === null || Education_Button === void 0 ? void 0 : Education_Button.addEventListener('click', function () { return toggleSection('education'); });
Skills_Button === null || Skills_Button === void 0 ? void 0 : Skills_Button.addEventListener('click', function () { return toggleSection('skills'); });
Work_ExperienceButton === null || Work_ExperienceButton === void 0 ? void 0 : Work_ExperienceButton.addEventListener('click', function () { return toggleSection('work-experience'); });
