import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { games, setGames, error, setError } = useGames();

  return (
    <>
      <Text color={'#EF5350'}>{error && <p>{error}</p>}</Text>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
