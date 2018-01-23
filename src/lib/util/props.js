//@flow
export function getPathname() {
  const pathname = (this.props.location.pathname && (this.props.location.pathname===window.location.pathname))
    ? this.props.location.pathname
    : window.location.pathname || window.location.href;
  return pathname;
}