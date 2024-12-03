import classes from "./Footer.module.css"
import {Container, Flex, Group, Image} from "@mantine/core";
import {containerMantineSize} from "../../consts.tsx";
import {IconBrandTelegram} from "@tabler/icons-react";

export default function Footer() {

    return <div className={classes.footer}>
        <Container size={containerMantineSize} className={classes.inner}>
            <Flex gap={"xs"}><Image src="/favicon.ico" w={24} h={24} alt="icon"/> ПВГИ</Flex>
            <Group gap={"xs"} className={classes.links} justify="flex-end" wrap="nowrap">
                <IconBrandTelegram/> @l3v666
            </Group>
        </Container>
    </div>;
}