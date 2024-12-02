import {Container, Flex, rem, Text} from "@mantine/core";
import {containerMantineSize} from "../../consts.tsx";

export default function Header() {
    return <header style={{height: rem(60), borderBottom: "#C8C8C8 1px solid"}}>
        <Container h={"100%"} size={containerMantineSize}>
            <Flex w={"100%"} h={"100%"} align={"center"}>
                <Text visibleFrom={"xs"} fz={rem(20)} fw={600}>Пары великого гвардейского инфомата</Text>
                <Text hiddenFrom={"xs"} fz={rem(16)} fw={700}>Пары великого гвардейского инфомата</Text>
            </Flex>
        </Container>
    </header>;
}