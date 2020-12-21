import React from "react"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import MenuIcon from "@material-ui/icons/Menu"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import clsx from "clsx"
import SideBarItem from "./SideBarItem"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 300,
    [theme.breakpoints.up("md")]: {
      width: 300,
    },
    [theme.breakpoints.down("sm")]: {
      width: 500,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}))

export default function ButtonAppBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const xs = useMediaQuery(theme.breakpoints.up("xs"))
  const sm = useMediaQuery(theme.breakpoints.up("sm"))
  const md = useMediaQuery(theme.breakpoints.up("md"))

  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["HOME", "RESUME", "BLOG", "CONTACT"].map((text, index) => (
          <SideBarItem key={text} index={index} text={text} />
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Yurii Sushkov
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer("right", true)}>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            hysteresis={1.0}
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)} >
            <div className={classes.drawerHeader}>
              <IconButton onClick={toggleDrawer("right", false)}>
                <ChevronRightIcon />
              </IconButton>
            </div>
            {list("right")}
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}
