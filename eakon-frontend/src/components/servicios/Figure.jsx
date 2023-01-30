import Figure from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/417.png"
      />
      <Figure.Caption>
        
        lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt veritatis natus maiores voluptatem ratione aut. Delectus dolor explicabo, quidem necessitatibus debitis hic quam? Rem iure earum provident praesentium veritatis et!
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;