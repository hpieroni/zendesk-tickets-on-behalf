import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Welcome from '../components/Welcome';

const WelcomeContainer = ({ login }) => <Welcome login={login} />;

export default connect(() => ({}), { login })(WelcomeContainer);
