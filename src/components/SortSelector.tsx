import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:relevance
      </MenuButton>
      <MenuList>
        <MenuItem>sda</MenuItem>
        <MenuItem>ssss</MenuItem>
        <MenuItem>sssasasa</MenuItem>
        <MenuItem>wqqq</MenuItem>
        <MenuItem> q q</MenuItem>
        <MenuItem>aaaa</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
