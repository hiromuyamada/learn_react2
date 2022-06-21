import logo from './logo.svg';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
// import { BrowserRouter, Router } from 'react-router-dom';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { Router } from './router/router';


function App() {
  return (
    // <BrowserRouter>
    // <DefaultLayout>
    //   <PrimaryButton>テスト</PrimaryButton>
    //   <SecondaryButton>テスト</SecondaryButton>
    //   <br />
    //   <SearchInput></SearchInput>
    //   <UserCard user={user}/>
    // </DefaultLayout>
    // </BrowserRouter>
    <Router />
  );
}

export default App;
