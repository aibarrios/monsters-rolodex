//Action Type Constants
export const FETCH_DATA_REQUESTED = 'FETCH_DATA_REQUESTED';
export const FETCH_DATA_SUCCEEDED = 'FETCH_DATA_SUCCEEDED';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

//Actions
export const fetchDataRequest = () => {
  return { type: FETCH_DATA_REQUESTED };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCEEDED,
    payload: data,
  };
};

export const fetchDataFail = (error) => {
  return { type: FETCH_DATA_FAILED, payload: error };
};

//Async Action - Thunk
export default function fetchData(url) {
  return function (dispatch) {
    dispatch(fetchDataRequest);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const monsters = data.map((monster) => {
          return {
            id: monster.id,
            name: monster.name,
            username: monster.username,
            email: monster.email,
          };
        });
        dispatch(fetchDataSuccess(monsters));
      })
      .catch((error) => {
        dispatch(fetchDataFail(error.message));
      });
  };
}
