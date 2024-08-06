interface LogoProps {
    isHeaderImage: boolean;
}

function Logo({isHeaderImage}: LogoProps) {
    const logoSrc = isHeaderImage ? "/logoHeader.svg" : "/logoFooter.svg" 
    return <img src={logoSrc} alt="Digital Store" height={44} width={253}/>
}

export default Logo;