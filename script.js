const projects = [
    {
        title: 'Project 1',
        description: 'Description of Project 1.',
        image: 'project1.jpg',
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'Description of Project 2.',
        image: 'project2.jpg',
        link: '#'
    }
];

function displayProjects() {
    const projectsSection = document.getElementById('projects');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.title}">
            <p>${project.description}</p>
            <a href="${project.link}">View Project</a>
        `;
        projectsSection.appendChild(projectDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayProjects);