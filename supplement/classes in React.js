// React has already written this class

class Component {
    componentDidMount(){

    }
    render(){

    }
}

class NavBar extends Component {
    constructor(){
        this.state = {}
    }
    render(){
        console.log("I'm running in the DOM!")
    }
}

const myNavBar = new myNavBar();
console.log(myNavBar);
myNavBar.render();
