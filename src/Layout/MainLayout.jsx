import { Outlet } from 'react-router-dom';
import Header from '../Components/Navigations/Header';

const MainLayout = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* Main Body */}
            <Outlet />

            {/* Footer */}
        </div>
    );
};

export default MainLayout;