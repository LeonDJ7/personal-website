import { Switch, Route } from 'react-router-dom';
import About from './components/about/About'
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

const Main = (props) => {
    return (
        <Switch>
            <Route exact path='/personal-website' component={About}></Route>
            <Route exact path='/personal-website/projects' component={Projects}></Route>
            <Route exact path='/personal-website/resume' component={Resume}></Route>
            <Route exact path='/personal-website/contact' component={Contact}></Route>
        </Switch>
    )
}

export default Main