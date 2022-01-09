import { SearchContextProvider } from '../hooks/SeachContext';
import Search from './Search';
import Current from './Current';

const App = () =>{
    return(
    <>
        <SearchContextProvider>
            <Search />
        </SearchContextProvider>
        <Current/>
    </>
    )
}

export default App;
