# Coolbiej

[![npm version](https://badge.fury.io/js/coolbiej.svg)](https://badge.fury.io/js/coolbiej) [![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/) [![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)![npm](https://img.shields.io/npm/dt/coolbiej "Downloads")

![Dark theme preview](https://i.ibb.co/vjPqD4w/image.png)
![Light theme preview](https://i.ibb.co/SKB7QLL/image.png)

Coolbiej is a powerful, opinionated UI library for Next.js, build with TailwindCSS and Typescript, aiming to speed up the development process. Tailored for Next.js, it allows you to quickly build web applications with beautiful, reusable components.

## Table of Contents

- [Coolbiej](#coolbiej)
  - [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [CSS - 2 Schools of Thought 🤔](#css---2-schools-of-thought-)
  - [Usage](#usage)
  - [Themes](#themes)
  - [Next.js](#nextjs)
- [Components](#components)
  - [Accordion](#accordion)
    - [AccordionDrawer](#accordiondrawer)
  - [Dropdown](#dropdown)
  - [DropdownBreaker](#dropdownbreaker)
  - [DropdownItem](#dropdownitem)
  - [DropdownHeader](#dropdownheader)
  - [Note about BeautifulButton 🛑](#note-about-beautifulbutton-)
- [To-Do List 📝](#to-do-list-)
  - [Components 🧩](#components-)
  - [Stateless Components 🔄](#stateless-components-)
  - [Dependency Management 🛠️](#dependency-management-️)
  - [Theming 🎨](#theming-)
- [License](#license)

# Introduction
## Features

- 🚀 Fast and efficient
- 💅 Styled with Tailwind CSS
- 📦 Out-of-the-box components for quicker development
- 📚 Comprehensive documentation

```
⚠️ Note: The package is now stable. However, due to ongoing development, changes can be expected at all times.
```

## Installation

Install Coolbiej with npm:

```bash
npm install --save coolbiej
```

## CSS - 2 Schools of Thought 🤔

There are 2 ways to use Coolbiej in your project:

1. **Import the CSS file** - This is the easiest way to get started. Simply import the CSS file in your project and you're good to go. This is the recommended way to use Coolbiej if you're not using TailwindCSS in your project. Normally, you would add the following code snippet to your `index.js` or `index.ts` file, whichever is the entry point of your project:

```typescript
import { MainButton, SecondaryButton, Input, Accordion } from 'coolbiej';
import 'coolbiej/dist/index.css';
```

2. **Use TailwindCSS** - If you're already using TailwindCSS in your project, you can modify your `tailwind.config.js` file to include Coolbiej in `contents` to enable PurgeCSS to remove unused styles. This is the recommended way to use Coolbiej if you're already using TailwindCSS in your project. Use the following code snippet as a reference, the path to your `tailwind.config.js` file may vary, but 99.9% of the time it will be in the root of your project:

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/coolbiej/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Usage
To use Coolbiej in your React or Next.js project, simply import the desired components:

```typescript
import { MainButton, SecondaryButton, Input, Accordion } from 'coolbiej';
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

## Themes

Coolbiej UI is opinionated, and since it is, I have designed every component to be as beautiful as possible. That being said, I have also designed the components to be as flexible as possible. You can easily change the `className` of the components by using the `className` prop. 

Moreover, all components are designed in a way that automatically supports dark theme (system specified), or forced using Tailwinds `dark` class.

To turn it on, 

## Next.js

As of Next.js version 13, components by default are set as server side ones. Some components in Coolbiej are not compatible with server side rendering, because they use internal state management for fanciness. That being said, as of version 2.1.0 those components are build in such a way that do not require any changes to your code. I mention it so that you know.

# Components

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



## Accordion
The Accordion component creates a clickable area that toggles the visibility of its content.

**Props**
`children`: Content that will be hidden or displayed.
`label`: The text that will be displayed on the `accordion` toggle button.
`className`: Optional custom classes for styling.
`arrow`: A boolean to specify if an arrow icon should be displayed. Default is false.
`fill`: A boolean that, if true, will make the component take the full width of its parent. Default is false.

```typescript
import { Accordion } from 'coolbiej';

const MyAccordion = () => (
  <Accordion label="Click Me" arrow>
    Content goes here.
  </Accordion>
);
```

### AccordionDrawer
The AccordionDrawer component serves as a container for the content that will be displayed when the Accordion is open.

**Props**
`children`: The content inside the drawer.
`className`: Optional custom classes for styling.
`border`: A boolean to specify if a border should be added around the drawer. Default is false.

```typescript
import { Accordion, AccordionDrawer } from 'coolbiej';

const MyAccordionWithDrawer = () => (
  <Accordion label="Click Me" arrow>
    <AccordionDrawer border>
      Drawer Content goes here.
    </AccordionDrawer>
  </Accordion>
);
```

## Dropdown
The Dropdown component creates a clickable dropdown menu that toggles the visibility of its content upon hover.

**Props**
children: The dropdown items or content.
label: Label or icon for the dropdown button.
className: Optional custom classes for styling.
openTimeout: Optional timeout before the dropdown will close upon mouse leave. Default is 150ms.
arrow: A boolean to specify if an arrow icon should be displayed. Default is false.

```typescript
import { Dropdown } from 'coolbiej';

const MyDropdown = () => (
  <Dropdown label="Options" arrow>
    // Dropdown items go here.
  </Dropdown>
);
```

## DropdownBreaker
The DropdownBreaker component adds a horizontal line inside the dropdown for separation.

```typescript
import { Dropdown, DropdownBreaker } from 'coolbiej';

const MyDropdown = () => (
  <Dropdown label="Options">
    // Some items
    <DropdownBreaker />
    // More items
  </Dropdown>
);
```

## DropdownItem
The DropdownItem component serves as individual items inside the dropdown.

**Props**
`children`: The content of the dropdown item.
`className`: Optional custom classes for styling.

```typescript
import { Dropdown, DropdownItem } from 'coolbiej';

const MyDropdown = () => (
  <Dropdown label="Options">
    <DropdownItem>Item 1</DropdownItem>
    <DropdownItem>Item 2</DropdownItem>
  </Dropdown>
);
```

## DropdownHeader
The DropdownHeader component serves as a header item for sections within the dropdown.

**Props**
`children`: The content of the dropdown header.
`className`: Optional custom classes for styling.

```typescript
import { Dropdown, DropdownHeader } from 'coolbiej';

const MyDropdown = () => (
  <Dropdown label="Options">
    <DropdownHeader>Section 1</DropdownHeader>
    // Dropdown items for Section 1
  </Dropdown>
);
```


More components are coming soon! 🚀

## Note about BeautifulButton 🛑

The BeautifulButton component has been temporarily revoked due to some issues and will be back in future releases.

# To-Do List 📝

We're always looking to make `coolbiej` better and more feature-rich. Here are some items on our to-do list that we plan to implement:

## Components 🧩
- [ ] Add more components to enrich the UI offering. Some components to consider are:
  - [ ] Tabs
  - [ ] Modals
  - [ ] Cards
  - [ ] Tooltips

## Stateless Components 🔄
- [ ] Refactor existing components to be stateless wherever possible, to make them more flexible and easier to manage.

## Dependency Management 🛠️
- [x] Remove dependency on external icon libraries for a lighter package.

## Theming 🎨
- [x] Add theme support to allow users to easily customize the look and feel of components.
- [x] Dark mode support using Tailwind class approach.

---

Contributions to help tick off items on this list are always welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for more details on how to contribute.


# License
MIT © clipper-dev


Feel free to adjust the content to better suit the specifics of your library.
