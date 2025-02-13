import { createAppSlice } from '../app/createAppSlice';
import { logout as authLogout } from './auth'; // Імпортуємо дію logout з authSlice

const initialState = {
  statusText: 'Гість',
};

const slice = createAppSlice({
  name: 'logout',
  initialState,
  reducers: create => ({
    logout: create.reducer((state) => {
      // Викликаємо дію logout з authSlice для скидання статусу на 'guest'
      state.statusText = 'Гість'; // Оновлюємо статусний текст для логауту
    }),
  }),
  selectors: {
    getStatusText: state => state.statusText,
  },
});

export default slice;

// actions
export const { logout } = slice.actions;

// selectors
export const { getStatusText } = slice.selectors;
