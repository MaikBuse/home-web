<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <a href="https://github.com/MaikBuse/home-web">
    <img src="https://maikbuse.com/logo.svg" alt="Logo Maik Buse" width="150" height="150">
  </a>

<h3 align="center">Homepage of Maik Buse</h3>

  <p align="center">
    A personal portfolio website for a software architect, featuring sections for About, Skillset, and Projects.
    <br />
    <br />
    <a href="https://maikbuse.com"><strong>Visit the site »</strong></a>
    <br />
    <br />
    <a href="https://github.com/MaikBuse/home-web/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/MaikBuse/home-web/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

This repository hosts the source code for my personal homepage—a portfolio site showcasing my work as a software architect. The site features sections for About, Skillset, and Projects, built with a modern tech stack and styled using Tailwind UI and Aceternity UI components.

## Built With

* [![Next][Next.js]][Next-url] Next.js 15 (RC)
* [![React][React.js]][React-url] React 19 (RC)
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Tailwindcss][Tailwindcss]][Tailwindcss-url]
* [![Framer Motion][FramerMotion]][FramerMotion-url]
* [![Docker][Docker]][Docker-url]
* [![CircleCI][CircleCI]][CircleCI-url]

## Getting Started

### Prerequisites

* Node.js - follow the instructions at [nodejs.org](https://nodejs.org/en/download)
* npm (latest version recommended)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/MaikBuse/home-web.git
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm run dev
   ```

### Development Commands

```sh
npm run dev      # Start development server on http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Docker

```sh
docker build -t home-web .     # Build Docker image
docker run -p 3000:3000 home-web   # Run container
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/MaikBuse/home-web/blob/main/LICENSE.md) file for details.

**Note:** This project uses components from Tailwind UI, which are subject to [Tailwind UI's licensing terms](https://tailwindui.com/).

## Contact

Maik Buse - contact@maikbuse.com

Project Link: [https://github.com/MaikBuse/home-web](https://github.com/MaikBuse/home-web)

## Acknowledgments

* [Tailwind UI](https://tailwindui.com/)
* [Aceternity UI](https://ui.aceternity.com/)
* [Headless UI](https://headlessui.com/)
* [heroicons](https://heroicons.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/MaikBuse/home-web.svg?style=for-the-badge
[contributors-url]: https://github.com/MaikBuse/home-web/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MaikBuse/home-web.svg?style=for-the-badge
[forks-url]: https://github.com/MaikBuse/home-web/network/members
[stars-shield]: https://img.shields.io/github/stars/MaikBuse/home-web.svg?style=for-the-badge
[stars-url]: https://github.com/MaikBuse/home-web/stargazers
[issues-shield]: https://img.shields.io/github/issues/MaikBuse/home-web.svg?style=for-the-badge
[issues-url]: https://github.com/MaikBuse/home-web/issues
[license-shield]: https://img.shields.io/github/license/MaikBuse/home-web.svg?style=for-the-badge
[license-url]: https://github.com/MaikBuse/home-web/blob/main/LICENSE.md
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Tailwindcss]: https://img.shields.io/badge/tailwindcss-0F172A?style=for-the-badge&logo=tailwindcss
[Tailwindcss-url]: https://tailwindcss.com
[FramerMotion]: https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white
[FramerMotion-url]: https://www.framer.com/motion/
[Docker]: https://img.shields.io/badge/Docker-20232A?style=for-the-badge&logo=docker
[Docker-url]: https://docker.com
[CircleCI]: https://img.shields.io/badge/CircleCI-20232A?style=for-the-badge&logo=circleci
[CircleCI-url]: https://circleci.com
