import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Data from './data';
import User from './user';
import Menu from './menu';
import Edit from './edit';

export default function Rule(){
	return(
		<>
		<BrowserRouter>
		<Menu/>
			<Routes>
				<Route path='/' element={<User/>}></Route>
				<Route path='edit/:i' element={<Edit/>}></Route>
				<Route path='data/:index' element={<Data/>}>
					<Route path='edit/:i' element={<Edit/>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
		</>
		)
}