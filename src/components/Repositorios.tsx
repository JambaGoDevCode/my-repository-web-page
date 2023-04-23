import React, {useState, useEffect} from 'react'
import ItemRepositorio from './ItemRepositorio';
import '../style/repositorios.scss';


// https://api.github.com/users/jambaGodevCode/repos

/*
const repodata = {
  name: 'nomedele',
  description: 'repo description',
  link: 'https://github.com/jambagodevcode'
}
*/

interface repodata{
  name: string;
  description: string;
  html_url: string;
}

export default function Repositorios() {
  const [ repositorio , setRepositorio ] = useState<repodata[]>([]);
  useEffect(()=>{
    fetch('https://api.github.com/users/jambaGodevCode/repos')
    .then(response => response.json())
    .then(data => setRepositorio(data))
  },[]);

  return (
    <section className="repository-list">
        <h1>Lista dos meus repositorios</h1>
        <ul>
          {repositorio.map(repodata => {
            return <ItemRepositorio key={repodata.name} repodata={repodata}/>
          })}
        </ul>
    </section>
  )
}
