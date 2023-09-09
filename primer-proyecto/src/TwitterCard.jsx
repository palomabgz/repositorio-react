export function TwitterCard ({ children, formatUserName, userName, isFollowing }) {
    const imageSrc = `https://unavatar.io/${userName}`

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
                <button className='twitter-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}