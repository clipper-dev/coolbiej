# Coolbiej

[![npm version](https://badge.fury.io/js/coolbiej.svg)](https://badge.fury.io/js/coolbiej) [![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/) [![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)


Coolbiej is a powerful, opinionated UI library for Next.js, build with TailwindCSS and Typescript, aiming to speed up the development process. Tailored for Next.js, it allows you to quickly build web applications with beautiful, reusable components.

## Table of Contents

- [Coolbiej](#coolbiej)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components](#components)
  - [To-Do List 📝](#to-do-list-)
    - [Components 🧩](#components-)
    - [Stateless Components 🔄](#stateless-components-)
    - [Dependency Management 🛠️](#dependency-management-️)
    - [Theming 🎨](#theming-)
  - [License](#license)

## Features

- 🚀 Fast and efficient
- 💅 Styled with Tailwind CSS
- 📦 Out-of-the-box components for quicker development
- 📚 Comprehensive documentation

## Installation

Install Coolbiej with npm:

```bash
npm install --save coolbiej
```

## Usage
To use Coolbiej in your React or Next.js project, simply import the desired components:

```typescript
import { MainButton, SecondaryButton, Input, Accordion } from 'coolbiej';
import 'coolbiej/dist/index.css';
```
Here's an example using functional components in a React or Next.js project:

```typescript
import React from 'react';
import { MainButton, Accordion } from 'coolbiej';

const Example = () => {
  return (
    <div>
      <MainButton label="Click Me" />
      <Accordion title="Important">
        Accordion content here.
      </Accordion>
    </div>
  );
};

export default Example;
```

## Components

Buttons
- BeautifulButton
- MainButton
- SecondaryButton

Input
- Input

Accordion
- Accordion

Dropdown
- Dropdown
- DropdownBreaker
- DropdownLink

Layout
- PageContent
- Page

Typography
- Title
- Header1
- Header2
- Header3
- Lead
- P

Utilities
- CenterX
- CenterY
- WFull
- WFit

---

More components are coming soon! 🚀

## To-Do List 📝

We're always looking to make `coolbiej` better and more feature-rich. Here are some items on our to-do list that we plan to implement:

### Components 🧩
- [ ] Add more components to enrich the UI offering. Some components to consider are:
  - [ ] Tabs
  - [ ] Modals
  - [ ] Cards
  - [ ] Tooltips

### Stateless Components 🔄
- [ ] Refactor existing components to be stateless wherever possible, to make them more flexible and easier to manage.

### Dependency Management 🛠️
- [ ] Remove dependency on external icon libraries for a lighter package.

### Theming 🎨
- [ ] Add theme support to allow users to easily customize the look and feel of components.

---

Contributions to help tick off items on this list are always welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for more details on how to contribute.


## License
MIT © clipper-dev


Feel free to adjust the content to better suit the specifics of your library.
