# Box Hunt Game 🎮

Box Hunt is an interactive and engaging game where players must react quickly to click a moving red box within a specified time frame. The game tests reaction speed and provides a summary of click data, including the number of clicks and the reaction time for each.

## Features ✨

- **🄹️ Interactive Gameplay:** A moving red box that players must click on.

- **⏱️ Reaction Time Tracking:** Logs the time it takes to click the box after the game starts or after each click.

- **⏸️ Pause and Resume:** Pause the game at any time without losing progress.

- **🔄 Reset:** Restart the game and clear all previous data.

- **⌛ Customizable Timer:** Set the duration of the game in seconds before starting.

- **🎯 Dynamic Box Movement:** The red box changes position every 5 seconds during gameplay.

## Technologies Used 🛠️

- **Frontend:** React (via Vite)

- **Styling:** CSS

- **Development Environment:** Vite for fast builds and hot module replacement (HMR)

## Installation 📦

Clone the Repository

```
git clone https://github.com/your-username/box-hunt-game.git
cd box-hunt-game
```

Install Dependencies

```
npm install
```

Start the Development Server

```
npm run dev
```

Open the Game
Open http://localhost:5173 in your browser.

## Project Structure 🗂

```
├── public/          # Public assets
├── src/
│   ├── components/
│   │   ├── GameControl.jsx  # Game control logic and UI
│   │   ├── GameArea.jsx  # Main Game Area logic and UI
│   │   ├── ReactionTable.jsx  # Table displaying click data
│   ├── App.jsx       # Main app logic and state management
│   ├── App.css       # Global styling
│   └── main.jsx      # Entry point
├── package.json      # Project metadata and dependencies
├── vite.config.js    # Vite configuration
└── README.md         # Project documentation
```

## Gameplay Instructions 🎮

Enter the Game Duration:Input the desired game duration (in seconds) in the input field.

- **Start the Game:** Click the Start button to begin the game. The red box will appear and start moving every 5 seconds.

- **Click the Red Box:** As soon as the red box appears, click it to log your reaction time. A new entry will be added to the table below the game.

- **Pause/Resume:** You can pause the game anytime using the Pause button. Resuming the game continues the timer and box movement.

- **Reset:** Click the Reset button to restart the game and clear all data.

## Demo Preview 🎥



## Available Scripts 🖥️

- `npm run dev`: Start the development server.

- `npm run build`: Build the project for production.

- `npm run preview`: Preview the production build locally.

- `npm run lint`: Run linter to check for code quality.

## Future Enhancements 🚀

- Add different difficulty levels (faster box movement).

- Include sound effects for clicks and timer events.

- Allow players to toggle between light and dark themes.

- Add a high-score leaderboard.

## Contributing 🧫

- Contributions are welcome! To contribute:

- Fork the repository.

- Create a new branch for your feature: `git checkout -b feature-name`.

- Commit your changes: `git commit -m "Add feature"`.

- Push the branch: `git push origin feature-name`.

- Submit a pull request.

## Acknowledgments 🙊

- Thanks to Vite for making development lightning-fast.

- Inspired by interactive games for reaction time testing.