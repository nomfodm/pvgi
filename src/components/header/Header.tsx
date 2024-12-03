import {Container, Flex, rem, Text} from "@mantine/core";
import {containerMantineSize} from "../../consts.tsx";
import ThemeToggleButton from "../themeToggleButton/ThemeToggleButton.tsx";

export default function Header() {
    return <header style={{height: rem(60), borderBottom: "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))"}}>
        <Container h={"100%"} size={containerMantineSize}>
            <Flex w={"100%"} h={"100%"} justify={"space-between"} align={"center"}>
                <Text visibleFrom={"xs"} fz={rem(20)} fw={600}>Пары великого гвардейского инфомата</Text>
                <Text hiddenFrom={"xs"} fz={rem(16)} fw={700}>Пары великого гвардейского инфомата</Text>
                <ThemeToggleButton/>
            </Flex>
        </Container>
    </header>;
}