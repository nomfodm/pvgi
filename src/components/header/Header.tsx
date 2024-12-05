import {Container, Flex, rem, Text} from "@mantine/core";
import {containerMantineSize} from "../../consts.tsx";
import ThemeToggleButton from "../themeToggleButton/ThemeToggleButton.tsx";
import {NavLink, useLocation} from "react-router-dom";
import styles from "./Header.module.css"
import cx from "clsx";

export default function Header() {
    const pathname = useLocation().pathname;

    function isLinkActive(path: string) {
        if (pathname === path) {
            return styles.active;
        }

        return "";
    }

    return <header style={{
        height: rem(60),
        borderBottom: "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))"
    }}>
        <Container h={"100%"} size={containerMantineSize}>
            <Flex w={"100%"} h={"100%"} justify={"space-between"} align={"center"}>
                <Flex h={"100%"} align={"center"} gap={rem(20)}>
                    <Text component={NavLink} className={styles.title} to={"/"} visibleFrom={"xs"} fz={rem(20)}
                          fw={600}>Пары
                        великого гвардейского инфомата</Text>
                    <Text component={NavLink} className={styles.title} to={"/"} hiddenFrom={"xs"} fz={rem(16)} fw={700}>Пары
                        великого
                        гвардейского инфомата</Text>

                    <Text component={NavLink} to={"notTaken"} fz={"sm"} className={cx(isLinkActive("/notTaken"), styles.navLink)}>Свободные</Text>
                </Flex>
                <ThemeToggleButton/>
            </Flex>
        </Container>
    </header>;
}