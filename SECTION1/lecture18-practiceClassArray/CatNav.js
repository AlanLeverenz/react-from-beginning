// change this Component to a class!
// function CatNav(props) {
//   // get data from props and use map to build an array of <li>
//   // ... code goes here
//   return (
//     <div>
//       <h1>CatNav</h1>
//     </div>
//   );
// }

class CatNav extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props);
    const catnav = this.props.data.map((data, i) => {
      return (
        <li key={i} className='cat-link left valign-wrapper'>
          <i className='material-icons'>{data.icon}</i>
          {data.title}
        </li>
      );
    });
    console.log(catnav);
    return (
      <div className='row'>
        <ul className='cat-nav center-align'>{catnav}</ul>
      </div>
    );
  }
}
