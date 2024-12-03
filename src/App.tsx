import Header from "./components/header/Header.tsx";
import {useEffect} from "react";
import {Container, Flex, rem, Text} from "@mantine/core";
import {containerMantineSize} from "./consts.tsx";
import DuoCard from "./components/duo/DuoCard.tsx";
import TrioCard from "./components/trio/TrioCard.tsx";
import pairsService from "./services/pairs.tsx";
import {useAppSelector} from "./store/hooks.tsx";
import {PairType} from "./types.tsx";
import Footer from "./components/footer/Footer.tsx";

export default function App() {
    const pairsState = useAppSelector(state => state.pairsReducer)

    useEffect(() => {
        async function wrapper() {
            await pairsService.retrieve()
        }

        document.title = "ПВГИ";
        wrapper()
    }, []);

    return (
        <>
            <Header/>
            <Container mt={"lg"} size={containerMantineSize}>
                {pairsState.retrieved &&
                    <Flex gap={rem(50)} direction="column">
                        {pairsState.pairs.map((pair, id) => {
                            const pairData = pair.pair;
                            if (pair.type == PairType.DUO) {
                                return <DuoCard key={id} duo={{
                                    leftImageUrl: pairData.leftImageUrl,
                                    separatorImageUrl: pairData.separatorImageUrl,
                                    rightImageUrl: pairData.rightImageUrl,

                                    labelLeft: pairData.labelLeft,
                                    labelRight: pairData.labelRight,
                                    labelCenter: pairData.labelCenter,
                                }}/>;
                            }
                            if (pair.type == PairType.TRIO) {
                                return <TrioCard key={id} trio={{
                                    leftImageUrl: pairData.leftImageUrl,
                                    separator1ImageUrl: pairData.separator1ImageUrl,
                                    centerImageUrl: pairData.centerImageUrl,
                                    separator2ImageUrl: pairData.separator2ImageUrl,
                                    rightImageUrl: pairData.rightImageUrl,

                                    labelLeft: pairData.labelLeft,
                                    labelRight: pairData.labelRight,
                                    labelCenter: pairData.labelCenter,
                                }}/>;
                            }
                        })}
                    </Flex>
                }
                {!pairsState.retrieved && <>

                    {pairsState.error
                        ?
                        <Text c={"red"}>{pairsState.error}</Text>
                        :
                        <Text c={"dimmed"}>Загрузка...</Text>
                    }

                </>
                }
            </Container>
            <Footer/>
        </>
    )
}
