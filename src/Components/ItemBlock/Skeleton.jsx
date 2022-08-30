import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={452}
        viewBox="0 0 280 452"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="10" ry="10" width="260" height="175" />
        <rect x="0" y="246" rx="10" ry="10" width="256" height="140" />
        <rect x="0" y="194" rx="10" ry="10" width="259" height="30" />
    </ContentLoader>
)

export default Skeleton