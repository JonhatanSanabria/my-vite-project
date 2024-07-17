export default function Menu() {
    const menu = [
        "Guide", 
        "Config", 
        "Plugins", 
        "Resources", 
        "Version", 
        "Icons"
    ]
    return (
        <div id="menu-list">
            {menu.map((menu) => {
                return (
                    <span 
                        key={`menu-${menu}`} 
                        className="menu">{menu}
                    </span>
                )
            })}
        </div>
    )
}