// Card component
function Card(props) {
  console.log(props);
  return (
    <div className='col s3 m3'>
      <div className='card hoverable medium'>
        <div className='card-image'>
          <img src={props.data.image} />
        </div>
        <div className='card-content'>
          <p>{props.data.course}</p>
          <p>{props.data.instructor}</p>
        </div>
        <div className='card-action'>
          <a href='#'>$9.99</a>
        </div>
      </div>
    </div>
  );
}

// MY WAY
// function Card(props) {
//   console.log(props);
//   return (
//     <div className='col s3 m3'>
//       <div className='card hoverable medium'>
//         <div className='card-image'>
//           <img src={props.img} />
//         </div>
//         <div className='card-content'>
//           <p>{props.title}</p>
//           <p>{props.name}</p>
//         </div>
//         <div className='card-action'>
//           <a href='#'>$9.99</a>
//         </div>
//       </div>
//     </div>
//   );
// }
