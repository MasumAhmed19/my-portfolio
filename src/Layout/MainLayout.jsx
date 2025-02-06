import { Outlet } from 'react-router-dom';
import Header from '../Components/Navigations/Header';
import Footer from '../Components/Navigations/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* Main Body */}
            <Outlet />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;