import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Menu from './components/Menu/Menu';

function App() {
    let showContentMenus=(routes)=>{
        let output=null;
        if(routes.length>0){
            output=routes.map((route,index)=>{
                return <Route path={route.path} exact={route.exact} component={route.main} key={index}/>
            })
        }
        return <Switch>{output}</Switch>;
    }
    return (
        <Router>
            <div>
                <Menu/>
                {showContentMenus(routes)}
            </div>
        </Router>
    );
}

export default App;
