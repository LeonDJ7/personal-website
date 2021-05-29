import { Switch, Route } from 'react-router-dom';
import About from './components/about/About'
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

const Main = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={About}></Route>
            <Route exact path='/projects' component={Projects}></Route>
            <Route exact path='/resume' component={Resume}></Route>
            <Route exact path='/contact' component={Contact}></Route>
        </Switch>
    )
}

export default Main