import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Home from './components/home';
import NotFound from './components/not-found';
import Add from './containers/add';
import StudentDetails from './containers/student-details';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise';
const createStoreWithMW = applyMiddleware(promiseMW)(createStore)


const App = () => {
    return (
        <Provider store={createStoreWithMW(reducers)}>
            <BrowserRouter>
                <div>
                    <div className="row text-white bg-dark text-center">
                        <div className="col">
                            <h1 className="">Student View</h1>
                        </div>
                    </div>

                    <div className="row text-white bg-dark text-center">
                        <div className="col">
                            <h2><Link className="text-white text-decoration-none" to="/">Students </Link></h2>
                        </div>
                        <div className="col">
                            <h2><Link className="text-white text-decoration-none" to="/add"> ADD</Link></h2>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col">
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/students/:id" component={StudentDetails} />
                                    <Route path="/add" component={Add} />
                                    <Route path="*" component={NotFound} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App;