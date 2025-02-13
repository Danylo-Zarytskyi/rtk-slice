import { useAppDispatch, useAppSelector } from './app/hooks';
import { applyAuth, getStatus, logout as authLogout } from './slices/auth'; // Імпортуємо logout з authSlice
import { logout as logoutAction } from './slices/logout'; // Імпортуємо logout з logoutSlice

const App = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(getStatus); // Отримуємо статус із authSlice

  const handleAuthClick = () => {
    const payload = { profile: { name: 'lalala' } }; // Профіль для прикладу
    dispatch(applyAuth(payload)); // Застосовуємо авторизацію
  };

  const handleLogoutClick = () => {
    dispatch(authLogout()); // Викликаємо logout з authSlice, щоб змінити статус на 'guest'
    dispatch(logoutAction()); // Викликаємо logoutAction з logoutSlice для змін статусу тексту
  };

  return (
    <>
      <button onClick={handleAuthClick}>AUTH!</button>
      <br />
      status: {status} {/* Виводимо статус із authSlice */}
      <br />
      <button onClick={handleLogoutClick}>LOGOUT</button> {/* Кнопка для логауту */}
    </>
  );
};

export default App;
