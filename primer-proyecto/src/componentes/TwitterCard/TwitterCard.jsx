import { useState } from 'react'

export function TwitterCard ({ children, formatUserName, userName, initialIsFollowing }) {
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imageSrc = `https://unavatar.io/${userName}`
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'twitter-button is-following'
    : 'twitter-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='twitter-article'>
            <header className='twitter-header'>
                <img
                className='twitter-avatar'
                src={imageSrc} 
                alt="avatar" />
                <div className='twitter-div'>
                {children}
                <span className='twitter-span'>
                    {formatUserName(userName)}
                </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}