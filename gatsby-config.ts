import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'POKEAPI',
        fieldName: 'pokeApi',
        url: 'https://api.tcgdex.net/v2/graphql',
      },
    },
  ],
}

export default config
