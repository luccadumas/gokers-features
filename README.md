<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://gok.digital">
    <img src="https://miro.medium.com/max/712/1*eH_AEESTpAc6ZSWoEer6pA.png" alt="Logo" width="420" height="200">
    <img src="https://media.glassdoor.com/sqll/1617456/kanamobi-squarelogo-1562347955901.png" alt="Logo GOK" width="200" height="200">
  </a>

  <h3 align="center">Gokers Registration</h3>

  <p align="center">
    Test API for Gokers registrations - REST and GraphQL - Produced with Strapi
    <br />
    <a href="https://gokers.herokuapp.com/documentation"><strong>Explore documentation »</strong></a>
    <br />
    <br />
    <a href="https://strapi.io/">Explore Strapi documentation</a>
    ·
    <a href="https://github.com/luccadumas/gokers-features/issues">Report Bug</a>
    ·
    <a href="https://github.com/luccadumas/gokers-features/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is part of my Go.K Digital oriented PDI, but it turned out to be much more than just a PDI project. This project is intended to help hundreds of developers who, like me, have struggled to find an easy and free open source API, access the Internet to test their front-end applications, and connect them to a back-end.

Here's why:

* Your time should be focused on creating something amazing. A project that solves problems while helping others.
* You shouldn't do the same tasks repetitively, for example create an API entirely from scratch to run tests.
* You must incorporate the DRY principles into the rest of your life.

Obviously, not every model will fit every project, as this can be project-by-project dependent. However, I will be adding more content in the near future. You can also suggest changes by forking this repository and creating a pull request or opening an issue. Thanks to all the people who contributed to expanding this model!

A list of people and technologies that contributed to this project is listed in the acknowledgments.

### Built With

* [Strapi](https://strapi.io)
* [NodeJS](https://nodejs.org/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/luccadumas/gokers-features.git
   ```
2. Open folder of project
 ```sh
  cd gokers-features/
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
   ou
   ```sh
   yarn
   ```
4. Start the server
   ```sh
   yarn develop
   ```



<!-- USAGE -->
## Use production version

To consume authenticated endpoints, register a user (method POST):
   ```sh
   https://gokers.herokuapp.com/api/auth/local/register
   ```
body:
```sh
{
    "username": "test",
    "email": "test@gok.digital",
    "password": "12345678aA"
}
```

or

login
```sh
   https://gokers.herokuapp.com/api/auth/local/
   ```
   body:
```sh
{
    "identifier": "test@gok.digital",
    "password": "12345678aA"
}
```

Some examples of requests. Collection via Postman(https://www.getpostman.com/collections/9a1980a3ec59dbea3713)_

_For more examples, please refer to the [Documentation](https://gokers.herokuapp.com/documentation)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/luccadumas/gokers-features/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Lucca Dumas - [@luccadumas](https://www.linkedin.com/in/lucca-dumas-36851b114) - lucca.ribeiro0@hotmail.com

Project Link: [https://github.com/luccadumas/gokers-features](https://github.com/luccadumas/gokers-features)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [@rafaelmendesalves](https://www.linkedin.com/in/rafaelmendesalves/)
* [@mensinho](https://github.com/mensinho)
* [@tuliocalil](https://www.linkedin.com/in/tuliocalil/)
* [@antoniohenriquee](https://www.linkedin.com/in/antoniohenriquee/)
* [Strapi Community](https://strapi.io/community)

