import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, setGames, error, setError } = useGames();

  return (
    <>
      <Text color={'#EF5350'}>{error && <p>{error}</p>}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={'10px'}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
