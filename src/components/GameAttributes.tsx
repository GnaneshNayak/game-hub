import { SimpleGrid, Text } from '@chakra-ui/react';
import Game from '../entities/Game';
import CriticScore from './CriticScore';
import DefinitionIteam from './DefinitionIteam';

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionIteam terms="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionIteam>
      <DefinitionIteam terms="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionIteam>
      <DefinitionIteam terms="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionIteam>
      <DefinitionIteam terms="Publisher">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionIteam>
    </SimpleGrid>
  );
};

export default GameAttributes;
