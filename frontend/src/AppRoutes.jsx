import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './routes/Home';

function AppRoutes() {
	// route list is an array of objects that contain the path and the component
	const routeList = [
		{ path: '/', component: <Home /> }
	];

	// this is the main component that contains all of the routes
	return (
		<Routes>
			{routeList.map((route, index) => (
				<Route key={index} path={route.path} element={route.component} />
			))}
			{/* if the user tries to navigate to a page that isnt in this file, than they navigate to '/' */}
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default AppRoutes;
