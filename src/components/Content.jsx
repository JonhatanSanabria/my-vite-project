import Cards from "./Cards";

export default function Content() {
    const features = [
        {
            title: "Instant Server Start",
            description: "On demand file serving over native ESM, no bundling required!",
            icon: "⚡️"
        },
        {
            title: "Lightning Fast HMR",
            description: "Hot Module Replacement (HMR) that stays fast regardless of app size.",
            icon: "⚡️"
        },
        {
            title: "Rich Features",
            description: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
            icon: "🛠️"
        },
        {
            title: "Optimized Build",
            description: "Pre-configured Rollup build with multi-page and library mode support.",
            icon: "📦"
        },
        {
            title: "Universal Plugins",
            description: "Rollup-superset plugin interface shared between dev and build.",
            icon: "🔩"
        },
        {
            title: "Fully Typed APIs",
            description: "Flexible programmatic APIs with full TypeScript typing.",
            icon: "🔑"
        }
    ];
    return (
        <>
    <div className="main">
      <div className="main-info">
        <h1 ><span className="vite">Vite</span></h1>
        <p className="text">Next Generation Frontend Tooling</p>
        <p className="tagline">Get ready for a development environment that can finally catch up with you.</p>
        <div class="tabs">
          <div class="tab"><p>Get Started</p></div>
          <div class="tab"><p>Why Vite?</p></div>
          <div class="tab"><p>View on GitHub</p></div>
          <div class="tab"><p>🎉 ViteConf 23!</p></div>
        </div>
      </div>
      <div className="logo">
        <img src="https://vitejs.dev/logo-with-shadow.png" alt="" />
      </div>
    </div>
    <div className="cards-container main">
      {
        features.map((features)=>{
          return (<Cards key={`service-${features.title}`}  icon={features.icon} title={features.title} description={features.description} />)
        })
      }
    </div>
    </>
    )
}
