import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader
    height={87}
    width={`${70}%`}
    speed={1.5}
    backgroundColor={"rgba(var(--grey-2), 1)"}
    foregroundColor={"rgba(var(--grey-1), 1)"}
    viewBox="0 0 380 70"
  >
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width={`${100}%`} height="13" />
    <rect x="80" y="40" rx="3" ry="3" width={`${50}%`} height="10" />
  </ContentLoader>
)

export default MyLoader
