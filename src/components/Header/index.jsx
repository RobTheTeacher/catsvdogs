const Header =({ name, subtitle }) => {
    return (
        <header>
            <h1>A page about {name}</h1>
            <h3>{subtitle}</h3>
        </header>
    )
}

export default Header