

export default function NavBar({seasons}){




    return(
        <nav>
            {seasons.map((season) => <a href="">Season {season.number}</a>)}
        </nav>
    );
}











