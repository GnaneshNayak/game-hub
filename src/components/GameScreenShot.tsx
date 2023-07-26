import React from 'react';
import useScreenshot from '../hooks/useScreenshot';
import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';

interface Props {
  gameId: number;
}
const GameScreenShot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => {
        return <Image key={file.id} src={file.image} />;
      })}
    </SimpleGrid>
  );
};

export default GameScreenShot;
