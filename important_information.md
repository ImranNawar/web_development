# Contributing to Open Source Project
## A. Setting Up The Project

**Step 1.** Fork the project.

![Alt text](./01_learninghtml/images/image-1.png)

**Step 2.** Open Git Bash in the folder where you wish to work on the project in your system and clone your forked copy of the project.
```bash
git clone https://github.com/<your-account-username>/<your-forked-project>.git
```
**Step 3.** Move to the project folder.
```bash
cd <your-forked-project-folder>
```
**Step 4.** Add a reference to the original repository.
```bash
git remote add upstream https://github.com/<author-account-username>/<original-project>.git
``` 
**Step 5.** Check the remotes for this repository.
```bash
git remote -v
```
**Step 6.** Always take a pull from the upstream repository to your main branch to keep it at par with the main project(updated repository).
```bash
git pull upstream main
```
## B. Contributing To The Project

**Step 1.** Create a new branch (Do not name it 'main', 'master' or anything random).
```bash
git checkout -b <your_branch_name>
```
**Step 2.** Perform your desired changes to the code base.

**Step 3.** Track your changes.
```bash
git add .
```
**Step 4.** Commit your changes.
```bash
git commit -m "<commit message>"
```
**Step 5.** Push your changes.
```bash
git push -u origin <your_branch_name>
```

**Step 6.** Go to GitHub. Then, head over to your forked repo and click on "Compare and pull request".

![Alt text](./01_learninghtml/images/image.png)

You have made a PR. Now, the project maintainers will review your PR and merge it.

---

## Java Setup:
- install jdk-19
- set three paths (bin path, oracle path, and jdk path)
- for confirmation (java --version in cmd)
- video url:   `https://youtu.be/WNfvAciOtL4`
- Install netbeans


## Setup for c++ programming in visual studio code:
- Gcc Compiler:
- MinGw : extract mingw from the file and then add the path
- Extensions in VS code for c++: Code Runner and C/C++
- check the box code runner run in terminal in vs code.
- video url: `https://youtu.be/jvg4VtYEhKU`

## Python setup:
- install python-3.11.2-amd64
- pip will also be installed
- set two paths, python and Scripts
- for confirmation(python --version, pip --version)
- install packages: pip install numpy (in terminal)    etc;
- update pip: python -m pip install --upgrade pip

## Javascript setup:
- install node-v18.12.1-x64
- for confimation: node --version, npm --version
- set path;
- install packages: npm install jest (in terminal) etc

---

## React Application setup:
A React app can be created using any of the following methods:
1. Using `npx`:
```bash
npx create-react-app myapp
```

2. Using `yarn`:
```bash
yarn create-react-app imagesearch
```

3. Using `vite`
```bash
npx create-vite country-information --template react
cd country-information
npm install
npm run dev
```

---

### Awesome React Resources

For a comprehensive list of resources related to React, visit the [Awesome React GitHub repository](https://github.com/enaqx/awesome-react#react-community).
