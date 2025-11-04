import { useState } from "react";

const Profile = ({data}) => {

    const [show, setShow] = useState(false);

    //valfri de-structuring
    let {fornamn,efternamn,alder,hobby} = data;

    return(<li className="profile">
        <button onClick={() => {setShow(!show)}}>
            {/*  What ? True : False */}
            {show === true ? 'Show less' : 'Show more'}
            </button>
            <p><strong>Förnamn: </strong>{fornamn}</p>
            {/* Om show är true, visa ut koden efter && */}
            { show && <>
                    <p><strong>Efternamn: </strong>{efternamn}</p>
                    <p><strong>Ålder: </strong>{alder}</p>
                    <p><strong>Hobby: </strong>{hobby}</p>
                </>
            }
        </li>)
}

export default Profile