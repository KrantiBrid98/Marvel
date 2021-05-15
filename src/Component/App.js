import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CharacterDetails from "./Character/characterDetails";
import characterList from "./Character/characterList";
import MovieDetails from "./Character/MovieDetails";
import ComicDetails from "./Character/ComicDetails";
import CommentSection from "./Comment/CommentSection";
import Header from "./layout/header";
import "../Styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mContainer">
        <Header />
        <div className="ui container">
          <Switch>
            <Route path="/marvel/page:pageNo" exact component={characterList} />
            <Route
              path="/marvel/characterDetail:charId"
              component={CharacterDetails}
            />
            <Route
              path="/marvel/character/comic:charId"
              component={ComicDetails}
            />
            <Route
              path="/marvel/character/movie:charId"
              component={MovieDetails}
            />
            <Route path="/marvel/comments" component={CommentSection} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );

  // return (
  //     <BrowserRouter>
  //         <div className='App'>
  //             <Header />
  //             <div className='ui container'>
  //                 <Switch>
  //                     <Route path='/marvel/page:pageNo' exact component={characterList} />
  //                     <Route path='/marvel/characterDetail' component={characterDetail} />
  //                 </Switch>
  //             </div>
  //         </div>
  //     </BrowserRouter>
  // )
};

export default App;
