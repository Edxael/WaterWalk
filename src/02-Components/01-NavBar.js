import React from 'react';
import { Appbar } from 'react-native-paper';
import { connect } from 'react-redux'

const NavBar = (props) => {
    const { navigation, title, subtitle, logOutUser } = props
    const _goBack = () => console.log('Went back');

const _handleSearch = () => {
    console.log('Searching');
    logOutUser()
}

    const _handleMore = () => {
        console.log('Shown more')
        navigation.toggleDrawer();
    };

    return (
        <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title={title} subtitle={subtitle} />
        <Appbar.Action icon="lock" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
}

function mapDispatcherToProps(dispatch) {
  return {
    logOutUser: () => dispatch({ type: 'LOG_OUT_USER' })
  }
}

export default connect(null, mapDispatcherToProps)(NavBar);
