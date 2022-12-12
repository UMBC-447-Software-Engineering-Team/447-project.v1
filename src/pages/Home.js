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
                        <a className="btn btn-active bg-[#2c5dff]" href="./create/Create">Click to Begin</a>
                </div>
                <img className="home-images" src={require('../media/solar2.jpg')} alt="" height="25%" width="25%"/>

            </div>
        {/* left images row */}
            <div className="flexrowTwo">
                <img className="home-images" src={require('../media/solar3.jpg')} alt="" height="25%" width="25%"/>
                <div className="middleText">
                <p className="main-description">
                    Here at EzWatts, we believe that a person should be
                    able to see what solar panels can do for THEM at the
                    low low price of absolutely FREE. Our website is user
                    friendly, aesthetically pleasing, accurate, and fun
                    for the whole family (If you know where to look ;) ).
                    Oh, and did we mention it's free?
                </p>
                </div>
                <img className="home-images" src={require('../media/solar4.jpg')} alt="" height="25%" width="25%"/>
            </div>
            </div>
    )
}
