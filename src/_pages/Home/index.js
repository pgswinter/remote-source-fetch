import React from 'react'
import {loadActions} from '../../_redux/_actions/home.actions';
import TableDisplay from '../../_components/table-display.component';
class Home extends React.Component{

    componentDidMount(){
        this.props.dispatch(loadActions.displayData());
    }

    render(){
        const {_data, loading, error} = this.props;
        if(loading){
            return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>
        }else{
            if(error) {
                return <div className="alert alert-danger">Error: {error.message}</div>
            }else{
                return <div className='main-content bgc-grey-100'>
                    <div id='mainContent'>
                        <div className="row gap-20 masonry pos-r">
                            <div className="masonry-sizer col-md-12">
                                <div className="react_test">
                                    <TableDisplay 
                                        _data = {_data}
                                    />    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        }
    }
}

export default Home;