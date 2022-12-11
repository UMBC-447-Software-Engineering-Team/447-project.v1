// main landing page

export default function Home() {
    return(
        //main 
        <div className="main-home"> 
        {/* right images row */}
            <div className="flexrowOne">
                <img className="home-images" src={require('../media/solar1.jpg')} alt="" height="25%" width="25%"/>
                <div className="headText">
                    <h1 className="headTextHeading">Welcome to EzWatts!</h1>
                        <a className="createbutton" href="./create/Create">Click to Begin</a>
                </div>
                <img className="home-images" src={require('../media/solar2.jpg')} alt="" height="25%" width="25%"/>

            </div>
        {/* left images row */}
            <div className="flexrowTwo">
                <img className="home-images" src={require('../media/solar3.jpg')} alt="" height="25%" width="25%"/>
                <div className="middleText">
                <p className="main-description">
                    Here at EzWatts we believe that a person should be
                    able to have ease of access when implementing
                    solar panels for one's house.  Whether it is a company
                    or an individual, with our program you can set an outline
                    of your roof, point out your obstructions, and get an accurate
                    representation and price for the placement and installation 
                    of solar panels.
                </p>
                </div>
                <img className="home-images" src={require('../media/solar4.jpg')} alt="" height="25%" width="25%"/>
            </div>
            </div>
    )
}
