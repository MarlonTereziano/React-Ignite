import {useState, useEffect} from 'react';
import { RepositoryItem } from "./RepositoryItem";
import {RepositoryEspace} from "./RepositoryIEspace";

import '../styles/repositories.scss';

type Repository = {
    name: string;
    description: string;
    html_url: string;
}


export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {  
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);


    return(
        <section className = "repository-list"> 
            <h1>Lista de repositórioos</h1>

            <ul>
                <RepositoryEspace/>

                <br/>
          
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />        
                })}

            </ul>

        </section>

        
    )
}