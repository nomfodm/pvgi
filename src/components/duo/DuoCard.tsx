import {Box, BoxProps, Flex, rem} from "@mantine/core";
import {Duo} from "../../types.tsx";

export default function DuoCard(props: { duo: Duo, boxProps?: BoxProps }) {
    const duoData: Duo = props.duo;
    const isAnyLabels = duoData.labelLeft || duoData.labelRight || duoData.labelCenter;

    return (
        <Box bd={"#C8C8C8 2px solid"} style={{borderRadius: rem(10), overflow: "hidden"}} {...props.boxProps}>
            <Box>
                <Flex visibleFrom={"xs-sm"} h={rem(250)}>
                    <Box bgr={"no-repeat"} bgsz={"cover"} style={{background: `url("${duoData.leftImageUrl}")`}}
                         flex={"0 1 60%"} h={"100%"}></Box>
                    <Box bgr={"no-repeat"} bgp={"50%"} bgsz={"70%"}
                         style={{background: `url("${duoData.separatorImageUrl}")`}} flex={"0 1 45%"} h={"100%"}></Box>
                    <Box bgr={"no-repeat"} bgsz={"cover"} style={{background: `url("${duoData.rightImageUrl}")`}}
                         flex={"0 1 60%"} h={"100%"}></Box>
                </Flex>
                <Flex hiddenFrom={"xs-sm"} direction={"column"} h={rem(700)}>
                    <Box bgr={"no-repeat"} bgsz={"cover"} style={{background: `url("${duoData.leftImageUrl}")`}}
                         flex={"0 1 60%"} h={"100%"}></Box>
                    {duoData.labelLeft && <Box ta={"center"} flex={"0 1 5%"} h={"100%"}>{duoData.labelLeft}</Box>}
                    <Box bgr={"no-repeat"} bgp={"50%"} bgsz={"40%"}
                         style={{background: `url("${duoData.separatorImageUrl}")`}} flex={"0 1 45%"} h={"100%"}></Box>
                    {duoData.labelCenter && <Box ta={"center"} flex={"0 1 5%"} h={"100%"}>{duoData.labelCenter}</Box>}
                    <Box bgr={"no-repeat"} bgsz={"cover"} style={{background: `url("${duoData.rightImageUrl}")`}}
                         flex={"0 1 60%"} h={"100%"}></Box>
                    {duoData.labelRight && <Box ta={"center"} flex={"0 1 5%"} h={"100%"}>{duoData.labelRight}</Box>}
                </Flex>
            </Box>
            {isAnyLabels &&
                <Flex style={{borderTop: "#C8C8C8 2px solid"}} visibleFrom={"xs-sm"} py={rem(10)}>
                    <Box ta={"center"} flex={"0 1 60%"} h={"100%"}>{duoData.labelLeft}</Box>
                    <Box ta={"center"} flex={"0 1 45%"} h={"100%"}>{duoData.labelCenter}</Box>
                    <Box ta={"center"} flex={"0 1 60%"} h={"100%"}>{duoData.labelRight}</Box>
                </Flex>
            }
        </Box>
    );
}