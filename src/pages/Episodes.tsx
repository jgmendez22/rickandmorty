import {fetchRickAndMorty, rickAndMortyEpisodes} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css'

interface EpisodesData {
    results: Array<{
        id: number;
        name: string;
        episode:string;
        
    }>;
}

export const Episodes: React.FC = () => {
    const { data, error } = useSWR<EpisodesData>(rickAndMortyEpisodes, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Episodes</h1>

            <div className={styles.container}>
                {data?.results.map((episode) => (
                    <AntCard  key={episode.id} name={episode.name} image={episode.episode}  description={episode.species}></AntCard>

                ))}
            </div>


        </>
    );
};