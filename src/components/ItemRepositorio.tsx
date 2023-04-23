import React from 'react'


interface ItemRepositorioProps{
  repodata:{
    name: string;
    description: string;
    html_url: string;
  }
}

export default function ItemRepositorio(props:ItemRepositorioProps) {
  return (
    <li>
        <strong>{props.repodata.name}</strong>
        <p>{props.repodata.description}</p>
        <a href={props.repodata.html_url}> Acessara repositorio</a>
    </li>
  )
}