export default class Menu {
  constructor() {
    this.container = document.querySelector('.container');

    this.menu = this.createElement('ul', 'menu');

    this.pages = this.createElement('li');
    this.pages.textContent = 'Pages'

    this.projects = this.createElement('li');
    this.projects.textContent = 'Projects';

    this.about = this.createElement('li');
    this.about.textContent = 'About';

    this.contact = this.createElement('li');
    this.contact.textContent = 'Contact';

    this.pagesMenu = this.createElement('ul', 'page-items');

    this.projectsMenu = this.createElement('ul', 'project-items');

    this.homePage = this.createElement('li');
    this.homePage.textContent = 'Home';

    this.newsPage = this.createElement('li');
    this.newsPage.textContent = 'News';

    this.supportPage = this.createElement('li');
    this.supportPage.textContent = 'Support';

    this.firstProject = this.createElement('li');
    this.firstProject.textContent = 'First Project';

    this.secondProject = this.createElement('li');
    this.secondProject.textContent = 'Second Project';

    this.thirdProject = this.createElement('li');
    this.thirdProject.textContent = 'Third Project';

    this.fourthProject = this.createElement('li');
    this.fourthProject.textContent = 'Fourth Project';

    this.pagesMenu.append(this.homePage, this.newsPage, this.supportPage);

    this.projectsMenu.append(this.firstProject, this.secondProject, this.thirdProject, this.fourthProject);

    this.pages.appendChild(this.pagesMenu);

    this.projects.appendChild(this.projectsMenu);

    this.menu.append(this.pages, this.projects, this.about, this.contact);

    this.container.append(this.menu);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }

    return element;
  }
}