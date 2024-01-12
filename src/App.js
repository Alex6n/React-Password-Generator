import "@mantine/core/styles.css";
import { MantineProvider, Center } from "@mantine/core";
import Generator from "./Components/Generator";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Center>
        <Generator
          passIcon="https://cdn-icons-png.flaticon.com/512/5582/5582931.png"
          title="Password Generator"
          desc="Create strong and secure passwords to keep your account safe online."
        />
      </Center>
    </MantineProvider>
  );
}

export default App;
