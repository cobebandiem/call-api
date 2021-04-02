import { Link, Route } from 'react-router-dom';
const menus = [
    {
        label: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        label: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: false
    }
];
function Menu() {
    const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
        return (
            <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}><Link to={to}>{label}</Link></li>
                );
            }} />
        );
    }
    const showMenus = (menus) => {
        let rs = null;
        if (menus.length) {
            rs = menus.map((link, index) => {
                return (
                    <MenuLink key={index} label={link.label} to={link.to} activeOnlyWhenExact={link.exact} />
                );
            });
        }
        return rs;
    }
    return (
        <div className="navbar navbar-default">
            <a className="navbar-brand">Call API</a>
            <ul className="nav navbar-nav">
                {showMenus(menus)}
            </ul>
        </div>
    );
}

export default Menu;
