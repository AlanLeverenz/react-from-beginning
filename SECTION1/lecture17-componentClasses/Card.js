// function Card(props) {
//   return(
//     <h1>Sanity Check</h1>
//   )
// }

// Class component
class Card extends React.Component {
  constructor() {
    super();
    console.log('Constructor ran');
  }
  render() {
    return (
      <div className='col s3 m3'>
        <div className='card hoverable medium'>
          <div className='card-image'>
            <img src={this.props.data.image} />
          </div>
          <div className='card-content'>
            <p>{this.props.data.course}</p>
            <p>{this.props.data.instructor}</p>
          </div>
          <div className='card-action'>
            <a href='#'>$9.99</a>
          </div>
        </div>
      </div>
    );
  }
}
