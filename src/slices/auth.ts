import { createAppSlice } from '../app/createAppSlice';

// Визначаємо тип для профілю
type Profile = {
  name: string;
  // можна додати інші властивості профілю, якщо потрібно
};

const initialState = {
  profile: null as Profile | null,
  role: 'guest',
  status: 'guest', // 'guest' | 'in_progress' | 'auth'
};

const slice = createAppSlice({
  name: 'auth', // ключ у store
  initialState,
  reducers: create => ({
    updateProfile: create.reducer((state, action: { payload: { profile: Profile } }) => {
      state.profile = action.payload.profile;
    }),
    applyAuth: create.reducer((state, action: { payload: { profile: Profile } }) => {
      state.status = 'auth';
      state.profile = action.payload.profile;
    }),
    progressAuth: create.reducer((state) => {
      state.status = 'in_progress';
    }),
    failAuth: create.reducer((state) => {
      state.status = 'guest';
    }),
    logout: create.reducer((state) => {
      state.status = 'guest'; // Змінюємо статус на 'guest'
      state.profile = null;    // Очищаємо профіль
    }),
  }),
  selectors: {
    getProfile: state => state.profile,
    getRole: state => state.role,
    getStatus: state => state.status,
  },
});

export default slice;

// actions
export const {
  updateProfile,
  applyAuth,
  progressAuth,
  failAuth,
  logout, // Додано action для логауту
} = slice.actions;

// selectors
export const {
  getProfile,
  getRole,
  getStatus,
} = slice.selectors;
