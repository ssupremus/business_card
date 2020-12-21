import React, { useState, useEffect } from "react"
import axios from "axios"
import Container from "@material-ui/core/Container"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { Typography } from "@material-ui/core"

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    axios.get("api/v1/skills.json")
         .then(resp => {
           setSkills(resp.data)
         })
         .catch(resp => console.log(resp))
  }, [skills.length])

  return(
    <Container>
      <Typography variant="h2">Skills</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple-table">
          <TableHead>
            <TableRow>
              <TableCell>Skill</TableCell>
              <TableCell>Working experience</TableCell>
              <TableCell>Professional level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map((skill, index) => (
              <TableRow key={index}>
                <TableCell>{skill.title}</TableCell>
                <TableCell>{skill.years}</TableCell>
                <TableCell>{skill.level}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Skills
