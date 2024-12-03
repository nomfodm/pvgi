import {Box, BoxProps, Flex, rem} from "@mantine/core";
import {Trio} from "../../types.tsx";

export default function TrioCard(props: { trio: Trio, boxProps?: BoxProps }) {
    const trioData: Trio = props.trio;
    const isAnyLabels = trioData.labelLeft || trioData.labelRight || trioData.labelCenter;

    return (
        <Box bd={"2px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))"} style={{borderRadius: rem(10), overflow: "hidden"}} {...props.boxProps}>
            <Box>
                <Flex visibleFrom={"xs-sm"} h={rem(250)}>
                    <Box bgr={"no-repeat"} bgsz={"cover"} style={{background: `url("${trioData.leftImageUrl}")`}}
                         flex={"0 1 50%"} h={"100%"}></Box>

                    <Box bgr={"no-repeat"} bgp={"50%"} bgsz={"70%"}
                         style={{background: `url("${trioData.separator1ImageUrl}")`}} flex={"0 1 35%"}
                         h={"100%"}></Box>

                    <Box bgr={"no-repeat"} bgsz={"cover"} style={{background: `url("${trioData.centerImageUrl}")`}}
                         flex={"0 1 50%"} h={"100%"}></Box>

                    <Box bgr={"no-repeat"} bgp={"50%"} bgsz={"70%"}
                         style={{background: `url("${trioData.separator2ImageUrl}")`}} flex={"0 1 35%"}
                         h={"100%"}></Box>

                    <Box bgr={"no-repeat"} bgsz={"cover"} style={{background: `url("${trioData.rightImageUrl}")`}}
                         flex={"0 1 50%"} h={"100%"}></Box>
                </Flex>
                <Flex hiddenFrom={"xs-sm"} direction={"column"} h={rem(1100)}>
                    <Box bgr={"no-repeat"} bgsz={"cover"} style={{background: `url("${trioData.leftImageUrl}")`}}
                         flex={"0 1 50%"} h={"100%"}></Box>
                    {trioData.labelLeft && <Box ta={"center"} flex={"0 1 5%"} h={"100%"}>{trioData.labelLeft}</Box>}

                    <Box bgr={"no-repeat"} bgp={"50%"} bgsz={"30%"}
                         style={{background: `url("${trioData.separator1ImageUrl}")`}} flex={"0 1 35%"}
                         h={"100%"}></Box>

                    <Box bgr={"no-repeat"} bgsz={"cover"} style={{background: `url("${trioData.centerImageUrl}")`}}
                         flex={"0 1 50%"} h={"100%"}></Box>
                    {trioData.labelCenter && <Box ta={"center"} flex={"0 1 5%"} h={"100%"}>{trioData.labelCenter}</Box>}

                    <Box bgr={"no-repeat"} bgp={"50%"} bgsz={"30%"}
                         style={{background: `url("${trioData.separator2ImageUrl}")`}} flex={"0 1 35%"}
                         h={"100%"}></Box>

                    <Box bgr={"no-repeat"} bgsz={"cover"} style={{background: `url("${trioData.rightImageUrl}")`}}
                         flex={"0 1 50%"} h={"100%"}></Box>
                    {trioData.labelRight && <Box ta={"center"} flex={"0 1 5%"} h={"100%"}>{trioData.labelRight}</Box>}
                </Flex>
            </Box>
            {isAnyLabels &&
                <Flex style={{borderTop: "2px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))"}} visibleFrom={"xs-sm"} py={rem(10)}>
                    <Box ta={"center"} flex={"0 1 60%"} h={"100%"}>{trioData.labelLeft}</Box>
                    <Box ta={"center"} flex={"0 1 45%"} h={"100%"}>{trioData.labelCenter}</Box>
                    <Box ta={"center"} flex={"0 1 60%"} h={"100%"}>{trioData.labelRight}</Box>
                </Flex>
            }
        </Box>
    );
}