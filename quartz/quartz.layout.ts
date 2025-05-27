import { SharedLayout } from "./cfg"
import PageTitle from "./components/PageTitle"
import Darkmode from "./components/Darkmode"
import "./styles/languageSwitcher.css"

const Noop = () => null

// You can add more components as needed

export const sharedPageComponents: SharedLayout = {
  head: Noop,
  header: [
    PageTitle(),
    Darkmode(),
  ],
  footer: Noop,
  afterBody: [],
}

// Add default layouts
export const defaultContentPageLayout = {
  beforeBody: [],
  left: [],
  right: [],
}

export const defaultListPageLayout = {
  beforeBody: [],
  left: [],
  right: [],
} 