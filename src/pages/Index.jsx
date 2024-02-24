import React, { useState, useEffect } from "react";
import { Box, Text, Progress, Center, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  const startDate = new Date(2024, 1, 24); // February 24, 2024
  const endDate = new Date(2024, 3, 9); // April 9, 2024
  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const [today, setToday] = useState(new Date());
  const [mph, setMph] = useState(44);

  useEffect(() => {
    const today = new Date();
    setToday(today);

    const daysSinceStart = (today - startDate) / (1000 * 60 * 60 * 24);
    const newMph = Math.min(44 + daysSinceStart, 88);
    setMph(Math.floor(newMph));
  }, []);

  return (
    <Center h="100vh" flexDirection="column">
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          Back to the Future Speedometer
        </Text>
        <Text fontSize="lg">{`Today's date: ${today.toLocaleDateString()}`}</Text>
        <Box width="80%" maxW="400px" p={4} borderWidth="1px" borderRadius="lg">
          <Image src="https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYWNrJTIwdG8lMjB0aGUlMjBmdXR1cmUlMjBzcGVlZG9tZXRlcnxlbnwwfHx8fDE3MDg4MTc4MDd8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          <Progress value={((mph - 44) / (88 - 44)) * 100} size="lg" colorScheme="red" mt={2} />
          <Center mt={4}>
            <Text fontSize="2xl" fontWeight="bold">
              {mph} mph
            </Text>
          </Center>
        </Box>
        <Text fontSize="md">{mph < 88 ? `Speed will increase to ${mph + 1} mph tomorrow` : "We've reached 88 mph!"}</Text>
      </VStack>
    </Center>
  );
};

export default Index;
