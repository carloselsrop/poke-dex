import { GatsbyNode } from 'gatsby'
import * as path from 'path'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  // Pokemons Pages
  const { data: pokemons }: any = await graphql(`
    query {
      pokeApi {
        cards(pagination: { page: 1, count: 2000 }) {
          id
          name
        }
      }
    }
  `)

  const posts = pokemons.pokeApi.cards
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: `/pokemons/${i + 1}`,
      component: path.resolve(`./src/templates/pokemons/index.tsx`),
      context: {
        count: postsPerPage,
        page: i + 1,
        limit: postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Pokemon Pages
  const { data: pokemon }: any = await graphql(`
    query {
      pokeApi {
        cards {
          id
          name
        }
      }
    }
  `)

  pokemon.pokeApi.cards.forEach((pokemon: any) => {
    createPage({
      path: `/pokemon/${pokemon.id}`,
      component: path.resolve(`./src/templates/pokemon/index.tsx`),
      context: {
        pokemonId: pokemon.id,
      },
    })
  })
}
