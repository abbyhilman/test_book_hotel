export function setGuestData(input) {
  return (dispatch, getState) => {
    dispatch({
      type: 'setGuests/success',
      payload: input,
    });
  };
}

export function fetchHotels(search) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        'https://parseapi.back4app.com/classes/hotel/bVonXoSUHK',
        {
          headers: {
            'X-Parse-Application-Id':
              'Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3',
            'X-Parse-REST-API-Key': '4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy',
          },
        },
      );
      if (!response.ok) {
        throw await response.json();
      }
      const {chosen_hotel} = await response.json();
      dispatch({
        type: 'fetchHotels/success',
        payload: chosen_hotel.data.get_chosen_hotel,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
