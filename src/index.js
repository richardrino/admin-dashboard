import './styles/main.scss';
import home from './assets/home.svg';
import profile from './assets/profile.svg';
import message from './assets/message.svg';
import clock from './assets/clock.svg';
import notes from './assets/notes.svg';
import people from './assets/people.svg';
import cog from './assets/cog.svg';
import question from './assets/question.svg';
import sheild from './assets/shield-check.svg';
import magnify from './assets/magnify.svg';
import bell from './assets/bell.svg';
import starPlus from './assets/star-plus.svg';
import eyePlus from './assets/eye-plus.svg';
import share from './assets/share.svg';
import penguin from './assets/penguin-profile.png';

// Sidebar
const homeIcon = document.querySelector('.nav__icon[data-icon="home"]');
homeIcon.src = home;
const profileIcon = document.querySelector('.nav__icon[data-icon="profile"]');
profileIcon.src = profile;
const messageIcon = document.querySelector('.nav__icon[data-icon="messages"]');
messageIcon.src = message;
const clockIcon = document.querySelector('.nav__icon[data-icon="history"]');
clockIcon.src = clock;
const notesIcon = document.querySelector('.nav__icon[data-icon="tasks"]');
notesIcon.src = notes;
const peopleIcon = document.querySelector(
	'.nav__icon[data-icon="communities"]'
);
peopleIcon.src = people;
const cogIcon = document.querySelector('.nav__icon[data-icon="settings"]');
cogIcon.src = cog;
const questionIcon = document.querySelector('.nav__icon[data-icon="support"]');
questionIcon.src = question;
const shieldIcon = document.querySelector('.nav__icon[data-icon="privacy"]');
shieldIcon.src = sheild;

// Header
const magnifyIcon = document.querySelector('.nav__icon[data-icon="magnify"]');
magnifyIcon.src = magnify;
const bellIcon = document.querySelector('.nav__icon[data-icon="bell"]');
bellIcon.src = bell;
let profilePic = document.querySelector('.user-info__profile-icon');
profilePic.style.backgroundImage = `url("${penguin}")`;
profilePic = document.querySelector('.user-intro__profile-icon');
profilePic.style.backgroundImage = `url("${penguin}")`;

// Projects section
const starIconList = document.querySelectorAll('.nav__icon[data-icon="star"]');
const starIcons = [...starIconList];
starIcons.forEach((starIcon) => (starIcon.src = starPlus));
const eyeIconList = document.querySelectorAll('.nav__icon[data-icon="eye"]');
const eyeIcons = [...eyeIconList];
eyeIcons.forEach((eyeIcon) => (eyeIcon.src = eyePlus));
const shareIconList = document.querySelectorAll(
	'.nav__icon[data-icon="share"]'
);
const shareIcons = [...shareIconList];
shareIcons.forEach((shareIcon) => (shareIcon.src = share));
