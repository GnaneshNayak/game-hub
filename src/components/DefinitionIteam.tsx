import { Box, Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  terms: string;
  children: ReactNode | ReactNode[];
}

const DefinitionIteam = ({ terms, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as={'dt'} fontSize={'md'} color="gray.600">
        {terms}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};
export default DefinitionIteam;
