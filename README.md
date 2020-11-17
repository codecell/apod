## Apod
This mini-app uses NASA's picture of the day API to display an image/video and a description for selected days.

## Outline
## Outline
- [Live version](#Live-version)
- [UI Preview](#UI-Preview)
- [Technologies used](#Technologies)
- [Installation](#Installation)
- [Author](#author)
- [Licence](#licence)

## Live Version
The app is deployed on netlify [here](https://apodnasa.netlify.app/)

## UI Preview

|                |                |
|----------------|----------------|
|<img src='./readmeAssets/pic1.png' />|<img src='./readmeAssets/pic2.png' />|

## Technologies used
- React
- Redux
- Styled-components
- Typescript
- HTML
- CSS

## Installation
Follow the steps below to run the app in a local environment; First ensure you have [Node.js](https://nodejs.org)installed.

1. Clone the repository from a terminal 
    ```git clone https://github.com/codecell/apod.git```.
2. Navigate to the project directory.
    ```cd apod```
3. Install project dependencies.
    ```yarn OR npm install```
4. For the request to the NASA picture of the day API to work, you need to head over to this [link](https://api.nasa.gov/index.html#signUp) and sign up for your unique API key.

5. Once signed up, create a .env file in the root of the project directory, check the .env.sample file attached to this project for the API key environment variable name and set the value to your unique key in the .env file. 
Note: Ensure  not to make your unique key public.

6. Start and serve the development build.
    ```yarn OR npm start```
React app will automatically serve the compiled build on http://localhost:3000/ if the port is not in use, 
if port 3000 is occupied, React will take another randomly available port.

## Author

👤 **Alfred Ezaka**

- Github: [@codecell](https://github.com/codecell)
- Twitter: [@the_codecell](https://twitter.com/the_codecell) 
- Linkedin: [ezaka alfred](https://www.linkedin.com/in/alfrednoble/)

## Show your support

Give an ⭐️ if you like this project!
