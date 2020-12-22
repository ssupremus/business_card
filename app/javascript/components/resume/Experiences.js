import React, { useState, useEffect } from "react"
import axios from "axios"
import { Container, Typography } from "@material-ui/core"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const Experiences = () => {
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    axios.get("api/v1/experiences.json")
         .then(resp => {
           setExperiences(resp.data)
         })
         .catch(resp => console.log(resp))
  }, [experiences.length])

  return(
    <Container>
      <Typography variant="h2">Working Experience</Typography>
      <Table>
        <TableBody>
          {experiences.map((experience, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>{experience.title} at {experience.company}</p>
                <p>Dates of employment: {experience.start_date} - {experience.end_date} ({experience.duration})</p>
                <p>Project/Role description: {experience.description}</p>
                <p>Tools and technologies: {experience.tools}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default Experiences
