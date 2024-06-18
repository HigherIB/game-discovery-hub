import { Heading, Text, Spinner, HStack, ListItem, List, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import useGenres from "../hooks/useGenres";

  
const GameDetailPage = () => {
    const { slug } = useParams();
    const {data: game, isLoading, error} = useGame(slug!);
    const { data } = useGenres();

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2}} spacing={5}>
            <GridItem>
                <Heading>
                    {game.name}
                </Heading>
                <ExpandableText children={game.description_raw} />
                <GameAttributes game={game} />
            </GridItem>
            <GridItem>
                <GameTrailer gameId={game.id} />
                <GameScreenshots gameId={game.id} />
            </GridItem>
        </SimpleGrid>
    )
};

export default GameDetailPage