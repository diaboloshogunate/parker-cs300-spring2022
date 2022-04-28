# CS 300 Labs and HW

[![GitHub Super-Linter](https://github.com/diaboloshogunate/parker-cs300-spring2022/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

I am going to use different libraries/frameworks and tools for the individual assignments to learn more during this class.

## Structure

### Automation

Automation will be done with githubs actions found in `.github/workflows`.
Right now I am setting up linting. 
I plan to do full gitflow CI/CD by the end of the term.

### labs

in class labs will be in `labs` and always the same format at the rest of the class.

### next

For individual assignments I am using Next JS.
Because this class requires the assignments be plain html/js that runs in your browser I am including the builds in the repo.

To test them you need to download the whole `next/out` directory. 
The html for an assignment is in the out directory and will have the same filename asked in the homework.
For example HW 2 is in `next/out/ex2-parker.html`

The source files are in `next/pages` and will have a force file with the same name as the html file.
For example the `ex2-parker.html` src code will be in `next/pages/ex2-parker.js`.
Source files may include other source files uses js modules.

Instead of loading html you can run the server by installing the packages via npm and running `npm dev`.
You can run a new static build of the site with `npm build`

### nuxt

I plan on doing assignments in more than one framework. 
In addition to next I will use nuxt with vuetify or quasar.