import React ,{useState} from 'react'
import Navbar from '../Components/Navbar'

export default function Layout({children}) {
//     const [subnav, setSubnav] = useState(false);

//   const showSubnav = () => setSubnav(!subnav);
    return (
        <div >
        <Navbar />
        <main>{children}</main>
        </div>
    )
}
