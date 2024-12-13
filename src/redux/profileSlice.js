import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  profiles: [
    {id: '1', name: 'Elena', image: require('../assets/images/1.jpg')},
    {id: '2', name: 'Anna', image: require('../assets/images/2.jpg')},
    {id: '3', name: 'Doman', image: require('../assets/images/3.jpeg')},
    {id: '4', name: 'Lina', image: require('../assets/images/4.png')},
    {id: '5', name: 'Stella', image: require('../assets/images/5.jpg')},
    {id: '6', name: 'Alex', image: require('../assets/images/6.jpg')},
    {id: '7', name: 'Maria', image: require('../assets/images/7.jpg')},
  ],
};

const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
  },
});

export const {addProfile, removeProfile} = profileSlice.actions;
export default profileSlice.reducer;
