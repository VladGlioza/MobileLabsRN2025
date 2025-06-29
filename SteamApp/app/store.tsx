import React, { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { mockStoreData } from "@/data/mockData";
import { GameItem } from "@/components";

export default function StoreScreen() {
    const [games, setGames] = useState(mockStoreData.slice(0, 10));

    const loadMore = () => {
        if (games.length >= mockStoreData.length) return;
        setGames((prev) => [
            ...prev,
            ...mockStoreData.slice(prev.length, prev.length + 10),
        ]);
    };

    return (
        <Container>
            <FlatList
                data={games}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <GameItem game={item} />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: #1b1b1b;
`;
