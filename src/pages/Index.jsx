import React, { useState, useEffect } from "react";
import { Box, Text, Center, VStack, Image } from "@chakra-ui/react";

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
        <Box position="relative" width="80%" maxW="400px">
          <Image src="https://vignette.wikia.nocookie.net/bttf/images/4/4f/Digital-speedometer.jpg/revision/latest?cb=20080915235401" borderRadius="md" />
          <Center position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
            <Text fontSize="4xl" fontWeight="bold" color="white">
              {mph}
            </Text>
          </Center>
        </Box>
        <Text fontSize="md" color="white">
          {mph < 88 ? `Speed will increase to ${mph + 1} mph tomorrow` : "We've reached 88 mph!"}
        </Text>
      </VStack>
    </Center>
  );
};

export default Index;
