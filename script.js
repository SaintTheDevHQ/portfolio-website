const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Multi-Post stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'images/multi.svg',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Facebook 360',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    image: 'images/facebook 360.png',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'images/uber navigation.png',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    company: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    liveLink: '#',
    sourceLink: '#',
  },
];

const projectsContainer = document.querySelector('#projects-container');

projectsContainer.innerHTML = projects.map((project) => `
  <section class="project-card">
    <img src="${project.image}" alt="${project.name}">

    <div class="project-content">
      <h2>${project.name}</h2>

      <div class="project-info">
        <span class="company">${project.company}</span>
        <span>•</span>
        <span>${project.role}</span>
        <span>•</span>
        <span>${project.year}</span>
      </div>

      <p>${project.description}</p>

      <ul class="tags">
        ${project.technologies.map((technology) => '<li>' + technology + '</li>').join('')}
      </ul>

      <button class="project-btn">See Project</button>
    </div>
  </section>
`).join('');

const modal = document.querySelector('#project-modal');
const modalBody = document.querySelector('#modal-body');
const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const projectButtons = document.querySelectorAll('.project-btn');

projectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';

   modalBody.innerHTML = `
  <img src="${projects[index].image}" alt="${projects[index].name}">
  <h2>${projects[index].name}</h2>
  <p>${projects[index].description}</p>

  <ul class="tags">
    ${projects[index].technologies.map((technology) => `<li>${technology}</li>`).join('')}
  </ul>

  <div class="modal-buttons">
    <a href="${projects[index].liveLink}" target="_blank">See Live</a>
    <a href="${projects[index].sourceLink}" target="_blank">See Source</a>
  </div>
`;
  

  });
});