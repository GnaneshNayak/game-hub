import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Stack, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack paddingX={1}>
      {/* <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      /> */}
      {colorMode === 'dark' ? (
        <SunIcon w={8} h={7} onClick={toggleColorMode} />
      ) : (
        <MoonIcon w={8} h={7} onClick={toggleColorMode} />
      )}

      {/* <Text>Dark Mode</Text> */}
    </Stack>
  );
};

export default ColorModeSwitch;
