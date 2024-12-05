import {Box, Container, rem, Flex, Text} from "@mantine/core";
import {containerMantineSize} from "../../consts.tsx";

export default function NotTakenPage() {
    return (
        <>
            <Container mt={"lg"} size={containerMantineSize}>
                <Box w={rem(300)} h={rem(500)}
                     bd={"2px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))"}
                     style={{borderRadius: rem(20), overflow: "hidden"}}>
                    <Flex h={"100%"} w={"100%"} direction={"column"}>
                        <Box bgr={"no-repeat"} bgsz={"cover"} style={{background: "url('/1.png')"}} w={'100%'} h={rem(200)}></Box>
                        <Text>Куплю пива, возьму в рот</Text>
                    </Flex>
                </Box>
            </Container>
        </>
    )
}