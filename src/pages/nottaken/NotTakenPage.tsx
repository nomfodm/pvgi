import {Container, rem, Flex} from "@mantine/core";
import {containerMantineSize} from "../../consts.tsx";
import SoloCard from "../../components/solo/SoloCard.tsx";
import { useEffect } from "react";

export default function NotTakenPage() {
  useEffect(() => {
    document.title = "ПВГИ";
  }, []);
    return (
        <>
            <Container mt={"lg"} size={containerMantineSize}>
                <Flex gap={rem(29)} wrap={"wrap"}>
                    <SoloCard solo={{
                        imageUrl: '/1.png',
                        description: 'Полина, 17 лет, про меня говорят, что я человек с добрым сердцем, всегда готова прийти на помощь и поддержать друзей в трудную минуту. Моя отзывчивость проявляется в мелочах: я никогда не прохожу мимо, если вижу, что кому-то нужна помощь. Я часто удивляю окружающих своими неожиданными выходками, которые делают мою компанию незабываемой. Иногда мои идеи могут показаться немного сумасшедшими, но именно это придает жизни яркие краски и делает каждое мгновение со мной особенным.'
                    }}/>
                </Flex>
            </Container>
        </>
    )
}