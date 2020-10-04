import { gsap } from "gsap"
/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

const NavContainer = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 650px;
  height: 60px;
  background: transparent;
  top: 0;
  right: 0;
  z-index: 1;
  margin-top: 5px;
`

const NavItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  line-height: 100%;
  color: ${({ color }) => color};
  font-weight: ${({ inView }) => (inView ? "bold" : "normal")};
  border-bottom: ${({ inView, color }) =>
    inView ? `2px solid ${color}` : "none"};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`

const DrawerContainer = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 1;
`

const Drawer = props => {
  return (
    <DrawerContainer onClick={props.onClick} data-id="mobile-drawer">
      <svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
        <g stroke={props.strokeColor} strokeWidth={2}>
          {props.showCross ? (
            <path d="M10.293 19.477l9.184-9.184M10.707 10.293l9.184 9.184" />
          ) : (
            <path d="M10.15 10h9.6M10.15 14.206h9.768M10 18.325h9.751" />
          )}

          <circle cx={15} cy={15} r={14} />
        </g>
      </svg>
    </DrawerContainer>
  )
}

export const NavigationNew = ({
  color,
  inView,
  showCross,
  homeTimeLine,
  parentId,
}) => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const containerIndexId = `${parentId}-my-index`
  const aboutIndexId = `${parentId}-index-about`
  const skillsIndexId = `${parentId}-index-skills`
  const expereinceIndexId = `${parentId}-index-experience`
  const indexElTo = isSmallScreen ? { x: "0%" } : { y: "0%" }

  const onClick = id => {
    if (id === "my-index") {
      homeTimeLine
        .to(`#${containerIndexId}`, {
          autoAlpha: 1,
        })
        .to(`#${aboutIndexId}`, indexElTo)
        .to(`#${skillsIndexId}`, indexElTo)
        .to(`#${expereinceIndexId}`, {
          ...indexElTo,
          onComplete: () => {
            document.getElementById("landing").style.overflowY = "hidden"
          },
        })
        .play()
    } else {
      gsap.to("#landing", {
        duration: 0.5,
        scrollTo: `#${id}`,
      })
    }
  }
  if (isSmallScreen) {
    return (
      <Drawer
        strokeColor={color}
        onClick={() => {
          if (showCross) {
            homeTimeLine.reverse()
            return
          }
          homeTimeLine
            .to(`#${containerIndexId}`, {
              autoAlpha: 1,
            })
            .to(`#${aboutIndexId}`, indexElTo)
            .to(`#${skillsIndexId}`, indexElTo)
            .to(`#${expereinceIndexId}`, indexElTo)
            .play()
        }}
        showCross={showCross}
      />
    )
  }
  return (
    <NavContainer data-inview={inView}>
      <NavItem
        color={color}
        inView={inView === "Home"}
        onClick={() => onClick("my-index")}
      >
        Home
      </NavItem>
      <NavItem
        color={color}
        inView={inView === "About"}
        onClick={() => onClick("my-about")}
      >
        About
      </NavItem>
      <NavItem
        color={color}
        inView={inView === "Skills"}
        onClick={() => onClick("my-skills")}
      >
        Skills
      </NavItem>
      <NavItem
        color={color}
        inView={inView === "Experience"}
        onClick={() => onClick("my-experience")}
      >
        Experience
      </NavItem>
    </NavContainer>
  )
}
