import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import '../theme';

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();

  const togleTheme =() =>{
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle('dark');
    // @ts-ignore
    if (!document.startViewTransition) toggleColorMode();
    // @ts-ignore
    document.startViewTransition(() => toggleColorMode ());
  }

  return (
    <HStack>
      <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={togleTheme} />
      <Text whiteSpace='nowrap'>{colorMode === 'dark' ? 'Light' : 'Dark'} Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch