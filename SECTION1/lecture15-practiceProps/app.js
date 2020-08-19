// ReactDOM.render here
// ReactDOM.render(
//     <h1>Sanity Check</h1>,
//     document.getElementById('root')
// )

// MY WAY
const App = () => {
  return (
    <div className='row'>
      <Card
        name={data[0].instructor}
        title={data[0].course}
        img={data[0].image}
      />
      <Card
        name={data[1].instructor}
        title={data[1].course}
        img={data[1].image}
      />
      <Card
        name={data[2].instructor}
        title={data[2].course}
        img={data[2].image}
      />
      <Card
        name={data[3].instructor}
        title={data[3].course}
        img={data[3].image}
      />
    </div>
  );
};
