import Analytics from '../assets/icons/tsxIcons/analytics';
import ArrowDown from '../assets/icons/tsxIcons/arrowdown';
import Calendar from '../assets/icons/tsxIcons/calendar';
import CarParts from '../assets/icons/tsxIcons/carparts';
import Close from '../assets/icons/tsxIcons/close';
import Collapse from '../assets/icons/tsxIcons/collapse';
import Contact from '../assets/icons/tsxIcons/contacts';
import Filter from '../assets/icons/tsxIcons/filter';
import Finance from '../assets/icons/tsxIcons/finances';
import Gear from '../assets/icons/tsxIcons/gear';
import Help from '../assets/icons/tsxIcons/help';
import Home from '../assets/icons/tsxIcons/home';
import Logo from '../assets/icons/tsxIcons/logo';
import Notification from '../assets/icons/tsxIcons/notification';
import Opportunity from '../assets/icons/tsxIcons/opportunities';
import Plus from '../assets/icons/tsxIcons/plus';
import Profile from '../assets/icons/tsxIcons/profile';
import Publish from '../assets/icons/tsxIcons/publish';
import Resume from '../assets/icons/tsxIcons/resume';
import Search from '../assets/icons/tsxIcons/search';

export const icons = {
  analytics: Analytics,
  resume: Resume,
  carparts: CarParts,
  finance: Finance,
  contact: Contact,
  opportunity: Opportunity,
  publish: Publish,
  calendar: Calendar,
  plus: Plus,
  filter: Filter,
  search: Search,
  collapse: Collapse,
  settings: Gear,
  home: Home,
  notification: Notification,
  profile: Profile,
  logo: Logo,
  arrowDown: ArrowDown,
  help: Help,
  close: Close,
};
export type IconType = keyof typeof icons;
