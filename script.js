function openProfile() {
    document.getElementById('profile-modal').style.display = 'flex';
}

function closeProfile() {
    document.getElementById('profile-modal').style.display = 'none';
}

function showPage(pageId) {
    // Hide all content pages
    document.querySelectorAll('.content').forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';

    // Remove profile section if it's already present somewhere else
    const profileSection = document.getElementById('profile-info');
    if (profileSection.parentNode) {
        profileSection.parentNode.removeChild(profileSection);
    }

    // Dynamically insert the profile section after the clicked section
    const clickedSection = document.querySelector(`.channel[onclick="showPage('${pageId}')"]`);
    clickedSection.parentNode.insertBefore(profileSection, clickedSection.nextSibling);
    
    // Show the profile section
    profileSection.style.display = 'flex';
}

// Function to run on page load to simulate the "Me" section being clicked
window.onload = function() {
    showPage('me');
};