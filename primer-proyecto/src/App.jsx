import { TwitterCardContainer } from './componentes/TwitterCard/TwitterCardContainer'

const users = [
  {
    userName: 'userName',
    name: 'name',
    isFollowing: 'isFollowing'
  }
]

export function App () {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
        <TwitterCardContainer
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          >
          {name}
        </TwitterCardContainer>
        ))
      }
    </section>
  )
}