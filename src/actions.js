export const counterButtonClicked = (amount) => ({
  type: "COUNTER_BUTTON_CLICKED",
  payload: { amount },
});

export const fetchPost = () => {
	return async function(dispatch, getState) {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	    const data = await response.json();
		console.log(data);
		dispatch({type:'FETCH_POST', payload: data});
	}
};
