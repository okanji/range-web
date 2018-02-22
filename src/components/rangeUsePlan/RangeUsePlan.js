import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { HOME } from '../../constants/routes';
import RangeUsePlanPDFView from './RangeUsePlanPDFView';

const propTypes = {
  match: PropTypes.object.isRequired,
};

const defaultProps = {

};

export class RangeUsePlan extends Component {
  state = {
    id: null,
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ id });
  }

  render() {
    const options = [{ key: 'AL', value: 'AL', text: 'Range use plan - 10/11/2017' }];

    return (
      <div className="range-use-plan">
        <div className="range-use-plan__header">
          <div className="range-use-plan__header__left">
            <Link to={HOME}>
            <Button
              circular
              size="small"
              icon="arrow left"
            />
            </Link>
            <div className="range-use-plan__title">
              {"Range use plan #1"}
            </div>
          </div>

          <div className="range-use-plan__dropdown">
            <Dropdown 
              placeholder='Range use plan' 
              search 
              selection
              fluid 
              options={options} 
            />
          </div>
        </div>
        
        <RangeUsePlanPDFView />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }; 
};

RangeUsePlan.propTypes = propTypes;
RangeUsePlan.defaultProps = defaultProps;

export default connect(
  mapStateToProps, null
)(RangeUsePlan);