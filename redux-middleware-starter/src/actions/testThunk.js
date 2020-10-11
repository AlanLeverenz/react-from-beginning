export default () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      //   console.log('I waited for 2 seconds')
      const reduxState = getState();
      if (reduxState.weather.main) {
        dispatch({
          type: 'testThunk',
        });
      }
      console.log(reduxState);
    }, 2000);
  };
};
