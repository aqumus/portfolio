import React, { useLayoutEffect } from "react"
import skillsTechnologies from "./skills.json"
import { pack, hierarchy } from "d3-hierarchy"
import { select, event as d3Event } from "d3-selection"
import { transition } from "d3-transition"
import styled from "@emotion/styled"
import { scaleLinear } from "d3-scale"

const colorLevel = [
  "#bb210f",
  "#bd561a",
  "#c0792d",
  "#c69748",
  "#d0b16b",
  "#33c59b",
  "#179fa8",
  "#067e90",
  "#015e71",
  "#004150",
]

const calculateWordWidths = (wordsArg, textStyle) => {
  // Calculate length of each word to be used to determine number of words per line
  const words = wordsArg.split(/\s+/)
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  var text = document.createElementNS("http://www.w3.org/2000/svg", "text")
  Object.assign(text.style, textStyle)
  svg.appendChild(text)
  document.body.appendChild(svg)

  const wordsWithComputedWidth = words.map(word => {
    text.textContent = word
    return { word, width: text.getComputedTextLength() }
  })

  text.textContent = "\u00A0" // Unicode space
  const spaceWidth = text.getComputedTextLength()

  document.body.removeChild(svg)

  return { wordsWithComputedWidth, spaceWidth }
}

const calculateLines = (wordsWithComputedWidth, spaceWidth, lineWidth) => {
  const wordsByLines = wordsWithComputedWidth.reduce(
    (result, { word, width }, i) => {
      const lastLine = result[result.length - 1] || { words: [], width: 0 }

      if (lastLine.words.length === 0) {
        // First word on line
        const newLine = { words: [word], width }
        result.push(newLine)
      } else if (
        lastLine.width + width + lastLine.words.length * spaceWidth <
        lineWidth - i * 0.3
      ) {
        // Word can be added to an existing line
        lastLine.words.push(word)
        lastLine.width += width
      } else {
        // Word too long to fit on existing line
        const newLine = { words: [word], width }
        result.push(newLine)
      }

      return result
    },
    []
  )

  return wordsByLines.map(line => line.words.join(" "))
}

const getCommentLines = (words, textStyle, linewidth) => {
  const { wordsWithComputedWidth, spaceWidth } = calculateWordWidths(
    words,
    textStyle
  )
  return calculateLines(wordsWithComputedWidth, spaceWidth, linewidth)
}

const setAndCreateCircle = () => {
  //////////////////////////////////////////////////////////////
  ////////////////// Create Set-up constiables  //////////////////
  //////////////////////////////////////////////////////////////

  skillsTechnologies.forEach((technology, techIndex) => {
    const dataHierarchy = hierarchy(technology, data => {
      return Array.isArray(data) ? data : data.topics
    }).sum(data => (data.children ? 0 : data.level))
    let focus = dataHierarchy

    // const width = document.getElementById("chart").offsetWidth
    // const height = document.getElementById("chart").offsetHeight

    //Size of the circle pack layout
    const childrenSize = dataHierarchy.children.length
    const diameter = childrenSize <= 5 ? 250 : childrenSize <= 10 ? 350 : 500

    //Initialize the circle pack layout
    const nodePack = pack()
      .padding(2)
      .size([diameter, diameter])(dataHierarchy)

    const svgContainer = select("#chart")
      .append("svg")
      .attr("viewBox", `-20 -30 ${diameter + 50} ${diameter + 50}`)
      .attr("id", "skillCircle" + techIndex)
      .attr("width", diameter + 50)
      .attr("height", diameter + 50)

    const x = scaleLinear().range([0, diameter])
    const y = scaleLinear().range([0, diameter])

    const gElem = svgContainer
      .selectAll("g")
      .data(nodePack.descendants())
      .enter()
      .append("g")

    gElem
      .attr("id", function(d) {
        const id = !d.children ? d.data.name : d.data.technologyType
        return "g-" + id
      })
      .append("circle")
      .attr("class", function(d, i) {
        return d.parent
          ? d.children
            ? "node"
            : "node node--leaf"
          : "node node--root"
      })
      .attr("cx", function(d) {
        return d.x
      })
      .attr("cy", function(d) {
        return d.y
      })
      .attr("r", function(d) {
        return d.r
      })
      .attr("fill", function(d) {
        return !d.children ? colorLevel[Math.floor(d.value)] : "#cfd8dc"
      })
      .style("cursor", function(d) {
        return !d.children ? "pointer" : "default"
      })
      .on("click", function(d, i) {
        if (focus !== d) {
          zoom(d)
        }
        d3Event.stopPropagation()
      })

    function zoom(clickedD) {
      focus = clickedD
      const k = diameter / clickedD.r / 2
      x.domain([clickedD.x - clickedD.r, clickedD.x + clickedD.r])
      y.domain([clickedD.y - clickedD.r, clickedD.y + clickedD.r])
      const cTrans = transition().duration(250)
      svgContainer
        .selectAll("circle")
        .transition(cTrans)
        .duration(250)
        .attr("cx", function(d) {
          return x(d.x)
        })
        .attr("cy", function(d) {
          return y(d.y)
        })
        .attr("r", function(d) {
          return k * d.r
        })
        .style("cursor", function(d) {
          return !d.children
            ? d.data.name === clickedD.data.name
              ? "default"
              : "pointer"
            : "pointer"
        })

      if (!clickedD.parent) {
        svgContainer
          .selectAll("circle")
          .filter(function(d) {
            return d.children
          })
          .transition(cTrans)
          .style("cursor", "default")

        svgContainer
          .selectAll("text")
          .transition(cTrans)
          .delay(200)
          .style("display", "block")

        svgContainer.selectAll("#zoomedName").remove()
        svgContainer.selectAll("#zoomedComment").remove()
      } else {
        svgContainer
          .selectAll("text")
          .transition(cTrans)
          .style("display", "none")

        select("#chart").on("mousedown", function(d) {
          console.log("aad", d)
          if (focus !== nodePack) {
            zoom(nodePack)
          }
        })

        const clickedGElem = svgContainer.selectAll("g").filter(function(d) {
          return this.id === `g-${clickedD.data.name}`
        })

        const commentFontSize = Math.min(22, k * clickedD.r * 0.1)

        clickedGElem
          .append("text")
          .attr("x", function(d) {
            return x(clickedD.x)
          })
          .attr("y", function(d) {
            return y(clickedD.y)
          })
          .attr("dy", function(d) {
            return -y(clickedD.y) * 0.25
          })
          .attr("id", "zoomedName")
          .style("fill", "white")
          .transition(cTrans)
          .style("stroke", "white")
          .style("font-family", "Michroma")
          .style("font-size", function(d) {
            return `${k * d.r * 0.13}px`
          })
          .style("text-anchor", "middle")
          .text(function(d) {
            return clickedD.data.name
          })

        const textLines = clickedD.data.comments
          ? getCommentLines(
              clickedD.data.comments,
              {
                "font-family": "Roberto",
                "font-style": "italic",
                "line-height": "15px",
                "font-size": `${commentFontSize}px`,
              },
              diameter
            )
          : []

        console.log("texl", textLines)

        clickedGElem
          .append("text")
          .attr("x", function(d) {
            return x(clickedD.x)
          })
          .attr("y", function(d) {
            return y(clickedD.y)
          })
          .attr("dy", function(d) {
            return y(clickedD.y) * 0.25
          })
          .attr("id", "zoomedComment")
          .attr("class", "wrapme")
          .style("fill", "white")
          .style("font-family", "Roberto")
          .style("font-style", "italic")
          .style("font-size", function(d) {
            return `${commentFontSize}px`
          })
          .style("text-anchor", "middle")
          .style("line-height", "15px")
          .selectAll("tspan")
          .data(textLines)
          .enter()
          .append("tspan")
          .attr("x", function(d) {
            return x(clickedD.x)
          })
          .attr("y", function(d) {
            return y(clickedD.y)
          })
          .attr("dy", function(d, i) {
            console.log("d", k * d.r * 0.05 * (i + 1))
            return k * clickedD.r * 0.1 * (i + 1)
          })
          .transition(cTrans)
          .text(function(d) {
            return d
          })
      }
    }

    gElem
      .append("path")
      .attr("id", function(d, i) {
        return "skillTextPath" + i + techIndex
      }) //Unique id of the path
      .attr("d", function(d) {
        const { x, y, r } = d
        const pathPosition = !d.children ? 0 : 1
        return `M${x - r},${y} A${r},${r} 0 0,${pathPosition} ${x + r},${y}`
      }) //SVG path
      .style("fill", "none")
      .style("stroke", "none")
    gElem
      .append("text")
      .attr("x", -2) //Move the text from the start angle of the arc
      .attr("dy", -4) //Move the text down
      .style("fill", function(d) {
        return "white"
      })
      .append("textPath") //append a textPath to the text element
      .attr("xlink:href", function(d, i) {
        return "#skillTextPath" + i + techIndex
      }) //place the ID of the path here
      .style("text-anchor", "middle") //place the text halfway on the arc
      .style("font-size", function(d) {
        const size = !d.children ? 12 : 35
        return `${size}`
      })
      .style("letter-spacing", function(d) {
        return `2px`
      })
      .attr("startOffset", "50%") //place the text halfway on the arc
      .text(function(d) {
        return !d.children ? d.data.name : d.data.technologyType
      })
  })
}

const SkillCircleContainer = styled.div`
  width: 100%;
  margin: 3vw 0;
  height: 100%;
`

const SkillCircle = () => {
  useLayoutEffect(() => {
    setAndCreateCircle()
  }, [])
  return <SkillCircleContainer id="chart" />
}

export default SkillCircle
