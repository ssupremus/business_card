import React, { Component } from "react"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HomeIcon from "@material-ui/icons/Home"
import ContactsIcon from "@material-ui/icons/Contacts"
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary"
import AssignmentIcon from "@material-ui/icons/Assignment"

class SideBarItem extends Component {
  render() {
    const index = this.props.index
    const text = this.props.text
    const icons = [HomeIcon, AssignmentIcon, LocalLibraryIcon, ContactsIcon]
    const IconTag = icons[index]

    return(
      <div>
        <ListItem button key={text}>
          <ListItemIcon><IconTag /></ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
        <Divider />
      </div>
    )
  }
}

export default SideBarItem
