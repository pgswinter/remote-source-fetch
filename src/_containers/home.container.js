import Home from '../_pages/Home';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      _data: state.HomeReducer._data
    };
}

export default connect(mapStateToProps)(Home)