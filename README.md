# Goal of this repo

This simple app has been built for the [Intersection Conference 2022](https://www.intersection-conference.eu/schedule) I attended as a speaker.
It aims to show how we can leverage the Provider Pattern in React to avoid the prop drilling issue.
Feel free to reach out to me for any info.

## What it does

We developed a fake app where you can enter some information (of the same type) for each module.

![](https://i.imgur.com/WnNAwmZ.png)

Once you save, the information are stored inside the page state and switching between modules keeps the information previously saved.

![](https://i.imgur.com/l7Zwj3U.png)

When saving, we simulate a request to a server (we actually use `setTimeout` to do that) and, once completed, we give a feedback plus we show the saved data below the form.

![](https://i.imgur.com/boLBTfj.png)

By clicking "Cancel" you initialize the form to its original state with all the empty fields, if you save, such values will be persisted accordingly.

If you refresh the page, the entire app state will be initialized.

## Why should I care about this app?

As mentioned above, the app is just a demo made for the [Intersection Conference 2022](https://www.intersection-conference.eu/schedule) where I tried to spread the word about the Provider Pattern in React. I like it so much because it allows us to avoid prop drilling and makes the code cleaner, easier to maintain and less error-prone. For any concern, thought or whatever regarding software, feel free to reach out to me, I'll be happy to discuss.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so you can also run:

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
