import Card from "components/Card/Card"
import CardBody from "components/Card/CardBody"
import CardHeader from "components/Card/CardHeader"


function CardExample() {
    const bg =
      "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
    const textColor = "white"
    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          position="relative"
          minWidth="0px"
          wordWrap="break-word"
          backgroundClip="border-box"
          bg={bg}
          width="100%"
          boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
          backdropFilter="blur(120px)"
          borderRadius="15px"
          p="1rem"
          my={{ sm: "24px", xl: "0px" }}
        >
          <Box
            display="flex"
            width="100%"
            pt="28px"
            px="21px"
            p="12px 5px"
            mb="12px"
          >
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Profile Information
            </Text>
          </Box>
          <Box width="100%" px="21px" p="0px 5px">
            <Flex direction="column">
              <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
                Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the
                answer is no. If two equally difficult paths, choose the one more
                painful in the short term (pain avoidance is creating an illusion
                of equality).
              </Text>
              <Flex alignItems="center" mb="18px">
                <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
                  Full Name:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Esthera Jackson
                </Text>
              </Flex>
              <Flex alignItems="center" mb="18px">
                <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
                  Mobile:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  (44) 123 1234 123
                </Text>
              </Flex>
              <Flex alignItems="center" mb="18px">
                <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
                  Email:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  esthera@simmmple.com
                </Text>
              </Flex>
              <Flex alignItems="center" mb="18px">
                <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
                  Location:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  United States
                </Text>
              </Flex>
              <Flex alignItems="center" mb="18px">
                <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
                  Social Media:{" "}
                </Text>
                <Flex>
                  <Link
                    href="#"
                    color="brand.500"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "brand.500" }}
                  >
                    <PhoneIcon />
                  </Link>
                  <Link
                    href="#"
                    color="brand.500"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "brand.500" }}
                  >
                    <PhoneIcon />
                  </Link>
                  <Link
                    href="#"
                    color="brand.500"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "brand.500" }}
                  >
                    <PhoneIcon />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </>
    )
  }