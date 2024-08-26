# Weather App
A responsive weather application built with React, Vite, and Tailwind CSS. This app provides weather information for various cities, including current weather conditions and forecasts for the upcoming hours.

# Features
Search for weather information by city name.
View current weather conditions, including temperature, humidity, and wind speed.
See a forecast for the next few hours with mini cards.
Responsive design for both desktop and mobile views.

# Folder Structure

- **`weatherapp/`**
- **`public/`**
  - **`index.html`**
- **`src/`**
  - **`assets/`**
  - **`components/`**
    - **`BackgroundLayout.jsx`**
    - **`WeatherCard.jsx`**
    - **`MiniCard.jsx`**
  - **`context/`**
    - **`Context.jsx`**
  - **`App.jsx`**
  - **`index.jsx`**
  - **`App.css`**
- **`.env`**

# Installation
1. Clone the repository: git clone https://github.com/your-username/your-repository.git
2. Navigate to Peoject Directory: cd your-repository
3. Install all Dependencies: npm install



### Key Points

#### 1. **Hooks**
   - **`useState`**: This hook allows you to add state variables to your functional components. For instance, `useState` is used in `WeatherCard` to manage the state of the temperature unit (Celsius or Fahrenheit) and the weather icon.
   - **`useEffect`**: This hook manages side effects in your components, such as fetching data or setting up subscriptions. In `BackgroundLayout`, `useEffect` updates the background image based on weather conditions. In `App`, it is used to trigger the weather data fetch whenever the `place` changes.
   - **Custom Hooks (`useDate`)**: Custom hooks like `useDate` encapsulate and reuse date-related logic across components. It provides current date and time, updating every minute.

#### 2. **Built-in Functions**
   - **`toLocaleDateString()`**: This built-in JavaScript function formats dates according to the specified locale. It's used in `WeatherCard` and `useDate` to display dates and times in a user-friendly format.
   - **`setInterval()`**: This function is used in `useDate` to periodically update the date and time state, ensuring that the displayed time is always current.
   - **`fetch()`**: This built-in web API function (used in `StateContext`) is employed to make HTTP requests to retrieve weather data from an external API.

#### 3. **States**
   - **State Management**: `useState` is employed to create and manage state variables like `weather`, `input`, and `image` in your components. This enables dynamic updates and re-rendering of components based on user interactions and API responses.
   - **Dynamic Updates**: States like `image` in `BackgroundLayout` are dynamically updated based on the conditions received from the weather API, ensuring the UI reflects the current weather conditions.

#### 4. **State Context**
   - **Context API**: `StateContext` is used to manage and share state across multiple components. It allows you to avoid prop drilling by providing global state management for weather data, which can be accessed by any component wrapped in `StateContextProvider`.

#### 5. **Conditional Rendering**
   - **Weather-based Images**: In `BackgroundLayout` and `MiniCard`, conditional logic determines which images/icons to display based on the weather conditions. This provides a visually responsive experience reflecting current weather data.

#### 6. **Event Handling**
   - **Input Handling**: In `App`, the `onKeyUp` event handler triggers a city search when the Enter key is pressed. This improves user experience by allowing quick input submissions.


