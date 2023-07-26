import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpended, setExpended] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = isExpended ? children : children.substring(0, limit) + '...';

  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        fontWeight={'bold'}
        colorScheme="yellow"
        size={'xs'}
        onClick={() => setExpended(!isExpended)}
      >
        {isExpended ? 'Show less' : 'Show more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
