import RouteComponent from "./routes/routes";
import '../src/scss/styles.scss';
import './input.css';
import { UserProvider } from "./context";
import { SearchProvider } from './context/SearchContext';
function App() {
    const routeElement = RouteComponent();

    return (
        <SearchProvider>
        <UserProvider>
            <div>
                {routeElement}
            </div>
        </UserProvider>
        </SearchProvider>
    );
}

export default App;
