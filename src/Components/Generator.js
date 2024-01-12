import { useState } from "react";
import { generatePass } from "../lib/utils";

import { IoIosRefresh } from "react-icons/io";
import {
  Card,
  Image,
  Title,
  Text,
  TextInput,
  ActionIcon,
  Grid,
  Center,
  Badge,
  Button,
  Slider,
  Checkbox,
  Group,
} from "@mantine/core";

function Generator({ passIcon, title, desc }) {
  const [preset, setPreset] = useState({
    length: 8,
    upperCases: false,
    lowerCases: true,
    numbers: true,
    specials: false,
  });

  const [password, setPassword] = useState(generatePass(preset));
  const [passState, setPassState] = useState("Weak");

  const handleRegenerateButton = () => {
    const newPassword = generatePass(preset);
    setPassword(newPassword);
    setDifficulty(newPassword);
  };

  const handleSliderChange = (value) => {
    setPreset((prevState) => ({
      ...prevState,
      length: value,
    }));
  };

  const handleCheckboxChange = (option) => {
    setPreset((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  const handleCopyButton = () => {
    navigator.clipboard.writeText(password);
  };

  const setDifficulty = (newPassword) => {
    let count = 0;
    if (newPassword.length < 8) {
      setPassState("Too Short");
    } else {
      for (const key in preset) {
        if (preset.hasOwnProperty(key) && preset[key]) {
          count++;
        }
      }
      if (count <= 3) setPassState("Weak");
      if (count === 4) setPassState("Medium");
      if (count === 5) setPassState("Strong");
    }
  };

  return (
    <Card mt={100} shadow="sm" padding="lg" radius="md" withBorder>
      <Center>
        <Image radius="md" w="200" fit="contain" src={passIcon} />
      </Center>

      <Title ta="center" mt={20} size="h1">
        {title}
      </Title>

      <Text ta="center" size="xl">
        {desc}
      </Text>

      <Center>
        <Grid mt={30}>
          <Grid.Col span={8}>
            <TextInput
              rightSection={
                <ActionIcon
                  onClick={handleRegenerateButton}
                  variant="outline"
                  color="rgba(255, 255, 255, 1)"
                  size="lg"
                  radius="lg"
                >
                  <IoIosRefresh />
                </ActionIcon>
              }
              size="xl"
              placeholder="Your Password"
              value={password}
            />
          </Grid.Col>

          <Grid.Col span={4}>
            <Button
              onClick={handleCopyButton}
              size="xl"
              variant="outline"
              color="rgba(255, 255, 255, 1)"
            >
              Copy
            </Button>
          </Grid.Col>

          <Badge
            mb={30}
            variant="transparent"
            color={
              passState === "Strong"
                ? "green"
                : passState === "Medium"
                ? "blue"
                : passState === "Weak"
                ? "yellow"
                : "red"
            }
          >
            {passState}
          </Badge>
        </Grid>
      </Center>

      <Slider
        mb={30}
        value={preset.length}
        min={5}
        max={30}
        onChange={handleSliderChange}
      />

      <Center>
        <Group mb={25}>
          <Checkbox
            label="Uppercase"
            onChange={() => handleCheckboxChange("upperCases")}
          />
          <Checkbox
            defaultChecked
            label="Lowercase"
            onChange={() => handleCheckboxChange("lowerCases")}
          />
          <Checkbox
            defaultChecked
            label="Numbers"
            onChange={() => handleCheckboxChange("numbers")}
          />
          <Checkbox
            label="Special Characters"
            onChange={() => handleCheckboxChange("specials")}
          />
        </Group>
      </Center>
    </Card>
  );
}

export default Generator;
