import Analytics from '../assets/icons/analytics.svg';
import ArrowDown from '../assets/icons/arrowdown.svg';
import Calendar from '../assets/icons/calendar.svg';
import CarParts from '../assets/icons/CarParts.svg';
import ArrowCollapse from '../assets/icons/collapse.svg';
import Contacts from '../assets/icons/contacts.svg';
import Filter from '../assets/icons/filter.svg';
import Finance from '../assets/icons/finances.svg';
import Settings from '../assets/icons/gear.svg';
import Home from '../assets/icons/home.svg';
import Logo from '../assets/icons/logo.svg';
import Notification from '../assets/icons/notification.svg';
import Opportunity from '../assets/icons/opportunities.svg';
import Plus from '../assets/icons/Plus.svg';
import Profile from '../assets/icons/profile.svg';
import Publish from '../assets/icons/publish.svg';
import Resume from '../assets/icons/resume.svg';
import Search from '../assets/icons/search.svg';

export const icons = {
  analytics: Analytics,
  resume: Resume,
  carparts: CarParts,
  finance: Finance,
  contacts: Contacts,
  opportunity: Opportunity,
  publish: Publish,
  calendar: Calendar,
  plus: Plus,
  filter: Filter,
  search: Search,
  arrowcollapse: ArrowCollapse,
  settings: Settings,
  home: Home,
  notification: Notification,
  profile: Profile,
  logo: Logo,
  arrowDown: ArrowDown
};

export type IconType = keyof typeof icons;