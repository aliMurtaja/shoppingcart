import React from 'react';
import GithubCorner from '../Github/Corner';
import Filter from '../Shelf/Filter';
import Shelf from '../Shelf'

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={}
    }

    render(){
        return(
            <React.Fragment>
                <GithubCorner />
                    <main>
                        <Filter />
                        <Shelf />
                    </main>
            
            </React.Fragment>
        )
    }

}