import { Route, Switch } from 'react-router';
import Header from './components/Header/Header';
import BookPage from './pages/BookPage/BookPage';
import HomePage from './pages/HomePage/HomePage';
import { GlobalStyle } from './style';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/book/:id' component={BookPage} />
      </Switch>
    </div>
  );
};

export default App;
