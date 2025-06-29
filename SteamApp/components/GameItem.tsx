import { FC } from "react";
import { Card, Cover, Info, Tag, Title } from "./styles";

interface Props {
    game: {
        title: string;
        cover: string;
    };
}

export const GameItem: FC<Props> = ({ game }) => (
    <Card>
        <Cover source={{ uri: game.cover }} resizeMode="cover" />
        <Info>
            <Title>{game.title}</Title>
            <Tag>Action</Tag>
        </Info>
    </Card>
);
