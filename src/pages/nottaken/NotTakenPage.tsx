import {Container, rem, Flex} from "@mantine/core";
import {containerMantineSize} from "../../consts.tsx";
import SoloCard from "../../components/solo/SoloCard.tsx";

export default function NotTakenPage() {
    return (
        <>
            <Container mt={"lg"} size={containerMantineSize}>
                <Flex gap={rem(29)} wrap={"wrap"}>
                    <SoloCard solo={{
                        imageUrl: '/1.png',
                        description: 'Я Полина. Мне 17 лет. Недавно меня бросили(( Очень люблю доминировать. Хочу кричать не на парня, а на парне. Пью, курю, матерюсь безбожно. Если я тебе не нравлюсь - разрешаю застрелиться. Куплю пива, возьму в рот. 300 метров от вас. '
                    }}/>
                </Flex>
            </Container>
        </>
    )
}