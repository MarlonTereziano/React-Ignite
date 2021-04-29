import { RepositoryItem } from "./RepositoryItem";
import {RepositoryEspace} from "./RepositoryIEspace";


const struct = {
    name: 'Unão brabo',
    description: 'Carro ligeiro',
    link: 'https://github.com'
}

export function RepositoryList(){

    return(
        <section className = "Repository-list"> 
            <h1>Lista de repositórioos</h1>

            <br/>

            <ul>
                <RepositoryItem struct={struct} />
                <RepositoryEspace/>

                <RepositoryItem struct={struct} />
                <RepositoryEspace/>

                <RepositoryItem struct={struct} />
                <RepositoryEspace/>
                
                <RepositoryItem struct={struct} />
                <RepositoryEspace/>
                <br/>
            </ul>


        </section>

        
    )
}