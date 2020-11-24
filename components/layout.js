import Link from 'next/Link'

const Layout = ({ children }) => {
    console.log('this is children', children);
    return (
    <div>
        <Link href='/backcountry/form'><a>backcountry</a></Link>
        <br />
        <Link href='/photos'><a>photos</a></Link>
        { children }
    </div>)
}

export default Layout