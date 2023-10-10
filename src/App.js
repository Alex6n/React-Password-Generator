import '@mantine/core/styles.css';
import { MantineProvider, Center } from '@mantine/core';
import Generator from './Components/Generator';

function App() { 
  return ( 
    <MantineProvider defaultColorScheme="dark">
      <Center> 
      <Generator />
      </Center>
    </MantineProvider>
  ); 
} 

export default App;
