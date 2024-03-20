import LinkLayout from "../Layouts/linkLayout"
import AlbumComponent from "../Components/album"

const DiscographyPage = () => {
    return (
        <div>
            <header>
                <LinkLayout/>
            </header>
            <div className="albumList">
                <AlbumComponent
                imageUrl="https://ibighit.com/bts/images/bts/discography/you_never_walk_alone/album-cover.jpg"
                title="YOU NEVER WALK ALONE"
                description='YOU NEVER WALK ALONE completes the stories of
                 youth and growth that could not all be contained in 
                 the WINGS album. Whereas The most beautiful moment in 
                 life series and WINGS were narratives of youth and growth, this 
                 additional chapter to WINGS is a message of warm consolation and hope for
                  the suffering youth of this generation.'
                />

                <AlbumComponent
                imageUrl="https://ibighit.com/bts/images/bts/discography/be/rwXJxHlQ87gEiJJynB1pmScl.jpg"
                title="BE"
                description='As a sense of helplessness looms in every corner of the world,
                 BTS opens themselves up to express their mixed feelings about this 
                 situation—fear and anxiety mingled with the determination to overcome all this. 
                 The album consists of a total of eight tracks including the No.1 summer hit “Dynamite”
                  and lead single “Life Goes On”. The latter speaks on behalf of everyone stuck in the new 
                  normality brought on by COVID-19: one day, the world stopped without any warning, streets 
                  erased of footsteps and the way out is nowhere near in sight. BTS echoes in a low voice
                   the comforting message that in the face of unexpected turns “Life Goes On” and extends
                    their hands towards the future.'
                />

                <AlbumComponent
                imageUrl="https://ibighit.com/bts/images/bts/discography/hwayangyeonhwa-pt2/album-cover.jpg"
                title="THE MOST BEAUTIFUL MOMENT IN LIFE PT.2"
                description='Seven young men on the threshold of their 20s. 
                Now entering their young adulthood, the members of BTS sang
                 in their previous album, The most beautiful moment in life pt.1, 
                 about people their age being threatened by uncertainty. Released seven months after 
                 that first installment, The most beautiful moment in life pt.2 sings about the
                  energy of youth barreling forward, embracing even the uncertainty and insecurity. 
                  Now beginning to taste the bitterness of grown-up life, they can easily sense that life
                   isn`t always beautiful. However, they continue to sprint forward, relying only on 
                   their two destitute legs and the fire in their hearts. There’s nothing else to do but
                   keep running. Facing the powerlessness of one’s youth, they collide and shatter and still
                    cry out that “it’s okay to fall, it’s okay to get hurt.” That is the beauty of this moment.
                Continuing the tradition of the previous album, the members including RM, SUGA, j-hope,
                 V and Jung Kook add their names to the producing and songwriting credits, showing their own
                  growth as musicians. The lyrics are more profound and the music more passionate. 
                  The “Youth Series” concludes with The most beautiful moment in life pt.2, 
                  but the boys are only now on the starting line. “Never Mind”, BTS is just getting started.'
                />

                <AlbumComponent
                imageUrl="https://ibighit.com/bts/images/bts/discography/wings/album-cover.jpg"
                title="WINGS"
                description='BTS will release their second studio album, WINGS.
                Having met their most beautiful moment in life
                 through the ablum series of the same title, BTS now 
                 stands before a new door. Set for release on October 10, 
                 WINGS contains songs about boys who encounter temptation for the first
                  time and must ponder and agonize in the face of it. As the seven boys experience pain and bliss, 
                they bring forth the image of birds that break out of their shells and try to take flight for the first time.'
                />

                <AlbumComponent
                imageUrl="https://i.pinimg.com/564x/54/c9/f0/54c9f0d395434b77ae8d28f8ad19c2f9.jpg"
                title="დასასრული"
                description='რა მაგარია, მოვრჩი!!! ვუჰუუუ 🤩'
                />
            </div>
        </div>
    )
}

export default DiscographyPage