import { Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import SignUp from './Components/Sign';
import Header from './Components/Header';
import Main from './Components/Main';
import EmailVerify from './Components/EmailVerify';
import ForgotPassword from './Components/ForgotPassword'
import PasswordReset from './Components/PasswordReset';

function App() {
	const user = localStorage.getItem("token");
	return (
			<>
			<Routes>
				{user&&<Route path="/" exact element={<><Header /> <Main /></>} />}
				<Route path="/" exact element={<> <Header /><Home /> </>} />
				<Route path="/signup" exact element={<><Header /> <SignUp /></>} />
				<Route path="/login" exact element={<><Header /> <Login /></>} />
				<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
				<Route path="/forgot-password" exact element={<><Header /> <ForgotPassword /></>} />
				<Route path="/password-reset/:id/:token" exact element={<><Header /> <PasswordReset /></>} />
				
			</Routes>
			</>
			);
}

			export default App;
