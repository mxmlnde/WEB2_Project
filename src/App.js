import KoelnGuesser from "./components/KoelnGuesser";
import {ScoreProvider} from "./components/GameContext";

function App() {
    return (
        <ScoreProvider>
            <KoelnGuesser></KoelnGuesser>
        </ScoreProvider>
    );
}

export default App;
