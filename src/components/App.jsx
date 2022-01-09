import { SearchContextProvider } from '../hooks/SeachContext';
import Search from './Search';
import Current from './Current';

const App = () =>{
    return(
    <>
        <SearchContextProvider>
            <Search />
            <Current/>
        </SearchContextProvider>
    </>
    )
}

export default App;
