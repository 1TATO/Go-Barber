<h1 align="center">
  <div>
    <img alt="GoBarber" title="GoBarber" src="https://github.com/1TATO/Go-Barber/blob/master/front-end/src/assets/logo.svg" width="200px" />
  </div>
</h1>

<p align="center">
  <a href="https://www.linkedin.com/in/jose-neto-255862180//">
    <img alt="Made by JoséNeto" src="https://img.shields.io/badge/made%20by-JoséNeto-%2304D361">
  </a>
  
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/1TATO/Go-Barber.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/1TATO/Go-Barber.svg">
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  <a href="https://github.com/1TATO/Go-Barber/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/1TATO/Go-Barber?style=social">
  </a>
  
  <div>
    <img alt="GoBarber" title="GoBarber" src="https://github.com/1TATO/Go-Barber/blob/master/github/gobarber.png" width="1400px" />
  </div>
</p>

<p align="center">
  <a href="#computer-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#label-Layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-How-To-Use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

</br>

<h3 align="center">
  <div>
    <p>Homepage</p>
    <img alt="GoBarber" title="GoBarber" src="https://github.com/1TATO/Go-Barber/blob/master/github/homepage.png" width="700px" />
  </div>
  
  </br>
  </br>
  
  <div>
    <p>Create Account Page</p>
    <img alt="CreateAccountPage" title="CreateAccountPage" src="https://github.com/1TATO/Go-Barber/blob/master/github/createAccountPage.png" width="700px" />
  </div>
  
  </br>
  </br>
  
  <div>
    <p>Forgot Password Page</p>
    <img alt="ForgotPasswordPage" title="ForgotPasswordPage" src="https://github.com/1TATO/Go-Barber/blob/master/github/forgotPasswordPage.png" width="700px" />
  </div>
  
  </br>
  </br>
  
  <div>
    <p>Calendar Without Appointments</p>
    <img alt="CalendarWithoutAppointments" title="CalendarWithoutAppointments"  src="https://github.com/1TATO/Go-Barber/blob/master/github/calendarWithoutAppointments.png" width="700px" />
  </div>
  
  </br>
  </br>
  
  <div>
    <p>Calendar With Appointments</p>
    <img alt="CalendarWithAppointments" title="CalendarWithAppointments" src="https://github.com/1TATO/Go-Barber/blob/master/github/calendarWithAppointments.png" width="700px" />
  </div>
  
  </br>
  </br>
  
  <div>
    <p>Edit Profile Page</p>
    <img alt="EditProfilePage" title="EditProfilePage" src="https://github.com/1TATO/Go-Barber/blob/master/github/editProfile.png" width="700px" />
  </div>
</h3>

## :computer: Project
Schedule and manage appointments in barber shops.

## :rocket: Technologies
- [Typescript](https://www.typescriptlang.org)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev)
- [Node](https://nodejs.org/en/)
- [Unform](https://github.com/unform/unform)
- [Yup](https://github.com/jquense/yup)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [EditorConfig](https://editorconfig.org)

Back-end
- [Express](https://expressjs.com/pt-br/)
- [UUID](https://github.com/uuidjs/uuid)
- [date-fns](https://github.com/date-fns/date-fns)
- [TypeORM](https://typeorm.io/#/)
- [JWT](https://jwt.io)
- [Multer](https://github.com/expressjs/multer)
- [TSyringe](https://www.npmjs.com/package/tsyringe)
- [JEST](https://github.com/facebook/jest)
- [Nodemailer](https://nodemailer.com/about/)/[Ethereal](https://ethereal.email)
- [Handlebars](https://handlebarsjs.com)

Front-end
- [Styled-components](https://github.com/styled-components/styled-components)
- [Polished](https://github.com/styled-components/polished)
- [React-spring](https://www.react-spring.io)
- [Testing-library](https://github.com/testing-library/react-testing-library)
- [React-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library)

Mobile
- [React-navigation](https://github.com/react-navigation/react-navigation)
- [React-native-testing-library](https://github.com/callstack/react-native-testing-library)

## :label: Layout
- [Web](https://www.figma.com/file/GiuDTxBfPwgUyGmYSAQd4D/GoBarber?node-id=34%3A1180) layout
- [Mobile](https://www.figma.com/file/GiuDTxBfPwgUyGmYSAQd4D/GoBarber?node-id=0%3A1) layout

## :information_source: How To Use
To clone and run this application, you'll need:
- [Git](https://git-scm.com)
- [Docker](https://www.docker.com)
- [Android Studio](https://developer.android.com/studio)

From your command line:

### Database & Back-end
```bash
# Clone this repository
$ git clone https://github.com/1TATO/Go-Barber.git

# Go into the repository
$ cd Go-Barber
$ cd back-end

# Install dependencies
$ yarn install

# Set up you environmnet variables based on the examples of $.env.example

# Start database
$ docker start gostack_postgres
$ docker start mongodb
$ docker start redis

# Start server
$ yarn dev:server

# server running on port 3333
```

### Front-end
```bash
# Clone this repository
$ git clone https://github.com/1TATO/Go-Barber.git

# Go into the repository
$ cd Go-Barber
$ cd front-end

# Install dependencies
$ yarn install

# Start server
$ yarn start

# server running on port 3000
```

### Mobile
```bash
# Clone this repository
$ git clone https://github.com/1TATO/Go-Barber.git

# Run Android Studio

# Go into the repository
$ cd Go-Barber
$ cd mobile

# Install dependencies
$ yarn install

# Start server
$ yarn android
```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/1TATO/move.it/blob/master/LICENSE) for more information.

---
Made with ♥ by José Neto :wave: [Get in touch!](https://www.linkedin.com/in/jose-netopr/)
