# Hackathon Civic Initiative

This project was created as an example of the author's ability to create an application interface.\
It does not have a server part, all data is stored in local storage.\

**Author**: [Anastasia Tsibernaja](https://github.com/TsAnastasia), 2022г.
**Maket**: [Figma](https://www.figma.com/file/FOmKehLlw8bP4Jzm3R947E/Hackathon-2025?node-id=852%3A315)
**Try**: []()

<!-- TODO: add app link -->

## Using techonologies

### Packages

- `React` - build user interfaces.\
- `TypeScript` - strongly typed programming language.\
- `Redux` - app storage.\
- `Redux Persist` - save data in session/local storage.\
- `Sass` - style app.\
- `Eslint` & `Prettier` - check & formatted app code.\
- `Lint-Staged` - pre-commit hook.\

### Tools

- Forms - custom hook `useForm`;
- Doc title - custom hook `useDocTitle`;
- Popups - custom component `Modal`;
- Vertical scroll on wheel - custom util `scroll`;
- Work with dates - custom util `date`;

## Available Scripts

Run 'npm i' | 'yarn' to install all dependencies.
In the project directory, you can also run:

- `npm start` | `yarn start`\
  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  The page will reload if you make edits.\
  You will also see any lint errors in the console.

- `npm run build` | `yarn start`\
  Builds the app for production to the `prod` folder.\
  It correctly bundles React in production mode and optimizes the build for the best performance.
  Your app is ready to be deployed!

- `npm run lint` | `yarn lint` \
  Check your app for lint errors.\
  Eslint settings in `.eslintrc.json` file.

- `npm run format` | `yarn format` \
  Automatically format the code with Prettier.\
  Prettier settings in `.prettierrc.json` file.
