import {Box, Flex, rem, Text} from "@mantine/core";
import {Solo} from "../../types.tsx";

export default function SoloCard(props: { solo: Solo }) {
    const soloData = props.solo;
    return (<Box w={rem(350)}
                 bd={"2px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))"}
                 style={{borderRadius: rem(20), overflow: "hidden"}}>
        <Flex h={"100%"} w={"100%"} direction={"column"}>
            <Box bgr={"no-repeat"} bgsz={"cover"} bgp={"50%"} style={{background: `url(${soloData.imageUrl})`}}
                 w={'100%'} h={rem(200)}></Box>
            <Text p={'md'} ta={'justify'}>{soloData.description}
            </Text>
        </Flex>
    </Box>)
}