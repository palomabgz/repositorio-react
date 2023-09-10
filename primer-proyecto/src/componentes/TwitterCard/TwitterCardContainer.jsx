import { TwitterCard } from './TwitterCard'
import "./TwitterCard.css"

export function TwitterCardContainer () {
    const formatUserName = (userName) => `@${userName}`

    return (
        <article className='twitterContainer'>
        <TwitterCard
            formatUserName={formatUserName} 
            userName="tnchrry"
            initialIsFollowing={false}>
            <strong>Belén</strong>
        </TwitterCard>

        <TwitterCard 
            formatUserName={formatUserName} 
            userName="w_o_o_y_a"
            initialIsFollowing={true}>
            <strong>SeungWoo</strong>
        </TwitterCard>
        
        <TwitterCard 
            formatUserName={formatUserName}  
            userName="woodz_dnwm"
            initialIsFollowing={true}>
        <strong>SeungYoun</strong>
        </TwitterCard>
        </article>
    )
}